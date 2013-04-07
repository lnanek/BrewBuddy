
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        $('#brewList').hide();
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
    	
    	setCurrentLocationLat(position.coords.latitude);
    	setCurrentLocationLon(position.coords.longitude);
    	
    	var allStocks = [];

    	for ( var i = 0; i < BARS.length; i++ ) {
    		var bar = BARS[i];
        	for ( var j = 0; j < bar.stock.length; j++ ) {
        		var stock = bar.stock[j];
        		allStocks.push(stock);
        	}    		
    	}
    	allStocks.sort();
    	

    	for ( var i = 0; i < allStocks.length; i++ ) {
    		var stock = allStocks[i];
	
	    	var newListItem = '<li data-icon="myarrow"><a onclick=\'selectStock("' + stock + '")\' >' 
	    			+ stock + '</a></li>';
	    	$('#brewList').append($(newListItem));
    	}
    	
    	$('#brewList').listview("refresh");
    	
    	
        $('#brewList').show();
        $('#loadingMessage').hide();
        
        

        // Show locaction if debug display element present.
        var element = document.getElementById('geolocation');
        if ( element == null ) {
        	return;
        }
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />';
        
    }
    
    function selectStock(stock) {
    	console.log('selected stock');
    	setSelectedBrew(stock);
    	window.location.href = "bars.html";
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
