import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://coronavirus-map.p.rapidapi.com/api/v1/regions',
  headers: {
    'x-rapidapi-key': '8fd7246d7cmshd3f281de3d1885bp1a11b3jsnbbb52d7d3b0c',
    'x-rapidapi-host': 'coronavirus-map.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});