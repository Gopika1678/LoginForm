function validate() {
    alert("button was clicked");
    var username=document.getElementById("name").value;
    console.log(username);
    var password=document.getElementById("passwd").value;
    console.log(password);
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if( username=='') {
        alert("please enter username");
    }
    if(password=='') {
        alert("please enter password");
    }
    else {
        alert("success");
        window.location="https://www.campuslife.co.in";
    }
}