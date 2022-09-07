function v()
{
    var uname=document.forms["myform"]['uname'].value;
    var upw=document.forms["myform"]['upw'].value;
    if((uname==null) ||(uname=="")){
    document.getElementById('error box').innerHTML="Enter the user name";
        return false;}
    if((upw==null) ||(upw=="")){
    document.getElementById('error box').innerHTML="Enter the user password";
    return false;}
    if((uname!="")&&(upw!=""))
    alert("sucessfully login")
    return true;
}
