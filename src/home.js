import './assets/js/script';

// parcel js does not allow me to add a file link in html file, or there will
// be a bug..., so workaround:

// I set ./zh here so when production build is uploaded to server, 
// the .html file name won't appear on the URL
const zhLink = document.getElementById('zh-link');
zhLink.setAttribute('href', './zh');