# Version Updates

Use different update methods depending on your deployment method.

## Cloudflare Pages Deployment

### Automatic Updates

After enabling the **Upstream Sync** Action, updates from the upstream repository will be automatically synced and trigger deployment without manual intervention.

::: tip Enable Upstream Sync
The repository includes an `Upstream Sync` Action (automatically syncs upstream updates daily). Once enabled, new upstream versions will be synced to your `main` branch and automatically trigger Worker deployment, achieving fully automatic updates.

To enable: Go to the **Actions** page of your forked repository, find **Upstream Sync**, and click **Enable workflow**.
:::

### Manual Updates

1. Go to your forked repository
2. Click "Sync fork"
3. Select "Update branch"
4. Cloudflare Pages will automatically redeploy

![Sync Updates](/images/deployment/sync-fork.png)

## Cloudflare Workers Deployment

### Automatic Updates

After configuring Secrets and enabling the **Upstream Sync** Action, updates from the upstream repository will be automatically synced and trigger deployment without manual intervention.

::: tip Enable Upstream Sync
The repository includes an `Upstream Sync` Action (automatically syncs upstream updates daily). Once enabled, new upstream versions will be synced to your `main` branch and automatically trigger Worker deployment, achieving fully automatic updates.

To enable: Go to the **Actions** page of your forked repository, find **Upstream Sync**, and click **Enable workflow**.
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
