import { Application,Router } from "express";

//Guardamos las Rutas-Endpoints
const _routes:[Router][] = [
	//[]
];
//Usar cada Ruta-Endpoint Guardado
export const routes = (app:Application) => {
	//Pasamos por cada ruta guardada
	_routes.forEach(route => {
		//Obtenemos la ruta
		const [url] = route;
		//Usamos la ruta
		app.use(url);
	});
};