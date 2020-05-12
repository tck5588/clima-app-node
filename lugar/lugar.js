const axios = require('axios');


const getLuegarLatLng=async(direccion)=>{ 

	const encodeUrl=encodeURI(direccion);

	var instance = axios.create({
	  baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+encodeUrl+'',
	  headers: {'x-rapidapi-key': 'a30ff2f748mshebb68f9cb7ab58bp13813ejsn711213c35a79'}
	});

	const resp = await instance.get();

	if(resp.data.Results.length === 0){

		throw new Error(`No hy resultados para ${direccion}`);

	}




	const data = resp.data.Results[0];
	const direccion2 = data.name;
	const lat = data.lat;
	const lon = data.lon;


	return {
		direccion2,
		lat,
		lon
	}

}
	

	module.exports={
		getLuegarLatLng
	}	