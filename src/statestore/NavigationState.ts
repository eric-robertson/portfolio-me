/* handles storage and updating of components regarding the navbar and url */

let url = window.location.href.split('/');
let navOption = url[3];
let navSubOption = url[4]
let appRerenderCallback : any ;


export function setRerenderCallback ( a : any ) {
	appRerenderCallback = a;
}

export function getNavOption () {
	return navOption;
}
export function getNavSubOption () {
	return navSubOption;
}

export function gotoNavOption ( goto : string ) {
	window.history.pushState('', `ProfileMe - ${goto}`, `/${goto}`);
	navOption = goto.split('/')[0];
	navSubOption = goto.split('/')[1]
	appRerenderCallback();
}

