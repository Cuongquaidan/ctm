# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /backend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Lệnh này sẽ tạo ra thư mục dist (hoặc build) chứa file .js
RUN npm run build
# Stage 2: Runner
FROM node:18-alpine
WORKDIR /backend
COPY --from=builder /backend/package*.json ./
# Chỉ cài dependencies cần thiết để chạy (bỏ qua devDependencies)
RUN npm install --production
COPY --from=builder /backend/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]