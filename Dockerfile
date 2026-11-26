FROM mcr.microsoft.com/playwright:v1.49.0-noble
WORKDIR /app
COPY . .
RUN if [ ! -f package.json ]; then npm init -y >/dev/null 2>&1; fi && \
    if ! node -e "require.resolve('@playwright/test')" >/dev/null 2>&1; then npm install --no-audit --no-fund -D @playwright/test; fi
CMD ["npx", "playwright", "test"]
