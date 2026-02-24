# Deploy Portfolio lên Vercel + Cloudflare

## Thông tin

- **Domain:** truongha.com (Cloudflare)
- **Hosting:** Vercel (Free)
- **Repo:** github.com/hatruong219/gnourt-portfolio

---

## Bước 1: Push code lên GitHub

### 1.1 Tạo repository trên GitHub

1. Vào [github.com/new](https://github.com/new)
2. Tên repo: `gnourt-portfolio`
3. Chọn **Private** hoặc **Public**
4. Click **Create repository**

### 1.2 Push code

```bash
cd ~/gnourt-study/gnourt-portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/hatruong219/gnourt-portfolio.git
git push -u origin main
```

---

## Bước 2: Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com) → **Sign up bằng GitHub**
2. Click **"Add New Project"**
3. Chọn repo `gnourt-portfolio`
4. Vercel tự detect Next.js → Click **"Deploy"**
5. Chờ 1-2 phút → Web live tại `gnourt-portfolio.vercel.app`

---

## Bước 3: Thêm custom domain trong Vercel

1. Vercel dashboard → Chọn project → **Settings** → **Domains**
2. Gõ `truongha.com` → Click **Add**
3. Thêm luôn `www.truongha.com` → Click **Add**
4. Vercel sẽ hiện DNS records cần thêm (thường là CNAME → `cname.vercel-dns.com`)

---

## Bước 4: Cấu hình DNS trên Cloudflare

Vào [dash.cloudflare.com](https://dash.cloudflare.com) → Chọn `truongha.com` → **DNS** → **Add record**

### Thêm 2 records:

| Type    | Name  | Content                 | Proxy status        | TTL  |
| ------- | ----- | ----------------------- | ------------------- | ---- |
| `CNAME` | `@`   | `cname.vercel-dns.com`  | DNS only (cloud xám) | Auto |
| `CNAME` | `www` | `cname.vercel-dns.com`  | DNS only (cloud xám) | Auto |

### ⚠️ Lưu ý quan trọng:

- **Proxy status phải là "DNS only"** (icon cloud MÀU XÁM ☁️)
- **KHÔNG bật "Proxied"** (cloud cam 🟠) — vì Vercel tự cấp SSL, bật proxy sẽ xung đột
- Nếu lỡ bật Proxied → click vào icon cloud cam để tắt thành xám

---

## Bước 5: Cấu hình SSL trên Cloudflare

1. Sidebar trái → **SSL/TLS** → **Overview**
2. Chọn mode: **Full (strict)**

---

## Bước 6: Kiểm tra

- Chờ 5-30 phút để DNS propagate
- Truy cập `https://truongha.com` → Phải thấy portfolio
- Truy cập `https://www.truongha.com` → Redirect về `truongha.com`
- Kiểm tra HTTPS (icon ổ khoá trên browser)

---

## Sau này: Cập nhật website

Mỗi lần push code lên GitHub, Vercel **tự động build + deploy**:

```bash
git add .
git commit -m "Update something"
git push
```

Vercel sẽ:
1. Detect push mới
2. Build lại (1-2 phút)
3. Deploy tự động
4. Website cập nhật

---

## Troubleshooting

### Domain chưa hoạt động sau 30 phút
- Kiểm tra DNS records trên Cloudflare có đúng không
- Kiểm tra Proxy status là "DNS only" (cloud xám)
- Vào Vercel → Settings → Domains → xem có lỗi gì không

### SSL/HTTPS lỗi
- Cloudflare SSL mode phải là **Full (strict)**
- Không bật Proxied trên Cloudflare

### Build lỗi trên Vercel
- Xem build logs trong Vercel dashboard
- Chạy `npm run build` ở local trước để kiểm tra

---

## Chi phí

| Mục                  | Chi phí        |
| -------------------- | -------------- |
| Vercel hosting       | $0 (Free)      |
| Domain truongha.com    | ~$10-15/năm |
| SSL/HTTPS            | $0 (Tự động)   |
| **Tổng**             | **~$10-15/năm** |
