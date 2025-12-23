# 🐳 HƯỚNG DẪN CHI TIẾT: ARG, ENV, ENVIRONMENT TRONG DOCKER

## 📚 MỤC LỤC

1. [Khái niệm cơ bản](#1-khái-niệm-cơ-bản)
2. [Quan hệ Image vs Container](#2-quan-hệ-image-vs-container)
3. [ARG vs ENV vs environment](#3-arg-vs-env-vs-environment)
4. [Ví dụ thực tế](#4-ví-dụ-thực-tế)
5. [Khi nào cần gì?](#5-khi-nào-cần-gì)
6. [Setup cho project CTM](#6-setup-cho-project-ctm)

---

## 1. KHÁI NIỆM CƠ BẢN

### 🎯 ARG (Build Arguments)

```dockerfile
ARG NODE_VERSION=18
ARG API_URL
```

**Đặc điểm:**

-   ⏰ **Thời điểm**: Chỉ tồn tại khi **BUILD IMAGE**
-   🔄 **Lifecycle**: Biến mất sau khi build xong
-   📦 **Lưu trữ**: Giá trị có thể được "nướng" vào image qua ENV
-   🎨 **Use case**: Tùy chỉnh quá trình build (version, URL, flags)

**Ví dụ:**

```bash
# Truyền ARG khi build
docker build --build-arg API_URL=https://api.example.com -t myapp .
```

---

### 🌍 ENV (Environment Variables trong Dockerfile)

```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
```

**Đặc điểm:**

-   ⏰ **Thời điểm**: Đặt khi BUILD, tồn tại khi RUN
-   🔄 **Lifecycle**: Luôn có trong container
-   📦 **Lưu trữ**: Giá trị được lưu TRONG image (immutable)
-   🎨 **Use case**: Config cố định, biến mặc định

**Ví dụ:**

```dockerfile
# Cách 1: Hardcode
ENV DATABASE=postgres

# Cách 2: Lấy từ ARG
ARG API_URL
ENV API_URL=$API_URL
```

---

### 🚀 environment (Runtime Environment trong docker-compose/run)

```yaml
# docker-compose.yml
services:
    backend:
        image: myapp
        environment:
            DATABASE_URL: postgres://localhost:5432
            JWT_SECRET: mysecret
```

**Đặc điểm:**

-   ⏰ **Thời điểm**: Chỉ khi **CHẠY CONTAINER**
-   🔄 **Lifecycle**: Tồn tại trong container đang chạy
-   📦 **Lưu trữ**: KHÔNG lưu vào image (flexible)
-   🎨 **Use case**: Config động, môi trường khác nhau

**Ví dụ:**

```bash
# Truyền env khi run
docker run -e DATABASE_URL=postgres://db:5432 myapp
```

---

## 2. QUAN HỆ IMAGE VS CONTAINER

### 📦 Hiểu đơn giản:

```
IMAGE = Công thức nấu ăn (recipe)
├── Code
├── Dependencies
└── ENV variables (hardcode)

CONTAINER = Món ăn đã nấu (dish)
├── Chạy từ image
├── Có thể thêm gia vị (environment)
└── Mỗi container độc lập
```

### 🔄 Luồng hoạt động:

```
DOCKERFILE
    ↓ (docker build)
  IMAGE (bất biến - immutable)
    ↓ (docker run)
CONTAINER 1 (env: DB=dev)
CONTAINER 2 (env: DB=prod)
CONTAINER 3 (env: DB=staging)
```

### 📊 So sánh:

|                 | Dockerfile | Image    | Container |
| --------------- | ---------- | -------- | --------- |
| **ARG**         | ✅ Có      | ❌ Không | ❌ Không  |
| **ENV**         | ✅ Đặt     | ✅ Lưu   | ✅ Dùng   |
| **environment** | ❌ Không   | ❌ Không | ✅ Dùng   |

---

## 3. ARG VS ENV VS ENVIRONMENT

### 🎭 Kịch bản 1: Chỉ dùng ARG

```dockerfile
ARG API_URL
RUN echo "Building with API: $API_URL"
```

```bash
docker build --build-arg API_URL=http://api.com -t app .
docker run app
# Container KHÔNG có biến API_URL
```

**Kết quả:** Biến chỉ dùng khi build, container không thấy.

---

### 🎭 Kịch bản 2: ARG → ENV (Nướng vào image)

```dockerfile
ARG API_URL
ENV API_URL=$API_URL
RUN echo $API_URL > /app/config.txt
```

```bash
docker build --build-arg API_URL=http://api.com -t app .
docker run app
# Container CÓ biến API_URL=http://api.com
```

**Kết quả:** Giá trị được lưu vào image, mọi container đều có.

---

### 🎭 Kịch bản 3: ENV + environment (Ghi đè)

**Dockerfile:**

```dockerfile
ENV PORT=3000
ENV DATABASE=sqlite
```

**docker-compose.yml:**

```yaml
services:
    app:
        environment:
            PORT: 8080
            DATABASE: postgres
```

**Kết quả trong container:**

```
PORT=8080         ← Ghi đè từ docker-compose
DATABASE=postgres ← Ghi đè từ docker-compose
```

**Ưu tiên:** `environment` (runtime) > `ENV` (build)

---

### 🎭 Kịch bản 4: Khi KHÔNG cần environment?

**Dockerfile:**

```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
```

**docker-compose.yml:**

```yaml
services:
    app:
        image: myapp
        # KHÔNG có environment
```

**Kết quả:** Container dùng giá trị từ ENV trong image.

**Khi nào dùng:**

-   Config KHÔNG thay đổi giữa các môi trường
-   Giá trị mặc định an toàn
-   Đơn giản hóa docker-compose

---

## 4. VÍ DỤ THỰC TẾ

### 🎨 Frontend (Next.js)

**Tại sao phức tạp hơn?**
Next.js build code JavaScript tĩnh → Biến phải có KHI BUILD.

#### Dockerfile:

```dockerfile
# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

# NHẬN biến từ bên ngoài
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SECRET_KEY

# CHUYỂN thành ENV để Next.js đọc
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_SECRET_KEY=$NEXT_PUBLIC_SECRET_KEY

COPY package*.json ./
RUN npm install
COPY . .

# Next.js đọc ENV và nhúng vào code .js
RUN npm run build
# → Tạo file .next/static/chunks/main-abc123.js chứa:
# const API_URL = "https://api.example.com" (hardcode!)

# Stage 2: Run
FROM node:18
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
```

#### deploy.yml:

```yaml
# Build với ARG
docker build \
--build-arg NEXT_PUBLIC_API_URL=${{ secrets.NEXT_PUBLIC_API_URL }} \
--build-arg NEXT_PUBLIC_SECRET_KEY=${{ secrets.NEXT_PUBLIC_SECRET_KEY }} \
-t frontend .
```

#### docker-compose.yml (trên server):

```yaml
services:
    frontend:
        image: frontend
        environment:
            # CÓ THỂ thêm nhưng ÍT TÁC DỤNG vì code đã hardcode
            NEXT_PUBLIC_API_URL: https://api.prod.com
        ports:
            - "3000:3000"
```

**⚠️ Lưu ý:**

-   Thay đổi `NEXT_PUBLIC_*` → Phải BUILD LẠI image
-   Runtime `environment` chỉ hữu ích cho biến SERVER-SIDE (không có prefix NEXT*PUBLIC*)

---

### 🔧 Backend (Node.js/Express)

**Đơn giản hơn vì đọc ENV khi chạy!**

#### Dockerfile:

```dockerfile
FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Build TypeScript → JavaScript
RUN npm run build

# KHÔNG CẦN ARG/ENV cho config
# Vì sẽ đọc từ runtime environment

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

#### docker-compose.yml (trên server):

```yaml
services:
    backend:
        image: backend
        environment:
            # Đọc từ đây khi chạy
            MYSQL_HOST: db.example.com
            MYSQL_USER: admin
            MYSQL_PASSWORD: secret
            JWT_SECRET_KEY: honeynet.vn
            PORT: 3000
        ports:
            - "13000:3000"
```

#### Code backend:

```typescript
// backend/src/index.ts
const config = {
    db: {
        host: process.env.MYSQL_HOST, // Đọc khi chạy
        user: process.env.MYSQL_USER, // Đọc khi chạy
        password: process.env.MYSQL_PASSWORD,
    },
    jwt: {
        secret: process.env.JWT_SECRET_KEY, // Đọc khi chạy
    },
    port: process.env.PORT || 3000,
};

app.listen(config.port);
```

**✅ Ưu điểm:**

-   Thay đổi config → Chỉ cần restart container
-   KHÔNG cần build lại image
-   Linh hoạt cho nhiều môi trường

---

### 🗄️ Database (MySQL)

#### docker-compose.yml:

```yaml
services:
    db:
        image: mysql:8.0
        environment:
            MYSQL_ROOT_PASSWORD: rootpass
            MYSQL_DATABASE: ctm
            MYSQL_USER: appuser
            MYSQL_PASSWORD: apppass
        volumes:
            - db_data:/var/lib/mysql
        ports:
            - "3306:3306"
```

**Giải thích:**

-   Image MySQL **có sẵn** code xử lý các biến `MYSQL_*`
-   Truyền qua `environment` khi run
-   KHÔNG cần build Dockerfile riêng

---

## 5. KHI NÀO CẦN GÌ?

### 🎯 Decision Tree

```
┌─ Giá trị cần khi BUILD?
│
├─ YES → Dùng ARG
│    │
│    └─ Container cần đọc được?
│         ├─ YES → ARG + ENV
│         └─ NO  → Chỉ ARG
│
└─ NO → Giá trị cần khi RUN?
     │
     ├─ Cố định mọi môi trường
     │  └─ Dùng ENV trong Dockerfile
     │
     └─ Khác nhau theo môi trường
        └─ Dùng environment trong docker-compose
```

### 📋 Bảng quyết định:

| Tình huống                    | Giải pháp                  | Ví dụ                  |
| ----------------------------- | -------------------------- | ---------------------- |
| Build code tĩnh cần biến      | `ARG` + `ENV`              | Next.js NEXT*PUBLIC*\* |
| Container đọc config khi chạy | `environment`              | Backend DB config      |
| Giá trị mặc định an toàn      | `ENV`                      | NODE_ENV=production    |
| Secret nhạy cảm               | `environment` (từ secrets) | JWT_SECRET             |
| Version/Tag khi build         | `ARG`                      | NODE_VERSION=18        |
| Port expose                   | `ENV` + EXPOSE             | PORT=3000              |

---

## 6. SETUP CHO PROJECT CTM

### 🎯 Checklist GitHub Secrets

Vào GitHub Repository → Settings → Secrets and variables → Actions → New repository secret:

```
✅ AWS & ECR
├─ AWS_ACCESS_KEY_ID
├─ AWS_SECRET_ACCESS_KEY
├─ ECR_REGISTRY (ví dụ: 123456789.dkr.ecr.ap-southeast-2.amazonaws.com)
└─ EC2_HOST (ví dụ: 3.27.84.46)
└─ EC2_SSH_KEY (private key)

✅ Database
├─ RDS_ENDPOINT (ví dụ: ctm.xyz.ap-southeast-2.rds.amazonaws.com)
└─ RDS_PASSWORD

✅ Backend URLs
└─ BACKEND_URL (ví dụ: http://3.27.84.46:13000)

✅ Frontend Build Args
├─ NEXT_PUBLIC_API_URL (ví dụ: http://3.27.84.46:13000)
├─ NEXT_PUBLIC_BASE_URL_SITES (ví dụ: http://3.27.84.46:13000)
├─ NEXT_PUBLIC_BASE_URL_CUSTOMERS (ví dụ: http://3.27.84.46:13000/customers)
├─ NEXT_PUBLIC_SECRET_KEY_CUSTOMERS (ví dụ: honeynet.vn)
└─ NEXT_PUBLIC_IMAGES_BASE_URL (ví dụ: http://3.27.84.46:13000/uploads)

✅ Google OAuth
├─ GOOGLE_CLIENT_ID
└─ GOOGLE_CLIENT_SECRET

✅ Application
└─ APP_URL (ví dụ: http://3.27.84.46:15173)
```

---

### 📁 Frontend Dockerfile (đã sửa)

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# NHẬN biến từ deploy.yml --build-arg
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_BASE_URL_SITES
ARG NEXT_PUBLIC_BASE_URL_CUSTOMERS
ARG NEXT_PUBLIC_SECRET_KEY_CUSTOMERS
ARG NEXT_PUBLIC_IMAGES_BASE_URL

# CHUYỂN thành ENV để Next.js build đọc được
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_BASE_URL_SITES=$NEXT_PUBLIC_BASE_URL_SITES
ENV NEXT_PUBLIC_BASE_URL_CUSTOMERS=$NEXT_PUBLIC_BASE_URL_CUSTOMERS
ENV NEXT_PUBLIC_SECRET_KEY_CUSTOMERS=$NEXT_PUBLIC_SECRET_KEY_CUSTOMERS
ENV NEXT_PUBLIC_IMAGES_BASE_URL=$NEXT_PUBLIC_IMAGES_BASE_URL

# Build với các biến đã set
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine
WORKDIR /frontend

COPY --from=builder /frontend/package*.json ./
COPY --from=builder /frontend/node_modules ./node_modules
COPY --from=builder /frontend .

EXPOSE 5173
CMD ["npm", "run", "start"]
```

---

### 📁 Backend Dockerfile (đơn giản hơn)

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /backend

COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build TypeScript
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine
WORKDIR /backend

COPY --from=builder /backend/package*.json ./
RUN npm install --production
COPY --from=builder /backend/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

**Lưu ý:** Backend KHÔNG cần ARG/ENV vì đọc config từ runtime!

---

### 📁 deploy.yml (GitHub Actions)

```yaml
name: Deploy to AWS EC2

on:
    push:
        branches:
            - main

jobs:
    build-and-push:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout code
              uses: actions/checkout@v3

            - name: Configure AWS credentials
              uses: aws-actions/configure-aws-credentials@v2
              with:
                  aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
                  aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
                  aws-region: ap-southeast-2

            - name: Login to Amazon ECR
              id: login-ecr
              uses: aws-actions/amazon-ecr-login@v1

            # BUILD BACKEND (không cần ARG)
            - name: Build & Push Backend
              env:
                  ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
                  ECR_REPOSITORY: self/ctm-backend
                  IMAGE_TAG: latest
              run: |
                  docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG ./backend
                  docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG

            # BUILD FRONTEND (CẦN ARG cho NEXT_PUBLIC_*)
            - name: Build & Push Frontend
              env:
                  ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
                  ECR_REPOSITORY: self/ctm-frontend
                  IMAGE_TAG: latest
              run: |
                  docker build \
                    --build-arg NEXT_PUBLIC_API_URL=${{ secrets.NEXT_PUBLIC_API_URL }} \
                    --build-arg NEXT_PUBLIC_BASE_URL_SITES=${{ secrets.NEXT_PUBLIC_BASE_URL_SITES }} \
                    --build-arg NEXT_PUBLIC_BASE_URL_CUSTOMERS=${{ secrets.NEXT_PUBLIC_BASE_URL_CUSTOMERS }} \
                    --build-arg NEXT_PUBLIC_SECRET_KEY_CUSTOMERS=${{ secrets.NEXT_PUBLIC_SECRET_KEY_CUSTOMERS }} \
                    --build-arg NEXT_PUBLIC_IMAGES_BASE_URL=${{ secrets.NEXT_PUBLIC_IMAGES_BASE_URL }} \
                    -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG ./frontend
                  docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG

    deploy:
        needs: build-and-push
        runs-on: ubuntu-latest
        steps:
            - name: Deploy via SSH
              uses: appleboy/ssh-action@v0.1.10
              with:
                  host: ${{ secrets.EC2_HOST }}
                  username: ubuntu
                  key: ${{ secrets.EC2_SSH_KEY }}
                  script: |
                      set -e

                      # Login ECR
                      aws ecr get-login-password --region ap-southeast-2 | \
                        docker login --username AWS --password-stdin ${{ secrets.ECR_REGISTRY }}

                      # Pull images
                      docker pull ${{ secrets.ECR_REGISTRY }}/self/ctm-backend:latest
                      docker pull ${{ secrets.ECR_REGISTRY }}/self/ctm-frontend:latest

                      # Tạo docker-compose.yml
                      cat <<EOF > docker-compose.yml
                      version: '3.8'
                      services:
                        backend:
                          image: ${{ secrets.ECR_REGISTRY }}/self/ctm-backend:latest
                          restart: always
                          ports:
                            - "13000:3000"
                          environment:
                            # Backend ĐỌC từ đây khi chạy
                            MYSQL_HOST: ${{ secrets.RDS_ENDPOINT }}
                            MYSQL_USER: admin
                            MYSQL_PASSWORD: ${{ secrets.RDS_PASSWORD }}
                            MYSQL_DATABASE: ctm
                            MYSQL_PORT: 3306
                            PORT: 3000
                            NODE_ENV: production
                            DEBUG: 1
                            APP_URL: ${{ secrets.APP_URL }}
                            ADMIN_URI: /adcp
                            ADMIN_URL: ${{ secrets.BACKEND_URL }}/adcp
                            CUSTOMERS_URI: /customers
                            CUSTOMERS_URL: ${{ secrets.BACKEND_URL }}/customers
                            SITES_URI: ""
                            SITES_URL: ${{ secrets.BACKEND_URL }}
                            STATIC_URI: /uploads
                            STATIC_URL: ${{ secrets.BACKEND_URL }}/static
                            UPLOADS_URI: /uploads
                            UPLOADS_URL: ${{ secrets.BACKEND_URL }}/uploads
                            JWT_SECRET_KEY: honeynet.vn
                            JWT_KEY: honeynet.vn
                            JWT_CUSTOMER_KEY: honeynet.vn
                            JWT_ISS: honeynet.vn
                            JWT_AUD: honeynet.vn
                            JWT_TIMEOUT: 3600
                            JWT_CUSTOMER_TIMEOUT: 3600
                            JWT_REFRESH_TIMEOUT: 7
                            GOOGLE_CLIENT_ID: ${{ secrets.GOOGLE_CLIENT_ID }}
                            GOOGLE_CLIENT_SECRET: ${{ secrets.GOOGLE_CLIENT_SECRET }}
                            CALLBACK_URL: ${{ secrets.BACKEND_URL }}/googleCallback
                            CALLBACK_URL_CUSTOMERS: ${{ secrets.BACKEND_URL }}/customers/googleCallback

                        frontend:
                          image: ${{ secrets.ECR_REGISTRY }}/self/ctm-frontend:latest
                          restart: always
                          ports:
                            - "15173:5173"
                          environment:
                            # Frontend ĐÃ có giá trị từ build
                            # Thêm vào đây để có thể ghi đè (ít dùng)
                            NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
                            NEXT_PUBLIC_BASE_URL_SITES: ${{ secrets.NEXT_PUBLIC_BASE_URL_SITES }}
                            NEXT_PUBLIC_BASE_URL_CUSTOMERS: ${{ secrets.NEXT_PUBLIC_BASE_URL_CUSTOMERS }}
                            NEXT_PUBLIC_SECRET_KEY_CUSTOMERS: ${{ secrets.NEXT_PUBLIC_SECRET_KEY_CUSTOMERS }}
                            NEXT_PUBLIC_IMAGES_BASE_URL: ${{ secrets.NEXT_PUBLIC_IMAGES_BASE_URL }}
                      EOF

                      # Deploy
                      docker compose down || true
                      docker compose up -d
                      docker ps
                      docker system prune -f
```

---

### 🔍 Debug & Kiểm tra

#### Xem ENV trong image:

```bash
docker inspect myapp:latest | grep -A 20 Env
```

#### Xem ENV trong container đang chạy:

```bash
docker exec -it container_name env
```

#### Test frontend đã nhúng đúng giá trị:

```bash
# Vào container
docker exec -it ctm_frontend sh

# Xem code đã build
cat .next/static/chunks/*.js | grep "api-tmdt.systems.com.vn"
```

#### Test backend đọc env:

```bash
docker exec -it ctm_backend node -e "console.log(process.env.MYSQL_HOST)"
```

---

### 📝 Best Practices

#### ✅ DO:

-   Dùng `ARG` cho build-time configuration
-   Dùng `ENV` cho default values
-   Dùng `environment` cho secrets và runtime config
-   Tách frontend (build-time vars) vs backend (runtime vars)
-   Dùng multi-stage builds để giảm image size
-   Lưu secrets trong GitHub Secrets, KHÔNG hardcode

#### ❌ DON'T:

-   KHÔNG commit file `.env` vào Git
-   KHÔNG hardcode secrets trong Dockerfile
-   KHÔNG dùng `ARG` cho sensitive data (vì lưu trong image history)
-   KHÔNG mix build-time và runtime config
-   KHÔNG rebuild image chỉ để đổi runtime config (backend)

---

### 🎓 TÓM TẮT NHANH

```
BUILD TIME          |  RUN TIME
ARG → ENV          |  environment
    ↓               |      ↓
  IMAGE             |  CONTAINER
(immutable)         | (flexible)

Frontend:  ARG→ENV→BUILD→Hardcode    | environment (ít dùng)
Backend:   Simple build               | environment (chính)
Database:  Use official image         | environment (chính)
```

**Quy tắc vàng:**

1. Frontend `NEXT_PUBLIC_*` → Dùng ARG + ENV khi build
2. Backend config → Dùng environment khi run
3. Secrets → Luôn dùng GitHub Secrets → environment
4. Thay đổi backend config → Restart, KHÔNG rebuild
5. Thay đổi frontend `NEXT_PUBLIC_*` → PHẢI rebuild

---

### 📞 Troubleshooting

| Vấn đề                               | Nguyên nhân               | Giải pháp                                     |
| ------------------------------------ | ------------------------- | --------------------------------------------- |
| Frontend không thấy NEXT*PUBLIC*\*   | Thiếu ARG/ENV khi build   | Thêm ARG + ENV vào Dockerfile                 |
| Backend không kết nối DB             | Thiếu environment         | Thêm vào docker-compose.yml                   |
| Đổi config backend không có tác dụng | Image cache               | `docker compose down && docker compose up -d` |
| Đổi NEXT*PUBLIC*\* không có tác dụng | Đã hardcode trong image   | Rebuild image với ARG mới                     |
| Secret bị lộ                         | Hardcode trong Dockerfile | Dùng GitHub Secrets → environment             |

---

**Created:** 2025-12-23  
**Author:** GitHub Copilot  
**Project:** CTM E-commerce Platform  
**Version:** 1.0
