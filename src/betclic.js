var championnats = {

}

http.get("http://xml.cdn.betclic.com/odds_fr.xml", function (res) {
    var data = "";
    res.on("data", function (chunck) {
        data += chunck;
    });
    res.on("end", function () {
        bc_parse_data(data);
    } );
    res.on("error", function (err) {
        console.log("Got error : " + err)
    })
});

function bc_parse_data(str) {
    parseString(str, function (err, data){
        if (err) {
            console.log("Got error : " + err);
        } else {
            console.dir(data);
            console.dir("Done.");
        }
    });
}