function NoRedditAtNightSave(){
	chrome.storage.sync.set({
	    NoRedditAtNight: thearray
	}, function() {
	    // Update status to let user know options were saved.
	    var status = document.getElementById('status');
	    if(status){
	    	status.textContent = 'Saved.';
		    setTimeout(function() {
		      status.textContent = '';
		    }, 750);
		}	
	});
}

function NoRedditAtNightGet(init){

	chrome.storage.sync.get({
	    NoRedditAtNight: []
	  }, function(items) {
	    thearray = items.NoRedditAtNight;
	    if(init)init();
	});

}