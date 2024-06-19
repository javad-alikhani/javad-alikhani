function updateCountdown(){
    const countdownDate=new Date('june25,2024 8:00:00').getTime();
    const now =new Date().getTime();
    const distance=countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours=Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mintue=Math.floor((distance % (1000 * 60 * 60 *24))/  (1000 * 60 * 60));
    const second=Math.floor((distance % (1000 * 60)) /1000);


    document.querySelector('.days').innerHTML=days;
    document.querySelector('.hours').innerHTML=hours;
    document.querySelector('.mintue').innerHTML=mintue ;
    document.querySelector('.second').innerHTML=second;


   if(distance>0){
    clearInterval(updateCountdown);
    document.getElementById('timer').innerHTML='EXPAND';
   }    
}
setInterval(updateCountdown, 1000);



document.getElementById('loginform').addEventListener('submit',function (evant){
evant.preventDefault();
var user=document.getElementById('user').value;
var pass=document.getElementById('pass').value;
if(user==='javad' && pass==='1234')
{
  window.location.href='fit.html';
 
  
}
else{
    document.getElementById('eror').innerHTML='نام کاربری یا رمز ورود اشتباه است'
}
})
 

setTimeout(hide, 30000);
        
function hide(){
    document.getElementById('preloader').style.display = "none";
}