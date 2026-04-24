# Cloudflare Workers 部署

Cloudflare Workers 部署是 Pages 部署之外的另一种 Serverless 部署方式。与 Pages 相比，Workers 提供更灵活的路由控制和更高的自定义能力，适合需要精细控制部署流程的用户。

::: tip Pages vs Workers
- **Pages 部署**：更简单，适合大多数用户，通过 Cloudflare Dashboard 可视化操作即可完成，支持自动更新
- **Workers 部署**：通过 GitHub Actions 部署，适合熟悉 CI/CD 流程的用户，不支持自动更新，需要手动触发 Action 部署新版本

两种方式功能完全一致，选择适合自己的即可。
:::

## 📂 第一步：Fork 项目

1. 访问 [CloudFlare ImgBed 项目](https://github.com/MarSeventh/CloudFlare-ImgBed)
2. 点击右上角的 "Fork" 按钮
3. 选择您的 GitHub 账户
4. 确认 Fork 完成

## 🔑 第二步：准备 Cloudflare 资源

### 2.1 获取 API Token 和 Account ID

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角头像 → "我的个人资料" → "API 令牌"
3. 点击 "创建令牌"
4. 选择 "编辑 Cloudflare Workers" 模板
5. 确认权限并创建，**记录生成的 Token**
6. 返回 Dashboard 首页，在右侧栏找到并**记录 Account ID**

### 2.2 创建数据库

数据库用于存储文件元数据，可选 KV 或 D1（二选一）。

| 特点 | KV 数据库 | D1 数据库 |
|------|-----------|-----------|
| 读写性能 | 高 | 较低 |
| 免费额度 | 少 | 多 |

#### KV 数据库

1. 在 Dashboard 中选择 "存储和数据库" → "Workers KV"
2. 点击 "创建实例"，名称填 `img_url`
3. 创建完成后，**记录命名空间 ID**

#### D1 数据库

1. 在 Dashboard 中选择 "存储和数据库" → "D1 SQL 数据库"
2. 点击 "创建数据库"，名称填 `img_d1`
3. 创建完成后，**记录数据库 ID**
4. 在 "控制台" 选项卡中执行初始化 SQL（见 [init.sql](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/database/init.sql)）

### 2.3 创建 R2 存储桶（可选）

如果需要使用 R2 存储渠道：

1. 在 Dashboard 中选择 "存储和数据库" → "R2 对象存储"
2. 点击 "创建存储桶"，**记录存储桶名称**

## ⚙️ 第三步：配置 GitHub Secrets

在 Fork 的仓库中，进入 **Settings → Secrets and variables → Actions → Secrets**，添加以下 Secrets：

| Secret 名称 | 说明 | 是否必填 |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | ✅ 必填 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | ✅ 必填 |
| `D1_DATABASE_ID` | D1 数据库 ID | 二选一 |
| `KV_NAMESPACE_ID` | KV 命名空间 ID | 二选一 |
| `R2_BUCKET_NAME` | R2 存储桶名称 | 可选 |
| `WORKER_VARS` | 业务环境变量（JSON 格式） | 可选 |

::: details WORKER_VARS 格式说明
`WORKER_VARS` 用于配置业务相关的环境变量，格式为 JSON 字符串。例如配置 Telegram 渠道：

```json
{"TG_BOT_TOKEN":"your-bot-token","TG_CHAT_ID":"your-chat-id"}
```

所有可用的环境变量请参考 [配置说明](/deployment/configuration)。

::: warning 非必要不建议在此处配置
所有业务设置（存储渠道、审查策略等）都可以在部署完成后通过管理面板进行配置，无需在此处填写。仅当管理面板无法覆盖的特殊环境变量才需要通过 `WORKER_VARS` 配置。
:::

::: warning 安全提示
所有配置项均通过 Secrets 传入。GitHub 的 Secrets 是加密存储的，不会在日志中泄露。请勿使用 Variables（在 public 仓库中对所有人可见）。
:::

## 🚀 第四步：运行部署

1. 进入 Fork 仓库的 **Actions** 页面
2. 在左侧选择 **Deploy to Cloudflare Workers**
3. 点击 **Run workflow**
4. 选择要部署的分支（默认 `main`）
5. 可选修改 Worker 名称（默认 `cloudflare-imgbed`）
6. 点击 **Run workflow** 开始部署

部署过程会自动完成以下步骤：
- 安装依赖
- 扫描路由并生成 Worker 入口
- 收集前端静态资源
- 根据 Secrets 生成部署配置
- 部署到 Cloudflare Workers

部署完成后，可以通过 `https://<worker-name>.<account-subdomain>.workers.dev` 访问。

## 🔄 更新版本

当上游仓库有更新时：

1. 在 Fork 仓库中同步上游更新（Sync fork）
2. 重新运行 **Deploy to Cloudflare Workers** Action 即可

## 🚀 下一步

部署完成后，需要添加存储渠道才能正常使用。请参考 [配置说明](/deployment/configuration#🗂%EF%B8%8F-存储渠道配置) 进行配置。
