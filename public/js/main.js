function getSelectedValue(){
    extValue = document.getElementById("fileFormat");
    if(extValue!=null){
        extValue = extValue.value;
        console.log(extValue);
    }       
    else{
        console.log("Please Choose The Option From DropDown !");
    }
}
window.onload = function(){ 
    // fileClass = document.getElementsByClassName(".inner-content");
    let pa = document.getElementsByTagName("p");
    for (var i = 0; i<pa.length; i++) {
        fileName = pa[i].innerHTML;
        console.log(fileName,"sagar");
        extension = fileName.split('.').pop(); 
        console.log(extension,"ddddddddddddddddddddd"); 
    }
       
    let displayOption = document.getElementsByTagName("option");
        
    document.getElementById('fileFormat').onclick = function() {
            

            for (var i = 0; i<displayOption.length; i++) {
                // let optionValue = document.getElementsByTagName("option")[i].value;
                console.log("hihihih",displayOption[i].value);
                // pdf converted extension
                if (extension=='pdf') {
                    console.log("click on pdf")
                    var values = [".doc", ".docx", ".pdf"];
                    for (const val of values) {
                        console.log(val);
                        if(val == displayOption[i].value){
                            console.log("val",val);
                            console.log("displayOption[i].value",displayOption[i].value);
                            displayOption[i].style.display = 'block';
                        }
                      }   
                }
                // pdf converted extension end
                // Word File converted extension
                else if(extension=='doc'){
                    console.log("click on doc")

                    var values = [".docx", ".pdf", ".doc"];
                        for (const val of values) {
                            console.log(val);
                            if(val == displayOption[i].value){
                                console.log("val",val);
                                console.log("displayOption[i].value",displayOption[i].value);
                                displayOption[i].style.display = 'block';
                            }
                       }   
                    }
                // Word File converted extension end
                // Image File converted extension
                else if(extension=='png'){
                    console.log("click on png")

                    var values = [".jpg", ".bmp", ".jpeg",".tiff",".gif",".png",".pdf"];
                        for (const val of values) {
                            console.log(val);
                            if(val == displayOption[i].value){
                                console.log("val",val);
                                console.log("displayOption[i].value",displayOption[i].value);
                                displayOption[i].style.display = 'block';
                            }
                       }   
                    }
                // Image File converted extension end
                // Excel File converted extension
                else if(extension=='xls'){
                    console.log("click on xls")

                    var values = [".xlsm", ".xlsx", ".xls",".ods"];
                        for (const val of values) {
                            console.log(val);
                            if(val == displayOption[i].value){
                                console.log("val",val);
                                console.log("displayOption[i].value",displayOption[i].value);
                                displayOption[i].style.display = 'block';
                            }
                       }   
                    }
                // Excel File converted extension end
                else{
                    alert("Please Wait Applicable Format is Setting.");
                }
            }
        }
}



// AJAX Code For Uploading File

// $(document).ready(function() {

//     $('#frmUploader').submit(function() {
//        $("#status").empty().text("File is uploading...");
//        $(this).ajaxSubmit({

//            error: function(xhr) {
//        status('Error: ' + xhr.status);
//            },

//            success: function(response) {
//        $("#status").empty().text(response);
//                console.log(response);
//            }
//    });
//    return false;
//    });    
// });

window.onscroll = function() {myFunction()
    scrollFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}