import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CloudFlare ImgBed',
  description: '🗂️开源文件托管解决方案，基于 Cloudflare Pages，支持 Telegram Bot 、 Cloudflare R2 、S3 等多种存储渠道',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'CloudFlare,图床,文件托管,Telegram,R2,S3,开源' }],
    ['meta', { property: 'og:title', content: 'CloudFlare ImgBed - 开源文件托管解决方案' }],
    ['meta', { property: 'og:description', content: '基于 Cloudflare Pages 的免费开源图床解决方案' }],
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'CloudFlare ImgBed',
      description: '🗂️Open source file hosting solution based on Cloudflare Pages, supporting Telegram Bot, Cloudflare R2, S3 and other storage channels',      
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Document', link: '/en/guide/introduction' },
          { text: 'About', link: '/en/about/contribute' }
        ],
        sidebar: [
          {
            text: 'Project Overview',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/en/guide/introduction' },
              { text: 'Features', link: '/en/guide/features' },
              { text: 'Quick Start', link: '/en/guide/quick-start' }
            ]
          },
          {
            text: 'Deployment',
            collapsed: false,
            items: [
              { text: 'Prerequisites', link: '/en/deployment/prerequisites' },
              { text: 'Cloudflare Deployment', link: '/en/deployment/cloudflare' },
              { text: 'Docker Deployment', link: '/en/deployment/docker' },
              { text: 'Manual Deployment', link: '/en/deployment/manual' },
              { text: 'Version Update', link: '/en/deployment/update' },
              { text: 'Configuration', link: '/en/deployment/configuration' }
            ]
          },
          {
            text: 'API Documentation',
            collapsed: false,
            items: [
              { text: 'Upload API', link: '/en/api/upload' },
              { text: 'Random Image API', link: '/en/api/random' }
            ]
          },
          {
            text: 'Q&A',
            collapsed: false,
            items: [
              { text: 'Frequently Asked Questions', link: '/en/qa/' }
            ]
          },
          {
            text: 'About',
            collapsed: false,
            items: [
              { text: 'Contribute', link: '/en/about/contribute' },
              { text: 'Thanks', link: '/en/about/thanks' },
              { text: 'Contact Us', link: '/en/about/contact' }
            ]
          }
        ],
        editLink: {
          pattern: 'https://github.com/MarSeventh/CloudFlare-ImgBed-Docs/edit/main/src/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        }
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/introduction' },
      { text: '关于', link: '/about/contribute' }
    ],    
    sidebar: [
      {
        text: '项目速览',
        collapsed: false,
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '功能特性', link: '/guide/features' },
          { text: '快速开始', link: '/guide/quick-start' }
        ]
      },
      {
        text: '部署指南',
        collapsed: false,
        items: [
          { text: '前期准备', link: '/deployment/prerequisites' },
          { text: 'Cloudflare 部署', link: '/deployment/cloudflare' },
          { text: 'Docker 部署', link: '/deployment/docker' },
          { text: '手动部署', link: '/deployment/manual' },
          { text: '版本更新', link: '/deployment/update' },
          { text: '配置说明', link: '/deployment/configuration' }
        ]
      },
      {
        text: 'API 文档',
        collapsed: true,
        items: [
          { text: '上传 API', link: '/api/upload' },
          { text: '随机图 API', link: '/api/random' }
        ]
      },
      {
        text: 'Q&A',
        collapsed: true,
        items: [
          { text: '常见问题', link: '/qa/' }
        ]
      },
      {
        text: '关于',
        collapsed: false,
        items: [
          { text: '贡献', link: '/about/contribute' },
          { text: '致谢', link: '/about/thanks' },
          { text: '联系我们', link: '/about/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MarSeventh/CloudFlare-ImgBed' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-present MarSeventh'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/MarSeventh/CloudFlare-ImgBed-Docs/edit/main/src/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
