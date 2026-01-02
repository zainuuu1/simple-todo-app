pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {

    stage('Get Code') {
      steps {
        git 'https://github.com/zainuuu1/simple-todo-app'
      }
    }

    stage('Build Backend') {
      steps {
        dir('todo-app') {
          sh 'npm install'
          sh 'npm run build'
          stash name: 'backend-dist', includes: 'dist/**'
        }
      }
    }

  }
}
