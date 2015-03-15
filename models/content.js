/**
 * Created by cesarcruz on 3/10/15.
 * Content Model
 */

//TODO: type should reference something else or be of type enum
//TODO: Case where content references another article
exports.module = function(sequelize, DataTypes) {
    return sequelize.define('Content', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        title : {
            type: DataTypes.STRING,
            allowNull : false
        },
        mediaLink : {
            type : DataTypes.STRING,
            allowNull : true
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : true
        },
        type : {
            type : DataTypes.ENUM('image', 'video', 'audio', 'text'),
            allowNull : false
        }
    }, {
        freezeTableName : true,
        timestamps: true
    });
};