// const fs = require('fs');
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const port = 3000;
// const app = express();

// // View Engine
// app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname, 'views'));

// // Body Parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',function(req,res){
//     res.render('index');
// });

// function docFormat(){
//     fs.copyFile('source.txt', 'destination.doc', (err) => {
//     if (err) throw err;
//         console.log('source.txt was copied to destination.txt');
//     });
// }
// docFormat();
// var docxConverter = require('docx-pdf');

// docxConverter('./input.docx','./output.pdf',function(err,result){
// if(err){
//    console.log(err);
//   }
//  console.log('result'+result);
// });

// docxConverter(inputPath,outPath,function(err,result){
// if(err){
// console.log(err);
// }
// console.log('result'+result);
// });

// Convert PDF-TO-DOC
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.pdf");

// toPdf(wordBuffer).then(
//   (docBuffer) => {
//     fs.writeFileSync("./test1.doc", docBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// Convert PDF-TO-DOCX
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.pdf");

// toPdf(wordBuffer).then(
//   (docBuffer) => {
//     fs.writeFileSync("./test1.docx", docBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert DOC-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test.doc");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./test.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert DOCX-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./test1.docx");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./test1.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert TXT-to-PDF
<<<<<<< HEAD
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./package.json");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./sag.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./package.json");
//
// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./sag.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// Convert odp-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./sagar.odp");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./oos.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )
// Convert pptx-to-PDF
// var toPdf = require("office-to-pdf");
// var fs = require("fs");
// var wordBuffer = fs.readFileSync("./sagar.odp");

// toPdf(wordBuffer).then(
//   (pdfBuffer) => {
//     fs.writeFileSync("./oos.pdf", pdfBuffer)
//   }, (err) => {
//     console.log(err);
//   }
// )

// Convert PNG-to-JPG
// var Jimp = require('jimp');

// // open a file called "lenna.png"
// Jimp.read('./public/images/d.png', (err, lenna) => {
//   if (err) throw err;
//   lenna
//     .resize(256, 556) // resize
//     .quality(60) // set JPEG quality
//     .greyscale() // set greyscale
//     .write('lena-small-bw.tiff'); // save
// });

// app.listen(port,()=>{
//     console.warn('server is Running '+port);

// })

// var pdfUtil = require('pdf-to-text');
// var pdf_path = "absolute_path/to/pdf_file.pdf";
//
// //option to extract text from page 0 to 10
// var option = {from: 0, to: 10};
//
// pdfUtil.pdfToText(pdf_path, option, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print text
// });
//
// //Omit option to extract all text from the pdf file
// pdfUtil.pdfToText(pdf_path, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print all text
// });

// 'use strict';
//
// const fs = require('fs');
// const readline = require('readline');
//
// function convert(file) {
//
//     return new Promise((resolve, reject) => {
//
//         const stream = fs.createReadStream(file);
//         // Handle stream error (IE: file not found)
//         stream.on('error', reject);
//
//         const reader = readline.createInterface({
//             input: stream
//         });
//
//         const array = [];
//
//         reader.on('line', line => {
//             array.push(JSON.parse(line));
//         });
//
//         reader.on('close', () => resolve(array));
//     });
// }
//
//
// convert('./source.txt')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.error(err));

// })
