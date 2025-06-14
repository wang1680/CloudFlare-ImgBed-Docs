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
CloudFlare ImgBed is an open-source file hosting solution based on Cloudflare Pages, providing users with free, stable, and efficient file storage services. The project supports multiple storage channels and both serverless and server-based deployment methods to meet different user needs.

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

## Feature Gallery
![Poster](/images/guide/poster.png)
![Login Interface](/images/guide/login.png)
![Upload Interface](/images/guide/upload.png)
![Dashboard Interface](/images/guide/dashboard.png)
![User Management](/images/guide/cusmanager.png)
![System Settings](/images/guide/sysconfig.png)

## Technical Architecture

- **Frontend Interface**: Built with Vue.js, supports responsive design
- **Backend API**: Serverless architecture built on Cloudflare Workers
- **Storage Layer**: Supports multiple storage backends (Telegram, R2, S3)
- **Database**: Uses Cloudflare KV for metadata storage

## Version History

### v2.0 Major Update

- 🎨 Brand new UI design with dark mode support
- 📁 Directory functionality launched, supports file categorization management
- 🔧 S3 API channel integration, supports more storage service providers
- ⚡ Multi-channel load balancing, improves upload success rate
- 🎯 Short link naming scheme, more concise file links

### v1.x Foundation Features

- 🚀 Basic file upload and management functionality
- 🔐 Authentication and permission control
- 🎨 Custom interface and configuration
- 📡 Complete API interface

## Open Source License

This project is licensed under the [MIT License](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/LICENSE), which allows you to:

- ✅ Commercial use
- ✅ Modification and distribution
- ✅ Private use
- ✅ Patent use

