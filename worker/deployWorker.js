/**
 * New node file
 */
console.log(process.pid)
process.on('message', function(msg){
	console.log('Worker Got message from Boss:', msg);
	if(msg.action && msg.action == "exit"){
		process.exit(0);
	}
});

setInterval(function(){
	process.send({ hello : 'boss, I am Worker' });
}, 10000);
