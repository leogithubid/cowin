const axios = require('axios');
//add header
//how did we know we have User-Agent in header?
const config = {
    headers:{
        "User-Agent" : "axios app"
    }
};
//make it as a function
module.exports = function(){
// Make a request for a user with a given ID
//change the url to government url 
axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
  .then(function (response) {
    // handle success
    console.log(response.data.states);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}