*{
    margin:0;
    padding:0;
    user-select: none;
}
div{
    display: block;
}
ul,li{
    list-style:none;
}
a{
    text-decoration:none;
    box-sizing: inherit;
}

/* 크기 조절 */
#body{
    width: 100%;
    height: 100%;
}
#motto_wrap{
    width: 380px;
    height: 80px;
    margin: 0px auto;
    margin-top: 30px;
    background: #fff;
    border: 10px solid rgb(189, 122, 63);
    box-shadow: rgba(11, 6, 4, 0.8) 0px 0px 50px, rgba(11, 6, 4, 0.6) 0px 0px 100px, rgba(11, 6, 4, 0.3) 0px 0px 500px;
}
#blackboard_wrap{
    width: 1810px;
    height: 740px;
    margin: 0px auto;
    background: seagreen;
    border: 5px solid rgb(155, 64, 0);
}
#container{
    width: 100%;
}
#space{
    width: 100%;
}

/* 상세 내용 */
#motto{
    text-align: center;
    font-size: 30px;
}

#logo{
    width: 140px;
    height: 100px;
    margin-top: 30px;
    margin-left: 640px;
    float: left;
}
#logo > a > img{
    width: 150px;
    height: 80px;
}
#title{
    width: 350px;
    height: 100px;
    margin-top: 30px;
    font-size: 40px;
    line-height: 75px;
    text-align: center;
    float: left;
}

#button{
    float: right;
    margin-right: 5px;
}
#button > #button_link{
    display: inline-block;
    width: 198px;
    height: 48px;
    line-height: 45px;
    text-align: center;
    border: 1px solid #000;
    color: #f7b10a;
    background: rgba(159,22,0,.6);
}
#button > #button_link:hover{
    color: #fff;
    background: rgba(233, 31, 0, 0.774);
    transition: 0.5s;
    opacity: 0.8;
}
#button > #button_link > #button_inner{
    width: 195px;
    height: 45px;
    border: 1px solid #ea3012;
}
.hidden{
    cursor: pointer;
}

#createby{
    float: right;
}
#createby > #createby_text{
    width: 200px;
    height: 50px;
    color: #fff;
    font-size: 15px;
    line-height: 45px;
    text-align: center;

}
.hide.on{
    display: none;
}
.hide.off{
    display: block;
}

#underlay{
    width: 800px;
    height: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgb(204, 124, 54);
}

/* 꾸미기 */
#tool{
    position: absolute;
    width: 100%;
    top: 870px;
}
#magnet_bundle{
    position: absolute;
    top: -250px;
    margin-left: 80px;
}
#magnet_bundle > #magnet{
    width: 15px;
    height: 15px;
    border-radius: 30px;
}
#magnet_bundle > .red{
    background: red;
}
#magnet_bundle > .yellow{
    margin-top: -10px;
    margin-left: 45px;
    background: yellow;
}
#magnet_bundle > .green{
    margin-top: 10px;
    margin-left: -10px;
    background: limegreen;
}
#magnet_bundle > .purple{
    margin-top: -5px;
    margin-left: 40px;
    background: mediumslateblue;
}
#magnet_bundle > .sky{
    margin-top: 10px;
    margin-left: 10px;
    background: skyblue;
}

#eraser > #eraser_body{
    position: absolute;
    width: 60px;
    height: 20px;
    top: -15px;
    margin-left: 800px;
    float: left;
    background: rgb(255, 165, 0);
    border-radius: 3px;
}
#eraser > #eraser_body > #eraser_handle{
    width: 10px;
    height: 20px;
    margin: 0 auto;
    background: rgb(80, 33, 0);;
}

#eraser2 > #eraser2_body{
    position: absolute;
    width: 60px;
    height: 10px;
    top: -15px;
    margin-left: 1400px;
    float: left;
    background: rgb(255, 165, 0);
    border-radius: 3px;
}
#eraser2 > #eraser2_body > #eraser2_handle{
    width: 10px;
    height: 10px;
    margin: 0 auto;
    background: rgb(80, 33, 0);;
}
#eraser2 > #eraser2_base{
    position: absolute;
    width: 56px;
    height: 10px;
    top: -5px;
    margin-left: 1402px;
    float: left;
    background: rgb(0, 48, 33);
    border-radius: 3px;
}

#chalk_case{
    position: absolute;
    top: -30px;
    margin-left: 650px;
}
#chalk_case > #chalk_vertical{
    position: absolute;
    width: 5px;
    height: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 1;
}
#chalk_case > .white{
    top: -20px;
    margin-left: 5px;
    float: left;
    background: #fff;
}
#chalk_case > .blue{
    top: -12px;
    margin-left: 17px;
    float: left;
    background: rgb(0, 117, 250);
}
#chalk_case > .yellow{
    top: -17px;
    margin-left: 29px;
    float: left;
    background: yellow;
}
#chalk_case > .red{
    top: -7px;
    margin-left: 40px;
    float: left;
    background: red;
}
#chalk_case > #case{
    position: relative;
    width: 50px;
    height: 40px;
    border-radius: 5px;
    background: rgb(202, 173, 141);
    z-index: 2;

}

#chalk_bundle{
    width: 120px;
    margin-left: 1200px;
}
#chalk_bundle > #chalk_horizontal{
    width: 30px;
    height: 5px;
    margin-right: 15px;
    border-radius: 30px;
}
#chalk_bundle > .white{
    float: left;
    background: #fff;
}
#chalk_bundle > .blue{
    float: left;
    background: rgb(0, 117, 250);
}
#chalk_bundle > .pink{
    float: right;
    background: pink;
}
