# Social Media Redirector

A simple web app that redirects users to social media apps based on their device platform (iOS/Android). Perfect for GitHub Pages deployment.

## Features

- **Cross-platform**: Detects iOS and Android devices
- **Multiple platforms**: Supports Instagram, Twitter, TikTok, and YouTube
- **URL parameters**: Configurable via URL parameters
- **GitHub Pages ready**: Optimized for static hosting

## Usage

### Basic Usage
```
https://yourusername.github.io/redirector_social_media/
```
This will redirect to Instagram with the default username "instagram".

### With Username Parameter
```
https://yourusername.github.io/redirector_social_media/?username=your_username
```

### With Platform and Username
```
https://yourusername.github.io/redirector_social_media/?platform=twitter&username=your_handle
```

## Supported Platforms

- `instagram` - Opens Instagram profile
- `twitter` - Opens Twitter profile  
- `tiktok` - Opens TikTok profile
- `youtube` - Opens YouTube channel

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Save and your redirector will be available at `https://yourusername.github.io/repository-name/`

## Example URLs

- Instagram: `https://yourusername.github.io/redirector_social_media/?platform=instagram&username=nasa`
- Twitter: `https://yourusername.github.io/redirector_social_media/?platform=twitter&username=elonmusk`
- TikTok: `https://yourusername.github.io/redirector_social_media/?platform=tiktok&username=username`

## How it Works

1. User visits the URL
2. JavaScript detects the device platform
3. Constructs the appropriate deep link URL
4. Redirects to the social media app after a brief loading screen