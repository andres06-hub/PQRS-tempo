import app from "./app";
import dotenv from "dotenv";
//Use 
dotenv.config({path: "./.env"});

const main = () => {
	//Get port
	const PORT = process.env.PORT || 3000;
	//listen
	app.listen(PORT, ()=>{
		console.log(
			`#### SERVER ON PORT ${PORT} ####`
		);
	});
};
//INITIALIZE SERVER
Promise.all(
	//BEFORE: START DB
	[]
).then(() => {
	main();
}).catch(err=>{
	console.log(`ERROR: Initializing server -> ${err}`);
});
