if (typeof AudioContext !== "undefined") {
	var ctx   = new AudioContext();
	var gain  =ctx.createGain();
	var osc   =ctx.createOscillator();
	var current  =null;

	gain.gain.value=0.5;
	osc.type= "square";
	osc.connect(gain);
    //gain.connect(ctx.destination);
	osc.start(ctx.currentTime);

	function startPlaying(e){
		//console.log('started');
		var freq= parseFloat(e.target.dataset.frequency);
		osc.frequency.value=freq;

		if ( !current) {
			gain.connect(ctx.destination);
		}
		current=freq;

	
	}

	function stopPlaying(e){
    
    var freq= parseFloat(e.target.dataset.frequency);
		
		setTimeout(function(){

		if (current === freq) {
			gain.disconnect(ctx.destination);
			current=null;
			//console.log('ended');
		}
		
		},700);

	}
	var reeds =document.querySelectorAll('.reed');
	/*[].forEach.call(reeds,function(reed){
		 reeds.addEventListener('mousedown',startPlaying);
		 reeds.addEventListener('mouseup',stopPlaying);

	})

*/
  for (var i=0; i<reeds.length; i++) {
    // For Computer
    reeds[i].addEventListener('mousedown',startPlaying);
    reeds[i].addEventListener('mouseup',stopPlaying);
    
  }


}

else{
	alert("Please use a Real Browser");
}
