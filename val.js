

    var nameError=document.getElementById('name-error');
    var mailError=document.getElementById('mail-error');
    var telError=document.getElementById('tel-error');
    var subError=document.getElementById('sub-error');
    var sError=document.getElementById('s-error');
function vname(){
    console.log("Working");
    var name=document.getElementById('name1').value;
    
    if(name.length == 0)
    {
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='enter full name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}
function echeck(){
    var mail=document.getElementById('email').value;
    if(mail.length==0)
    {
        mailError.innerHTML="Email required";
        return false;
    }
    if(!mail.match(/^[A-Za-z]\._\-[0-9]*@[A-Za-Z]*\.[a-z]{2,4}$/))
    {
        mailError.innerHTML="Invalid ID";
        return false; 
    }
    mailError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;

}
function pcheck()
{
    var phone=document.getElementById('phone').value;
    if(phone.length == 0)
    {
        telError.innerHTML="Phone required";
        return false;
    }
    if(phone.length!=10)
    {
        telError.innerHTML="10 digit required";
        return false;   
    }
    if(/^[0-9]{10}$/){
        telError.innerHTML="not valid";
        
    }
    telError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}