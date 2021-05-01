const { Model } = require('sequelize'); 

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {}

    Review.init({
        reviewerUUID: {
            type: DataTypes.UUID,
            validate: {
                notEmpty: true,
            },
        },
        reviewerName: {
            type: DataTypes.STRING, 
            validate: {
                notEmpty: true,
            }
        },
        schoolDBID: {
            type: DataTypes.INTEGER, 
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING, 
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
        },
        rating: {
            type: DataTypes.INTEGER, 
            validate: {
                notEmpty: true,
            },
        }
    }, {
        sequelize, 
        modelName: 'review'
    });

    return Review;
}