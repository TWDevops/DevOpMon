/**
 * New node file
 */
var headHander = {}
var getHandler = {};
var postHandler = {};

function runTask(req, res, next) {
	var resMsg = {};
	console.log("Task api");
	if(req.params.action){
		resMsg = {"hello":req.params.action};
		boss.send({'action':req.params.action});
		res.send(resMsg);
	}
}
getHandler["run/:action"] = runTask;

exports.headHander = headHander;
exports.getHandler = getHandler;
exports.postHandler = postHandler;