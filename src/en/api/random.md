# Random Image API

The Random Image API allows you to randomly get an image from the image hosting, suitable for website backgrounds, placeholder images, and other scenarios.

## Basic Information

- **Endpoint**: `/random`
- **Method**: `GET`
- **Prerequisites**: Random image function must be enabled

## Request Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `content` | string | No | `image` | File type filter, options are `[image, video]`, multiple values separated by `,` |
| `type` | string | No | `path` | Return content type, set to `img` to directly return image (form parameter doesn't work in this case), set to `url` to return complete url link |
| `form` | string | No | `json` | Response format, set to `text` to directly return text |
| `dir` | string | No | - | Specify directory, use relative path, e.g., `img/test` will return files from this directory and all subdirectories |
| `orientation` | string | No | - | Image orientation filter, options: `landscape`, `portrait`, `square` |

## Response Format

1. When `type` is `img`: Returns format `image/jpeg`

2. When `type` is other values:
- When `form` is not `text`: Returns JSON format content, `data.url` is the returned link/file path
- When `form` is `text`: Directly returns link/file path

## Examples

### Basic Request

```bash
curl --location --request GET 'https://your.domain/random'
```

### Get Landscape Image

```bash
curl --location --request GET 'https://your.domain/random?orientation=landscape'
```

### Get Portrait Image from Specific Directory

```bash
curl --location --request GET 'https://your.domain/random?dir=wallpaper&orientation=portrait'
```

### Return Image Directly

```bash
curl --location --request GET 'https://your.domain/random?type=img&orientation=landscape'
```

### Response Example

```json
{
 "url": "/file/4fab4d423d039b4665a27.jpg"
}
```

## Use Cases

### Random Website Background

```html
<img src="https://your.domain/random?type=img&orientation=landscape" alt="Random Background">
```

### CSS Background Image

```css
.hero {
  background-image: url('https://your.domain/random?type=img&orientation=landscape');
  background-size: cover;
}
```

### Mobile Wallpaper API

```
https://your.domain/random?type=img&dir=mobile&orientation=portrait
```
