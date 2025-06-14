# Manual Deployment

If Cloudflare's **limited access requests** cannot meet your needs and you have your own server, you can refer to this tutorial to simulate Cloudflare's environment on your server and open corresponding ports to access the service.

::: warning Notice
Due to the complex variety of server operating systems and hardware versions, these tutorials **cannot guarantee suitability for every user**. Please try to use search engines to solve any errors encountered. If unable to resolve, you can also submit an issue for help.
:::

## 📂 Prerequisites

- Own a Linux/Windows server that can be accessed normally
- Server has Node.js environment installed (recommend v22.5.1)
- Have basic command line operation skills

## 🚀 Deployment Steps

### 1. Install Node.js

Install the corresponding `node.js` for your server operating system. Version `v22.5.1` has been tested to work normally.

### 2. Get Project Code

```bash
# Clone project repository
git clone https://github.com/MarSeventh/CloudFlare-ImgBed.git
cd CloudFlare-ImgBed
```

### 3. Install Dependencies

Switch to the project root directory and run `npm install` to install required dependencies:

```bash
npm install
```

### 4. Create Configuration File

Create a `wrangler.toml` configuration file in the project root directory, containing project name, environment variables, etc.

```toml
name = "cloudflare-imgbed"
compatibility_date = "2024-07-24"

# If you need to set environment variables, you can add them here
# [vars]
# AUTH_CODE = "your_auth_code"
# TG_BOT_TOKEN = "your_bot_token"
# TG_CHAT_ID = "your_chat_id"
```

For details, see the official documentation: [Configuration - Wrangler (cloudflare.com)](https://developers.cloudflare.com/workers/wrangler/configuration/)

### 5. Start Service

Run `npm run start` in the project root directory:

```bash
npm run start
```

After normal startup, the console output should be similar to:

```
⎔ Starting local server...
⎔ Using namespace binding img_url
⎔ Using R2 binding img_r2
✅ Ready on http://localhost:8080
```

![Service Started Successfully](/images/deployment/manual-console.png)

At this point, under normal circumstances, the project has been successfully deployed. The program runs on port `8080` by default.

## ⚙️ Custom Configuration

### Modify Port

You can modify the startup port by editing the start script in `package.json` or using environment variables.

### Environment Variables

Most configurations have been moved to the admin backend after v2.0. You can complete the configuration through the web interface.

## 🚀 Next Steps

At this point, the project has been manually deployed with default support for Cloudflare R2 storage channel. For adding other storage channels and other settings, please refer to [Configuration Guide](/en/deployment/configuration#🗂%EF%B8%8F-storage-channel-configuration).
