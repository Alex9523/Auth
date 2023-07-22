def dockerImage;
pipeline {
    agent any
    parameters {
        gitParameter branchFilter: 'origin/(develop|staging|master|demo|test)', defaultValue: 'develop', name: 'BRANCH_NAME', selectedValue: 'NONE', type: 'PT_BRANCH', quickFilterEnabled: true, sortMode: 'ASCENDING_SMART', listSize: '5'
    }
    environment {
		GIT_URL = "https://github.com/Alex9523/Authorisation/tree/master"
		JENKINS_SSHKEY = "402ac039-a02f-4f9f-85c0-60944dbb8f50"
		REGISTRY_URL = "https://auth.dev"
		REGISTRY_NAME = "nxs-develop.auth.dev"
		REGISTRY_CRD = "53713aa6-2029-49af-bb88-1418bbc3a07c"
		APP_NAME = "Auth"
		APP_STACK = "mvp-web"
		DOCKER_FILE = ".docker/Dockerfile"
		APP_IMAGE_NAME = "$REGISTRY_NAME/$APP_NAME-$APP_STACK"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: "*/$BRANCH_NAME"]], extensions: [], userRemoteConfigs: [[url: "${GIT_URL}" ]]])
            }
        }
        stage ('Build Image') {
            when {
                branch pattern: 'develop|test',
                comparator: 'REGEXP'
            }
            steps {
                script {
                    switch (BRANCH_NAME) {
                        case 'develop':
                            env.APP_ENV = 'dev';
                            env.API_URL = "https://api.auth.dev/api"
                            env.APP_DOMAIN_NAME = "web.auth.dev"
                            break
                        case 'test':
                            env.APP_ENV = 'test';
                            env.API_URL = "https://api-test.auth.dev/api"
                            env.APP_DOMAIN_NAME = "web-test.auth.dev"
                            break
                    }
                    IMAGE_TAG = "${APP_ENV}.${env.BUILD_NUMBER}".replace('/','-')
                    echo "set image tag: $IMAGE_TAG"

                    echo 'build docker image'
                    dockerImage = docker.build("$APP_IMAGE_NAME:$IMAGE_TAG", "--build-arg API_URL=${API_URL}  --label branch=${BRANCH_NAME} --label buildId=${env.BUILD_NUMBER} --rm -f ${DOCKER_FILE} .")
                }
            }
        }
        stage('Publish') {
            when {
                branch pattern: 'develop|test',
                comparator: 'REGEXP'
            }
            environment {
                APP_IMAGE_TAG = "${APP_ENV}.${env.BUILD_NUMBER}".replace('/','-')
            }
            steps {
                script {
                    echo 'push built image to registry'
                    withDockerRegistry(credentialsId: "${REGISTRY_CRD}", url: "${REGISTRY_URL}")  {
                        dockerImage.push("${APP_IMAGE_TAG}")
                        dockerImage.push("${APP_ENV}.latest")
                    }
                }
            }
        }
        stage ('Deploy to k8s') {
            when {
                branch pattern: 'develop|test',
                comparator: 'REGEXP'
            }
            environment {
                K8S_TOKEN = "kubernetes.token"
                K8S_SERVER_URL = "https://175.15.10.101:6443"
                APP_IMAGE_TAG = "${APP_ENV}.${env.BUILD_NUMBER}".replace('/','-')
            }
            steps {
                script {
                    echo 'prepare k8s manifests, replace placeholder variables'
                    sh "envsubst '\$APP_NAME,\$APP_ENV,\$APP_DOMAIN_NAME,\$APP_IMAGE_NAME,\$APP_IMAGE_TAG' < .k8s/deployment.yaml > $APP_ENV-deployment.yaml"

                    withKubeConfig([credentialsId: "$K8S_TOKEN", serverUrl: "$K8S_SERVER_URL", namespace: "$APP_NAME"]) {
                       echo 'deploy to k8s'
                       sh "kubectl apply -f ${APP_ENV}-deployment.yaml"
                       sh "kubectl get pods,deployments -l app=$APP_NAME-$APP_STACK,env=$APP_ENV"
                    }
                }
            }
        }
    }
    post {
        always {
            sh "docker rmi \$(docker images --format '{{.Repository}}:{{.Tag}}' | grep 'mvp-web')"
            echo 'Clear workspace'
            cleanWs()
        }
    }
}
