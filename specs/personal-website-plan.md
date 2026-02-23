# Kế hoạch Xây dựng Trang Web Cá Nhân

## 1. Tổng quan dự án

### Mục đích
- Tạo một trang web cá nhân để quảng bá bản thân
- Chia sẻ kiến thức, kinh nghiệm qua blog
- Xây dựng thương hiệu cá nhân trực tuyến
- Kết nối với cộng đồng và nhà tuyển dụng

### Đối tượng mục tiêu
- Nhà tuyển dụng tiềm năng
- Đồng nghiệp và cộng đồng chuyên môn
- Người đọc quan tâm đến nội dung blog
- Khách hàng tiềm năng (nếu có)

## 2. Các tính năng chính

### 2.1 Trang chủ (Home)
- [ ] Giới thiệu ngắn gọn về bản thân
- [ ] Ảnh đại diện/avatar chuyên nghiệp
- [ ] Slogan/tagline cá nhân
- [ ] Call-to-action buttons (Liên hệ, Xem CV, Blog)
- [ ] Hiển thị các bài viết mới nhất

### 2.2 Giới thiệu (About)
- [ ] Tiểu sử chi tiết
- [ ] Kỹ năng và chuyên môn
- [ ] Kinh nghiệm làm việc
- [ ] Học vấn
- [ ] Sở thích và đam mê
- [ ] Timeline/hành trình nghề nghiệp

### 2.3 Blog
- [ ] Danh sách bài viết với phân trang
- [ ] Tìm kiếm bài viết
- [ ] Lọc theo danh mục/tags
- [ ] Trang chi tiết bài viết
- [ ] Ước tính thời gian đọc
- [ ] Ngày đăng và cập nhật
- [ ] Chia sẻ lên mạng xã hội

### 2.4 Dự án (Portfolio/Projects)
- [ ] Showcase các dự án đã thực hiện
- [ ] Hình ảnh/screenshot dự án
- [ ] Mô tả công nghệ sử dụng
- [ ] Link demo và source code
- [ ] Case study chi tiết

### 2.5 Liên hệ (Contact)
- [ ] Form liên hệ
- [ ] Email, số điện thoại
- [ ] Liên kết mạng xã hội (LinkedIn, GitHub, Twitter, etc.)
- [ ] Địa chỉ (nếu cần)

### 2.6 CV/Resume
- [ ] CV có thể xem trực tuyến
- [ ] Nút tải xuống CV (PDF)
- [ ] Cập nhật thường xuyên

## 3. Công nghệ đề xuất

### 3.1 Option 1: Static Site Generator (Đơn giản, nhanh)
**Next.js + MDX**
- Framework: Next.js 14+ (React)
- Styling: Tailwind CSS
- Content: MDX (Markdown + JSX)
- Deployment: Vercel (miễn phí)
- CMS: File-based hoặc Contentlayer

**Ưu điểm:**
- Performance cao
- SEO tốt
- Dễ bảo trì
- Chi phí thấp (có thể miễn phí)
- Developer experience tốt

### 3.2 Option 2: Headless CMS (Linh hoạt hơn)
**Next.js + Headless CMS**
- Frontend: Next.js
- CMS: Sanity.io / Strapi / Contentful
- Styling: Tailwind CSS
- Deployment: Vercel

**Ưu điểm:**
- Quản lý nội dung dễ dàng qua UI
- Không cần code để thêm bài viết
- Phù hợp nếu có nhiều người cộng tác

### 3.3 Option 3: Full-stack (Phức tạp nhất)
**MERN/MEAN Stack**
- Frontend: React/Angular
- Backend: Node.js + Express
- Database: MongoDB
- Deployment: VPS/Cloud

**Ưu điểm:**
- Kiểm soát hoàn toàn
- Có thể thêm tính năng phức tạp
- Học hỏi nhiều hơn

## 4. Thiết kế UI/UX

### 4.1 Phong cách thiết kế
- [ ] Modern và clean
- [ ] Responsive (mobile-first)
- [ ] Dark mode option
- [ ] Typography rõ ràng, dễ đọc
- [ ] Color scheme nhất quán

### 4.2 Các trang cần thiết
1. Home (/)
2. About (/about)
3. Blog (/blog)
4. Blog Post (/blog/[slug])
5. Projects (/projects)
6. Contact (/contact)

### 4.3 Components chung
- [ ] Header/Navigation
- [ ] Footer
- [ ] SEO Meta tags
- [ ] Loading states
- [ ] Error pages (404, 500)

## 5. Nội dung cần chuẩn bị

### 5.1 Thông tin cá nhân
- [ ] Ảnh đại diện chuyên nghiệp
- [ ] Bio ngắn (2-3 câu)
- [ ] Bio dài (200-300 từ)
- [ ] CV/Resume cập nhật
- [ ] Danh sách kỹ năng
- [ ] Kinh nghiệm làm việc
- [ ] Học vấn
- [ ] Chứng chỉ (nếu có)

### 5.2 Dự án
- [ ] Danh sách 3-5 dự án nổi bật
- [ ] Mô tả chi tiết từng dự án
- [ ] Screenshots/demo
- [ ] Tech stack sử dụng
- [ ] Link GitHub/Live demo

### 5.3 Blog
- [ ] 3-5 bài viết đầu tiên
- [ ] Danh mục chủ đề
- [ ] Lịch đăng bài (content calendar)

### 5.4 Liên hệ
- [ ] Email liên hệ
- [ ] Social media links
- [ ] GitHub profile
- [ ] LinkedIn profile

## 6. Các bước thực hiện

### Phase 1: Lập kế hoạch và thiết kế (Tuần 1)
1. [ ] Xác định mục tiêu và đối tượng
2. [ ] Chọn công nghệ phù hợp
3. [ ] Thiết kế wireframe/mockup
4. [ ] Chuẩn bị nội dung ban đầu

### Phase 2: Setup và phát triển cơ bản (Tuần 2-3)
1. [ ] Setup project và cấu hình
2. [ ] Tạo layout và components cơ bản
3. [ ] Implement trang Home
4. [ ] Implement trang About
5. [ ] Setup routing

### Phase 3: Phát triển tính năng Blog (Tuần 3-4)
1. [ ] Setup MDX hoặc CMS
2. [ ] Tạo blog listing page
3. [ ] Tạo blog post template
4. [ ] Implement search và filter
5. [ ] Thêm SEO optimization

### Phase 4: Hoàn thiện và deploy (Tuần 4-5)
1. [ ] Tạo trang Projects
2. [ ] Tạo trang Contact
3. [ ] Thêm dark mode
4. [ ] Testing và bug fixes
5. [ ] SEO optimization
6. [ ] Deploy lên production
7. [ ] Setup custom domain (nếu có)

### Phase 5: Nội dung và marketing (Ongoing)
1. [ ] Viết và đăng bài blog thường xuyên
2. [ ] Cập nhật dự án mới
3. [ ] SEO và analytics
4. [ ] Chia sẻ lên mạng xã hội
5. [ ] Thu thập feedback và cải thiện

## 7. SEO và Performance

### 7.1 SEO Checklist
- [ ] Meta tags (title, description)
- [ ] Open Graph tags (Facebook)
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data (JSON-LD)
- [ ] Alt text cho images
- [ ] Semantic HTML

### 7.2 Performance
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Caching strategy
- [ ] CDN (nếu cần)
- [ ] Lighthouse score > 90

## 8. Analytics và Monitoring

- [ ] Google Analytics / Plausible
- [ ] Google Search Console
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring

## 9. Bảo mật

- [ ] HTTPS
- [ ] Content Security Policy
- [ ] Rate limiting cho contact form
- [ ] Spam protection (reCAPTCHA)
- [ ] Regular updates

## 10. Chi phí ước tính

### Option miễn phí/rất rẻ:
- Hosting: Vercel/Netlify (Free tier)
- Domain: $10-15/năm
- Email: Gmail (Free)
- **Tổng: ~$10-15/năm**

### Option có CMS:
- Hosting: Vercel (Free)
- CMS: Sanity.io (Free tier)
- Domain: $10-15/năm
- **Tổng: ~$10-15/năm**

### Option VPS:
- VPS: $5-10/tháng
- Domain: $10-15/năm
- **Tổng: ~$70-135/năm**

## 11. Đề xuất công nghệ cho bạn

**Khuyến nghị: Next.js + MDX + Tailwind CSS + Vercel**

### Lý do:
1. ✅ Miễn phí hoặc chi phí thấp
2. ✅ Performance và SEO tốt
3. ✅ Dễ bảo trì và cập nhật
4. ✅ Developer experience tốt
5. ✅ Cộng đồng lớn, tài liệu phong phú
6. ✅ Có thể scale sau này

### Stack chi tiết:
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (Markdown)
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics hoặc Plausible

## 12. Tài nguyên tham khảo

### Inspiration
- https://leerob.io
- https://rauchg.com
- https://www.joshwcomeau.com
- https://brittanychiang.com

### Templates
- https://vercel.com/templates/next.js
- https://tailwindui.com
- https://ui.shadcn.com

### Learning
- Next.js Documentation
- Tailwind CSS Documentation
- MDX Documentation

## 13. Next Steps

1. **Review và phê duyệt kế hoạch này**
2. **Quyết định công nghệ sử dụng**
3. **Chuẩn bị nội dung (ảnh, text, CV)**
4. **Bắt đầu setup project**

---

## Ghi chú

- Kế hoạch này có thể điều chỉnh theo nhu cầu thực tế
- Ưu tiên MVP (Minimum Viable Product) trước, sau đó cải thiện dần
- Focus vào nội dung chất lượng hơn là tính năng phức tạp
- Đơn giản nhưng hiệu quả > Phức tạp nhưng khó maintain

---

**Ngày tạo:** 23/02/2026  
**Người tạo:** gnourt  
**Version:** 1.0
