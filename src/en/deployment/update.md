# Version Updates

Use the corresponding update method based on your deployment type. Please note: Before updating, make sure to check the [Announcements](https://github.com/MarSeventh/CloudFlare-ImgBed/discussions/categories/announcements) and the [Breaking Updates Log](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/.github/breaking-updates.json). Ensure you have **resolved all compatibility issues** before proceeding.

## Cloudflare Pages Deployment

### Automatic Updates

The repository includes a built-in `Upstream Sync` Action (which automatically syncs upstream updates daily). Once you enable both the **Upstream Sync** Action and the repository's **issues** feature, updates from the upstream repository will be automatically synchronized and trigger a new deployment. If manual intervention is required, a new issue will be created to provide instructions.

::: tip Enabling Upstream Sync and Issues
To enable the Action: Navigate to the **Actions** page of your forked repository, locate **Upstream Sync**, and click **Enable workflow**.
To enable the issues feature: Navigate to the **Settings** page of your forked repository, click **General**, and check **Issues** under the **Features** section.
:::

### Manual Updates

1. Go to your forked repository
2. Click "Sync fork"
3. Select "Update branch"
4. Cloudflare Pages will automatically redeploy

![Sync Updates](/images/deployment/sync-fork.png)

## Cloudflare Workers Deployment

### Automatic Updates

The repository includes a built-in `Upstream Sync` Action (which automatically syncs upstream updates daily). Once you enable both the **Upstream Sync** Action and the repository's **issues** feature, updates from the upstream repository will be automatically synchronized and trigger a new deployment. If manual intervention is required, a new issue will be created to provide instructions.

::: tip Enabling Upstream Sync and Issues
To enable the Action: Navigate to the **Actions** page of your forked repository, locate **Upstream Sync**, and click **Enable workflow**.
To enable the issues feature: Navigate to the **Settings** page of your forked repository, click **General**, and check **Issues** under the **Features** section.
:::

### Manual Updates

1. Go to your forked repository
2. Click "Sync fork" to sync upstream updates
3. This will automatically trigger deployment; you can also manually run **Deploy to Cloudflare Workers** from the **Actions** page

## Docker Deployment

### Docker Compose Update

```bash
# Pull latest image
docker compose pull

# Restart service
docker compose up -d
```

### Docker Command Update

```bash
# Pull latest image
docker pull marseventh/cloudflare-imgbed:latest

# Run container
docker run -d \\
  --name cloudflare-imgbed \\
  -p 7658:8080 \\
  -v $(pwd)/data:/app/data \\
  -v $(pwd)/wrangler.toml:/app/wrangler.toml \\
  marseventh/cloudflare-imgbed:latest
```

## Manual Deployment

Pull latest code, rebuild and deploy:

```bash
git pull
npm install
npm run start
```
