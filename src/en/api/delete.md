# Delete API

The Delete API supports deleting files in CloudFlare ImgBed, including single file deletion and batch folder deletion functionality.

## Basic Information

- **Endpoint**: `/api/manage/delete/{path}`
- **Method**: `GET`
- **Authentication**: `delete` privileges required
- **Content Type**: `application/json`

## Request Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | File path or folder path(e.g., `file.png` or `your/folder`) |

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `folder` | boolean | No | `false` | Whether it's a folder deletion, `true` means delete entire folder and its contents |

## Functionality

### Single File Deletion
When the `folder` parameter is `false` or not provided, deletes the specified single file.

### Folder Deletion
When the `folder` parameter is `true`, recursively deletes the specified folder and all its subfolders and files.


## Response Format

### Single File Deletion Success Response

```json
{
  "success": true,
  "fileId": "example/image.jpg"
}
```

### Folder Deletion Success Response

```json
{
  "success": true,
  "deleted": [
    "folder/image1.jpg",
    "folder/image2.png",
    "folder/subfolder/image3.gif"
  ],
  "failed": []
}
```

### Error Response

```json
{
  "success": false,
  "error": "Delete file failed"
}
```

## Examples

### Delete Single File

```bash
curl --location --request DELETE 'https://your.domain/api/manage/delete/example,image.jpg' \
--header 'Authorization: Bearer your_token'
```

### Delete Folder

```bash
curl --location --request DELETE 'https://your.domain/api/manage/delete/example,folder?folder=true' \
--header 'Authorization: Bearer your_token'
```