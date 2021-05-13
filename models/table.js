const Sequelize = require('sequelize')
const moment = require('moment')

class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type: Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type: Sequelize.STRING(40),
                allowNull : false,
            },
            username:{
                type: Sequelize.STRING(40),
                allowNull : false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            useremail:{
                type: Sequelize.STRING(40),
                allowNull :false,
            }
            ,
            userimage:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            userdt:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('userdt')).format('YYYY-MM-DD')
                }
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'users',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}

class Schedule extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type: Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            scheduledt:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                get: function(){
                    return moment(this.getDataValue('userdt')).format('YYYY-MM-DD')
                }
            },
            content:{
                type: Sequelize.TEXT,
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Schedule',
            tableName:'schedules',
            charset: 'utf8',
            collate:'utf8_general_ci'
        })
    }
}

module.exports = {
    User,
    Schedule
}

