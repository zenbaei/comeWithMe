## Kill js server

PID=lsof -i :8081 | cut -d " " -f 2
for i in $PID
do
	sudo kill -9 $i
done

rm -r ./node-modules/

cd android && ./gradlew clean && cd..
