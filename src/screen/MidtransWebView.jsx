import React from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

//26691b80-dbc7-440e-b7f7-e275bbdcb8b0 Token MidTrans
const DEFAULT_URI = 'https://app.sandbox.midtrans.com/snap/v2/vtweb/';

const WebviewComponent = ({snaptoken}) => {
  const [isLoading, setLoading] = React.useState(true);

  const uri = DEFAULT_URI + snaptoken;

  return (
    <View style={styles.wrapper}>
      <WebView
        source={{uri: uri}}
        onLoad={() => setLoading(false)}
        javaScriptEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        domStorageEnabled={true}
        cacheEnabled={true}
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
        cacheMode="LOAD_NO_CACHE"
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    right: 0,
    left: 0,
  },
});

export default WebviewComponent;
