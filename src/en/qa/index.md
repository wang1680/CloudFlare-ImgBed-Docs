# Frequently Asked Questions

This section collects common questions and solutions encountered by users when using CloudFlare ImgBed.

## Q: `ALLOWED_DOMAINS` is not set, but cross-domain access doesn't work?

- Please check your Cloudflare firewall settings (e.g., whether hotlink protection is enabled)
- See [Issue #8](https://github.com/MarSeventh/CloudFlare-ImgBed/issues/8)

## Q: How to upload via PicGo?

- Search for `web-uploader` in PicGo plugin settings and install the version that allows custom prefixes, as shown:

  ![PicGo Plugin Settings](/images/qa/picgo-plugin.png)

- Open `Image Hosting Settings` -> `Custom Web Image Hosting` -> `Default`, then configure as shown in the figure below. Note that the API address and custom image URL prefix should be modified according to your own domain. (**If `AUTH_CODE` is set, make sure to add it to the API address in the format `?authCode=your_authCode`**):

  ![Image Hosting Settings](/images/qa/picgo-config.png)

- After setup is complete, confirm and you can use PicGo to upload to your self-hosted image hosting.

## Q: What to do if uploading high-resolution or certain images via Telegram channel fails?

- Check if the `Server-side Compression` option is enabled during upload (Upload Page -> Upload Settings -> Server-side Compression). If it is enabled, try disabling it and re-uploading.

## Q: What to do if upload fails?

- Check if the upload channel is configured correctly
- Check if the Telegram channel has granted the bot **sufficient permissions**
- Check if **KV database or D1 database is correctly bound (one of the two)**
- Check if updated to the **latest version**
- Go to issues to find similar problems

## Q: Does `TG_CHAT_ID` have a `-` in front?

- Follow the value returned by the bot, retain the `-` if present

## Q: Backend page cannot load records or images

- Network issue, try refreshing the page

## Q: Backend operations like delete, blacklist cannot take effect immediately

- Related to CDN cache
- See [[Important] About CDN Cache Instructions (Solution for Delayed Effect of Delete, Blacklist Operations) · Issue #123 · MarSeventh/CloudFlare-ImgBed (github.com)](https://github.com/MarSeventh/CloudFlare-ImgBed/issues/123)

## Q: Upload fails after setting S3 to the built-in S3 mapping of OpenList

- Check whether the **System Settings -> Upload Settings -> S3 -> Path Style** option is enabled; if not, please enable it
- For an explanation of **Path Style**, see [AWS S3 Compatibility - UPYUN Documentation Help Center](https://help.upyun.com/knowledge-base/aws-s3兼容/)

## Q: How to add a new R2 channel?

- Add a S3 channel instead