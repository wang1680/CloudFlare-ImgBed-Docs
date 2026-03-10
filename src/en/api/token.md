# Token Management API

The Token Management API supports creating, listing, updating, and deleting API Tokens, with support for setting Token expiration time and auto-deletion policies.

## Basic Information

- **Endpoint**: `/api/manage/apiTokens`
- **Authentication**: Admin Basic Auth or API Token
- **Content Type**: `application/json`

## List All Tokens

### Request

- **Method**: `GET`

### Description

Retrieves all API Tokens. The system automatically cleans up expired Tokens that are marked for auto-deletion before returning the list.

### Response Example

```json
{
  "tokens": [
    {
      "id": "m1abc2def3",
      "name": "Upload Only",
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

## Create Token

### Request

- **Method**: `POST`

### Body Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `name` | string | Yes | - | Token name |
| `permissions` | string[] | Yes | - | Permission list, options: `upload`, `delete`, `list` |
| `owner` | string | Yes | - | Token owner |
| `expiresAt` | string \| null | No | `null` | Expiration time in ISO 8601 format, `null` means never expires |
| `autoDelete` | boolean | No | `false` | Whether to auto-delete after expiration |

### Request Example

```bash
curl -X POST "https://your.domain/api/manage/apiTokens" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_TOKEN" \
-d '{
  "name": "Upload Only",
  "permissions": ["upload"],
  "owner": "admin",
  "expiresAt": "2024-07-01T00:00:00.000Z",
  "autoDelete": true
}'
```

### Response Example

```json
{
  "id": "m1abc2def3",
  "name": "Upload Only",
  "token": "imgbed_AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "owner": "admin",
  "permissions": ["upload"],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z",
  "expiresAt": "2024-07-01T00:00:00.000Z",
  "autoDelete": true
}
```

::: warning Notice
The `token` field returned after successful creation contains the full Token value. Please save it properly, as subsequent queries will only display the first 15 characters.
:::

## Update Token

### Request

- **Method**: `PUT`

### Body Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenId` | string | Yes | - | Token ID |
| `permissions` | string[] | Yes | - | New permission list |
| `expiresAt` | string \| null | No | `null` | New expiration time, `null` means never expires |
| `autoDelete` | boolean | No | `false` | Whether to auto-delete after expiration |

### Request Example

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

### Response Example

```json
{
  "success": true,
  "message": "Token permissions updated",
  "token": {
    "id": "m1abc2def3",
    "name": "Upload Only",
    "permissions": ["upload", "delete"],
    "expiresAt": "2025-01-01T00:00:00.000Z",
    "autoDelete": false
  }
}
```

## Delete Token

### Request

- **Method**: `DELETE`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | ID of the Token to delete |

### Request Example

```bash
curl -X DELETE "https://your.domain/api/manage/apiTokens?id=m1abc2def3" \
-H "Authorization: Bearer YOUR_API_TOKEN"
```

### Response Example

```json
{
  "success": true,
  "message": "Token deleted"
}
```

## Token Expiration Mechanism

### Expiration Validation

When using an API Token to call interfaces, the system automatically checks whether the Token has expired. If the Token has expired, the interface will return:

```json
{
  "valid": false,
  "error": "Token expired"
}
```

### Auto-Deletion

When a Token meets all of the following conditions, the system will automatically delete it from the database when listing Tokens:

1. `expiresAt` is not `null` (expiration time is set)
2. Current time is later than `expiresAt` (expired)
3. `autoDelete` is `true` (auto-deletion is enabled)
