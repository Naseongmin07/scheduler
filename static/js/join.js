const init = ()=>{
    let userid = document.querySelector('.userid')
    let userpw = document.querySelector('.userpw')
    let userpw_check = document.querySelector('.userpw_check');
    let username = document.querySelector('.username')
    let gender = document.querySelector('.gender');
    let useremail = document.querySelector('.useremail')

    let login_form = document.querySelector('#login_form')
    let button_link = document.querySelector('#button_link')

    button_link.addEventListener('click',()=>{
        login_form.submit()
    })
}
window.addEventListener('DOMContentLoaded',init);
