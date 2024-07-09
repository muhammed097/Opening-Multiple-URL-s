function openURLs(urls) {
  urls.forEach(url => {
    window.open(url, '_blank');
  });
}
// Your list of URLs
const urlsToOpen = [
  'https://growthhackers.digital/',
  'https://google.com/',
  'https://techcrunch.com/',
  'https://www.theverge.com/tech',
  'https://www.wired.com/',
  'https://arstechnica.com/'
];
// Call the function to open the URLs
openURLs(urlsToOpen); 