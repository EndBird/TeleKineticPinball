var WebSocketServer = require('/Users/HuynhsComputer/Documents/csc309class/~ylzhang/csc309w16/node/node_modules/ws').Server;
//todo: upload a version where other users input own ws address.  
var wss = new WebSocketServer({host: "MinhsAir.local", port:8000});

var plyrass = [false, false];
var thegame;
wss.on('connection', function(ws) {
	ws.on('message', function(message) {
		if (message =="ice hockey!") {  //this means the game has been opened.  
			thegame = ws;
			
		}
		else if (message=="left") {
			
			var stringcomm = {"player": ws.player, "move":"up"};
			thegame.send(JSON.stringify(stringcomm));

		}
		else if (message=="right"){
			
			var stringcomm = {"player": ws.player, "move":"down"};
			thegame.send(JSON.stringify(stringcomm));
		}
		else if (message=="play left"){ //player wants to be player A
			
			if (!plyrass[0]) {
				plyrass[0]=true;
				ws.player="A";
			}
			else {
				plyrass[1]=true;
				ws.player="B";
				
			}
		}
		else if (message=="play right"){ //player wants to be player B

			if (!plyrass[1]) {
				plyrass[1]=true;
				ws.player="B";
			}
			else {
				plyrass[0]=true;
				ws.player="A";
				
			}

		}
		else { //the tilting of the phone is sent to the game. 
			
			thegame.send(message);
		}

	});



});