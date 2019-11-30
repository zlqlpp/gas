




alias gas='cd /root/git_zlq/gas;                                                         \
git pull;                                                                                            \
mvn clean package;                                                                                   \
/root/apache-tomcat-7.0.96/bin/shutdown.sh;                                                          \
rm -rf /root/apache-tomcat-7.0.96/webapps/*;                                                      \
rm -rf /root/apache-tomcat-7.0.96/webapps/ROOT;                                                      \
rm -rf /root/apache-tomcat-7.0.96/logs/*;                                                            \
cp /root/git_zlq/gas/target/wjgas.war /root/apache-tomcat-7.0.96/webapps;     \
rm -rf /root/apache-tomcat-7.0.96/work/*;                                                            \
rm -rf /root/apache-tomcat-7.0.96/temp/*;                                                            \
rm -rf /var/lib/tomcat/webapps/*;                                                                    \
/root/apache-tomcat-7.0.96/bin/startup.sh; \