function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function isAndroid() {
  return navigator.userAgent.match(/Android/i) !== null;
}

// Get username from URL parameter or use default
function getUsername() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  return username || 'instagram'; // Default username if none provided
}

// Get platform from URL parameter (instagram, twitter, tiktok, etc.) or use default
function getPlatform() {
  const urlParams = new URLSearchParams(window.location.search);
  const platform = urlParams.get('platform');
  return platform || 'instagram'; // Default to Instagram
}

function getDestinationURL() {
  const username = getUsername();
  const platform = getPlatform();
  
  const platforms = {
    instagram: `instagram://user?username=${username}`,
    twitter: `twitter://user?screen_name=${username}`,
    tiktok: `tiktok://user?username=${username}`,
    youtube: `youtube://channel/${username}`
  };
  
  return platforms[platform] || platforms.instagram;
}

// Get web URL for fallback (desktop browsers)
function getWebURL() {
  const username = getUsername();
  const platform = getPlatform();
  
  const webPlatforms = {
    instagram: `https://instagram.com/${username}`,
    twitter: `https://twitter.com/${username}`,
    tiktok: `https://tiktok.com/@${username}`,
    youtube: `https://youtube.com/channel/${username}`
  };
  
  return webPlatforms[platform] || webPlatforms.instagram;
}

// Wait for page to load, then redirect after a short delay
window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const hasUsername = urlParams.get('username');
  const hasPlatform = urlParams.get('platform');
  
  // If there are parameters, show loader and redirect
  if (hasUsername || hasPlatform) {
    showLoader();
    
    setTimeout(function() {
      if (isAndroid()) {
        // Android device - use deep link
        const destination = getDestinationURL();
        document.location = destination;   
      } else if (iOS()) {
        // iOS device - use deep link with iOS redirect method
        const destination = getDestinationURL();
        window.location.replace(destination);
      } else {
        // Desktop or other devices - open web URL in browser
        const webDestination = getWebURL();
        window.open(webDestination, '_blank');
      }
    }, 1500); // 1.5 second delay to show the loading page
  }
  // If no parameters, keep the default examples page (do nothing)
});

function showLoader() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Redirecting...</h1>
    <p>Taking you to the social media app</p>
    <div class="spinner"></div>
  `;
}