# Multi-URL Opener

This simple JavaScript utility allows you to open multiple predefined URLs in new browser tabs with a single function call.

## Description

The Multi-URL Opener is a lightweight JavaScript function that takes an array of URLs and opens each one in a new browser tab. This can be useful for quickly accessing a set of frequently visited websites or for testing purposes.

## Features

- Open multiple URLs simultaneously
- Customizable list of URLs
- Lightweight and easy to integrate

## Usage

1. Include the JavaScript code in your project:

```javascript
function openURLs(urls) {
  urls.forEach(url => {
    window.open(url, '_blank');
  });
}

const urlsToOpen = [
  'https://growthhackers.digital/',
  'https://google.com/',
  'https://techcrunch.com/',
  'https://www.theverge.com/tech',
  'https://www.wired.com/',
  'https://arstechnica.com/'
];

openURLs(urlsToOpen);

## Notes

Some browsers may block pop-ups by default. Users might need to allow pop-ups for the page where this script is running.
Opening many tabs simultaneously may be resource-intensive and could be limited by the browser.

## Support

If you need any support, please contact me at muhammedibrim97@gmail.com. If you want to use this code, you can use it freely.
