

    var nameError=document.getElementById('name-error');
    var mailError=document.getElementById('mail-error');
    var telError=document.getElementById('tel-error');
    var subError=document.getElementById('sub-error');
    var mError=document.getElementById('m-error');
    var sError=document.getElementById('s-error');

    var sError=document.getElementById('s-error');
function vname(){
    console.log("Working");
    var name=document.getElementById('name1').value;
    if(name==" ")
    {
        nameError.innerHTML='name is required';
        return false;
    }
    
    
    if(name.length == 0)
    {
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Invalid name';
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
    if(!mail.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
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
    if(phone.length!=10 )
    {
        telError.innerHTML="10 digits required";
        return false;   
    }
    if(!phone.match(/^[0-9]{10}$/)){
        telError.innerHTML="not valid";
        return false; 
    }
    telError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}
function subCheck(){
    var subject=document.getElementById('subject').value;
    if(subject.length==0)
    {
        subError.innerHTML="Enter subject"; 
        return false; 
    }
    if(subject.length>1)
    {subError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;}
    
}
function mCheck()
{
    var msg=document.getElementById('txt').value;
    var r=20;

    
    var l=r-msg.length;
    
    if(l>0)
    {
        mError.innerHTML=l+"more cahracter required"; 
        return false; 
    }
    else{
        mError.innerHTML='<i class="fa-solid fa-square-check"></i>';
        return true;

    }

}
function subMess(){
    if(!vname() || !echeck() || !pcheck() || !subCheck() || !mCheck())
    {   
        sError.style.display-'block';
        setTimeout(function(){sError.style.display= 'none';},2000);
        
      

        
        sError.innerHTML='invalid form entries';
         return false;
        
    }
   
}
 