var hype = "\
%                                                                                                                     <br>\
%                                                                                                     %%%%%%%%%%%%%%%%<br>\
%                                                                                                                   %%<br>\
%                                                                                                                     <br>\
% ^                                                                                                         %%%%%%%%%%<br>\
.:::                                                                                            .:::                  <br>\
^~@@                                                   ^?55J!.                                 .^#@!                  <br>\
%%&@                                                    .&@7                                     J@!               %%%<br>\
%%&@:^7Y5^  :?J?:  .7J!^7YJ.~?YJ:    .!7!7?.  ^J5~:7G7   &@~         .77!!?^    .7!!?J:     ~?!!!B@!                  <br>\
%%&@~. .#@^  :@@:   55  .@@:%%.5@5  7@7%%%P@!  J@B :B5   &@~        J@?%%%:&&.  &&   &@.  ^@B.%%%B@!                  <br>\
%%&@    J@7   .@&  ~J    @&%%%%%&@^ @@!~!~?BJ  !@Y      ^&@~       ^@&%%%%%?@P  .:'''#@^  @@.%%%%Y@!                  <br>\
%%&@^   J@!    :@#~5     @&%%%%%@@. &@.        !@J       &@~     :P^@@%%%%%5@J ~&G.%%G@:  &@^%%%%Y@!  %%%%%%%%%%%%%%%%<br>\
%:@@~  .P@5.    ~@B      @@7..:G#^  :#&7::^?~  Y@G.    .^@@5..::?@# ^#G:..?&J  J@B?@?B@?. .B&?:::B@5.                 <br>\
%::::. .:::.    :P       @&::^^.      .~~~:   .::::    .::::::::::.   .&7&:      .GG: :~.   .~::5'::.                 <br>\
%           ~#?~J       :@@:                                                                                          <br>\
%           .~~.       .^~~~:                                                                                   %%%%%%<br>\ ";

				
function textMatrix(container) {
	var str = hype;
	var ret = "";
	var tab = new Array(str.length);
	var spanS = "<span style=\"color:#E3E3E3\">";
	var spanSb = "<span style=\"color:#0F6700\">";
	var spanE = "</span>";
  
	for (var i = 0; i< str.length; i++) {
		if (str.charAt(i) == " " || str.charAt(i) == "^") tab[i] = randomLetter(1);
		else tab[i] = str.charAt(i);
	}
  
	var count = 0;
	var rets = "";
	var last = new Array(str.length);
	
  var interval = setInterval(function() {
	  var rand = Math.floor(Math.random() * 100) + 70;
	  var lote = new Array(rand);
	
    for (var i=0; i < rand; i++) {
		  lote[i] = Math.floor(Math.random() * str.length);
		  if (str.charAt(lote[i]) == " " || str.charAt(lote[i]) == "^") tab[lote[i]] = randomLetter(1);
  	  else {
			  i--;
			  continue;
		  }
	  }
    
	  ret = "";						
	  for (var i = 0; i < str.length; i++) {
		  if (str.charAt(i) == " " || str.charAt(i) == "^") { 
			  var change = false;
			  for (var j = 0; j < rand; j++) {
				  if (lote[j] == i) {
					  if (str.charAt(i) == "^") ret += "<span style=\"color:#EC61F8\">" + tab[i] + spanE;
					  else {
						  if ((Math.floor(Math.random() * 100) + 0) > 50) {
                ret += "<span style=\"background:#E3E3E3;color:#FFFFFF;\">" + tab[i] + spanE;
              }
						  else ret += spanS + tab[i] + spanE;
					  }
					  change = true;
					  break;
				  }
			  }
			  if (!change) ret += spanS + tab[i] + spanE;
		  } else if (str.charAt(i) == "%") ret += "&nbsp";
	    else ret += str.charAt(i);
    }
			
    document.getElementById(container).innerHTML = ret;
  }, 100); 
}
				
function randomLetter(length) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
	return text;
}


