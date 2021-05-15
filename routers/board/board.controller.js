const{sequelize, User, Schedule} = require('../../models')

let calendar = (req, res)=>{
    console.log('--------------calendar----------------')
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
        year: year,

        userid:req.session.uid,
        isLogin:req.session.isLogin
    })
}

let join = (req, res)=>{
    res.render('./board/join')
}

let join_success = async (req,res)=>{
    let userid = req.body.userid
    let userpw = req.body.userpw
    let username = req.body.username
    let gender = req.body.gender
    let useremail = req.body.useremail
    let userimage = req.body.userimage

    if (userimage == null){
        userimage == ''
    }
    console.log(userid, userpw, username, gender, useremail, userimage);

    await User.create({
        userid:userid,
        userpw:userpw,
        username:username,
        gender:gender,
        useremail:useremail,
        userimage:userimage
    })
    res.render('./board/join_success',{ userid, username})
}

let userid_check = async (req,res)=>{
    let userid = req.query.userid;
    let check = false;
    let result = await User.findOne({
        where:{ userid }
    })
    if (result == undefined){
        check = true;
    } else{
        check = false;
    }
    res.json({
        login:check,
        userid,
    })
}

let login = (req, res)=>{
    flag = req.query.flag
    res.render('./board/login',{flag})
}

let login_check = async(req,res)=>{
    console.log(req.body);
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
    console.log(req.session);
}

let logout = (req,res)=>{
    delete req.session.isLogin;
    delete req.session.uid;

    req.session.save(()=>{
        res.redirect('/');
    })
}

module.exports = {
    calendar,
    join,
    join_success,
    userid_check,
    login,
    login_check,
    logout
}
