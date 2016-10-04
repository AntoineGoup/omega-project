function readResponse() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            alert("ok");
            alert(xhttp.responseXML.getElementsByTagName("sports")[0].file_date);
        }
};
xhttp.open("GET", "odds.xml", true);
xhttp.send();
}