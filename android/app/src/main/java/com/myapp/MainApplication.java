package com.myapp;

import android.app.Application;
import android.content.res.Configuration;

import com.accengage.react.push.RNAccPushGcmPackage;
import com.ad4screen.sdk.A4S;
import com.facebook.react.ReactApplication;
import com.reactlibrary.RNAccDeviceInfoPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactlibrary.RNAccPackage;
import com.reactlibrary.analytics.RNAccDeviceInfoPackage;
import com.reactlibrary.analytics.RNAccStaticListsPackage;
import com.reactlibrary.analytics.RNAccTrackingPackage;
import com.reactlibrary.analytics.RNAccViewsPackage;
import com.reactlibrary.inapp.RNAccInAppPackage;
import com.reactlibrary.push.RNAccPushPackage;

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
            new RNAccDeviceInfoPackage(),
          new RNAccInAppPackage(),
          new RNAccPackage(),
          new RNAccTrackingPackage(),
          new RNAccStaticListsPackage(),
          new RNAccDeviceInfoPackage(),
          new RNAccViewsPackage(),
          new RNAccPushPackage(),
          new RNAccPushGcmPackage()
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
