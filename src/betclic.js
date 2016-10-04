

function bc_get_data() {
    var node_xml = require("xml2js").parseString;
http.get("http://xml.cdn.betclic.com/odds_fr.xml", function (res) {
    var body = "";
    res.on("data", function (chunck) {
        body += chunck;
    });

    res.on("end", function () {
        alert(body);
        node_xml(body, function (err, data) {
            alert("ok");
            console.dir(data);
            alert(data.sports.$["file_date"]);
        });
    });
});

}