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
$(document).ready(function(){
    $('#btnSubmit').click(function(){
        $(".middle-div").slideDown();
    });
});
// AJAX Code For Uploading File

$(document).ready(function() {

    $('#frmUploader').submit(function() {
       $("#status").empty().text("File is uploading...");
       $(this).ajaxSubmit({

           error: function(xhr) {
       status('Error: ' + xhr.status);
           },

           success: function(response) {
       $("#status").empty().text(response);
               console.log(response);
           }
   });
       //Very important line, it disable the page refresh.
   return false;
   });    
});