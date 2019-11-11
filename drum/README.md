The point of this exercise is to learn how to link
an event (keydown) to an audio (drum sound) using javascript.

the css is not really important. we still have to make it decent though.

in the html file we create a div and 8 or 9 div's inside it.
inside each of those div's we add a kbd tag with a letter inside and a span with
the name of the sound.

during this exercise we learned how to add custom attributes using: data-something
in this case data-key which we add to the div that contains the letter and at the bottom
to the audio element that we want to associate that letter.

to get the keyCode associated with each character in the keyboard go to:
http://keycode.info/

in the javascript file:
we need to create an eventlistener ("keydown")
two variables that contain the targets.
audio and key

to play the audio file we use the play() methode on the audio target 
audio.play();
we can change the appearance of the letter box when it's pressed by adding a class to its div
element:  key.classList.add("playing") and then remove it when the transition ends:

const keys = document.querySelectorAll(".key");
	keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

	Thank You WES Bos.