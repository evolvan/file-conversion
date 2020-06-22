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

// Hide and show downloading section
window.onload = function(){ 
        document.getElementById('btnSubmit').onclick = function() {
            fileName = document.querySelector('#imgUploader').value; 
            extension = fileName.split('.').pop();  
            // if(extension=='pdf'){
            var values = ["doc", "docx", "pdf"];
          
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
            label.innerHTML = "Choose your pets: "
            label.htmlFor = "pets";
          
            document.getElementById("output").appendChild(label).appendChild(select);
          }
    }
// }
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