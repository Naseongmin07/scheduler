const init = ()=>{
    let userid = document.querySelector('.userid');
    let userpw = document.querySelector('.userpw');
    let userpw_check = document.querySelector('.userpw_check');
    let username = document.querySelector('.username');
    let gender = document.querySelector('.gender');
    let useremail = document.querySelector('.useremail');

    let userid_msg = document.querySelector('.userid_msg');
    let userpw_msg = document.querySelector('.userpw_msg');
    let error_msg = document.querySelector('.error_msg');

    let login_form = document.querySelector('#login_form');
    let button_link = document.querySelector('#button_link');

    // 비밀번호 확인 
    function password_check(){
        return userpw.value == userpw_check.value;
    }
    userpw_check.addEventListener('focusout',()=>{
        let result = password_check();
        if (result){
            userpw_msg.innerHTML = 'is available!';
            userpw_msg.style.color = '#f7b10a';
        } else{
            userpw_msg.innerHTML = 'is unavailable!';
            userpw_msg.style.color = 'red';
            userpw.value = '';
            userpw_check.value = '';
            userpw.focus();
        }
    });

    // a태그 submit
    button_link.addEventListener('click',()=>{
        // input value 공란 확인
        if (userid.value=='' || userpw.value=='' || userpw_check.value=='' || username.value=='' || useremail.value==''){
            error_msg.innerHTML = 'ID, PASSWORD, NAME, E-MAIL are REQUIRED!';
            return;
        } else{
            error_msg.innerHTML = '';
        }
        login_form.submit()
    })
}
window.addEventListener('DOMContentLoaded',init);
