## 记录kubernetes搭建

### microk8s的dashboard

sudo snap install microk8s --classic --channel=1.16/stable

sudo apt-get install docker.io

sudo docker pull wwwumr/tinyurl
sudo docker pull wangzhiyuan/backup

microk8s.enable dns
microk8s.enable dashboard

// 这里要关掉filter
microk8s.kubectl proxy --address=0.0.0.0 --disable-filter=true

// 这里是把dashboard的服务暴露出来，可以用microk8s.kubectl get svc -n kube-system看到service的信息，把报露出的端口号直接访问 https://ip:port/
microk8s.kubectl patch svc kubernetes-dashboard -p '{"spec":{"type":"NodePort"}}' -n kube-system

登录dashboard的时候需要去拿一个token，用下面两条指令获得
token=$(microk8s.kubectl -n kube-system get secret | grep default-token | cut -d " " -f1)
microk8s.kubectl -n kube-system describe secret $token

### add-ons
测试dns

新建一个pod

microk8s.kubectl run curl --image=radial/busyboxplus:curl -i

然后去nslookup kubernetes.default

不能reslove就是dns没配好

登录kubernetes的界面需要用户名和密码
用这个查看
microk8s.kubectl config view

访问dashboard与grafana
microk8s.kubectl cluster-info
找到对应的url


### 部署镜像
先尝试部署的是后端的镜像，写后端的同学把后端打包好之后，想着想用deployment部署，然后建立一个service，配置文件可以详情tiny.yaml, tiny-service.yaml
