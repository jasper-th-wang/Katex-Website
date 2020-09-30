import './assets/js/script';

// parcel js does not allow me to add a file link in html file, or there will
// be a bug..., so workaround:

const zhLink = document.getElementById('zh-link');
zhLink.setAttribute('href', './zh.html');