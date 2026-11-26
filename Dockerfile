FROM mcr.microsoft.com/playwright:v1.49.0-noble
WORKDIR /app
COPY . .
RUN if [ ! -f package.json ]; then npm init -y >/dev/null 2>&1; fi && \
<<<<<<< HEAD
    if ! node -e "require.resolve('@playwright/test')" >/dev/null 2>&1; then npm install --no-audit --no-fund -D @playwright/test; fi
=======
    npm install --no-audit --no-fund -D @playwright/test && \
    test -x ./node_modules/.bin/playwright
>>>>>>> fefa8c6 (chore: fix Jenkinsfile & push Playwright suite)
CMD ["npx", "playwright", "test"]
