# 配置说明

本章节详细介绍 CloudFlare ImgBed 的各种配置选项和自定义设置。

## 🗂️ 存储渠道配置

部署完成后访问您的域名，进入管理后台配置存储渠道。

### 访问管理后台

访问 `https://your-domain/dashboard`
::: tip 提示
   管理后台默认无需密码，登录后请及时设置管理员用户名和密码。
:::

### 配置 Telegram 渠道

1. 左上角菜单栏进入 "系统设置" → "上传设置"
2. 找到 "Telegram 渠道配置"
3. 点击 "添加渠道"
4. 填入准备好的 Token 和 Chat ID：
   - **渠道名称**：自定义名称（如：主渠道）
   - **Bot Token**：从 @BotFather 获得的 Token
   - **Chat ID**：频道 ID（带 - 号）
   - **启用状态**：开启
5. 点击 "保存设置"


### 配置 R2 渠道

服务器部署时默认添加了 Cloudflare R2 存储方式，以下步骤仅针对 Cloudflare 部署方式：

1. 在项目设置中绑定 R2 存储桶：
   - 选择 "设置" → "绑定"
   - 添加 "R2 存储桶"
   - **变量名称**：`img_r2`
   - **R2 存储桶**：选择已创建的存储桶

![配置 R2 渠道](/images/deployment/r2-config.png)

2. 在管理后台配置：
   - 进入 "系统设置" → "上传设置"
   - 配置 R2 渠道参数
   - 如需图像审查，填入 R2 公开访问链接

::: tip 提示
请注意Cloudflare R2 的免费额度限制，超过后可能会产生费用。
   ![注意](/images/deployment/r2-free-tier.png)
:::

### 配置 S3 渠道

在管理后台的 S3 渠道配置中填入：

- **Access Key ID**：访问密钥 ID
- **Secret Access Key**：机密访问密钥
- **Bucket Name**：存储桶名称
- **Endpoint**：服务端点（完整 URL，如 https://s3.us-east-005.backblazeb2.com）
- **PathStyle**：路径样式（如需兼容旧 S3 版本，开启此选项）
- **Region**：存储区域（可选）


## 🔒 安全设置

安全相关设置，在管理后台的 "系统设置" → "安全设置" 中配置

### 认证管理

- 用户端认证：用于 Web 端用户登录和 API 认证
- 管理端认证： 管理员用户名和密码，用于访问管理后台

### 上传管理

#### 图像审查

审查渠道支持 `nsfwjs` 和 `moderatecontent.com`，项目自带默认审查渠道（nsfwjs），但不做服务可用性保证，如需高频使用审查功能，建议根据如下步骤自行配置。

##### 1.moderatecontent.com

- 访问 [ModerateContent](https://moderatecontent.com/)
- 注册并获取免费 API Key（目前已不再支持免费注册）
- 在管理后台 "系统设置" → "安全设置" 中填入 API Key

##### 2.nsfwjs

- 使用 Docker 部署 `nsfwjs` 审查服务
```bash
# 参考命令
docker run -d -p 127.0.0.1:5000:5000/tcp \
  --env PORT=5000 \
  --restart=always \
  eugencepoi/nsfw_api:latest
```
- 在管理后台 "系统设置" → "安全设置" 中填入审查服务地址，如 `https://nsfwjs.your.domain`

### 访问管理

- 域名过滤
  - 放行域名：允许访问的域名列表（留空放行所有域名，否则需要手动添加图床自身域名）
- 白名单模式：启用后仅允许加入白名单的文件被访问

## 🌐 网页设置

前端网页相关设置，在管理后台的 "系统设置" → "网页设置" 中配置

| 字段名        | 用途                 | 类型          | 内容规范                                                     |
| ------------- | -------------------- | ------------- | ------------------------------------------------------------ |
| siteTitle     | 网站标题             | 字符串        | 只支持`字符串`类型，设置为你自定义的网站标题                 |
| siteIcon      | 网站图标             | 字符串        | 只支持`字符串`类型，设置为你自定义的网站图标链接             |
| ownerName     | 图床名称         | 字符串        | 只支持`字符串`类型，设置为你自定义的图床名称（默认为`Sanyue`） |
| logoUrl       | 图床Logo         | 字符串        | 只支持`字符串`类型，设置为你自定义的图床Logo链接             |
| announcement | 公告                 | 字符串        | 只支持`字符串`类型，可以为 HTML 格式，设置为你自定义的公告内容（如有）          |
| loginBkImg    | 登录页背景图   | 列表/字符串   | 1、当字段类型为`列表`时，列表中元素为需要添加到轮播列表中的图片链接（列表中只有一张图时即为固定背景），形如`["1.jpg","2.jpg"]`<br />2、当字段类型为`字符串`时，目前**仅支持**字符串值为`bing`，设置为该值时启用bing随机图片轮播模式。 |
| uploadBkImg   | 上传页背景图   | 列表/字符串   | 同上                                                         |
| bkInterval    | 背景切换间隔 | 正整数        | 设置为背景图的轮播时间，默认`3000`，单位`ms`。<br />例如你希望10s切换一次，设置为`10000`即可。 |
| bkOpacity     | 背景图透明度         | (0,1]的浮点数 | 展示的背景图透明度，默认为`1`。<br />如果你觉得显示效果不佳，可以自定义，如`0.8` |
| footerLink    | 页脚传送门链接       | 字符串        | 只支持`字符串`类型，设置为你自定义的传送地址（如个人博客链接） |
| disableFooter | 隐藏页脚             | boolean       | 支持`boolean`类型，设为`true`时禁用页脚，默认`false`         |
| urlPrefix     | 默认 URL 前缀     | 字符串        | 只支持`字符串`类型，设置为自定义的全局默认链接前缀，该前缀会覆盖原始默认前缀，但不会覆盖用户自定义的链接前缀 |



## 🛠️ 其他设置
其他设置项，在管理后台的 "系统设置" → "其他设置" 中配置

### 远端遥测
便于开发者进行bug的捕捉和定位，但是过程中可能收集到访问链接、域名等信息，如您不愿意泄露类似信息给项目开发者，请在管理后台禁用此功能。

### 随机图像 API
- 目录：开放随机图权限的目录，默认为根目录，多个目录用逗号分隔；目录均采用绝对路径，例如`/img/cover`，表示该目录及其所有子目录的文件可被随机图API访问

### CloudFlare API Token
正常情况下，因为CloudFlare CDN缓存的存在，在管理端进行删除、拉黑、加白名单等操作不会立即生效，需要等到缓存过期才能生效。为了让操作立即生效，建议设置此项，设置方式如下：
- `CF_ZONE_ID`：绑定域名的 Cloudflare Zone ID
![获取方法](/images/deployment/cf-zone-id.png)
- `CF_EMAIL`：Cloudflare 账户邮箱
- `CF_API_KEY`：Cloudflare Global API Key
![获取方法](/images/deployment/cf-api-key.png)


## 🔧 环境变量清单

::: warning 注意
环境变量设置方式在 v2.0 版本后已废弃，以下配置请在管理后台进行。
:::

### 基础认证配置

| 变量名 | 类型 | 必需 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `BASIC_USER` | string | 否 | 管理员用户名 | `admin` |
| `BASIC_PASS` | string | 否 | 管理员密码 | `your_secure_password` |
| `AUTH_CODE` | string | 否 | 上传认证码 | `your_auth_code` |

### 存储渠道配置

#### Telegram 渠道

| 变量名 | 类型 | 必需 | 说明 | 示例值 |
|--------|------|------|------|--------|
| `TG_BOT_TOKEN` | string | 是 | Telegram Bot Token | `123456789:ABCdefGHI...` |
| `TG_CHAT_ID` | string | 是 | Telegram 频道 ID | `-1001234567890` |


### 功能开关配置

| 变量名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `AllowRandom` | boolean | `false` | 启用随机图 API |
| `WhiteList_Mode` | boolean | `false` | 启用白名单模式 |
| `disable_telemetry` | boolean | `false` | 禁用遥测数据 |

### 安全配置

| 变量名 | 类型 | 说明 | 示例值 |
|--------|------|------|--------|
| `ALLOWED_DOMAINS` | string | 允许访问的域名列表 | `domain1.com,domain2.com` |
| `ModerateContentApiKey` | string | 图像内容审查 API Key | `your_api_key` |

### CDN 缓存配置

| 变量名 | 类型 | 说明 | 用途 |
|--------|------|------|------|
| `CF_ZONE_ID` | string | Cloudflare Zone ID | 自动清除 CDN 缓存 |
| `CF_EMAIL` | string | Cloudflare 账户邮箱 | 自动清除 CDN 缓存 |
| `CF_API_KEY` | string | Cloudflare Global API Key | 自动清除 CDN 缓存 |






