# 项目介绍
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
CloudFlare ImgBed 是一个基于 Cloudflare Pages 的开源文件托管解决方案，为用户提供免费、稳定、高效的文件存储服务。项目支持多种存储渠道，支持无服务器和有服务器部署方式，满足不同用户的需求。

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

## 效果展示
![海报](/images/guide/poster.png)
![登录界面](/images/guide/login.png)
![上传界面](/images/guide/upload.png)
![控制台界面](/images/guide/dashboard.png)
![用户管理](/images/guide/cusmanager.png)
![系统设置](/images/guide/sysconfig.png)
## 技术架构

- **前端界面**：基于 Vue.js 开发，支持响应式设计
- **后端 API**：基于 Cloudflare Workers 构建的无服务器架构
- **存储层**：支持多种存储后端（Telegram、R2、S3）
- **数据库**：使用 Cloudflare KV 存储元数据


## 版本历史

### v2.0 重大更新

- 🎨 全新 UI 设计，支持深色模式
- 📁 目录功能上线，支持文件分类管理
- 🔧 S3 API 渠道接入，支持更多存储服务商
- ⚡ 多渠道负载均衡，提升上传成功率
- 🎯 短链接命名方式，更简洁的文件链接

### v1.x 功能基础

- 🚀 基础文件上传和管理功能
- 🔐 身份认证和权限控制
- 🎨 自定义界面和配置
- 📡 完整的 API 接口

## 开源协议

本项目采用 [MIT 开源协议](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/LICENSE)，您可以：

- ✅ 商业使用
- ✅ 修改和分发
- ✅ 私人使用
- ✅ 专利使用

但需要保留原作者的版权声明。
