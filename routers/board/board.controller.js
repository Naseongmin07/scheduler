const{sequelize, User, Schedule} = require('../../models')

let calendar = (req, res)=>{
    month = parseInt(req.query.month)
    year = parseInt(req.query.year)
    userid = req.session.uid
    isLogin = req.session.isLogin
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
        year: year,
        userid: userid,
        isLogin: isLogin
    })
}

let join = (req, res)=>{
    res.render('./board/join')
}

let login = (req, res)=>{
    flag = req.query.flag
    res.render('./board/login',{flag})
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

let login_check = async(req,res)=>{
    month = parseInt(new Date().getMonth()+1)
    year = parseInt(new Date().getFullYear())
    
    let userid = req.body.userid;
    let userpw = req.body.userpw;

    let result = await User.findOne({
        where: { userid, userpw }
    });
    

    if (result == null) {
        res.redirect('/board/login?flag=0');
    } else {
        req.session.uid = userid;
        req.session.isLogin = true;
        req.session.save(() => {
            res.redirect(`./calendar`)
        })
    }
}

let logout = (req,res)=>{
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/');
    })
}

let schedule = async (req,res)=>{
    let userid = req.session.uid
    let scheduledt = req.body.date_area
    let content = req.body.message
    let dataArray = scheduledt.split('-')
    let month = dataArray[1]
    await Schedule.create({
        userid,
        scheduledt,
        month,
        content,
    })
    res.redirect(`/board/calendar?year=${dataArray[0]}&month=${dataArray[1]}`)
}

let get_data = async (req,res)=>{
    let userid = req.query.userid
    let month = parseInt(req.query.month)
    let result = await Schedule.findAll({
        where:{
            userid: userid,
            month: month
        }
    })
    res.json({result})
}

let modify = async (req,res)=>{

    let id = req.body.id_area
    let content = req.body.message
    let result = await Schedule.findOne({
        where:{id}
    })
    await Schedule.update({content},
        {where :{id}}
    )

    dt = new Date(result.dataValues.scheduledt)
    
    res.redirect(`/board/calendar?year=${dt.getFullYear}&month=${dt.getMonth}}`)
}

let delete_data = async (req,res)=>{

    let id = req.body.id_area
    let result = await Schedule.findOne({
        where:{id}
    })
    await Schedule.destroy({
        where :{id}
    })

    dt = new Date(result.dataValues.scheduledt)
    
    res.redirect(`/board/calendar?year=${dt.getFullYear}&month=${dt.getMonth}}`)
}

module.exports = {
    calendar,
    join,
    login,
    join_success,
    login_check,
    logout,
    schedule,
    get_data,
    modify,
    delete_data
}