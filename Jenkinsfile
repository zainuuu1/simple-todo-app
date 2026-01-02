pipeline {
    agent any

    stages {
        stage('Get Code') {
            steps {
                git branch: 'main', url: 'https://github.com/zainuuu1/simple-todo-app'
            }
        }

        stage('Build Backend') {
            steps {
                dir('todo-app') {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
