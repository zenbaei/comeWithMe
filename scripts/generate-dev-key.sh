# generate developement key to setup with facebook:

# The Android build tools provide a debug signing mode that makes it easier for you to develop and debug your application, while still meeting the Android system requirement for signing your APK. When using debug mode to build your app, the SDK tools invoke Keytool to automatically create a debug keystore and key. This debug key is then used to automatically sign the APK, so you do not need to sign the package with your own key.

# The SDK tools create the debug keystore/key with predetermined names/passwords:
#Keystore name: "debug.keystore"
#Keystore password: "android"
#Key alias: "androiddebugkey"
#Key password: "android"
#CN: "CN=Android Debug,O=Android,C=US"

keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

