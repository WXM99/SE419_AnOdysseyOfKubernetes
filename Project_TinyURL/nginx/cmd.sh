h="localhost"
p="8080"

if [ -n $1 ]; then
    h=$1
fi

if [ -n $2 ]; then
    p=$2
fi

echo "let backendUrl = 'http://$h:$p/';" > ./public/host.js 

nginx -g daemon off