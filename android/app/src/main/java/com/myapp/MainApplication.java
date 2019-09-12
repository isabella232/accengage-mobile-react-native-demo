package com.myapp;

import android.app.Application;
import android.content.res.Configuration;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
//import com.ad4screen.sdk.A4S;
/*import com.accengage.react.geofences.RNAccGeofencesPackage;
import com.accengage.react.beacons.RNAccBeaconsPackage;
import com.accengage.react.plugin.RNAccFcmPackage;*/

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
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      //packages.add(new RNAccFcmPackage());
/*      packages.add(new RNAccInAppPackage());
      packages.add(new RNAccPackage());
      packages.add(new RNAccTrackingPackage());
      packages.add(new RNAccStaticListsPackage());
      packages.add(new RNAccDeviceInfoPackage());
      packages.add(new RNAccViewsPackage());
      packages.add(new RNAccPushPackage());
      packages.add(new RNAccDeviceTagPackage());
      packages.add(new RNAccStatesPackage());
      packages.add(new RNAccControlPackage());*/
      return packages;
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
    super.onConfigurationChanged(newConfig);
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public void onLowMemory() {
    super.onLowMemory();
  }

  @Override
  public void onTerminate() {
    super.onTerminate();
  }
}
