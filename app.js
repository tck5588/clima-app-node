const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')


const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Direccionde la ciudad para obtener el clima',
		demand: true
	}
}).argv


// lugar.getLuegarLatLng(argv.direccion).then(console.log)

// clima.getClima('-40.750000', '-64.129997').
// then(console.log)
// .catch(console.log)

const getInfo = async(direccion)=>{

	try{

		const coords = await lugar.getLuegarLatLng(direccion);
		const temp = await clima.getClima(coords.lat, coords.lon);

		return `El clima de ${coords.direccion2} es de ${temp} °C`;

	}catch{

		return `No se pudo determinar el clima de ${coords.direccion2}`;

	}



}


getInfo(argv.direccion)
.then(console.log)
.catch(console.log)