const axios = require('axios');

const getClima=async(lat, lng)=>{


	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2974304e11c8a7ab0ae498de0751e4fa&units=metric`);

	return resp.data.main.temp;

}

module.exports={
	getClima
}