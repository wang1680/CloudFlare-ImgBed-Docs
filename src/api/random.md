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
| `orientation` | string | 否 | - | 图片方向筛选，可选值：`landscape`（横图）、`portrait`（竖图）、`square`（方图） |

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
