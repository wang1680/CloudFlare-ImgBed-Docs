# Docker 部署

Docker 部署适合有自己服务器的用户，提供更多的控制权和自定义能力。


## 🚀 快速部署

### 方式一：Docker Compose（推荐）

1. **创建项目目录**

```bash
mkdir cloudflare-imgbed
cd cloudflare-imgbed
```

2. **下载 Docker Compose 文件**

```bash
# 下载 docker-compose.yml
wget https://raw.githubusercontent.com/MarSeventh/CloudFlare-ImgBed/main/docker-compose.yml

# 或者手动创建
curl -o docker-compose.yml https://raw.githubusercontent.com/MarSeventh/CloudFlare-ImgBed/main/docker-compose.yml
```

3. **启动服务**

```bash
# 启动服务（后台运行）
docker compose up -d

# 查看日志
docker compose logs -f
```

4. **访问服务**

打开浏览器访问：`http://your-server-ip:7658`


### 方式二：Docker 命令

1. **创建项目目录**

```bash
mkdir cloudflare-imgbed
cd cloudflare-imgbed
```

2. **拉取镜像**
```bash
docker pull marseventh/cloudflare-imgbed:latest
```

3. **运行容器**

```bash
docker run -d \
  --name cloudflare-imgbed \
  -p 7658:8080 \
  -v $(pwd)/data:/app/data \
  marseventh/cloudflare-imgbed:latest
```

4. **访问服务**

打开浏览器访问：`http://your-server-ip:7658`

## ⚙️ 配置说明

### 卷挂载说明

| 路径 | 说明 | 是否必需 |
|------|------|----------|
| `./data:/app/data` | 数据持久化目录 | 是 |


## 🚀 下一步

至此项目已通过 Docker 方式完成部署，默认支持 Cloudflare R2 存储渠道，添加其他存储渠道和进行其他设置的方式请参考 [配置说明](/deployment/configuration#🗂%EF%B8%8F-存储渠道配置)。
