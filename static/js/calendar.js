const init = ()=>{

    let calander = document.querySelector('#calander')
    let modal = document.querySelector('.modal')
    let closeButton = document.querySelector('.close-button')
    let cancel = document.querySelector('#cancel')
    let date = document.querySelector('.date')
    let submit = document.querySelector('#submit')
    let schedule_form = document.querySelector('#schedule_form')
    let text = document.querySelector('#text')
    let date_area = document.querySelector('#date_area')
    let userid = document.querySelector('#userid')


    let modify = document.querySelector('.modify')
    let close_modify = document.querySelector('.close-modify')
    let cancel_modify = document.querySelector('#cancel_modify')
    let submit_modify = document.querySelector('#submit_modify')
    let modify_form = document.querySelector('#modify_form')
    let text_modify = document.querySelector('#text_modify')
    let delete_form = document.querySelector('#delete_form')
    let id_area_modify = document.querySelectorAll('#id_area_modify')
    let date_modify = document.querySelector('.date_modify')


    let setYear = document.querySelector('#year').innerHTML
    let setMonth = document.querySelector('#month').innerHTML
    let setDay = 1; 
    let dt = new Date(`${setYear}-${setMonth}-${setDay}`)
    let dt2 = new Date(setYear, setMonth,0)
    let lastDay = dt2.getDate();
    let weekDay = dt.getDay();


    
    week = document.createElement('tr')

    for(i=0; i < lastDay + weekDay; i++){
        let day = document.createElement('td')
        let span = document.createElement('span')
        let p = document.createElement('p')
        if(i < weekDay){
            week.appendChild(day)
            continue
        }else{
            span.innerHTML = String(i+1-weekDay).padStart(2,0)
            day.setAttribute('class',`${setYear}-${setMonth.padStart(2,0)}-${span.innerHTML}`)
            day.setAttribute('data-value',`${setYear}-${setMonth.padStart(2,0)}-${span.innerHTML}`)
            day.setAttribute('id','box_day')
            day.addEventListener('click',create_schedule)
            day.appendChild(span)
            day.appendChild(p)
            week.appendChild(day)
            if((i+1)%7==0){
                calander.appendChild(week)
                week = document.createElement('tr')
            }
        }
    }
    calander.appendChild(week)

    async function get_data(){
        
        const table = document.querySelectorAll('#calander > tr');
        let data = await axios.get(`http://localhost:3000/board/get_data?userid=${userid.innerHTML}&month=${setMonth}`);
        console.log(data)
        table.forEach(tr => {
            td =tr.querySelectorAll('td');
            td.forEach(row=>{
                if(row.dataset.value != undefined){   
                    for(let v of data.data.result){ 
                        p = document.createElement('p');
                        if(row.dataset.value == v.scheduledt){
                            p.addEventListener('click',modify_schedule)
                            p.setAttribute('class',`${v.id}`)
                            p.setAttribute('id', 'p')
                            p.innerHTML = v.content;
                            row.querySelector('p').appendChild(p)
                    }
                    }
                }
            })
        })
    }

    get_data();


    function create_schedule(e){

        if(e.target.id === "p"){
            return
        }
        date.innerHTML = `${setYear}-${setMonth.padStart(2,0)}-${this.children[0].innerHTML}`
        modal.setAttribute('class','modal show-modal')
    }

    function close_schedule(){
        modal.setAttribute('class','modal')
    }

    function submit_schedule(){
        modal.setAttribute('class','modal')
        if (text.value==''){
            return
        }
        date_area.value = `${date.innerHTML}`
        schedule_form.submit()
        date_area.value = ''
    }

    function modify_schedule(e){
        id = this.className
        date_modify.innerHTML = this.parentNode.parentNode.className
        modify.setAttribute('class','modify show-modify')
        text_modify.innerHTML = this.innerHTML
    }

    function close_modify_function(){
        modify.setAttribute('class','modify')
    }

    function delete_modify(){
        
        id_area_modify[1].value = id
        modify.setAttribute('class','modify')
        delete_form.submit()
    }

    function start_modify(){
        id_area_modify[0].value = id
        if(text_modify.value==''){
            delete_modify()
            return
        }
        modify_form.submit()
        modify.setAttribute('class','modify')
    }


    closeButton.addEventListener('click',close_schedule)

    cancel.addEventListener('click',close_schedule)

    submit.addEventListener('click',submit_schedule)

    close_modify.addEventListener('click',close_modify_function)

    cancel_modify.addEventListener('click',delete_modify)

    submit_modify.addEventListener('click',start_modify)
}

window.addEventListener('DOMContentLoaded',init);
