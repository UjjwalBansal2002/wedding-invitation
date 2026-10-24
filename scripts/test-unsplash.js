const https = require('https');

const ids = [
  'photo-1511285560929-80b456fea0bc', // Wedding celebration / dance
  'photo-1465495976277-4387d4b0b4c6', // Romantic couple in nature
  'photo-1519225421980-715cb0215aed', // Fairy lights wedding banquet
  'photo-1520854221256-17451cc331bf', // Outdoor celebration
  'photo-1532712938310-34cb3982ef74', // Sangeet party lights
  'photo-1492684223066-81342ee5ff30', // Concert/party lights celebration
  'photo-1516450360452-9312f5e86fc7', // DJ party night
  'photo-1506157786151-b8491531f063', // Music party night
  'photo-1583939003579-730e3918a45a', // Indian wedding
  'photo-1607190074257-dd4b7af0309f', // Indian wedding
  'photo-1527529482837-4698179dc6ce', // Wedding party celebration
  'photo-1522673607200-164d1b6ce486', // Indian couple
];

function check(id) {
  return new Promise((resolve) => {
    const url = `https://images.unsplash.com/${id}?w=500&q=80`;
    https.get(url, (res) => {
      resolve({ id, status: res.statusCode });
    }).on('error', () => resolve({ id, status: 'error' }));
  });
}

async function run() {
  for (const id of ids) {
    const res = await check(id);
    console.log(`${res.id} : ${res.status}`);
  }
}

run();
