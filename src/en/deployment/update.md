# Version Updates

Use different update methods depending on your deployment method.

## Cloudflare Pages Deployment

### Automatic Updates

Enable GitHub Actions automatic sync:

1. Go to your forked repository
2. Enable Actions

### Manual Updates

1. Go to your forked repository
2. Click "Sync fork"
3. Select "Update branch"
4. Cloudflare Pages will automatically redeploy

![Sync Updates](/images/deployment/sync-fork.png)

## Cloudflare Workers Deployment

### Automatic Updates

After enabling the **Upstream Sync** Action, updates from the upstream repository will be automatically synced to the `main` branch and trigger deployment without manual intervention.

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
