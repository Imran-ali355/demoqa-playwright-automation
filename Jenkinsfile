pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.49.0-noble'
      args '-u root:root'
    }
  }
  options {
    disableConcurrentBuilds()
    timestamps()
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Imran-ali355/demoqa-playwright-automation.git'
      }
    }
    stage('Install & Setup') {
      steps {
        sh 'node -v && npm -v'
        sh 'npm ci || npm install'
      }
    }
    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test --reporter=list'
      }
    }
  }
  post {
    always {
      echo 'Pipeline execution finished.'
    }
  }
}
