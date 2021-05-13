const init = ()=>{

    console.log('asdfasdfadsf')
    let setYear = document.querySelector('#year').innerHTML
    let setMonth = document.querySelector('#month').innerHTML
    let setDay = 1; 
    let dt = new Date(`${setYear}-${setMonth}-${setDay}`)
    let dt2 = new Date(setYear, setMonth,0)
    let lastDay = dt2.getDate();
    let weekDay = dt.getDay();
    let calander = document.querySelector('#calander')
    week = document.createElement('tr')
    for(i=0; i < lastDay + weekDay; i++){
        let day = document.createElement('td')
        let span = document.createElement('span')
        if(i < weekDay){
            week.appendChild(day)
            continue
        }else{
            span.innerHTML = String(i+1-weekDay).padStart(2,0)
            day.appendChild(span)
            week.appendChild(day)
            if((i+1)%7==0){
                calander.appendChild(week)
                week = document.createElement('tr')
            }
        }
    }
    calander.appendChild(week)
}

window.addEventListener('DOMContentLoaded',init);  // 이벤트 등록  콜백함수 init
