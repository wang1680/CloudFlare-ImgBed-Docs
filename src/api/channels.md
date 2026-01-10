# 渠道列表 API

获取当前配置的所有可用上传渠道列表，用于在上传时指定具体渠道。

## 基本信息

- **端点**：`/api/channels`
- **方法**：`GET`
- **认证**：无需认证

## 响应格式

返回一个对象，包含各渠道类型及其对应的渠道列表。

## 响应示例

```json
{
  "telegram": [
    { "name": "主渠道", "type": "telegram" },
    { "name": "备用渠道", "type": "telegram" }
  ],
  "cfr2": [
    { "name": "R2存储", "type": "cfr2" }
  ],
  "s3": [
    { "name": "S3主存储", "type": "s3" }
  ],
  "discord": [
    { "name": "Discord渠道", "type": "discord" }
  ],
  "huggingface": [
    { "name": "HF仓库", "type": "huggingface" }
  ]
}
```

## 使用说明

1. 调用此 API 获取可用渠道列表
2. 在上传时通过 `uploadChannel` 参数指定渠道类型（如 `telegram`）
3. 通过 `channelName` 参数指定具体渠道名称（如 `主渠道`）
4. 如果不指定 `channelName`，系统将根据负载均衡设置自动选择渠道

## 请求示例

```bash
curl --location --request GET 'https://your.domain/api/channels'
```
