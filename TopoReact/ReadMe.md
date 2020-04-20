FILE=$(ls -lart ~/Téléchargements/*aab | tail -1|cut -d ' ' -f9)
echo $FILE
java -jar /opt/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     bundletool-all.jar build-apks --bundle=$FILE --output=monsuperapk.apks

java -jar /opt/bundletool-all.jar install-apks --apks=monsuperapk.apks
