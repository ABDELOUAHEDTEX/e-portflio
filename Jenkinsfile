pipeline{
    agent : any
    environment {
        IMAGE_NAME="eportfolio"
        CONTAINER_NAME="eportfolio_container"
    }
    stages{
        stage('checkout'){
            steps{
                git "https://github.com/ABDELOUAHEDTEX/e-portflio.git"
            }
        }
        stage('Install Node Modules'){
            steps{
                bat 'npm install'
            }
        }
         stage('build front '){
            steps{
                bat 'npm run build'
            }
        }
       
        stage('build docker image '){
            steps{
                bat "docker build -t %IMAGE_NAME% ."
            }}
         stage('deploy'){
            steps{
                 steps {
                script {
                    def containerRunning = bat(script: "docker ps -q -f name=%CONTAINER_NAME%", returnStdout: true).trim()
                    if (containerRunning) {
                        bat "docker stop %CONTAINER_NAME%"
                        bat "docker rm %CONTAINER_NAME%"
                    }
                    bat "docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%"
                }
            }
            }
        }
    }

}