package com.myapp;

import android.app.Application;
import android.content.res.Configuration;


import com.facebook.react.ReactApplication;
import com.accengage.react.geofences.RNAccGeofencesPackage;
import com.accengage.react.beacons.RNAccBeaconsPackage;
import com.accengage.react.plugin.RNAccFcmPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.ad4screen.sdk.A4S;
import com.accengage.react.RNAccPackage;
import com.accengage.react.analytics.RNAccDeviceInfoPackage;
import com.accengage.react.analytics.RNAccStaticListsPackage;
import com.accengage.react.analytics.RNAccTrackingPackage;
import com.accengage.react.analytics.RNAccViewsPackage;
import com.accengage.react.analytics.RNAccDeviceTagPackage;
import com.accengage.react.analytics.RNAccStatesPackage;
import com.accengage.react.inapp.RNAccInAppPackage;
import com.accengage.react.push.RNAccPushPackage;
import com.accengage.react.control.RNAccControlPackage;
import com.accengage.react.geofences.RNAccGeofencesPackage;
import com.accengage.react.beacons.RNAccBeaconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNAccFcmPackage(),
            new RNAccInAppPackage(),
            new RNAccPackage(),
            new RNAccTrackingPackage(),
            new RNAccStaticListsPackage(),
            new RNAccDeviceInfoPackage(),
            new RNAccViewsPackage(),
            new RNAccPushPackage(),
            new RNAccDeviceTagPackage(),
            new RNAccStatesPackage(),
            new RNAccControlPackage(),
            new RNAccGeofencesPackage(),
            new RNAccBeaconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    if (A4S.isInA4SProcess(this)) {
      return;
    }
    super.onConfigurationChanged(newConfig);
  }

  @Override
  public void onCreate() {
    if (A4S.isInA4SProcess(this)) {
      return;
    }
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public void onLowMemory() {
    if (A4S.isInA4SProcess(this)) {
      return;
    }
    super.onLowMemory();
  }

  @Override
  public void onTerminate() {
    if (A4S.isInA4SProcess(this)) {
      return;
    }
    super.onTerminate();
  }
}
