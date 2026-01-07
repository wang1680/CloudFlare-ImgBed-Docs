# Features

CloudFlare ImgBed provides rich features to meet the needs of different users.

## 🚀 Core Features

### File Upload

- **Multi-format Support**: Supports most common image, video, and animated formats
- **Multiple Upload Methods**:
  - Drag and drop upload
  - Click to select upload
  - Paste upload (supports files and URLs)
  - Batch upload (unlimited total number of files)
- **Real-time Progress Display**: Shows real-time progress during upload
- **Automatic Compression**: Automatically compresses oversized images to improve upload stability
- **WebP Conversion**: Supports converting images to WebP format before upload to reduce file size

### Storage Channels

| Channel Type | File Size Limit | Cost | Features |
|--------------|----------------|------|----------|
| Telegram Bot | Single file 20M | Free | Stable and reliable, supports compression |
| Cloudflare R2 | Unlimited | Free within 10GB | High performance, enterprise-grade |
| S3 API | Varies by provider | Varies by provider | Strong compatibility, diverse options |
| Discord | Single file 10MB (Nitro 25MB) | Free | Simple and easy to use |
| HuggingFace | Unlimited | Free | Supports large file direct upload |

### File Management

- **Directory Function**: Supports creating directories for file categorization management
- **Batch Operations**: Batch delete, move, add to blacklist/whitelist
- **File Search**: Quickly find specific files
- **Detailed Information**: View file size, upload time, source IP, etc.

### Diverse Copy Options

- **Original Link**: Direct file access link
- **Markdown**: `![](image link)` format
- **HTML**: `<img src="image link">` format
- **BBCode**: `[img]image link[/img]` format

### Smart Features

- **Settings Memory**: Automatically saves user upload preferences
- **One-click Copy**: Click link to automatically copy to clipboard
- **Error Retry**: Failed files support re-upload

## 🎨 Interface Features

### Modern Design

- **Responsive Layout**: Perfect adaptation to desktop and mobile devices
- **Dark Mode**: Supports light/dark theme switching
- **Smooth Animations**: Silky transition effects and interaction animations
- **Breathing Light Effect**: Visual feedback during upload process

### Custom Configuration

- **Background Settings**:
  - Single image background
  - Multi-image carousel
  - Bing random images
  - Custom transparency and switching time
- **Brand Customization**:
  - Custom logo and website name
  - Custom website title and icon
  - Custom footer links
- **Link Format**: Support custom link prefix

## 🔐 Security Features

### Authentication

- **Admin Authentication**: Backend management page password protection
- **Upload Authentication**: Web and API upload authentication codes
- **Access Control**: Domain whitelist restrictions

### Content Security

- **Image Review**: Integrates third-party APIs for content review
- **IP Management**:
  - Upload IP recording and statistics
  - IP blacklist function
  - Geographic location display
- **Whitelist Mode**: Only allows whitelisted images to be accessed

## 🔧 Management Features

### File Management

- **Gallery Browse**: Visual file browsing interface
- **Paginated Loading**: Efficient loading for large numbers of files
- **Batch Operations**: Supports operations in user-selected order
- **File Movement**: Supports moving files between directories
- **Tag Management**: Add and manage tags for files

### User Management

- **Upload Statistics**: User upload file count statistics
- **IP Tracking**: Records uploader IP and geographic location
- **Permission Control**: User upload permission management

### System Settings

- **Channel Management**: Multi-storage channel configuration and switching
- **Load Balancing**: Multi-channel load balancing settings
- **Cache Management**: Automatic CDN cache cleanup
- **Announcement System**: Site announcement publishing functionality
- **Client Default Settings**: Supports configuring default upload channel, naming method, compression settings, etc.

## 🌐 API Support

### RESTful API

- **Upload Interface**: Supports file upload and configuration
- **Random Image Interface**: Randomly returns images from the image hosting

### WebDAV Support
- **Standard Protocol**: Supports WebDAV standard methods (PROPFIND, GET, PUT, DELETE, etc.)
- **Directory Browsing**: Supports browsing and managing files via WebDAV clients
- **File Operations**: Supports uploading, downloading, and deleting files and directories

### Third-party Integration

- **PicGo Support**: Perfect compatibility with PicGo image hosting tool
- **Cross-origin Support**: API supports cross-origin access

## 📊 Performance Optimization

### Loading Optimization

- **CDN Acceleration**: Global Cloudflare CDN network
- **Cache Strategy**: Fine-grained cache strategy

### Stability

- **Failover**: Automatic fault detection and switching
- **Monitoring and Alerting**: Real-time service status monitoring