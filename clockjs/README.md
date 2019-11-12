this exercise can help you learn a lot of little interesting and 
useful things tha you can use in different projects.

CSS:
----
1. To center a div we can use top and left 50%. but you have to add the 
transform: translateX or Y (-50%) this way the item is moved back 505 of its width.

2. To rotate an element, in this case the hand of the clock; we have in addition of using the 
transform: rotate(xdeg); we have to add 
transform-origin: bottom;
this way the item rotates from its bottom not its center.

JAVASCRIPT:
-----------
We need to call a certain function every second>>
setInterval(function, 1000)
 we also use the Date methods:
 https://www.w3schools.com/jsref/jsref_getseconds.asp

 we use the ratio so that javascript knows where to place the hand
 example: secondsRatio = currentDate.getSeconds()/60
  currentDate.getSeconds() will give us the seconds 27 for example
  we divide it by 60 gives us 45% we multiply this number by 360deg
  (the clock) and we get 162 deg. that's where the seconds hand should be placed
  at that particular moment and so on. the same thing for minutes and hours.

  for the minutes and hours hands not to jump by a whole minute and a whole hour we add 
  secondsRatio to the getMinutes and minutesRatio to the getHours.

