#to know console port:
PORT=`adb devices | grep emulator | cut -d "-" -f 2 | cut -d "	" -f 1`
echo emulator console is using port $PORT

#to get authentication token, list or create if not exist, or remove token:
TOEKN=sudo more ~/.emulator_console_auth_token

if [[ $TOKEN != "" ]]; then 
	echo recreating emulator_console_auth_token file without token
	sudo rm ~/.emulator_console_auth_token
	sudo touch ~/.emulator_console_auth_token
fi

CMD='geo fix 31.4400768 30.0056576'

(
sleep 1
echo $CMD 
) | telnet 127.0.0.1 $PORT

#in case of authentication enter 'auth 088Y31gyhACq/jOi'
