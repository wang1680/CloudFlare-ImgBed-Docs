# 列表 API

列表 API 支持获取 CloudFlare ImgBed 中的文件列表。

## 基本信息

- **端点**：`/api/manage/list`
- **方法**：`GET`
- **认证**：需要`list`权限
- **内容类型**：`application/json`

## 请求参数

### Query 参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `start` | number | 否 | `0` | 起始位置，用于分页 |
| `count` | number | 否 | `50` | 返回数量，`-1`表示不限制数量 |
| `sum` | boolean | 否 | `false` | 是否只返回总数统计（count为 -1 生效） |
| `recursive` | boolean | 否 | `false` | 是否递归获取子目录下的文件 |
| `dir` | string | 否 | `""` | 指定目录路径 |
| `search` | string | 否 | `""` | 搜索关键词，支持文件名搜索 |
| `includeTags` | string | 否 | `""` | 包含标签筛选，多个标签用逗号分隔，文件必须包含所有指定标签 |
| `excludeTags` | string | 否 | `""` | 排除标签筛选，多个标签用逗号分隔，文件不能包含任何指定标签 |
| `channel` | string | 否 | `""` | 筛选存储渠道，多个值用逗号分隔：`TelegramNew`、`CloudflareR2`、`S3`、`Discord`、`HuggingFace`、`External` |
| `channelName` | string | 否 | `""` | 筛选渠道名称，多个值用逗号分隔 |
| `listType` | string | 否 | `""` | 黑白名单筛选，多个值用逗号分隔：`White`（白名单）、`Block`（黑名单）、`None`（未设置） |
| `accessStatus` | string | 否 | `""` | 访问状态筛选，多个值用逗号分隔：`normal`（正常）、`blocked`（已屏蔽） |
| `label` | string | 否 | `""` | 审查结果筛选，多个值用逗号分隔：`normal`（正常）、`teen`（12+内容）、`adult`（成人内容） |
| `fileType` | string | 否 | `""` | 文件类型筛选，多个值用逗号分隔：`image`（图片）、`video`（视频）、`audio`（音频）、`other`（其他） |
| `action` | string | 否 | `""` | 特殊操作：`rebuild`、`info`、`merge-operations`、`delete-operations`、`index-storage-stats` |

## 功能说明

### 普通文件列表查询
获取指定目录下的文件和子目录列表，支持分页、搜索和筛选。

### 统计查询
当 `count=-1` 且 `sum=true` 时，只返回文件总数统计（指定目录和子目录下的文件）。

### 递归查询
当 `recursive=true` 时，递归获取子目录下的所有文件。

### 标签筛选
支持通过标签对文件进行精确筛选：
- **包含标签 (`includeTags`)**：文件必须包含所有指定的标签才会被返回
- **排除标签 (`excludeTags`)**：文件不能包含任何指定的标签
- 标签匹配不区分大小写，支持中文、日文、韩文等多语言标签
- 可以同时使用包含和排除标签进行复合筛选

### 多维度筛选

#### 渠道筛选 (`channel`)
按存储渠道筛选文件，支持多选（OR 逻辑）：
- `TelegramNew` - Telegram
- `CloudflareR2` - Cloudflare R2
- `S3` - S3
- `Discord` - Discord
- `HuggingFace` - HuggingFace
- `External` - 外链

示例：`channel=TelegramNew,CloudflareR2` 返回存储在 Telegram 或 Cloudflare R2 的文件

#### 渠道名称筛选 (`channelName`)
按具体渠道名称筛选，支持多选（OR 逻辑）。渠道名称是用户自定义的存储渠道标识。

#### 黑白名单筛选 (`listType`)
按文件的黑白名单状态筛选，支持多选（OR 逻辑）：
- `White` - 白名单文件
- `Block` - 黑名单文件
- `None` - 未设置（包括空值、undefined、null 或字符串 'None'）

示例：`listType=White,None` 返回白名单或未设置的文件

#### 访问状态筛选 (`accessStatus`)
按文件的访问状态筛选，支持多选（OR 逻辑）：
- `normal` - 正常（可访问）
- `blocked` - 已屏蔽（不可访问）

**判断逻辑**：
- **已屏蔽**：`ListType === 'Block' || (Label === 'adult' && ListType !== 'White')`
- **正常**：其他所有情况

**注意**：白名单优先，即使审查结果是成人内容（`Label === 'adult'`），只要在白名单中（`ListType === 'White'`）就是正常状态。

示例：`accessStatus=normal` 返回所有可正常访问的文件

#### 审查结果筛选 (`label`)
按内容审查结果筛选，支持多选（OR 逻辑）：
- `normal` - 正常内容（匹配 Label 为 'everyone', 'None', '', null, undefined）
- `teen` - 12+内容（匹配 Label 为 'teen'）
- `adult` - 成人内容（匹配 Label 为 'adult'）

示例：`label=normal,teen` 返回正常内容或 12+内容的文件

#### 文件类型筛选 (`fileType`)
按文件 MIME 类型筛选，支持多选（OR 逻辑）：
- `image` - 图片（FileType 以 'image/' 开头）
- `video` - 视频（FileType 以 'video/' 开头）
- `audio` - 音频（FileType 以 'audio/' 开头）
- `other` - 其他（不属于以上三类）

示例：`fileType=image,video` 返回所有图片和视频文件

### 筛选组合使用
所有筛选参数可以组合使用，实现复杂的查询需求。例如：
```
/api/manage/list?listType=White&fileType=image&channel=TelegramNew&accessStatus=normal
```
返回：白名单 + 图片 + Telegram 渠道 + 正常访问状态的文件

### 特殊操作

#### 重建索引 (`action=rebuild`)
异步重建文件索引，提高查询性能。

#### 索引信息 (`action=info`)
获取索引的基本信息和状态。

## 响应格式

### 普通列表响应

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
  "totalCount": 100, // 指定目录和子目录下的文件总数
  "returnedCount": 50, // 实际返回的文件数量
  "indexLastUpdated": "1754020094217",
  "isIndexedResponse": true
}
```

### 统计响应

```json
{
  "sum": 100,
  "indexLastUpdated": "1754020094217"
}
```


### 索引信息响应

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

### 错误响应

```json
{
  "error": "Internal server error",
  "message": "详细错误信息"
}
```

## 示例

### 获取文件列表

```bash
curl --location --request GET 'https://your.domain/api/manage/list?start=0&count=50' \
--header 'Authorization: Bearer your_token'
```

### 搜索文件

```bash
curl --location --request GET 'https://your.domain/api/manage/list?search=image&count=20' \
--header 'Authorization: Bearer your_token'
```

### 获取指定目录

```bash
curl --location --request GET 'https://your.domain/api/manage/list?dir=photos/2024' \
--header 'Authorization: Bearer your_token'
```

### 按存储渠道筛选

```bash
curl --location --request GET 'https://your.domain/api/manage/list?channel=TelegramNew' \
--header 'Authorization: Bearer your_token'
```

### 按黑白名单筛选

```bash
# 获取白名单文件
curl --location --request GET 'https://your.domain/api/manage/list?listType=White' \
--header 'Authorization: Bearer your_token'
```

### 按访问状态筛选

```bash
# 获取所有正常访问的文件
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=normal' \
--header 'Authorization: Bearer your_token'

# 获取所有已屏蔽的文件
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=blocked' \
--header 'Authorization: Bearer your_token'
```

### 按文件类型筛选

```bash
# 获取所有图片文件
curl --location --request GET 'https://your.domain/api/manage/list?fileType=image' \
--header 'Authorization: Bearer your_token'

# 获取图片和视频文件
curl --location --request GET 'https://your.domain/api/manage/list?fileType=image,video' \
--header 'Authorization: Bearer your_token'
```

### 按审查结果筛选

```bash
# 获取正常内容的文件
curl --location --request GET 'https://your.domain/api/manage/list?label=normal' \
--header 'Authorization: Bearer your_token'
```

### 组合筛选

```bash
# 白名单 + 图片 + Telegram 渠道
curl --location --request GET 'https://your.domain/api/manage/list?listType=White&fileType=image&channel=TelegramNew' \
--header 'Authorization: Bearer your_token'

# 正常访问状态 + 图片类型
curl --location --request GET 'https://your.domain/api/manage/list?accessStatus=normal&fileType=image' \
--header 'Authorization: Bearer your_token'
```

### 获取总数统计

```bash
curl --location --request GET 'https://your.domain/api/manage/list?count=-1&sum=true' \
--header 'Authorization: Bearer your_token'
```

### 重建索引

```bash
curl --location --request GET 'https://your.domain/api/manage/list?action=rebuild' \
--header 'Authorization: Bearer your_token'
```

### 按标签筛选

```bash
# 包含特定标签的文件
curl --location --request GET 'https://your.domain/api/manage/list?includeTags=风景,旅行' \
--header 'Authorization: Bearer your_token'
```

```bash
# 排除特定标签的文件
curl --location --request GET 'https://your.domain/api/manage/list?excludeTags=私密,草稿' \
--header 'Authorization: Bearer your_token'
```

```bash
# 组合使用：包含"风景"标签但排除"草稿"标签
curl --location --request GET 'https://your.domain/api/manage/list?includeTags=风景&excludeTags=草稿' \
--header 'Authorization: Bearer your_token'
```
