### Prerequisites

- Ensure Docker is installed
- Ensure Microk8s is installed

### Instructions

1. Login to Docker via the CLI
2. Create the YAML file for deployment and service creation
3. `sudo microk8s kubectl apply -f deployment.yaml`
4. `sudo microk8s kubectl get services`
5. Identify the Port between 3XXXX port number; this should be accessible at the host machine's IP address

NOTE: We can then use NGINX on the host machine to take traffic arriving at port 80 and direct it to the 3XXXX port