
function get_betclic(sport, league) {

http.get("http://xml.cdn.betclic.com/odds_fr.xml", function (res) {
    var data = "";
    var pck = 0;
    res.on("data", function (chunck) {
        data += chunck;
        pck++;
    });
    res.on("end", function () {
        console.log(pck);
        parseString(data, function (err, data){
            if (err) {
                console.log("Got error : " + err);
            } else {
                var sports = data.sports;
                for (var i = 0; i < sports.sport.length; i++) {
                    if (sports.sport[i].$["name"] == sport) {
                        var sport_DOM = sports.sport[i];
                    }
                }
                if (typeof sport_DOM == "undefined") {
                    console.log("Sport can't be found on betclic.js");
                }
                var leagues = sport_DOM.event;
                for (var i = 0; i < leagues.length; i++) {
                   console.dir(leagues[i].$["name"]);
                   if (leagues[i].$["name"] == league) {
                        var league_DOM = leagues[i];
                        break;
                    }
                }
                if (typeof league_DOM == "undefined") {
                    console.log("League can't be found");
                }
                console.dir(league_DOM);
                console.dir("Done.");
            }
        });
    });

    res.on("error", function (err) {
        console.log("Got error : " + err)
    })
});
}

get_betclic("Football", "Brésil Campeonato");

