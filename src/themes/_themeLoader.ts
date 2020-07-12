import Default from './Default'

let themes : { [key:string] : any }= { Default }

export function loadTheme ( theme : string ) {
	return themes[ theme ];
}