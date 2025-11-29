FROM node:22-alpine as build
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.0.0

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

FROM nginx:alpine
COPY --from=build /app/dist/crm-web-ui/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
