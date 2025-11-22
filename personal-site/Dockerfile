# -------------------------------------------------------
# 1. Build Stage
# -------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app


# Install dependencies first (better caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install

# Copy the entire app
COPY . .

# Build using Next.js standalone mode
RUN npm run build

# -------------------------------------------------------
# 2. Production Runner
# -------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]
