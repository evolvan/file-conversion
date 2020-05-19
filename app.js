var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');
var folderPath = './images';
var convertfolderPath = './converted-files';
var fs = require('fs');
let ejs = require('ejs');
var toPdf = require("office-to-pdf");
var pdfUtil = require('pdf-to-text');

var fileName = fs.readdirSync(folderPath);
var CFileName = fs.readdirSync(convertfolderPath);
var app = express();

app.set('view engine','ejs');

app.set("views",path.resolve(__dirname,'views'));

app.use(bodyParser.json());
// Set Static path

app.use(express.static(path.join(__dirname,'public')));

var urlencoderParser = bodyParser.urlencoded({extended: false})

 var Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, "./images");
     },
     filename: function(req, file, callback) {
         callback(null,file.originalname);
     }
 });

 var upload = multer({
     storage: Storage
 }).array("imgUploader", 3); //Field name and max count

app.get("/", function(req, res) {
     console.log(fileName);
     console.log(CFileName);
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
   const file = `${__dirname}/images/${req.params.id}`;
   const cFileName = path.basename(file,path.extname(file));
   const fileExt = req.query.fileExt;
   console.log("File",file);
   console.log("converted file",cFileName);
   console.log("converted file new:",CFileName);
   console.log("File Extension",fileExt);
  //  let arr = [".pdf",".docx",".json",".txt"];

// First Loop Start
  //  for(let i=0;i<arr.length;i++){
  //  console.log(`Array at index of ${i} : ${arr[i]}`);

   if('.docx'==fileExt){
       console.log("Exist");
       // Convert PDF-TO-DOC

       var wordBuffer = fs.readFileSync(file);

       toPdf(wordBuffer).then(
         (docBuffer) => {
           fs.writeFileSync(`${__dirname}/converted-files/${cFileName}.docx`, docBuffer)
         }, (err) => {
           console.log(err);
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
            fs.writeFileSync(`${__dirname}/converted-files/${cFileName}.pdf`, pdfBuffer)
          }, (err) => {
            console.log(err);
          }
        )
      }
        // End Convert any-to-PDF
        else if('.txt'==fileExt){
          console.log("Exist");
        //Convert pdf-to-TXT
        
        //option to extract text from page 0 to 10
        var option = {from: 0, to: 10};
        
        //Omit option to extract all text from the pdf file
        pdfUtil.pdfToText(file, function(err, data) {
          if (err) throw(err);
          fs.writeFileSync(`${__dirname}/converted-files/${cFileName}.txt`,data);
          // console.log(data); //print all text    
        });
      }
      // End Convert pdf-to-TXT
   else{
       console.log("Doesn't Exist");
   }

for(let i=0;i<CFileName.length;i++){
  var ConFileName = path.basename(CFileName[i], path.extname(CFileName[i]));
  console.log(`CFIle index of ${i} : ${ConFileName}`);
  if(cFileName ===ConFileName){
    console.log("Sagar new :",ConFileName,cFileName);
    res.download(`${__dirname}/converted-files/${ConFileName}${fileExt}`);
    break
  }
}
});

 app.listen(2000, function(a) {
     console.log("Listening to port 2000");
 });
