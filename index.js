// Task: Make HTTP request to the server at URL  https://memegen-link-examples-upleveled.netlify.app/ and get first 10 images
import fs from 'node:fs';

// Target URL
const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

// Create "memes" folder
fs.mkdirSync('./memes', { recursive: true });

// Implement the HTTP request to get HTML body as a string first and then its URLs
async function getMemes() {
  // HTTP request to meme page
  const responseHtml = await fetch(memeUrl);
  const htmlBody = await responseHtml.text(); // get whole HTML as string

  const pattern = /<img\s+src="(.+?)"\s+\/>/g; // RegEx pattern that matches the image elements
  const imageElement = htmlBody.matchAll(pattern); // returns iterable of the image elements
  const allMatches = Array.from(imageElement); // convert iterable to array
  // Loop over array and download each URLs content into .jpg file
  for (let i = 0; i < 10; i++) {
    // Just for testing
    // let firstTen = '';
    // firstTen += allMatches[i][1];
    // console.log(firstTen);

    const responseMeme = await fetch(allMatches[i][1]); // download image at URL
    const arrayBuffer = await responseMeme.arrayBuffer(); // convert to array buffer
    const buffer = Buffer.from(arrayBuffer); // convert to buffer
    const indexString = (i + 1).toString().padStart(2, '0'); // convert index to name for .jpg (e.g. 01.jpg)
    const path = `./memes/${indexString}.jpg`;
    await fs.promises.writeFile(path, buffer); // save each image into folder "memes"
  }
}
getMemes().catch(console.error); // error catching
