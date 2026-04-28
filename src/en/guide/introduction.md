# Project Introduction
<div align="center">
    <a href="https://github.com/MarSeventh/CloudFlare-ImgBed"><img width="80%" alt="logo" src="/images/guide/banner.png"/></a>
    <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/MarSeventh/CloudFlare-ImgBed" alt="License" />
        </a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/releases">
        <img src="https://img.shields.io/github/release/MarSeventh/CloudFlare-ImgBed" alt="latest version" />
        </a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/releases">
        <img src="https://img.shields.io/github/downloads/MarSeventh/CloudFlare-ImgBed/total?color=%239F7AEA&logo=github" alt="Downloads" />
        </a>
        <a href="https://hub.docker.com/r/marseventh/cloudflare-imgbed">
          <img src="https://img.shields.io/docker/pulls/marseventh/cloudflare-imgbed?style=flat-square" alt="Docker Pulls" />
        </a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/issues">
          <img src="https://img.shields.io/github/issues/MarSeventh/CloudFlare-ImgBed" alt="Issues" />
        </a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/stargazers">
          <img src="https://img.shields.io/github/stars/MarSeventh/CloudFlare-ImgBed" alt="Stars" />
        </a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/network/members">
          <img src="https://img.shields.io/github/forks/MarSeventh/CloudFlare-ImgBed" alt="Forks" />
        </a>
    </div>
</div>
CloudFlare ImgBed is an open-source file hosting solution based on Cloudflare, providing users with free, stable, and efficient file storage services. The project supports multiple storage channels and offers both serverless and server-based deployment options to meet different user needs.

<div style="position: relative; padding: 30% 45%;">
    <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1y3WGe4EGh&page=1" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    ></iframe>
</div>

## Demo Screenshots
![Poster](/images/guide/poster.png)
![Login Interface](/images/guide/login.png)
![Upload Interface](/images/guide/upload.png)

<details>
    <summary>More Interface Screenshots</summary>

![Dashboard Interface](/images/guide/dashboard.png)
![User Management](/images/guide/cusmanager.png)
![System Settings](/images/guide/sysconfig.png)

</details>

## Technical Architecture

- **Frontend Interface**: Built with Vue.js, supports responsive design and Chinese/English bilingual switching
- **Backend API**: Serverless architecture based on Cloudflare Workers
- **Storage Layer**: Supports multiple storage backends (Telegram, R2, S3, Discord, HuggingFace, WebDAV)
- **Database**: Supports both Cloudflare KV and D1 databases
- **Deployment**: Supports Cloudflare Pages, Cloudflare Workers, and Docker deployment


## Version History

### v2.x Major Update

- 🎨 Brand new UI design with dark mode support
- 📁 Directory functionality launched, supports file categorization management
- 🔧 S3 API channel integration, supports more storage service providers
- ⚡ Multi-channel load balancing, improves upload success rate
- 🎯 Short link naming convention, more concise file links
- 🔐 Auth system hardening: PBKDF2 password hashing, HttpOnly Cookie session management
- 🌐 Chinese/English bilingual i18n support
- ☁️ Added Cloudflare Workers deployment with GitHub Actions one-click deploy
- ⏰ API Token supports expiration time

### v1.x Feature Foundation

- 🚀 Basic file upload and management functionality
- 🔐 Authentication and permission control
- 🎨 Custom interface and configuration
- 📡 Complete API interface

## Open Source License

This project is licensed under the [MIT Open Source License](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/LICENSE), you can:

- ✅ Commercial use
- ✅ Modify and distribute
- ✅ Private use
- ✅ Patent use

But you must retain the original author's copyright notice.
