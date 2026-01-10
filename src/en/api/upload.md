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
| `uploadChannel` | string | No | `telegram` | Upload channel: `telegram`, `cfr2`, `s3`, `discord`, `huggingface` |
| `channelName` | string | No | - | Specify channel name for selecting a specific channel in multi-channel scenarios. Available channels can be obtained via `/api/channels` |
| `autoRetry` | boolean | No | `true` | Automatically switch channels and retry on failure |
| `uploadNameType` | string | No | `default` | File naming method, options are `[default, index, origin, short]`, representing default `prefix_original` naming, `prefix only` naming, `original name only` naming, and `short link` naming method, default is `default` |
| `returnFormat` | string | No | `default` | Return link format, options are `[default, full]`, representing default `/file/id` format and full link format |
| `uploadFolder` | string | No | - | Upload directory, use relative path, e.g., to upload to img/test directory, fill `img/test` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | File | Yes | File to upload |

### Chunked Upload Parameters

When using chunked upload, the following additional parameters are required:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `initChunked` | boolean | No | Set to `true` to initialize a chunked upload session |
| `chunked` | boolean | No | Set to `true` when uploading a chunk or merging |
| `merge` | boolean | No | Set to `true` when requesting to merge chunks |
| `uploadId` | string | Yes* | Required for chunk upload and merge requests (returned from init) |
| `chunkIndex` | integer | Yes* | Required for chunk upload (0-based index) |
| `totalChunks` | integer | Yes* | Required for init, chunk upload, and merge requests |
| `originalFileName`| string | Yes* | Required for init, chunk upload, and merge requests |
| `originalFileType`| string | Yes* | Required for init, chunk upload, and merge requests |

### Chunked Upload Process

1.  **Initialize**: Send a POST request with `initChunked=true`, `totalChunks`, `originalFileName`, and `originalFileType`. The server returns an `uploadId`.
2.  **Upload Chunks**: For each chunk, send a POST request with `chunked=true`, `uploadId`, `chunkIndex`, `totalChunks`, `originalFileName`, `originalFileType`, and the chunk `file`.
    *   **Note**: Chunk uploads are synchronous. The server waits for the chunk to be uploaded to the storage provider before responding.
3.  **Merge**: After all chunks are uploaded, send a POST request with `chunked=true`, `merge=true`, `uploadId`, `totalChunks`, `originalFileName`, and `originalFileType`.
    *   **Note**: The merge process is synchronous. The server waits for the file to be merged and returns the final result.

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
