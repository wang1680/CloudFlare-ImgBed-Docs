# 版本更新

根据不同的部署方式，使用不同的更新方式。

## Cloudflare 部署

### 自动更新

启用 GitHub Actions 自动同步：

1. 进入您 Fork 的仓库
2. 启用 Actions

### 手动更新

1. 进入您 Fork 的仓库
2. 点击 "Sync fork"
3. 选择 "Update branch"
4. Cloudflare Pages 将自动重新部署

![同步更新](/images/deployment/sync-fork.png)

## Docker 部署

### Docker Compose 更新

```bash
# 拉取最新镜像
docker-compose pull

# 重启服务
docker-compose up -d

# 清理旧镜像
docker image prune
```

### Docker 命令更新

```bash
# 拉取最新镜像
docker pull marseventh/cloudflare-imgbed:latest

# 运行容器
docker run -d \
  --name cloudflare-imgbed \
  -p 7658:8080 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/wrangler.toml:/app/wrangler.toml \
  marseventh/cloudflare-imgbed:latest
```

## 手动部署

拉取最新代码，重新构建并部署：

```bash
git pull
npm install
npm run start
```
