# Channels API

Get the list of all available upload channels configured, used to specify a specific channel when uploading.

## Basic Information

- **Endpoint**: `/api/channels`
- **Method**: `GET`
- **Authentication**: Not required

## Response Format

Returns an object containing each channel type and its corresponding channel list.

## Response Example

```json
{
  "telegram": [
    { "name": "Main Channel", "type": "telegram" },
    { "name": "Backup Channel", "type": "telegram" }
  ],
  "cfr2": [
    { "name": "R2 Storage", "type": "cfr2" }
  ],
  "s3": [
    { "name": "S3 Main Storage", "type": "s3" }
  ],
  "discord": [
    { "name": "Discord Channel", "type": "discord" }
  ],
  "huggingface": [
    { "name": "HF Repo", "type": "huggingface" }
  ]
}
```

## Usage

1. Call this API to get the list of available channels
2. When uploading, specify the channel type via `uploadChannel` parameter (e.g., `telegram`)
3. Specify the specific channel name via `channelName` parameter (e.g., `Main Channel`)
4. If `channelName` is not specified, the system will automatically select a channel based on load balancing settings

## Request Example

```bash
curl --location --request GET 'https://your.domain/api/channels'
```
