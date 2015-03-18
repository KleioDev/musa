/**
 * Created by cesarcruz on 3/10/15.
 * Articles model
 */

module.exports = function(sequelize, DataTypes) {


    var Article = sequelize.define('Article', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        type : {
            type : DataTypes.ENUM('news', 'event'),
            defaultValue : 'news',
            allowNull : false
        },
        author : {
            type : DataTypes.INTEGER,
            references : 'Administrator',
            referencesKey : 'id'
        }
    }, {
        freezeTableName : true,
        timestamps : true
    });

    return Article;
};