

var WebSocketServer = require(process.argv[3]).Server; //to include the websocket module.  
var address = process.argv[2];
var wss = new WebSocketServer({host: address, port:8000});

var plyrass = [false, false];
var thegame;
wss.on('connection', function(ws) {
	console.log("hi");
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