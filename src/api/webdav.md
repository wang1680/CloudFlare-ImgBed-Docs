# WebDAV 服务

本项目提供 WebDAV 服务支持，让您可以通过标准的 WebDAV 协议访问和管理托管的文件。

## WebDAV 端点

WebDAV 服务端点为图床 URL + `/dav/`，即：

```
https://your.imgbed.domain/dav/
```

## 支持的 WebDAV 方法

| 方法 | 功能 | 说明 |
|------|------|------|
| `PROPFIND` | 列出目录内容 | 获取文件和文件夹列表，支持 WebDAV 客户端 |
| `GET` | 下载文件/浏览目录 | 文件下载或 HTML 目录浏览页面 |
| `PUT` | 上传文件 | 上传文件到指定路径和文件夹 |
| `DELETE` | 删除文件/文件夹 | 支持删除单个文件或整个目录 |
| `OPTIONS` | 协议探测 | 返回支持的 WebDAV 方法和功能 |
| `MKCOL` | 创建目录 | 创建新的文件夹（自动支持） |

## 部署配置

前往图床管理端的`系统设置->其他设置->WebDAV`，启用 WebDAV 服务，并设置相关参数。

具体配置及说明，详见[配置文档](../deployment/configuration.md#webdav)。

## 使用方式

### 浏览器访问
直接在浏览器中访问 WebDAV 端点，输入认证信息后可以浏览文件目录：
```
https://your.imgbed.domain/dav/

```

### WebDAV 客户端
可以使用任何支持 WebDAV 的客户端连接：

**Windows 资源管理器**：
1. 打开"此电脑"
2. 右键选择"添加网络位置"
3. 输入 WebDAV 端点地址
4. 输入用户名和密码

**macOS Finder**：
1. 在 Finder 中按 `Cmd+K`
2. 输入 WebDAV 端点地址：
   - `https://your.imgbed.domain/dav/`
3. 输入认证信息

**第三方客户端**：
- Cyberduck、WinSCP、FileZilla Pro 等文件管理器
- Mobile 端：FE File Explorer、Documents by Readdle 等


通过 WebDAV 服务，您可以像使用本地文件夹一样管理文件，实现了真正的"云端硬盘"体验！