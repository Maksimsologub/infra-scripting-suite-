FROM node:18-slim

# Install Bash and system tools
RUN apt update && apt install -y curl procps

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install Node dependencies (for sitewatch)
RUN npm install node-fetch

# Start both health scripts
CMD bash process_watchdog.sh sleep "echo Restarted sleep" & node sitewatch.mjs
