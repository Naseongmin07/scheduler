
const init = ()=>{
    var userid = document.querySelector('#userid')
    var pw1 = document.querySelector('#userpw')
    var pw2 = document.querySelector('#userpw_check')
    var username = document.querySelector('#username')
    var useremail = document.querySelector('#useremail')
    var submit_form = document.querySelector('#submit_form')
    var button_link = document.querySelector('#button_link')

    button_link.addEventListener('click',()=>{
        submit_form.submit()
    })
}

window.addEventListener('DOMContentLoaded',init);  // 이벤트 등록  콜백함수 init