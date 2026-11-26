pipeline {
  agent any
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
        sh 'npm ci || npm install'
        sh 'npx playwright install chromium || true'
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
