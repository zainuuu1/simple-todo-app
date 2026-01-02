pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {

    stage('Get Code') {
      steps {
        git 'https://github.com/your-username/your-repo.git'
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
