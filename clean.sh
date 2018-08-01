## Kill js server
PID=lsof -i :8081 | cut -d " " -f 2
sudo kill -9 $PID

rm -r ./node-modules/

./android/gradlew clean
