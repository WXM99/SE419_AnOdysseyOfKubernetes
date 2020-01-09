## basic commands
* kubectl version
* kubectl cluster-info
* kubectl get nodes

* kubectl run
* kubectl create
	* kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/jubernetes-bootcamp:v1

* kubectl get deployments
* kubectl proxy

* kubectl get pods
* kubectl describe pods
* kubectl logs $POD_NAME
* kubectl exec $POD_NAME env
* kubectl exec -ti $POD_NAME bash

* kubectl get srvices
	* kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
* kubectl label pod $POD_NAME app=v1
* kubectl delete service -l run=...

### scalling
* kubectl scale deployments/kubernetes-bootcamp --replicas=4

### rolling update
* kubectl set image ...
* kubectl rollout undo ...

## some useful sites

configuration best practice

* https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/
* https://github.com/kubernetes/examples/blob/master/guestbook/all-in-one/guestbook-all-in-one.yaml

kube-scheduler

* https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/
* https://kubernetes.io/docs/concepts/scheduling/kube-scheduler/

scheduler-extender

* https://github.com/kubernetes/community/blob/master/contributors/design-proposals/scheduling/scheduler_extender.md

### some kind useful

* https://thenewstack.io/implementing-advanced-scheduling-techniques-with-kubernetes/
* https://github.com/kubernetes/kubernetes/blob/c014cc274049ab1ab28b3acdd87da68eab5ffb30/examples/scheduler-policy-config.json

