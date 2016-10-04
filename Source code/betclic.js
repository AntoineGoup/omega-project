var championnats = {

}

function bc_get_data() {

http.get("http://xml.cdn.betclic.com/odds_fr.xml", function (res) {
    var data = "";
    res.on("data", function (chunck) {
        data += chunck;
    });

    res.on("end", function () {
        return data;
    });
});

}

function bc_parse_data(str) {
    parseString(str, function (err, data){
        console.dir(data);
        return data;
    });
}