pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Imran-ali355/demoqa-playwright-automation.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm ci || npm install'
      }
    }
    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test --reporter=list'
      }
    }
  }
}
