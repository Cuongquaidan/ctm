# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# --- THÊM ĐOẠN NÀY VÀO TRƯỚC LỆNH BUILD ---
# Khai báo để hứng giá trị từ docker-compose
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_BASE_URL_SITES
ARG NEXT_PUBLIC_BASE_URL_CUSTOMERS

# Gán giá trị vào biến môi trường để npm run build đọc được
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_BASE_URL_SITES=$NEXT_PUBLIC_BASE_URL_SITES
ENV NEXT_PUBLIC_BASE_URL_CUSTOMERS=$NEXT_PUBLIC_BASE_URL_CUSTOMERS
# ------------------------------------------

RUN npm run build
# Stage 2: Runner
FROM node:18-alpine
WORKDIR /frontend
COPY --from=builder /frontend/package*.json ./
COPY --from=builder /frontend/node_modules ./node_modules
COPY --from=builder /frontend . 

EXPOSE 5173
CMD ["npm", "run", "start"]