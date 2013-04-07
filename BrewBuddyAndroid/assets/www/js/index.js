
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

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
