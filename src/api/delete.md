# 删除 API

删除 API 支持删除 CloudFlare ImgBed 中的文件，包括单个文件、文件夹和批量文件删除功能。

## 基本信息

- **端点**：`/api/manage/delete/{path}`
- **方法**：`GET`
- **认证**：需要`delete`权限
- **内容类型**：`application/json`

## 请求参数

### 路径参数

| 参数名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| `path` | string | 是 | 文件或文件夹路径（如file.png或your/folder） |

### Query 参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `folder` | boolean | 否 | `false` | 是否为文件夹删除，`true`表示删除整个文件夹及其内容 |

## 功能说明

### 单文件删除
当 `folder` 参数为 `false` 或未提供时，删除指定的单个文件。

### 文件夹删除
当 `folder` 参数为 `true` 时，递归删除指定文件夹及其所有子文件夹和文件。

### 批量文件删除

使用批量删除接口可以一次删除多个文件，接口会并发处理删除请求。

#### 基本信息

- **端点**：`/api/manage/delete/batch`
- **方法**：`POST`
- **认证**：需要`delete`权限
- **内容类型**：`application/json`

#### 请求体

| 参数名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| `fileIds` | string[] | 是 | 要删除的文件路径列表，单次最多 500 个文件，重复路径只处理一次 |

```json
{
  "fileIds": [
    "folder/image1.jpg",
    "folder/image2.png"
  ]
}
```

## 响应格式

### 单文件删除成功响应

```json
{
  "success": true,
  "fileId": "example/image.jpg"
}
```

### 文件夹删除成功响应

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

### 批量删除成功响应

```json
{
  "success": true,
  "deleted": [
    "folder/image1.jpg",
    "folder/image2.png"
  ],
  "failed": []
}
```

### 批量删除部分失败响应

当部分文件删除失败时，`success` 为 `false`，`failed` 中会返回失败文件及原因。

```json
{
  "success": false,
  "deleted": ["folder/image1.jpg"],
  "failed": [
    {
      "fileId": "folder/image2.png",
      "error": "Delete file failed"
    }
  ]
}
```

### 错误响应

```json
{
  "success": false,
  "error": "Delete file failed"
}
```

## 示例

### 删除单个文件

```bash
curl --location --request GET 'https://your.domain/api/manage/delete/example/image.jpg' \
--header 'Authorization: Bearer your_token'
```

### 删除文件夹

```bash
curl --location --request GET 'https://your.domain/api/manage/delete/example/folder?folder=true' \
--header 'Authorization: Bearer your_token'
```

### 批量删除文件

```bash
curl --location --request POST 'https://your.domain/api/manage/delete/batch' \
--header 'Authorization: Bearer your_token' \
--header 'Content-Type: application/json' \
--data '{
  "fileIds": [
    "folder/image1.jpg",
    "folder/image2.png"
  ]
}'
```
