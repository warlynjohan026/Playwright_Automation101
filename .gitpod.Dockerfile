FROM mcr.microsoft.com/playwright:v1.43.1-jammy
RUN apt-get update && apt-get install -y git curl