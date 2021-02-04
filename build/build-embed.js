//=============//
// Main Header //
//=============//
const Habitat = {}

//=========//
// Console //
//=========//
{
	const print = console.log.bind(console)
	const install = (global) => {
		global.print = print
	}
	
	Habitat.Console = {print, install}
}

//======//
// Main //
//======//
Habitat.install = (global) => {
	Habitat.Console.install(global)
}