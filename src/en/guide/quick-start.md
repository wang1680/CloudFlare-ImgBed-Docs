# Quick Start

This guide will help you quickly deploy and use CloudFlare ImgBed in 15 minutes. If you prefer video tutorials, you can also refer to the following video guide for setup, but we cannot guarantee that the video is always up to date. Please refer to this document if you encounter any issues.

<div style="position: relative; padding: 30% 45%;">
    <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1EeNu6zEAe&page=1" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
    ></iframe>
</div>

## 📱 Quick Experience

### Demo Site

We provide a demo site: [cfbed.1314883.xyz](https://cfbed.1314883.xyz/)

**Access Code**: `cfbed`

::: tip Note
The demo site may have access restrictions. Please do not use it for production environments. We recommend deploying your own instance for a better experience.
:::

## 🎯 Deployment Overview

CloudFlare ImgBed supports multiple deployment methods:

| Deployment Method | Difficulty | Cost | Recommendation |
|------------------|----------|------|---------------|
| Cloudflare Pages | ⭐ | Free within certain limits | ⭐⭐⭐⭐⭐ |
| Cloudflare Workers | ⭐⭐ | Free within certain limits | ⭐⭐⭐⭐ |
| Docker | ⭐⭐ | Server costs | ⭐⭐⭐⭐⭐ |
| Manual Deployment | ⭐⭐⭐ | Server costs | ⭐⭐⭐ |

## 🚀 Deployment Guide

### Prerequisites

Regardless of which deployment method you choose, you need to configure some necessary settings according to your desired storage channels. See [Prerequisites](/en/deployment/prerequisites).

### Cloudflare Pages Deployment

Cloudflare Pages-based deployment requires no server, with visual Dashboard setup and automatic updates, suitable for most users. See [Cloudflare Pages Deployment Guide](/en/deployment/pages).

### Cloudflare Workers Deployment

Cloudflare Workers-based deployment via GitHub Actions one-click deploy, requires manual trigger for updates. See [Cloudflare Workers Deployment Guide](/en/deployment/worker).

### Docker Deployment

Docker-based deployment method is suitable for users with server resources. See [Docker Deployment Guide](/en/deployment/docker).

### Manual Deployment

Manually build the project environment and deploy, suitable for users with development experience. See [Manual Deployment Guide](/en/deployment/manual).

## 🎉 Next Steps

Congratulations! You have successfully deployed CloudFlare ImgBed. Now you can:

- [Configure Your Image Hosting](/en/deployment/configuration) - Personalize your image hosting
- [View API Documentation](/en/api/upload) - Integrate into your applications
- [Learn About Features](/en/guide/features) - Discover more possibilities
