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