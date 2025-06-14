# 前期准备

在开始部署 CloudFlare ImgBed 之前，您需要根据要使用的存储渠道进行相应的准备工作。

## 🗄️ 存储渠道准备

### 1. 渠道说明

项目支持使用不同的存储渠道作为后端存储，每种渠道有不同的优缺点和限制，您可以根据自己的需求选择合适的渠道。
| 渠道类型 | 优点 | 限制 |
|---------|------|------|  
| Telegram Bot | 完全免费、无限容量 | 单文件最大 20MB |
| Cloudflare R2 | 无文件大小限制、企业级性能 | 超出10G免费额度后收费，需要绑定支付方式 |
| S3 兼容存储 | 选择多样、价格灵活 | 根据服务商定价 |

### 2. Telegram Bot 渠道


#### 2.1 获取 TG_BOT_TOKEN

- 在 Telegram 中搜索 [@BotFather](https://t.me/BotFather)
- 发送 `/newbot` 命令
- 按提示输入 Bot 名称和用户名
- 获得 Bot Token（格式：`123456789:ABCdefGHIjklMNOpqrsTUVwxyz`）

> ![创建 Telegram Bot](/images/deployment/telegram-bot-creation.png)

#### 2.2 获取 TG_CHAT_ID

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
- 获得频道 ID（格式：`-1001234567890`）



> ![获取频道 ID](/images/deployment/telegram-channel-id.png)

::: warning 注意
- 频道 ID 前面的 `-` 号是必需的
- Bot 必须具有频道管理员权限
:::

### 3. Cloudflare R2 渠道


#### 3.1 创建 R2 存储桶

- 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
- 选择 "R2 存储对象"
> ![创建 R2 存储桶](/images/deployment/r2-bucket-creation.png)
- 点击 "创建存储桶"
- 输入存储桶名称（全局唯一）
- 选择存储区域
- 点击 "创建存储桶"
> ![创建 R2 存储桶](/images/deployment/r2-bucket-creation-1.png)


#### 3.2 配置公开访问（可选）

如果需要启用图像审查功能：

- 进入创建的存储桶
- 选择 "Settings" → "Public access"
- 启用 "Allow Access" 或配置自定义域名
- 记录完整公开访问链接（如 `https://your-bucket.r2.cloudflarestorage.com/`）
> ![配置 R2 存储桶公开访问](/images/deployment/r2-public-access.png)

### 4. S3 兼容存储


#### 4.1 支持的服务商

| 服务商 | 地区 | 特点 |
|--------|------|------|
| Amazon S3 | 全球 | 最原始的 S3 服务 |
| 七牛云 | 中国 | 国内访问速度快 |
| 又拍云 | 中国 | CDN 加速 |
| Backblaze B2 | 美国 | 价格便宜 |
| Cloudflare R2 | 全球 | 与 Cloudflare 生态集成 |

::: tip 提示
以上为经过测试的 S3 兼容存储服务商，其他 S3 兼容服务商未经测试，有概率出现兼容问题。
:::

#### 4.2 需要准备的信息

- `S3_ACCESS_KEY_ID`：访问密钥 ID
- `S3_SECRET_ACCESS_KEY`：私有访问密钥
- `S3_BUCKET_NAME`：存储桶名称
- `S3_ENDPOINT`：服务端点 URL
- `S3_REGION`：存储区域（可选）

## 🔧 可选功能准备

### 图像内容审查

如果需要启用成人内容检测：

1. 访问 [ModerateContent](https://moderatecontent.com/)
2. 注册并获取免费 API Key（目前已不支持免费注册）
3. 记录 API Key 用于后续配置




## 🚀 下一步

完成准备工作后，您可以选择合适的部署方式：

- [Cloudflare 部署](/deployment/cloudflare)
- [Docker 部署](/deployment/docker)
- [手动部署](/deployment/manual)
