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
        document.getElementById('btnSubmit').onclick = function() {
            document.getElementById('frmUploader').submit();
            fileName = document.querySelector('#e').innerHTML; 
            console.log(fileName,"sagar");
            extension = fileName.split('.').pop(); 
            console.log(extension,"ddddddddddddddddddddd"); 
            // Start PDF Dropdown validation
            if(extension=='pdf'){
            var values = [".doc", ".docx", ".pdf"];
          
            var select = document.createElement("select");
            select.name = "fileExt";
            select.id = "fileFormat";
            select.classList.add("fileFormat");
            select.setAttribute("onchange", function(){getSelectedValue()});
          
            for (const val of values) {
              var option = document.createElement("option");
              option.value = val;
              option.text = val.charAt(0).toUpperCase() + val.slice(1);
              select.appendChild(option);
            }
          
            var label = document.createElement("label");
            label.innerHTML = "Choose your File Extension: "
            label.htmlFor = "Files";
          
            document.getElementById("downloadFile").appendChild(label).appendChild(select);
          }
          // End PDF Dropdown validation
            // Start Image Dropdown validation
            else if(extension=='png'){
                document.getElementById('frmUploader').submit();
            var values = [".jpg", ".bmp", ".jpeg",".tiff",".gif",".png",".pdf"];
          
            var select = document.createElement("select");
            select.name = "fileExt";
            select.id = "fileFormat";
            select.classList.add("fileFormat");
            select.setAttribute("onchange", function(){getSelectedValue()});
          
            for (const val of values) {
              var option = document.createElement("option");
              option.value = val;
              option.text = val.charAt(0).toUpperCase() + val.slice(1);
              select.appendChild(option);
            }
          
            var label = document.createElement("label");
            label.innerHTML = "Choose your File Extension: "
            label.htmlFor = "Files";
          
            document.getElementById("downloadFile").appendChild(label).appendChild(select);
          }
          // End Image Dropdown validation
            // Start word Dropdown validation
            else if(extension=='doc'){
                document.getElementById('frmUploader').submit();
                var values = [".docx", ".pdf", ".doc"];
              
                var select = document.createElement("select");
                select.name = "fileExt";
                select.id = "fileFormat";
                select.classList.add("fileFormat");
                select.setAttribute("onchange", function(){getSelectedValue()});
              
                for (const val of values) {
                  var option = document.createElement("option");
                  option.value = val;
                  option.text = val.charAt(0).toUpperCase() + val.slice(1);
                  select.appendChild(option);
                }
              
                var label = document.createElement("label");
                label.innerHTML = "Choose your File Extension: "
                label.htmlFor = "Files";
              
                document.getElementById("downloadFile").appendChild(label).appendChild(select);
              }
              // End word Dropdown validation
            // Start excel Dropdown validation
            else if(extension=='xls'){
                document.getElementById('frmUploader').submit();
                var values = [".xlsm", ".xlsx", ".xls",".ods"];
              
                var select = document.createElement("select");
                select.name = "fileExt";
                select.id = "fileFormat";
                select.classList.add("fileFormat");
                select.setAttribute("onchange", function(){getSelectedValue()});
              
                for (const val of values) {
                  var option = document.createElement("option");
                  option.value = val;
                  option.text = val.charAt(0).toUpperCase() + val.slice(1);
                  select.appendChild(option);
                }
              
                var label = document.createElement("label");
                label.innerHTML = "Choose your File Extension: "
                label.htmlFor = "Files";
              
                document.getElementById("downloadFile").appendChild(label).appendChild(select);
              }
              // End excel Dropdown validation
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