function login() {

    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    let inc = document.getElementById('inc')
    str = user.toString().value
    str = pass.toString().value;
    
    if (user == 'be' && pass == 'welcome') {
       window.location.href = "index2.html";}
       
       else {
        
            inc.innerHTML ='ERROR!! (user: be / pass: welcome)'
        
       }

}
