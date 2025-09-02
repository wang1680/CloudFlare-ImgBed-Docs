# Prerequisites

Before deploying CloudFlare ImgBed, you need to prepare according to the storage channels you want to use.


## 1. Channel Overview

The project supports different storage channels as backend storage. Each channel has different advantages and limitations. You can choose the appropriate channel according to your needs.

| Channel Type | Advantages | Limitations |
|--------------|------------|-------------|  
| Telegram Bot | Completely free, unlimited capacity | Files larger than 20MB need to be stored in chunks |
| Cloudflare R2 | No file size limit, enterprise-grade performance | Charges after 10GB free quota, requires payment method |
| S3 Compatible Storage | Diverse options, flexible pricing | Pricing varies by provider |

## 2. Telegram Bot Channel

### 2.1 Get TG_BOT_TOKEN

- Search for [@BotFather](https://t.me/BotFather) in Telegram
- Send `/newbot` command
- Follow prompts to enter Bot name and username
- Get Bot Token (format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

> ![Create Telegram Bot](/images/deployment/telegram-bot-creation.png)

### 2.2 Get TG_CHAT_ID

- Create a new Telegram channel
- Add the created Bot as channel administrator
- Grant the Bot message management permissions
> <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
>    <img src="/images/deployment/telegram-channel-management.png" alt="Telegram Channel Management" width="25%">
>    <img src="/images/deployment/telegram-channel-management-1.png" alt="Telegram Channel Management" width="25%">
>    <img src="/images/deployment/telegram-channel-management-2.png" alt="Telegram Channel Management" width="48%">
> </div>
- Send a test message in the channel
- Forward this message to [@VersaToolsBot](https://t.me/VersaToolsBot)
- Get the channel ID (example: `-1001234567890`)

> ![Get Channel ID](/images/deployment/telegram-channel-id.png)

::: warning Note
- The `-` sign before the channel ID must be retained
- The Bot must have channel administrator permissions
:::

## 3. Cloudflare R2 Channel

### 3.1 Create R2 Bucket

- Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
- Select "R2 Object Storage"
> ![Create R2 Bucket](/images/deployment/r2-bucket-creation.png)
- Click "Create bucket"
- Enter bucket name (globally unique)
- Select storage region
- Click "Create bucket"
> ![Create R2 Bucket](/images/deployment/r2-bucket-creation-1.png)

### 3.2 Configure Public Access (Optional)

If you need to enable image review functionality:

- Enter the created bucket
- Select "Settings" → "Public access"
- Enable "Allow Access" or configure custom domain
- Record the complete public access link (e.g., `https://your-bucket.r2.cloudflarestorage.com/`)
> ![Configure R2 Bucket Public Access](/images/deployment/r2-public-access.png)

## 4. S3 Compatible Storage

### 4.1 Supported Providers

| Provider | Region | Features |
|----------|--------|----------|
| Amazon S3 | Global | Original S3 service |
| Qiniu Cloud | China | Fast domestic access |
| Upyun | China | CDN acceleration |
| Backblaze B2 | USA | Affordable pricing |
| Cloudflare R2 | Global | Cloudflare ecosystem integration |
| MinIO | Global | Open-source S3 compatible storage |

::: tip Note
The above are tested S3 compatible storage providers. Other S3 compatible providers have not been tested and may have compatibility issues.
:::

### 4.2 Required Information

- `S3_ACCESS_KEY_ID`: Access key ID
- `S3_SECRET_ACCESS_KEY`: Secret access key
- `S3_BUCKET_NAME`: Bucket name
- `S3_ENDPOINT`: Service endpoint URL
- `S3_REGION`: Storage region (optional)


## 🚀 Next Steps

After completing the preparation work, you can choose the appropriate deployment method:

- [Cloudflare Deployment](/en/deployment/cloudflare)
- [Docker Deployment](/en/deployment/docker)
- [Manual Deployment](/en/deployment/manual)