# 项目介绍
<div align="center">
    <a href="https://github.com/MarSeventh/CloudFlare-ImgBed">
        <img width="80%" alt="logo" src="/images/guide/banner.png"/>
    </a>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; margin-top: 20px; margin-bottom: 20px;">
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/LICENSE"><img src="https://img.shields.io/github/license/MarSeventh/CloudFlare-ImgBed" alt="License" /></a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/releases"><img src="https://img.shields.io/github/release/MarSeventh/CloudFlare-ImgBed" alt="latest version" /></a>
        <a href="https://hub.docker.com/r/marseventh/cloudflare-imgbed"><img src="https://img.shields.io/docker/pulls/marseventh/cloudflare-imgbed" alt="Docker Pulls" /></a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/stargazers"><img src="https://img.shields.io/github/stars/MarSeventh/CloudFlare-ImgBed" alt="Stars" /></a>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/network/members"><img src="https://img.shields.io/github/forks/MarSeventh/CloudFlare-ImgBed" alt="Forks" /></a>
        <a href="https://atomgit.com/MarSeventh/CloudFlare-ImgBed"><img src="https://atomgit.com/MarSeventh/CloudFlare-ImgBed/star/badge.svg" alt="G-star" /></a>
    </div>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;">
        <a href="https://trendshift.io/repositories/14324" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14324" alt="GitHub Trending" width="250" /></a>
        <a href="https://hellogithub.com/repository/MarSeventh/CloudFlare-ImgBed" target="_blank"><img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=71d65ace215945b0909d4c75c31b9fcb&claim_uid=6DsuqF4hInJWerv&theme=neutral" alt="Featured｜HelloGitHub" width="250" /></a>
    </div>
</div>

CloudFlare ImgBed 是一个基于 Cloudflare 的开源文件托管解决方案，为用户提供免费、稳定、高效的文件存储服务。项目支持多种存储渠道，支持无服务器和有服务器部署方式，满足不同用户的需求。

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
![上传界面](/images/guide/upload.png)

<details>
    <summary>更多界面展示</summary>

![登录界面](/images/guide/login.png)
![上传中界面](/images/guide/uploading.png)
![控制台界面](/images/guide/dashboard.png)
![用户管理](/images/guide/cusmanager.png)
![系统设置](/images/guide/sysconfig.png)

</details>

## 技术架构

- **前端界面**：基于 Vue.js 开发，支持响应式设计，支持中英文双语切换
- **后端 API**：基于 Cloudflare Workers 构建的无服务器架构
- **存储层**：支持多种存储后端（Telegram、R2、S3、Discord、HuggingFace、WebDAV）
- **数据库**：支持 Cloudflare KV 和 D1 数据库
- **部署方式**：支持 Cloudflare Pages、Cloudflare Workers、Docker 多种部署方式


## 版本历史

### v2.x 重大更新

- 🎨 全新 UI 设计，支持深色模式
- 📁 目录功能上线，支持文件分类管理
- 🔧 S3 API 渠道接入，支持更多存储服务商
- ⚡ 多渠道负载均衡，提升上传成功率
- 🎯 短链接命名方式，更简洁的文件链接
- 🔐 认证系统安全加固：PBKDF2 密码哈希、HttpOnly Cookie 会话管理
- 🌐 中英文双语国际化支持
- ☁️ 新增 Cloudflare Workers 部署方式，支持 GitHub Actions 一键部署
- ⏰ API Token 支持设置过期时间

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

但需要保留原作者在包括但不限于前后端代码和其他文件在内的所有副本或重要部分中的版权声明。

## Star History

<a href="https://www.star-history.com/?repos=MarSeventh%2FCloudFlare-ImgBed%2CMarSeventh%2FSanyue-ImgHub&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=MarSeventh/CloudFlare-ImgBed%2CMarSeventh/Sanyue-ImgHub&type=date&theme=dark&legend=top-left&sealed_token=sAw_e7kRryMASKC9b3AqORk8leSZgKYTuCvYqOzqsyOmTse-00LgwOS4FtG75lHuCuxsyd-TPlyV3BieLloGaM-3M2AlLeQt2g1_Kczjm0UZdqnvVKRCR2J9oqdE0_XEKFMmOMLG_Loz8Bz3-JPKwiMyTjKM0LRRLm2TjGA73QSrTuOsRAqwj6F7LAVf" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=MarSeventh/CloudFlare-ImgBed%2CMarSeventh/Sanyue-ImgHub&type=date&legend=top-left&sealed_token=sAw_e7kRryMASKC9b3AqORk8leSZgKYTuCvYqOzqsyOmTse-00LgwOS4FtG75lHuCuxsyd-TPlyV3BieLloGaM-3M2AlLeQt2g1_Kczjm0UZdqnvVKRCR2J9oqdE0_XEKFMmOMLG_Loz8Bz3-JPKwiMyTjKM0LRRLm2TjGA73QSrTuOsRAqwj6F7LAVf" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=MarSeventh/CloudFlare-ImgBed%2CMarSeventh/Sanyue-ImgHub&type=date&legend=top-left&sealed_token=sAw_e7kRryMASKC9b3AqORk8leSZgKYTuCvYqOzqsyOmTse-00LgwOS4FtG75lHuCuxsyd-TPlyV3BieLloGaM-3M2AlLeQt2g1_Kczjm0UZdqnvVKRCR2J9oqdE0_XEKFMmOMLG_Loz8Bz3-JPKwiMyTjKM0LRRLm2TjGA73QSrTuOsRAqwj6F7LAVf" />
 </picture>
</a>

喜欢项目的话，希望您能给个免费的 star✨✨✨，非常感谢！