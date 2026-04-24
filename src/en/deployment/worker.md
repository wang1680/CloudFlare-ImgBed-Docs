# Cloudflare Workers Deployment

Cloudflare Workers deployment is an alternative serverless deployment method alongside Pages. Compared to Pages, Workers offers more flexible routing control and higher customizability, suitable for users who need fine-grained control over the deployment process.

::: tip Pages vs Workers
- **Pages deployment**: Simpler, suitable for most users, can be completed through the Cloudflare Dashboard UI, supports automatic updates
- **Workers deployment**: Deployed via GitHub Actions, suitable for users familiar with CI/CD workflows, supports auto-deploy on push to main branch, can also be triggered manually

Both methods provide identical functionality. Choose whichever suits you best.
:::

## 📂 Step 1: Fork the Project

1. Visit [CloudFlare ImgBed Project](https://github.com/MarSeventh/CloudFlare-ImgBed)
2. Click the "Fork" button in the top right corner
3. Select your GitHub account
4. Confirm the Fork is complete

## 🔑 Step 2: Prepare Cloudflare Resources

### 2.1 Get API Token and Account ID

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click your avatar → "My Profile" → "API Tokens"
3. Click "Create Token"
4. Select the "Edit Cloudflare Workers" template
5. Confirm permissions and create, **save the generated Token**
6. Return to the Dashboard home page, find and **save the Account ID** in the right sidebar

### 2.2 Create Database

The database stores file metadata. Choose between KV or D1 (pick one).

| Feature | KV Database | D1 Database |
|---------|-------------|-------------|
| Read/Write Performance | High | Lower |
| Free Quota | Less | More |

#### KV Database

1. In Dashboard, select "Storage & Databases" → "Workers KV"
2. Click "Create instance", name it `img_url`
3. After creation, **save the Namespace ID**

#### D1 Database

1. In Dashboard, select "Storage & Databases" → "D1 SQL Database"
2. Click "Create database", name it `img_d1`
3. After creation, **save the Database ID**
4. In the "Console" tab, execute the initialization SQL (see [init.sql](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/database/init.sql))

### 2.3 Create R2 Bucket (Optional)

If you need to use the R2 storage channel:

1. In Dashboard, select "Storage & Databases" → "R2 Object Storage"
2. Click "Create bucket", **save the bucket name**

## ⚙️ Step 3: Configure GitHub Secrets

In your forked repository, go to **Settings → Secrets and variables → Actions → Secrets** and add the following:

| Secret Name | Description | Required |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | ✅ Required |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | ✅ Required |
| `D1_DATABASE_ID` | D1 Database ID | Pick one |
| `KV_NAMESPACE_ID` | KV Namespace ID | Pick one |
| `R2_BUCKET_NAME` | R2 Bucket name | Optional |
| `WORKER_NAME` | Worker name (default `cloudflare-imgbed`) | Optional |
| `WORKER_VARS` | Business environment variables (JSON format) | Optional |

::: details WORKER_VARS Format
`WORKER_VARS` is used to configure business-related environment variables in JSON string format. For example, to configure the Telegram channel:

```json
{"TG_BOT_TOKEN":"your-bot-token","TG_CHAT_ID":"your-chat-id"}
```

For all available environment variables, refer to the [Configuration Guide](/en/deployment/configuration).

::: warning Not recommended unless necessary
All business settings (storage channels, moderation policies, etc.) can be configured through the admin panel after deployment. Only use `WORKER_VARS` for special environment variables that cannot be set via the admin panel.
:::

::: warning Security Note
All configuration is passed through Secrets. GitHub Secrets are encrypted and will not be exposed in logs. Do not use Variables (visible to everyone in public repositories).
:::

## 🚀 Step 4: Run Deployment

### Manual Deployment

1. Go to the **Actions** page of your forked repository
2. Select **Deploy to Cloudflare Workers** on the left
3. Click **Run workflow**
4. Select the branch to deploy (default `main`)
5. Optionally modify the Worker name (defaults to `WORKER_NAME` Secret, or `cloudflare-imgbed` if not set)
6. Click **Run workflow** to start deployment

### Automatic Deployment

Once Secrets are configured, every push to the `main` branch (including syncing upstream updates via Sync fork) will automatically trigger deployment.

::: tip Works with Auto Sync
The repository includes an **Upstream Sync** Action that automatically syncs upstream updates daily. Once enabled, new upstream versions will be synced to your `main` branch and automatically trigger Worker deployment, achieving fully automatic updates.

To enable: Go to the **Actions** page of your forked repository, find **Upstream Sync**, and click **Enable workflow**.
:::

The deployment process automatically completes the following steps:
- Install dependencies
- Scan routes and generate Worker entry point
- Collect frontend static assets
- Generate deployment config from Secrets
- Deploy to Cloudflare Workers

After deployment, access your site at `https://<worker-name>.<account-subdomain>.workers.dev`.

## 🔄 Updating

Workers deployment supports two update methods:

### Automatic Updates (Recommended)

After enabling the **Upstream Sync** Action, updates from the upstream repository will be automatically synced and trigger deployment without manual intervention.

### Manual Updates

1. Sync upstream updates in your forked repository (Sync fork)
2. This will automatically trigger deployment; you can also manually run **Deploy to Cloudflare Workers** from the Actions page

## 🚀 Next Steps

After deployment, you need to add storage channels for the service to work properly. Please refer to the [Configuration Guide](/en/deployment/configuration#🗂%EF%B8%8F-storage-channel-configuration) for setup instructions.
