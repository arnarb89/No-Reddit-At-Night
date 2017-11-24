var thearray = [];



function init(){
	var d = new Date(); // for now
	time = d.getHours() + (d.getMinutes()/100);

	/*if(time>23||time<6){
		window.open("http://lmgtfy.com/?q=I+can%27t+let+you+do+that+Kyle.","_self");
	}*/
	

	for(var i = 0;i<thearray.length;i++){
		if(time>thearray[i].from&&time<thearray[i].to){
			console.log('test3');
			window.open("http://lmgtfy.com/?q=I%27m+afraid+I+can%27t+let+you+do+that+Kyle.","_self");
		}
	}
}
NoRedditAtNightGet(init);