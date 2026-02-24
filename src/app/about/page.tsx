import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Tìm hiểu thêm về ${siteConfig.author.name}`,
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "SQL"] },
  { category: "Tools & DevOps", items: ["Git", "VS Code", "Docker", "Vercel", "AWS"] },
  { category: "Đang tìm hiểu", items: ["System Design", "DevOps", "Open Source", "AI/ML"] },
];

export default function AboutPage() {
  return (
    <section className="container px-4 mx-auto max-w-4xl py-16 md:py-24">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Về tôi
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Xin chào! Tôi là <strong>{siteConfig.author.name}</strong> — một
            lập trình viên đam mê xây dựng những sản phẩm web đẹp, nhanh và
            thân thiện với người dùng.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Câu chuyện của tôi</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Hành trình của tôi trong lĩnh vực phát triển phần mềm bắt đầu từ
              sự tò mò về cách mọi thứ hoạt động trên internet. Theo thời gian,
              sự tò mò đó đã trở thành niềm đam mê tạo ra những trải nghiệm số
              có ý nghĩa.
            </p>
            <p>
              Tôi tin vào việc viết code sạch, dễ bảo trì và không ngừng cải
              thiện kỹ năng của mình. Khi không code, bạn có thể thấy tôi đọc
              blog công nghệ, khám phá công nghệ mới, hoặc làm việc trên các dự
              án cá nhân.
            </p>
            <p>
              Website này là không gian số của tôi — nơi tôi chia sẻ suy nghĩ,
              ghi lại quá trình học hỏi, và giới thiệu các dự án đã làm. Hãy
              thoải mái khám phá nhé!
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Kỹ năng & Công nghệ</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-2">
                <h3 className="font-semibold text-lg">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-lg border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Kết nối với tôi</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo,
            hoặc cơ hội hợp tác.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="font-medium text-primary hover:underline"
            >
              Email
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
