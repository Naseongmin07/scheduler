const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routers/index')
const {sequelize} = require('./models')
const bodyParser = require('body-parser')
const session = require('express-session')

nunjucks.configure('views',{
    express: app
})

app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
}))

app.set('view engine', 'html')

app.use(express.static('static'))

app.use(bodyParser.urlencoded({extended: true}))

sequelize.sync({force: false})
.then(()=>{ // resolve
    console.log('DB접속이 완료되었습니다.')
})
.catch((err)=>{ // reject
    console.log(err)
})

app.use('/',router)

app.listen(3000,()=>{
    console.log('server start port 3000')
})

