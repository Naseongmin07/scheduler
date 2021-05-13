const{sequelize, User, Schedule} = require('../../models')

let calendar = (req, res)=>{
    month = parseInt(req.query.month)
    year = parseInt(req.query.year)
    if (isNaN(month)){
        month = parseInt(new Date().getMonth()+1)
    }
    if (isNaN(year)){
        year = parseInt(new Date().getFullYear())
    }
    if(month==12){
        month_plus = 1
    }
    else{
        month_plus = month+1
    }
    if(month==1){
        month_minus = 12
    }
    else{
        month_minus = month-1
    }
    
    res.render('./board/calendar',{
        month:month,
        month_plus:month_plus,
        month_minus:month_minus,
        year: year
    })
}

let join = (req, res)=>{
    res.render('./board/join')
}

let login = (req, res)=>{
    res.render('./board/login')
}

let join_success = async (req,res)=>{
    let userid = req.body.userid
    let userpw = req.body.userpw
    let username = req.body.username
    let gender = req.body.gender
    let useremail = req.body.useremail
    let userimage = req.body.userimage
    if(userimage ==null){
        userimage == ''
    }
    console.log(userid, userpw, username, gender, useremail, userimage)

    await User.create({
        userid:userid, 
        userpw:userpw, 
        username:username, 
        gender:gender, 
        useremail:useremail, 
        userimage:userimage
    })
    res.redirect('./login')
}

module.exports = {
    calendar,
    join,
    login,
    join_success,
}