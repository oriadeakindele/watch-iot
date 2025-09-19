# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only the workspace files needed to install dependencies
COPY pnpm-workspace.yaml package.json tsconfig.base.json ./
COPY apps/auth/package.json apps/auth/
COPY libs ./libs

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Build the auth service
COPY apps/auth ./apps/auth
RUN pnpm -F @watch-iot/auth build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/apps/auth/dist ./dist
COPY --from=builder /app/apps/auth/package.json ./

RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

EXPOSE 3001
CMD ["node", "dist/main.js"]
