# List API

The List API supports retrieving file lists from CloudFlare ImgBed.

## Basic Information

- **Endpoint**: `/api/manage/list`
- **Method**: `GET`
- **Authentication**: Requires `list` permission
- **Content Type**: `application/json`

## Request Parameters

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `start` | number | No | `0` | Starting position for pagination |
| `count` | number | No | `50` | Number of items to return, `-1` means no limit |
| `sum` | boolean | No | `false` | Whether to return only total count statistics (effective when count is -1) |
| `recursive` | boolean | No | `false` | Whether to recursively get files in subdirectories |
| `dir` | string | No | `""` | Specify directory path |
| `search` | string | No | `""` | Search keyword, supports filename search |
| `channel` | string | No | `""` | Filter by storage channel: `telegram`, `cfr2`, `s3` |
| `listType` | string | No | `""` | Filter by review result type: `None`, `Block`, `White` |
| `action` | string | No | `""` | Special operations: `rebuild`, `info` |

## Feature Description

### Regular File List Query
Retrieve lists of files and subdirectories in the specified directory, with support for pagination, search, and filtering.

### Statistics Query
When `count=-1` and `sum=true`, only returns total file count statistics (for the specified directory and subdirectories).

### Recursive Query
When `recursive=true`, recursively retrieves all files in subdirectories.

### Special Operations

#### Rebuild Index (`action=rebuild`)
Asynchronously rebuild the file index to improve query performance.

#### Index Information (`action=info`)
Get basic information and status of the index.

## Response Format

### Regular List Response

```json
{
  "files": [
    {
      "name": "example/image.jpg",
      "metadata": {
        "Channel": "telegram",
        "TimeStamp": "1754020094217",
        "File-Mime": "image/jpeg",
        "File-Size": "1024000"
      }
    }
  ],
  "directories": [
    "example/subfolder"
  ],
  "totalCount": 100, // Total file count in the specified directory and subdirectories
  "returnedCount": 50, // Actual number of files returned
  "indexLastUpdated": "1754020094217",
  "isIndexedResponse": true
}
```

### Statistics Response

```json
{
  "sum": 100,
  "indexLastUpdated": "1754020094217"
}
```

### Index Information Response

```json
{
  "totalFiles": 100,
  "lastUpdated": "1754020094217",
  "channelStats": {
    "telegram": 20
  },
  "directoryStats": {
    "/": 30
  },
  "typeStats": {
    "None": 20
  },
  "oldestFile": {},
  "newestFile": {}
}
```

### Error Response

```json
{
  "error": "Internal server error",
  "message": "Detailed error message"
}
```

## Examples

### Get File List

```bash
curl --location --request GET 'https://your.domain/api/manage/list?start=0&count=50' \
--header 'Authorization: Bearer your_token'
```

### Search Files

```bash
curl --location --request GET 'https://your.domain/api/manage/list?search=image&count=20' \
--header 'Authorization: Bearer your_token'
```

### Get Specific Directory

```bash
curl --location --request GET 'https://your.domain/api/manage/list?dir=photos/2024' \
--header 'Authorization: Bearer your_token'
```

### Filter by Storage Channel

```bash
curl --location --request GET 'https://your.domain/api/manage/list?channel=telegram' \
--header 'Authorization: Bearer your_token'
```

### Get Total Count Statistics

```bash
curl --location --request GET 'https://your.domain/api/manage/list?count=-1&sum=true' \
--header 'Authorization: Bearer your_token'
```

### Rebuild Index

```bash
curl --location --request GET 'https://your.domain/api/manage/list?action=rebuild' \
--header 'Authorization: Bearer your_token'
```