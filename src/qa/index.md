# 常见问题与解答

这里收集了用户在使用 CloudFlare ImgBed 过程中遇到的常见问题和解决方案。

## Q: 未设置`ALLOWED_DOMAINS`，但无法跨域访问？

- 请检查你的cloudflare防火墙设置（例如hotlink保护是否开启）
- 参见[Issue #8](https://github.com/MarSeventh/CloudFlare-ImgBed/issues/8)

## Q: 如何通过PicGo上传？

- PicGo插件设置中搜索`web-uploader`，安装可自定义前缀的版本，如图：

  ![PicGo插件设置](/images/qa/picgo-plugin.png)

- 打开`图床设置`->`自定义Web图床`->`Default`，然后按照下图方式配置，注意API地址和自定义图片URL前缀按照自己的域名进行修改。（**如果设置了`AUTH_CODE`，一定以`?authCode=your_authCode`的方式添加到API地址后面**）：

  ![图床设置](/images/qa/picgo-config.png)

- 设置完成，确定即可使用PicGo上传到自建的图床。

## Q: Telegram 渠道上传大分辨率等一些图片时失败怎么办？

- 检查上传时是否开启了`服务端压缩`选项（上传页面->上传设置->服务端压缩），如果开启了，尝试关闭后重新上传。

## Q: 上传失败怎么办？

- 是否正确配置上传渠道
- tg渠道是否给机器人管理员配置**足够的权限**
- 是否**正确绑定KV数据库或D1数据库（二选一）**
- 是否更新至**最新版**
- 前往issues寻找相似问题

## Q: `TG_CHAT_ID`前面有没有`-`

- 遵循 bot 返回的值，有`-`则保留

## Q: 进入后台页面加载不出记录或图片

- 网络问题，尝试刷新页面

## Q: 后台进行删除、拉黑等操作时不能立即生效

- 与CDN缓存有关
- 详见[[重要\]关于CDN缓存的说明（删除、拉黑等操作延迟生效解决方案） · Issue #123 · MarSeventh/CloudFlare-ImgBed (github.com)](https://github.com/MarSeventh/CloudFlare-ImgBed/issues/123)