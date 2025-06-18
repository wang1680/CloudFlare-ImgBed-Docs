# Version Updates

Use different update methods depending on your deployment method.

## Cloudflare Deployment

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
