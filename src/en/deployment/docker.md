# Docker Deployment

Docker deployment is suitable for users with their own servers, providing more control and customization capabilities.


## 🚀 Quick Deployment

### Method 1: Docker Compose (Recommended)

1. **Create Project Directory**

```bash
mkdir cloudflare-imgbed
cd cloudflare-imgbed
```

2. **Download Docker Compose File**

```bash
# Download docker-compose.yml
wget https://raw.githubusercontent.com/MarSeventh/CloudFlare-ImgBed/main/docker-compose.yml

# Or manually create
curl -o docker-compose.yml https://raw.githubusercontent.com/MarSeventh/CloudFlare-ImgBed/main/docker-compose.yml
```

3. **Start Service**

```bash
# Start service (run in background)
docker compose up -d

# View logs
docker compose logs -f
```

4. **Access Service**

Open browser and visit: `http://your-server-ip:7658`


### Method 2: Docker Command

1. **Create Project Directory**

```bash
mkdir cloudflare-imgbed
cd cloudflare-imgbed
```

2. **Pull Image**
```bash
docker pull marseventh/cloudflare-imgbed:latest
```

3. **Run Container**

```bash
docker run -d \
  --name cloudflare-imgbed \
  -p 7658:8080 \
  -v $(pwd)/data:/app/data \
  marseventh/cloudflare-imgbed:latest
```

4. **Access Service**

Open browser and visit: `http://your-server-ip:7658`

## ⚙️ Configuration Guide

### Volume Mount Description

| Path | Description | Required |
|------|-------------|----------|
| `./data:/app/data` | Data persistence directory | Yes |


## 🚀 Next Steps

At this point, the project has been deployed via Docker, with default support for Cloudflare R2 storage channel. For adding other storage channels and other settings, please refer to [Configuration Guide](/en/deployment/configuration#🗂%EF%B8%8F-storage-channel-configuration).
