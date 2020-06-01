var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');
var pdfUtil = require('pdf-to-text');
var fs = require('fs');
var ejs = require('ejs');
var toPdf = require("office-to-pdf");
var Jimp = require('jimp');
var app = express();
var tabula = require('tabula-js');
var libre = require('libreoffice-convert');
const officegen = require('officegen');

app.set('view engine','ejs');

app.set("views",path.resolve(__dirname,'views'));

app.use(bodyParser.json());
// Set Static path

app.use(express.static(path.join(__dirname,'public')));

var urlencoderParser = bodyParser.urlencoded({extended: false})

var Storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "./uploads");
    },
    filename: function(req, file, callback){
        callback(null,file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).array("imgUploader", 3); //Field name and max count


var CFileName = fs.readdirSync('./converted-files');

app.get("/", function(req, res){
     var fileName = fs.readdirSync('./uploads');
     res.render('index',{'fileName':fileName});
});

 app.post("/uploadfile", function(req, res) {
     upload(req, res, function(err) {
         if (err) {
             return res.end("Something went wrong!");
         }
        res.redirect("/")
     });
 });

 app.get('/download/:id',(req,res)=>{

   const file = `${__dirname}/uploads/${req.params.id}`;
   const basename = path.basename(file);
   const cFileName = path.basename(file,path.extname(file));
   const fileExt = req.query.fileExt;

    if('.doc'==fileExt){
      console.log("Exist");
      // Convert PDF-TO-DOCX
      var wordBuffer = fs.readFileSync(file);

      toPdf(wordBuffer).then(
        (docBuffer) => {
          fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`, docBuffer);
          res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
          fs.unlinkSync(file);
        }, (err) => {
            console.log(err);
            res.status(500).send(err);
        }
      )
    }

    // End convert pdf to DOCX
    if('.docx'==fileExt){
      console.log("Exist");
      // Convert PDF-TO-DOC
      var wordBuffer = fs.readFileSync(file);

      toPdf(wordBuffer).then(
        (docBuffer) => {
          fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`, docBuffer);
          res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
          fs.unlinkSync(file);
        }, (err) => {
            console.log(err);
            res.status(500).send(err);
        }
      )
    }

       // End Convert PDF-TO-DOC
    else if('.pdf'==fileExt){
        console.log("Exist");
       // Convert DOC-to-PDF

        var wordBuffer = fs.readFileSync(file);

        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`, pdfBuffer);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
          }, (err) => {
            console.log(err);
            res.status(500).send(err);
          }
        )

      }
        // End Convert any-to-PDF

        //Convert pdf-to-TXT
        else if('.txt'==fileExt){
          console.log("Exist");

        //option to extract text from page 0 to 10
        var option = {from: 0, to: 10};

        // //Omit option to extract all text from the pdf file
        pdfUtil.pdfToText(file, option, function(err, data) {
          if (err) throw(err);
          fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,data);
          res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
          fs.unlinkSync(file);
        });
      }
      // End Convert pdf-to-TXT

      // Convert PDF-TO-CSV
      else if('.csv'==fileExt){
        var t = tabula(`${basename}${fileExt}`);
        console.log("i am boss :",t);
        t.extractCsv((err, data) =>{
          fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,data);
          console.log(data);
          res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
          fs.unlinkSync(file);
        });
      }
      // End Convert PDF-TO-CSV

      // Convert PNG-to-JPG
      else if('.jpg'==fileExt){
        console.log("Exist");
      Jimp.read(file, (err, lenna) => {
        if (err) throw err;
        lenna
          // .resize(600, 500) // resize
          .quality(90) // set JPEG quality
          // .greyscale() // set greyscale
          .write(`${__dirname}/converted-files/${cFileName}${fileExt}`); // save
          res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
          fs.unlinkSync(file);
        });
      }
      // Convert in ODT format
      else if('.odt'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in xlsm
      else if('.xlsm'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in xlsx
      else if('.xlsx'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in xls
      else if('.xls'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in ods
      else if('.ods'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in rtf
      else if('.rtf'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in wpd
      else if('.wpd'==fileExt){
        // Read file
        const readingFile = fs.readFileSync(file);
        // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
        libre.convert(readingFile, fileExt, undefined, (err, done) => {
            if (err) {
              console.log(`Error converting file: ${err}`);
            }
            // Here in done you have pdf file which you can save or transfer in another stream
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}${fileExt}`,done);
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
        });
      }
      // convert in ppt
      else if('.pptx'==fileExt){
        let pptx = officegen('pptx');
        // Read file
        const readingFile = fs.readFileSync(file);
            pptx.generate(fs.createWriteStream(`${__dirname}/converted-files/${cFileName}${fileExt}`,readingFile));
            res.download(`${__dirname}/converted-files/${cFileName}${fileExt}`);
            fs.unlinkSync(file);
      }
   else{
       console.log("Doesn't Exist");
   }

});
const port = process.env.PORT || 2000;
app.listen(port, function(a) {
     console.log("Listening to port 2000");
});
