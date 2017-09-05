# EndBird's TeleKineticPinball Game

## Purpose of the Project:  
* To get experience developing in javascript and html, to get hands-on experience utilizing jQuery, WebSocket, Node.js, and Canvas. 
* To further enhance my understanding and knowledge of web technologies. 
* To incorporate my intellect and technology together to create something meaningful and interesting. 


## Introduction:
- Pinball.html is the code of the game interface. 
- gameserver.js is the Node.Js code of the game server.  Its purpose is to send control signals from the mobile phone to move the player's disc in the game on the computer. 
- mobilecontrols.html is the interface for moving the player with buttons on the phone screen.   
- motioncontrol.html is the interface for moving the player by tilting the phone.
- the physics is pseudo-realistic.  It was challenging (but fun) to apply vector calculus to simulate ball movements. 
- **All the game's WebSockets always bind to port 8000 of whatever address you give, so make sure they are free to use.**  

## How To Launch Game:
1. If we want to play game on computer using keyboard, then just launch the Pinball.html on the computer and use the arrow keys for right disc, and awsd for left disc.  
2. If we want to play with the phone as remote controller (note that I have only made this app on the MacBook Air and tested it on the Air, if you are a windows user I do not know whether it will work for you), save the the files somewhere but make sure that your localhost directory is an ancestor of your files' directory. We will be working with files under this directory only. First launch gameserver.js on terminal (If you do not have Node.js then you must install it with websocket incuded).  Launch it with 2 arguments. The first is an address that gameserver.js can bind to that is accessible on your phone.  For me, i used the name given in Systems Preferences > Sharing on the macbook air. Second is the path to your websocket module. After that open pacman.html and enter the same thing you wrote for gamerserver.js. Then, On your phone, open a web browser and write the full path to mobilecontrols.html or motioncontrol.html, starting with localhost as the first directory of path.  But replace localhost with the address you wrote. So it could be like, zippa.local/game/motioncontrols.html.  Now give the same address as gameserver.js to bind to. Enjoy the game.  











