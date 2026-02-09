# 随机图 API

随机图 API 允许您从图床中随机获取一张图片，适用于网站背景、占位图等场景。

## 基本信息

- **端点**：`/random`
- **方法**：`GET`
- **前置条件**：需要开启随机图功能


## 请求参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `content` | string | 否 | `image` | 文件类型过滤，可选值有`[image, video]`，多个使用`,`分隔 |
| `type` | string | 否 | `path` | 返回内容类型，设为`img`时直接返回图片（此时form不生效），设为`url`时返回完整url链接 |
| `form` | string | 否 | `json` | 响应格式，设为`text`时直接返回文本 |
| `dir` | string | 否 | - | 指定目录，使用相对路径，例如`img/test`会返回该目录以及所有子目录下的文件 |
| `orientation` | string | 否 | - | 图片方向筛选，可选值：`landscape`（横图）、`portrait`（竖图）、`square`（方图）、`auto`（自适应设备方向） |

## 响应格式

1、当`type`为`img`时：返回格式为`image/jpeg`

2、当`type`为其他值时：
- 当`form`不是`text`时，返回JSON格式内容，`data.url`为返回的链接/文件路径
- 当`form`是`text`时，直接返回链接/文件路径

## 示例

### 基本请求

```bash
curl --location --request GET 'https://your.domain/random'
```

### 获取横图

```bash
curl --location --request GET 'https://your.domain/random?orientation=landscape'
```

### 获取指定目录的竖图

```bash
curl --location --request GET 'https://your.domain/random?dir=wallpaper&orientation=portrait'
```

### 直接返回图片

```bash
curl --location --request GET 'https://your.domain/random?type=img&orientation=landscape'
```

### 响应示例

```json
{
 "url": "/file/4fab4d423d039b4665a27.jpg"
}
```

## 使用场景

### 网站随机背景

```html
<img src="https://your.domain/random?type=img&orientation=landscape" alt="随机背景">
```

### CSS 背景图

```css
.hero {
  background-image: url('https://your.domain/random?type=img&orientation=landscape');
  background-size: cover;
}
```

### 手机壁纸 API

```
https://your.domain/random?type=img&dir=mobile&orientation=portrait
```

### 自适应设备方向

```bash
curl --location --request GET 'https://your.domain/random?orientation=auto'
```

## `orientation=auto` 自适应模式

当 `orientation` 设为 `auto` 时，API 会根据请求设备自动判断并返回合适方向的图片。

### 检测策略

1. **Client Hints（优先）**：如果浏览器发送了 `Sec-CH-Viewport-Width` 和 `Sec-CH-Viewport-Height` 请求头，API 会根据视口宽高比判断方向：
   - 宽高比 > 1.1 → 横图（landscape）
   - 宽高比 < 0.9 → 竖图（portrait）
   - 0.9 ≤ 宽高比 ≤ 1.1 → 方图（square）

2. **User-Agent（回退）**：如果没有 Client Hints，API 会解析 User-Agent 判断设备类型：
   - 移动设备 → 竖图（portrait）
   - 桌面设备 → 横图（landscape）

3. **无法判断**：如果两种方式都无法判断，则不进行方向过滤，返回任意方向的图片。

### 响应头

自适应模式下，响应会包含以下额外头信息，以便浏览器在后续请求中发送 Client Hints：

- `Accept-CH: Sec-CH-Viewport-Width, Sec-CH-Viewport-Height`
- `Vary: Sec-CH-Viewport-Width, Sec-CH-Viewport-Height, User-Agent`

### 降级处理

- 自适应模式下，如果自动检测的方向没有匹配的图片，会降级返回任意方向的图片（不会返回空结果）
- 手动指定方向（`landscape`/`portrait`/`square`）时，如果没有匹配的图片，返回空结果
