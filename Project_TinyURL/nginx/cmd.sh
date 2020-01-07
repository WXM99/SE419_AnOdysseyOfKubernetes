host="localhost"
port="8080"
if [ -n $h ]; then
    echo $h
    host=$h
else
    echo "no host"
fi
if [ -n $p ]; then
    echo $p
    port=$p
else
    echo "no port"
fi
echo "let backendUrl = 'http://$host:$port/';" > /usr/share/nginx/public/host.js 
nginx
