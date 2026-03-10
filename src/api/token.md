# Token 管理 API

Token 管理 API 支持对 API Token 进行创建、列出、更新和删除操作，并支持设置 Token 过期时间和自动删除策略。

## 基本信息

- **端点**：`/api/manage/apiTokens`
- **认证**：管理员 Basic Auth 或 API Token（需要管理权限）
- **内容类型**：`application/json`

## 列出所有 Token

### 请求

- **方法**：`GET`

### 功能说明

获取所有 API Token 列表。系统会在返回前自动清理已过期且标记为自动删除的 Token。

### 响应示例

```json
{
  "tokens": [
    {
      "id": "m1abc2def3",
      "name": "上传专用",
      "token": "imgbed_GqloEaR4...",
      "owner": "admin",
      "permissions": ["upload"],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "expiresAt": "2024-07-01T00:00:00.000Z",
      "autoDelete": false
    }
  ]
}
```

## 创建 Token

### 请求

- **方法**：`POST`

### Body 参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `name` | string | 是 | - | Token 名称 |
| `permissions` | string[] | 是 | - | 权限列表，可选值：`upload`、`delete`、`list`、 `manage` |
| `owner` | string | 是 | - | Token 所有者 |
| `expiresAt` | string \| null | 否 | `null` | 过期时间，ISO 8601 格式，`null` 表示永不过期 |
| `autoDelete` | boolean | 否 | `false` | 过期后是否自动删除 |

### 请求示例

```bash
curl -X POST "https://your.domain/api/manage/apiTokens" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-d '{
  "name": "上传专用",
  "permissions": ["upload"],
  "owner": "admin",
  "expiresAt": "2024-07-01T00:00:00.000Z",
  "autoDelete": true
}'
```

### 响应示例

```json
{
  "id": "m1abc2def3",
  "name": "上传专用",
  "token": "imgbed_AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "owner": "admin",
  "permissions": ["upload"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z",
  "expiresAt": "2024-07-01T00:00:00.000Z",
  "autoDelete": true
}
```

::: warning 注意
创建成功后返回的 `token` 字段为完整 Token 值，请妥善保存，后续查询时仅显示前 15 位。
:::

## 更新 Token

### 请求

- **方法**：`PUT`

### Body 参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `tokenId` | string | 是 | - | Token ID |
| `permissions` | string[] | 是 | - | 新的权限列表 |
| `expiresAt` | string \| null | 否 | `null` | 新的过期时间，`null` 表示永不过期 |
| `autoDelete` | boolean | 否 | `false` | 过期后是否自动删除 |

### 请求示例

```bash
curl -X PUT "https://your.domain/api/manage/apiTokens" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-d '{
  "tokenId": "m1abc2def3",
  "permissions": ["upload", "delete"],
  "expiresAt": "2025-01-01T00:00:00.000Z",
  "autoDelete": false
}'
```

### 响应示例

```json
{
  "success": true,
  "message": "Token 权限已更新",
  "token": {
    "id": "m1abc2def3",
    "name": "上传专用",
    "permissions": ["upload", "delete"],
    "expiresAt": "2025-01-01T00:00:00.000Z",
    "autoDelete": false
  }
}
```

## 删除 Token

### 请求

- **方法**：`DELETE`

### Query 参数

| 参数名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| `id` | string | 是 | 要删除的 Token ID |

### 请求示例

```bash
curl -X DELETE "https://your.domain/api/manage/apiTokens?id=m1abc2def3" \
-H "Authorization: Bearer YOUR_API_TOKEN"
```

### 响应示例

```json
{
  "success": true,
  "message": "Token 已删除"
}
```

## Token 过期机制

### 过期验证

当使用 API Token 调用接口时，系统会自动检查 Token 是否已过期。若 Token 已过期，接口将返回：

```json
{
  "valid": false,
  "error": "Token 已过期"
}
```

### 自动删除

当 Token 同时满足以下条件时，系统在列出 Token 时会自动将其从数据库中删除：

1. `expiresAt` 不为 `null`（设置了过期时间）
2. 当前时间晚于 `expiresAt`（已过期）
3. `autoDelete` 为 `true`（启用了自动删除）

