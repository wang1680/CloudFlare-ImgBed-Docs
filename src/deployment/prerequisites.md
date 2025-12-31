# 前期准备

在开始部署 CloudFlare ImgBed 之前，您需要根据要使用的存储渠道进行相应的准备工作。

## 1. 渠道说明

项目支持使用不同的存储渠道作为后端存储，每种渠道有不同的优缺点和限制，您可以根据自己的需求选择合适的渠道。
| 渠道类型 | 优点 | 限制 |
|---------|------|------|  
| Telegram Bot | 完全免费、无限容量 | 大于20MB文件需分片存储 |
| Cloudflare R2 | 无文件大小限制、企业级性能 | 超出10G免费额度后收费，需要绑定支付方式 |
| S3 兼容存储 | 选择多样、价格灵活 | 根据服务商定价 |
| Discord | 完全免费、简单易用 | 大于10MB文件需分片存储 |
| HuggingFace | 完全免费、支持大文件直传 | 需要 HuggingFace 账号 |

## 2. Telegram Bot 渠道


### 2.1 获取 TG_BOT_TOKEN

- 在 Telegram 中搜索 [@BotFather](https://t.me/BotFather)
- 发送 `/newbot` 命令
- 按提示输入 Bot 名称和用户名
- 获得 Bot Token（格式：`123456789:ABCdefGHIjklMNOpqrsTUVwxyz`）

> ![创建 Telegram Bot](/images/deployment/telegram-bot-creation.png)

### 2.2 获取 TG_CHAT_ID

- 创建一个新的 Telegram 频道（Channel）
- 将创建的 Bot 添加为频道管理员
- 给予 Bot 消息管理的权限
> <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
>    <img src="/images/deployment/telegram-channel-management.png" alt="Telegram Channel Management" width="25%">
>    <img src="/images/deployment/telegram-channel-management-1.png" alt="Telegram Channel Management" width="25%">
>    <img src="/images/deployment/telegram-channel-management-2.png" alt="Telegram Channel Management" width="48%">
> </div>
- 在频道中发送一条测试消息
- 向 [@VersaToolsBot](https://t.me/VersaToolsBot) 转发这条消息
- 获得频道 ID（示例：`-1001234567890`）



> ![获取频道 ID](/images/deployment/telegram-channel-id.png)

::: warning 注意
- 频道 ID 前面有 `-` 号时需要保留
- Bot 必须具有频道管理员权限
:::

## 3. Cloudflare R2 渠道


### 3.1 创建 R2 存储桶

- 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
- 选择 "R2 存储对象"
> ![创建 R2 存储桶](/images/deployment/r2-bucket-creation.png)
- 点击 "创建存储桶"
- 输入存储桶名称（全局唯一）
- 选择存储区域
- 点击 "创建存储桶"
> ![创建 R2 存储桶](/images/deployment/r2-bucket-creation-1.png)


### 3.2 配置公开访问（可选）

如果需要启用图像审查功能：

- 进入创建的存储桶
- 选择 "Settings" → "Public access"
- 启用 "Allow Access" 或配置自定义域名
- 记录完整公开访问链接（如 `https://your-bucket.r2.cloudflarestorage.com/`）
> ![配置 R2 存储桶公开访问](/images/deployment/r2-public-access.png)

## 4. S3 兼容存储


### 4.1 支持的服务商

| 服务商 | 地区 | 特点 |
|--------|------|------|
| Amazon S3 | 全球 | 最原始的 S3 服务 |
| 七牛云 | 中国 | 国内访问速度快 |
| 又拍云 | 中国 | CDN 加速 |
| Backblaze B2 | 美国 | 价格便宜 |
| Cloudflare R2 | 全球 | 与 Cloudflare 生态集成 |
| MinIO | 全球 | 开源 S3 兼容存储 |

::: tip 提示
以上为经过测试的 S3 兼容存储服务商，其他 S3 兼容服务商未经测试，有概率出现兼容问题。
:::

### 4.2 需要准备的信息

- `S3_ACCESS_KEY_ID`：访问密钥 ID
- `S3_SECRET_ACCESS_KEY`：私有访问密钥
- `S3_BUCKET_NAME`：存储桶名称
- `S3_ENDPOINT`：服务端点 URL
- `S3_REGION`：存储区域（可选）

## 5. Discord 渠道（由 _[@林酱](https://github.com/lintonxue00)_ 佬贡献）

### 5.1 创建 Discord Bot

- 访问 [Discord Developer Portal](https://discord.com/developers/applications)
- 点击 "New Application" 创建应用
- 进入 "Bot" 页面，点击 "Add Bot"
- 复制 Bot Token

### 5.2 获取 Channel ID

- 在 Discord 客户端中启用开发者模式（用户设置 → 高级 → 开发者模式）
- 创建一个用于存储文件的频道
- 右键点击频道，选择 "复制频道 ID"
- 将 Bot 添加到服务器并授予发送文件的权限

::: warning 注意
- 普通用户文件大小限制为 10MB
- Nitro 用户文件大小限制为 25MB
- 需要确保 Bot 有发送消息和附件的权限
:::

## 6. HuggingFace 渠道（由 _[@林酱](https://github.com/lintonxue00)_ 佬贡献）

### 6.1 创建 HuggingFace 账号

- 访问 [HuggingFace](https://huggingface.co/) 并注册账号

### 6.2 获取 Access Token

- 登录后访问 [Token 设置页面](https://huggingface.co/settings/tokens)
- 点击 "New token" 创建新 Token
- 选择 "Write" 权限
- 复制生成的 Token

::: tip 提示
HuggingFace 渠道支持大文件直传，推荐用于上传超过 20MB 的文件。
:::


## 🚀 下一步

完成准备工作后，您可以选择合适的部署方式：

- [Cloudflare 部署](/deployment/cloudflare)
- [Docker 部署](/deployment/docker)
- [手动部署](/deployment/manual)
