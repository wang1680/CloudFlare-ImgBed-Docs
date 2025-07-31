# Upload API

The Upload API supports uploading files to CloudFlare ImgBed through third parties, making it easy to integrate into various applications and services.

## Basic Information

- **Endpoint**: `/upload`
- **Method**: `POST`
- **Authentication**: Upload authentication code or API Token required (requires `upload` privileges)
- **Content Type**: `multipart/form-data`
- **File Size Limit**: Depends on storage channel

## Request Parameters

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `authCode` | string | No | - | Upload authentication code |
| `serverCompress` | boolean | No | `true` | Server-side compression (only for Telegram channel image files) |
| `uploadChannel` | string | No | `telegram` | Upload channel: `telegram`, `cfr2`, `s3` |
| `autoRetry` | boolean | No | `true` | Automatically switch channels and retry on failure |
| `uploadNameType` | string | No | `default` | File naming method, options are `[default, index, origin, short]`, representing default `prefix_original` naming, `prefix only` naming, `original name only` naming, and `short link` naming method, default is `default` |
| `returnFormat` | string | No | `default` | Return link format, options are `[default, full]`, representing default `/file/id` format and full link format |
| `uploadFolder` | string | No | - | Upload directory, use relative path, e.g., to upload to img/test directory, fill `img/test` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | File | Yes | File to upload |

## Response Format

`data[0].src` is the obtained image link (note that it does not include the domain name, you need to add it yourself)

## Examples

### Request Example

```bash
 curl --location --request POST 'https://your.domain/upload?authCode=your_authCode' \\

 --header 'User-Agent: Apifox/1.0.0 (https://apifox.com)' \\
 
 --form 'file=@"D:\\杂文件\\壁纸\\genshin109.jpg"'
```

### Response Example

```json
[
  {
    "src": "/file/abc123_image.jpg"
  }
]
```
