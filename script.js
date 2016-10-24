var timer;
function showClock(){

	var	timeControl = document.getElementById("timeControl"), 
		now = new Date(), 
		cur_time = now.toLocaleTimeString(),
		cur_time_split = cur_time.split(":"),
		hous = +cur_time_split[0]+1,
		time_res = '';
		
		cur_time_split[0] = hous;
		time_res = cur_time_split.join(':');
		timeControl.innerHTML = time_res;
}

function startClock() {
	timer = window.setInterval('showClock()',1000);
}

function stopClock() {
	window.clearInterval(timer);
	timer = null;
}
