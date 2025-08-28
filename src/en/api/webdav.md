# WebDAV Service

This project provides WebDAV service support, allowing you to access and manage hosted files through the standard WebDAV protocol.

## WebDAV Endpoint

The WebDAV service endpoint is the image hosting URL + `/dav/`, which is:

```
https://your.imgbed.domain/dav/
```

## Supported WebDAV Methods

| Method | Function | Description |
|--------|----------|-------------|
| `PROPFIND` | List directory contents | Get file and folder lists, support WebDAV clients |
| `GET` | Download files/browse directories | File download or HTML directory browsing page |
| `PUT` | Upload files | Upload files to specified paths and folders |
| `DELETE` | Delete files/folders | Support deleting individual files or entire directories |
| `OPTIONS` | Protocol detection | Return supported WebDAV methods and features |
| `MKCOL` | Create directories | Create new folders (automatically supported) |

## Deployment Configuration

Go to the image hosting management panel's `System Settings -> Other Settings -> WebDAV`, enable the WebDAV service, and configure the relevant parameters.

For specific configuration and instructions, see the [Configuration Documentation](../deployment/configuration.md#webdav).

## Usage

### Browser Access
Access the WebDAV endpoint directly in your browser, enter authentication information to browse the file directory:
```
https://your.imgbed.domain/dav/

```

### WebDAV Clients
You can use any WebDAV-compatible client to connect:

**Windows File Explorer**:
1. Open "This PC"
2. Right-click and select "Add a network location"
3. Enter the WebDAV endpoint address
4. Enter username and password

**macOS Finder**:
1. Press `Cmd+K` in Finder
2. Enter the WebDAV endpoint address:
   - `https://your.imgbed.domain/dav/`
3. Enter authentication information

**Third-party Clients**:
- File managers like Cyberduck, WinSCP, FileZilla Pro
- Mobile apps: FE File Explorer, Documents by Readdle, etc.


Through the WebDAV service, you can manage files just like using a local folder, achieving a true "cloud drive" experience!