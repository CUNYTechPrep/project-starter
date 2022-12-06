"use strict";
const fetch = require('node-fetch')



const { Model } = require("sequelize");




module.exports = (sequelize, DataTypes) => {
  class Media extends Model {}
// The Media table : [MediaId | AVGRating]


    function myUrl(titleInput) {// setting the url

        let url = 'https://api.tvmaze.com/shows?q=' + titleInput
        return url
    }
    async function getIMBD() { // fetching // not sure if this works
        const response = await fetch(myUrl(titleInput));
        const data = await response.json();
        const imbd = data.imbd;
        return imbd;
    }


  Media.init(
    {
      MediaID :{
        type:DataTypes.STRING,
        validate:{
            notEmpty:true
        },
        AVGRating: {
            type:DataTypes.INTEGER,  // do not store , calcuate on query
           //need to think about it 
           // feel free to implement
           defaultValue: 0
        }
        
      }
    },
    {
      sequelize,
      modelName: "Media",
    }
  );
    //  const media = new Media({ id: getIMBD() }); //assigning the ID to the mediaID
    //      media.id;

// 

  return Media;
};
