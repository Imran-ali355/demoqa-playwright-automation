FROM mcr.microsoft.com/playwright:v1.49.0-noble
WORKDIR /app
COPY . .
RUN rm -rf node_modules package-lock.json && \
    if [ ! -f package.json ]; then npm init -y >/dev/null 2>&1; fi && \
    npm install --no-audit --no-fund -D @playwright/test && \
    test -x ./node_modules/.bin/playwright
CMD ["npx", "playwright", "test"]
