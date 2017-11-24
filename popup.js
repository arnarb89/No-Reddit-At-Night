var thearray = [];
NoRedditAtNightGet();

var inputs = document.getElementsByClassName('inputMins');

for(var i = 0; i<inputs.length;i++){
	inputs[i].addEventListener('input',function(){
		if(this.value<10)this.value = "0"+this.value;
		if(this.value.length>2) this.value = this.value.slice(this.value.length-2,this.value.length);
		if(this.value>60)this.value = 60; //needs work
	});
}

inputs = document.getElementsByClassName('inputHours');

for(var i = 0; i<inputs.length;i++){
	inputs[i].addEventListener('input',function(){
		if(this.value<10)this.value = "0"+this.value;
		if(this.value.length>2) this.value = this.value.slice(this.value.length-2,this.value.length);
		if(this.value>23)this.value = 23; //needs work
	});
}

document.getElementById('submit').onclick = function (){
	var from = Number(document.getElementById('fromHour').value)+document.getElementById('fromMin').value/100;
	var to = Number(document.getElementById('toHour').value)+document.getElementById('toMin').value/100;

	var object = {
		from: from,
		to: to
	};

	thearray.push(object);
	NoRedditAtNightSave();
};



