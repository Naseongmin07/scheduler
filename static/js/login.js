const init = ()=>{
    let login_submit_form = document.querySelector('#login_submit_form')
    let button_link = document.querySelector('#button_link')

    button_link.addEventListener('click',()=>{
        login_submit_form.submit()
    })
}

window.addEventListener('DOMContentLoaded',init);  // 이벤트 등록  콜백함수 init