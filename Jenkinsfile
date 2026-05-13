pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {
        stage('Deploy StreamLine to EC2') {
            steps {
                bat '''
                ssh -o StrictHostKeyChecking=no -i "C:\\JenkinsKeys\\streamline-key.pem" ubuntu@3.142.91.140 "cd ~/Streamline-devops-project && git pull origin master && sudo docker compose down && sudo docker compose up -d --build"
                '''
            }
        }
    }
}
