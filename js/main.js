(function(){var c,b,a;b="5j0r5b7qb7kro03fvka3o8kbq262wwm";a=function(){var g={};var f=window.location.search.substring(1);var h=f.split("&");for(var e=0;e<h.length;e++){var j=h[e].split("=");if(typeof g[j[0]]==="undefined"){g[j[0]]=j[1]}else{if(typeof g[j[0]]==="string"){var d=[g[j[0]],j[1]];g[j[0]]=d}else{g[j[0]].push(j[1])}}}return g}();c=a.username;if(typeof(c)==="undefined"||c===""){$("#twitch-widget").html("<ul><li>Please add a username</li></ul>")}else{$.getJSON("https://api.twitch.tv/kraken/streams/"+c+"?client_id="+b+"&callback=?",function(d){console.log(JSON.stringify(d));if(d.stream){$("#twitch-widget").html("<ul><li><a href='http://twitch.tv/"+c+"' class='user-name'>"+c+"</a></li><li><b>LIVE</b> <span class='online'></span> "+(d.stream.game?"<a href='http://www.twitch.tv/directory/game/"+encodeURIComponent(d.stream.game)+"'>"+d.stream.game+"</a>":"")+"</li><li><span class='viewers'>Viewers: "+d.stream.viewers+"</span></li></ul>")}else{$("#twitch-widget").html("<ul><li><a href='http://twitch.tv/"+c+"' class='user-name'>"+c+"</a></li><li><b>Offline</b></li></ul>")}})}})();