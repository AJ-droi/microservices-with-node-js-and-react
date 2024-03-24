gcloud container clusters get-credentials ticketing-dev

export PATH="Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"

source ~/.zshrc

#pushing docker image auth to gcp
docker tag auth us.gcr.io/ticketing0dev/auth

note:Project ID === ticketing0dev

#Load Balancer
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml


kubectl port-forwarding 4222:4222  


#How to add secrets in Kubernetes
kubectl create secret generic jwt-secret --from-literal JWT_KEY={secret key, dont add curly brace}
kubectl create secret generic flutterwave-secret --from-literal FLW_KEY={secret key, dont add curly brace}