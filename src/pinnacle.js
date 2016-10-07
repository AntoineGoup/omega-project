function get_pinnacle(sport,league){ 

	var http = require('http'),
	    fs = require('fs'),
	    xml2js = require('xml2js'),
	    parser = new xml2js.Parser();
	
	
	http.get('http://xml.pinnaclesports.com/pinnacleFeed.aspx?sportType=' + sport + '&sportSubType=' + league, function(res) {
	    var response_data = '';
	    res.setEncoding('utf8');
	    res.on('data', function(chunk) {
	        response_data += chunk;
	    });
	    res.on('end', function() {
	        parser.parseString(response_data, function(err, result) {
	            if (err) {
	                console.log('Got error: ' + err.message);
	            } else {
	                console.log(result.pinnacle_line_feed.events[0].event);
	                console.log('Done.');
	            }
	        });
	    });
	    res.on('error', function(err) {
	        console.log('Got error: ' + err.message);
	    });
	});
}

get_pinnacle('Soccer','Brazil Ser A'); 
