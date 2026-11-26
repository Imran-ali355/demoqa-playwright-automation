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
        sh 'if [ ! -f package.json ]; then npm init -y; fi'
<<<<<<< HEAD
        sh 'node -e "require.resolve(\'@playwright/test\')" || npm install -D @playwright/test'
=======
        sh 'npm install --no-audit --no-fund -D @playwright/test'
>>>>>>> fefa8c6 (chore: fix Jenkinsfile & push Playwright suite)
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
