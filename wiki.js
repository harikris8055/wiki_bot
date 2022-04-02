/**
 * 
 * Calls random wiki article.
 * 
 */


const axios = require('axios');
// const res = require('express/lib/response');


//calling wiki api using axios
async function getArticle(callback) {


    await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary')
        .then(response => {

            //TODO
            var articleData = `Article :${response.data.title}\nDescription: ${response.data.extract}`

            var image = response.data.thumbnail.source

            // console.log(`before sending ${articleData}`)

            return callback(articleData, image);


        })
        .catch(error => {
            console.log(error);
        });


}


module.exports.getArticle = getArticle