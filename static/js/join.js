const init = ()=>{

    let userid = document.querySelector('#userid')
    let pw1 = document.querySelector('#userpw')
    let pw2 = document.querySelector('#userpw_check')
    let username = document.querySelector('#username')
    let useremail = document.querySelector('#useremail')
    let submit_form = document.querySelector('#submit_form')
    let button_link = document.querySelector('#button_link')

    button_link.addEventListener('click',()=>{
        submit_form.submit()
    })
}

window.addEventListener('DOMContentLoaded',init);  // 이벤트 등록  콜백함수 init