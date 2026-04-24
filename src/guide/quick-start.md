# 快速开始

本指南将帮助您在 15 分钟内快速部署并使用 CloudFlare ImgBed。

## 📱 快速体验

### 体验站点

我们提供了一个体验站点：[cfbed.1314883.xyz](https://cfbed.1314883.xyz/)

**访问码**：`cfbed`

::: tip 提示
体验站点可能会有访问限制，请勿用于生产环境，建议您自行部署以获得更好的体验。
:::

## 🎯 部署概览

CloudFlare ImgBed 支持多种部署方式：

| 部署方式 | 难度 | 费用 | 推荐指数 |
|---------|------|------|---------|
| Cloudflare Pages | ⭐ | 一定额度内免费 | ⭐⭐⭐⭐⭐ |
| Cloudflare Workers | ⭐⭐ | 一定额度内免费 | ⭐⭐⭐⭐ |
| Docker | ⭐⭐ | 服务器费用 | ⭐⭐⭐⭐⭐ |
| 手动部署 | ⭐⭐⭐ | 服务器费用 | ⭐⭐⭐ |

## 🚀 部署指南

### 前期准备

无论您选择哪种部署方式，都需要按照所需存储渠道进行一些必要配置，参见 [前期准备](/deployment/prerequisites)。

### Cloudflare Pages 部署

基于 Cloudflare Pages 的部署方式，无需服务器，通过 Dashboard 可视化操作，支持自动更新，适合大多数用户，参见 [Cloudflare Pages 部署指南](/deployment/pages)。

### Cloudflare Workers 部署

基于 Cloudflare Workers 的部署方式，通过 GitHub Actions 一键部署，需要手动触发更新，参见 [Cloudflare Workers 部署指南](/deployment/worker)。

### Docker 部署

基于 Docker 的部署方式，适合有服务器资源的用户，参见 [Docker 部署指南](/deployment/docker)。

### 手动部署

手动搭建项目环境并部署，适合有开发经验的用户，参见 [手动部署指南](/deployment/manual)。


## 🎉 下一步

恭喜！您已经成功部署了 CloudFlare ImgBed。现在可以：

- [进行图床配置](/deployment/configuration) - 个性化您的图床
- [查看 API 文档](/api/upload) - 集成到您的应用
- [了解功能特性](/guide/features) - 发掘更多可能性

