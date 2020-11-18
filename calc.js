var remove=document.getElementsByTagName("button")[14];
var output=document.getElementById("output");

remove.addEventListener("click", function() {
    if (output.value <=1){
        return output.value.lenght-1;
    }
})