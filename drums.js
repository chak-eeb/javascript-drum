
window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	// we use the backticks to be able to use ES6 template strings. the brackets are used to select 
	// an attribute.
	if(!audio) return; //to stop the function from running
	audio.currentTime = 0;  // to cut the sound short if it takes too long to play back
	audio.play();
	key.classList.add("playing");
})