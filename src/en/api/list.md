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
| `includeTags` | string | No | `""` | Include tags filter, multiple tags separated by comma, files must contain all specified tags |
| `excludeTags` | string | No | `""` | Exclude tags filter, multiple tags separated by comma, files cannot contain any specified tags |
| `channel` | string | No | `""` | Filter by storage channel, multiple values separated by comma: `TelegramNew`, `CloudflareR2`, `S3`, `Discord`, `HuggingFace`, `External` |
| `channelName` | string | No | `""` | Filter by channel name, multiple values separated by comma |
| `listType` | string | No | `""` | Blacklist/whitelist filter, multiple values separated by comma: `White` (whitelist), `Block` (blacklist), `None` (not set) |
| `accessStatus` | string | No | `""` | Access status filter, multiple values separated by comma: `normal` (accessible), `blocked` (blocked) |
| `label` | string | No | `""` | Content review filter, multiple values separated by comma: `normal` (normal), `teen` (12+ content), `adult` (adult content) |
| `fileType` | string | No | `""` | File type filter, multiple values separated by comma: `image` (images), `video` (videos), `audio` (audio), `other` (other) |
| `action` | string | No | `""` | Special operations: `rebuild`, `info`, `merge-operations`, `delete-operations`, `index-storage-stats` |

## Feature Description

### Regular File List Query
Retrieve lists of files and subdirectories in the specified directory, with support for pagination, search, and filtering.

### Statistics Query
When `count=-1` and `sum=true`, only returns total file count statistics (for the specified directory and subdirectories).

### Recursive Query
When `recursive=true`, recursively retrieves all files in subdirectories.

### Tag Filtering
Supports precise file filtering by tags:
- **Include Tags (`includeTags`)**: Files must contain all specified tags to be returned
- **Exclude Tags (`excludeTags`)**: Files cannot contain any of the specified tags
- Tag matching is case-insensitive and supports multilingual tags (Chinese, Japanese, Korean, etc.)
- Include and exclude tags can be used together for complex filtering

### Other Dimensions Filtering

#### Channel Filtering (`channel`)
Filter files by storage channel, supports multiple selection (OR logic):
- `TelegramNew` - Telegram
- `CloudflareR2` - Cloudflare R2
- `S3` - S3
- `Discord` - Discord
- `HuggingFace` - HuggingFace
- `External` - External links

Example: `channel=TelegramNew,CloudflareR2` returns files stored in Telegram or Cloudflare R2

#### Channel Name Filtering (`channelName`)
Filter by specific channel name, supports multiple selection (OR logic). Channel name is a user-defined storage channel identifier.

**Supported formats**:
- `name` - Match channel name only
- `type:name` - Match both channel type and name (recommended, for distinguishing same-named channels of different types)

**Type identifiers**:
- `telegram` - Telegram
- `cfr2` - Cloudflare R2
- `s3` - S3
- `discord` - Discord
- `huggingface` - HuggingFace

Examples:
- `channelName=default` - Match all channels named "default"
- `channelName=telegram:default` - Match only "default" channel in Telegram type
- `channelName=telegram:default,s3:backup` - Match Telegram's "default" or S3's "backup"

#### Blacklist/Whitelist Filtering (`listType`)
Filter by file's blacklist/whitelist status, supports multiple selection (OR logic):
- `White` - Whitelist files
- `Block` - Blacklist files
- `None` - Not set (includes empty, undefined, null, or string 'None')

Example: `listType=White,None` returns whitelist or unset files

#### Access Status Filtering (`accessStatus`)
Filter by file's access status, supports multiple selection (OR logic):
- `normal` - Normal (accessible)
- `blocked` - Blocked (not accessible)

**Logic**:
- **Blocked**: `ListType === 'Block' || (Label === 'adult' && ListType !== 'White')`
- **Normal**: All other cases

**Note**: Whitelist takes priority. Even if the content review result is adult content (`Label === 'adult'`), as long as it's in the whitelist (`ListType === 'White'`), it's considered normal status.

Example: `accessStatus=normal` returns all normally accessible files

#### Content Review Filtering (`label`)
Filter by content review result, supports multiple selection (OR logic):
- `normal` - Normal content (matches Label as 'everyone', 'None', '', null, undefined)
- `teen` - 12+ content (matches Label as 'teen')
- `adult` - Adult content (matches Label as 'adult')

Example: `label=normal,teen` returns normal or 12+ content files

#### File Type Filtering (`fileType`)
Filter by file MIME type, supports multiple selection (OR logic):
- `image` - Images (FileType starts with 'image/')
- `video` - Videos (FileType starts with 'video/')
- `audio` - Audio (FileType starts with 'audio/')
- `other` - Other (not in the above three categories)

Example: `fileType=image,video` returns all image and video files

### Combined Filtering
All filter parameters can be combined to achieve complex query requirements. For example:
```
/api/manage/list?listType=White&fileType=image&channel=TelegramNew&accessStatus=normal
```
Returns: whitelist + images + Telegram channel + normal access status files

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
curl --location --request GET 'https://your.domain/api/manage/list?channel=TelegramNew' \
--header 'Authorization: Bearer your_token'
```

### Filter by Blacklist/Whitelist

```bash
# Get whitelist files
curl --location --request GET 'https://your.domain/api/manage/list?listType=White' \
--header 'Authorization: Bearer your_token'
```

### Filter by Access Status

```bash
# Get all normally accessible files
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=normal' \
--header 'Authorization: Bearer your_token'

# Get all blocked files
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=blocked' \
--header 'Authorization: Bearer your_token'
```

### Filter by File Type

```bash
# Get all image files
curl --location --request GET 'https://your.domain/api/manage/list?fileType=image' \
--header 'Authorization: Bearer your_token'

# Get image and video files
curl --location --request GET 'https://your.domain/api/manage/list?fileType=image,video' \
--header 'Authorization: Bearer your_token'
```

### Filter by Content Review

```bash
# Get normal content files
curl --location --request GET 'https://your.domain/api/manage/list?label=normal' \
--header 'Authorization: Bearer your_token'
```

### Filter by Channel Name

```bash
# Get files from specific channel name
curl --location --request GET 'https://your.domain/api/manage/list?channelName=default' \
--header 'Authorization: Bearer your_token'

# Get files from specific type and name (recommended)
curl --location --request GET 'https://your.domain/api/manage/list?channelName=telegram:default' \
--header 'Authorization: Bearer your_token'

# Get files from multiple channels
curl --location --request GET 'https://your.domain/api/manage/list?channelName=telegram:default,s3:backup' \
--header 'Authorization: Bearer your_token'
```

### Combined Filtering

```bash
# Whitelist + images + Telegram channel
curl --location --request GET 'https://your.domain/api/manage/list?listType=White&fileType=image&channel=TelegramNew' \
--header 'Authorization: Bearer your_token'

# Normal access status + image type
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=normal&fileType=image' \
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

### Filter by Tags

```bash
# Files containing specific tags
curl --location --request GET 'https://your.domain/api/manage/list?includeTags=landscape,travel' \
--header 'Authorization: Bearer your_token'
```

```bash
# Files excluding specific tags
curl --location --request GET 'https://your.domain/api/manage/list?excludeTags=private,draft' \
--header 'Authorization: Bearer your_token'
```

```bash
# Combined usage: include "landscape" tag but exclude "draft" tag
curl --location --request GET 'https://your.domain/api/manage/list?includeTags=landscape&excludeTags=draft' \
--header 'Authorization: Bearer your_token'
```