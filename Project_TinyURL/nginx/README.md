## DOCKER IMAGE
wwwumr/tinyurl

## 使用方法

目前需要挂载host.js在nginx的目录下进行启动，host.js内存有后端地址及端口，如：
```js
let backendUrl = "http://111.229.216.12:9001/";
```
启动时需要加 -v [your host.js path]:/usr/share/nginx/public/host.js

完整启动示例如：
```sh
docker run -v /[your path]/SE419/Project_TinyURL/nginx/public/host.js:/usr/share/nginx/public/host.js -p [your port]:80 wwwumr/tinyurl
```