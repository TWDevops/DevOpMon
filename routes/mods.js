/**
 * Module Auto Loading.
 * 
 * 在程式起動時,會自動搜尋,
 * 並載入模組.
 */
var express = require('express');
var router = express.Router();

console.log("This is mod.js" + config.get("MOD_LIST"));
for (var modIdx in config.get("MOD_LIST")){
	console.log("modules: " + config.get("MOD_LIST")[modIdx]);
	var mod = require("../modules/" + config.get("MOD_LIST")[modIdx] + ".js");
	//console.log(Object.keys(mod.getHandler).length);
	//console.log(Object.keys(mod.postHandler).length);
	if( typeof mod.getHandler !==  'undefined' && Object.keys(mod.getHandler).length >0){
		addGet(modIdx,mod.getHandler);
	}
	if( typeof mod.postHandler !==  'undefined' && Object.keys(mod.postHandler).length >0){
		addPost(modIdx,mod.postHandler);
	}
}

function addGet(idx, handle){
	console.log("Registing GET Method");
	for (var key in handle){
		console.log( "Mod " + idx + " key: " + key);
		if(typeof handle[key] === 'function'){
			console.log("Mod " + idx + " GET method register: " + "/" + idx + "/" + key);
			router.get("/" + idx + "/" + key, handle[key]);
		}
	}
}

function addPost(idx, handle){
	console.log("Registing POST Method");
	for (var key in handle){
		console.log( "Mod " + idx + " key: " + key);
		if(typeof handle[key] === 'function'){
			console.log("Mod " + idx + " POST method register: " + "/" + idx + "/" + key);
			router.post("/" + idx + "/" + key, handle[key]);
		}
	}
}

module.exports = router;