/**
 * New node file
 */
//child process
var child_process = require('child_process');
var workerHandler = {};

process.on('message', function(msg){
	//console.log(workerHandler);
	console.log('Boss Got message from www:', msg);
	/*if(msg.action){
		if(msg.action == deploy){
			var worker = child_process.fork('./worker/taskWorker.js');
			workerHandler[worker.pid] = worker;
			worker.on('message', function(msg) {
				console.log('Boss Got message from Worker:', msg);
			});
			
			worker.on('exit', function(){
				delete workerHandler[worker.pid];
				worker = null;
			})
			//console.log(worker.pid);
			//console.log(process.pid);
		}
		if(msg.action == "exit"){
			worker.send(msg);
		}
	}*/
});

function checkTask(){
	var http = require('http');
	var options = {
			  host: '104.199.156.18',
			  path: '/mod/task/gettask/deploy',
			  port: '3000'
			};

	callback = function(response) {
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});
	
		response.on('end', function () {
			console.log(str);
		});
	}
	var req = http.request(options, callback);
	req.end();
}

/*var worker = child_process.fork('./worker/taskWorker.js');
workerHandler[worker.pid] = worker;
worker.on('message', function(msg) {
  console.log('Boss Got message from Worker:', msg);
});*/


setInterval(function(){
	checkTask();
	/*if(worker){
		worker.send({ hello : 'worker, I am boss' });
	}*/
	process.send({ hello : 'www, I am boss' });
}, 15000);