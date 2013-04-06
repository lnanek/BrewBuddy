package com.brewbuddy;

import org.apache.cordova.DroidGap;

import android.app.NotificationManager;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;

public class BrewBuddyActivity extends DroidGap {
		
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);  
        super.init();           
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
