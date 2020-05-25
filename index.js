const libre = require('libreoffice-convert');

const path = require('path');
const fs = require('fs');

const extend = '.pptx'
const enterPath = path.join(__dirname, '/images/Whitepaper - Introduction to DevOps.pdf');
const outputPath = path.join(__dirname, `/converted-files/cash${extend}`);

// Read file
const readingFile = fs.readFileSync(enterPath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(readingFile, extend, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }

    // Here in done you have pdf file which you can save or transfer in another stream
    fs.writeFileSync(outputPath, done);
});
