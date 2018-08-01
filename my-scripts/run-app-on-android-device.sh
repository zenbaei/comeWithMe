#list usb connections
lsusb 
#add in idVendor
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="17ef", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
#adb devices to know device name
#to allow mobile connection to development server!
adb -s SOLRTOMVNFVSKR6T reverse tcp:8081 tcp:8081
# to open dev menu on device
# adb shell input keyevent 82
# or shake device will open dev menu
