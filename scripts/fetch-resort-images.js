const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function run() {
  try {
    const html = await fetch('https://www.makemytrip.com/hotels/the_mountain_front-hotel-details-jim_corbett_ramnagar.html');
    const matches = [...html.matchAll(/https:\/\/[^"'\s<>]+mmtcdn[^"'\s<>]+\.(?:jpg|jpeg|png)/gi)].map(m => m[0]);
    const unique = [...new Set(matches)];
    console.log(JSON.stringify(unique, null, 2));
  } catch (e) {
    console.error(e);
  }
}

run();
