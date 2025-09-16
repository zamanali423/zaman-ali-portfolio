"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Rocket,
  Wrench,
  Award,
  Shield,
  Sparkles,
  Star,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import ContactForm from "@/components/contact-form";

const profile = {
  name: "Zaman Ali",
  role: "Full Stack Developer | 1.5+ Years Experience",
  summary:
    "Passionate and self-taught Full Stack Developer with 1.5+ years of experience delivering high-quality web & mobile applications. Skilled in React.js, Node.js, PostgreSQL, MongoDB, and React Native, with a strong background in Skilltrends – AI Job & Interview Platform, OneStopCar - e-commerce platform, and scalable mobile apps. Known for problem-solving, teamwork, and a drive to keep learning and improving",
  emails: ["zamanyaseen2024@gmail.com", "zamanali2024@gmail.com"],
  github: "https://github.com/zamanali423",
  linkedin: "https://www.linkedin.com/in/zamanali27",
  resumeUrl:
    "https://drive.google.com/file/d/1VfZh3cd_TzQ-Abd3-lylfyEEUfoFXPet/view?usp=sharing",
  UpworkUrl: "https://www.fiverr.com/zamanali27",
  education: "Bachelors (Software Engineering)",
  achievements: [
    "1.5+ years of experience delivering full-stack web & mobile applications",
    "Built Skilltrends – AI Job & Interview Platform with real-time chatbot automation",
    "Built OneStopCar - e-commerce systems, and educational apps",
    "Strong problem-solving and team collaboration skills",
    "Expertise in React.js, Node.js, PostgreSQL, MongoDB, React Native",
  ],
  skills: {
    FullStack: [
      "React",
      "Node.js",
      "Express.js",
      "React Native",
      "Stripe",
      "REST APIs",
      "Next.js",
    ],
    Databases: ["MongoDB", "PostgreSQL", "MySQL"],
    Mobile: [
      "React Native",
      "Push Notifications",
      "Cheating Detection",
      "Chat System",
    ],
    Projects: [
      "Web Scraping",
      "Skilltrends - AI Job & Interview Platform",
      "E-Commerce System",
      "Educational App",
    ],
    Soft: [
      "Leadership",
      "Critical Thinking",
      "Agile Development",
      "Communication",
      "Teamwork",
    ],
  },
};

const projects = [
  {
    icon: Rocket,
    title: "Skilltrends – AI Job & Interview Platform",
    bullets: [
      "Tracks thousands of jobs daily; analytics for languages & stacks",
      "AI interviewer for coding practice with scoring & feedback",
      "Stripe‑based subscriptions & monetization",
    ],
    links: [
      { label: "skilltrends.io", href: "https://skilltrends.io" },
      {
        label: "Interview Platform (Beta)",
        href: "https://skilltrends-front.vercel.app/",
      },
    ],
    chips: ["Next.js", "FastAPI", "OpenAI", "Stripe", "PostgreSQL"],
  },
  {
    icon: Rocket,
    title: "OneStopCar - E-Commerce System",
    bullets: [
      "E-Commerce System with real-time order tracking & efficient dispatch",
      "End‑to‑end lifecycle: requirements → deployment → scaling",
      "Admin panel for managing orders & products",
    ],
    links: [{ label: "onestopcar.net", href: "https://onestopcar.net/" }],
    chips: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    icon: Shield,
    title: "Web Scraping",
    bullets: [
      "Web Scraping for leads, social, job boards,news,property",
      "Data cleaning & enrichment with automated QA",
      "Insights delivered in custom dashboards",
    ],
    links: [{ label: "GitHub Samples", href: profile.github }],
    chips: [
      "React.js",
      "Node.js",
      "Puppeteer",
      "Cheerio",
      "MongoDB",
      "Redis",
      "Bull Queue",
      "Socket.io",
    ],
  },
  {
    icon: Award,
    title: "Luxegentlemen - Barber Shop",
    bullets: [
      "Whatsapp Api Integration",
      "AI Chatbot for customer support",
      "Admin Panel for managing orders & products",
    ],
    links: [{ label: "GitHub Samples", href: profile.github }],
    chips: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Whatsapp Api",
      "Chatbot (AI)",
      "Push Notifications",
    ],
  },
  {
    icon: Wrench,
    title: "Real Time Collaboration System",
    bullets: [
      "Real‑time collaboration for documents, spreadsheets, & presentations",
      "Make projects together with real-time collaboration",
      "End‑to‑end lifecycle: requirements → deployment → scaling",
    ],
    links: [{ label: "GitHub Samples", href: profile.github }],
    chips: [
      "React.js",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Quill.js",
      "Chat (Socket.io)",
      "REST APIs",
    ],
  },
  {
    icon: Shield,
    title: "Food Order System",
    bullets: [
      "Food Order System with real-time order tracking & efficient dispatch",
      "Admin panel for managing orders & products",
      "Easy to use & efficient user interface",
    ],
    links: [{ label: "GitHub Samples", href: profile.github }],
    chips: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

const Section = ({
  id,
  icon: Icon,
  title,
  children,
  color = "from-sky-600 to-indigo-600",
}: any) => (
  <section id={id} className="scroll-mt-24">
    <div className="my-12">
      <div
        className={`bg-gradient-to-r ${color} text-white rounded-2xl px-5 py-3 shadow-md flex items-center gap-3`}
      >
        <Icon className="w-5 h-5" />
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }: any) => (
  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
    {children}
  </div>
);

const ProjectCard = ({ p }: any) => {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
            <Icon className="w-5 h-5" />
            <CardTitle className="text-lg">{p.title}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {p.chips.map((c: string, i: number) => (
              <Pill key={i}>{c}</Pill>
            ))}
          </div>
        </CardHeader>
        <CardContent className="text-sm leading-6">
          <ul className="list-disc pl-5 space-y-1">
            {p.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {p.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {p.links.map((l: any, i: number) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sky-700 dark:text-sky-300 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <header className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/40 sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">
            ZA • Portfolio
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:opacity-80">
              About
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#achievements" className="hover:opacity-80">
              Achievements
            </a>
            <a href="#education" className="hover:opacity-80">
              Education
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              className="hidden md:inline-flex"
              href="/resume/Zaman_Ali_Full_Stack_Developer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
            <a href={profile.UpworkUrl} target="_blank" rel="noreferrer">
              <Button>Hire Me</Button>
            </a>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-indigo-600/10 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-2 text-xl text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {profile.role}
                </p>
                <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
                  {profile.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.emails[0]}`}>
                    <Button>Email</Button>
                  </a>
                  <br />
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <br />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="outline">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:min-w-[320px]">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                      <Award className="w-5 h-5" />
                      Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="list-disc pl-5 space-y-1">
                      {profile.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <Section
          id="about"
          icon={Star}
          title="About"
          color="from-sky-600 to-cyan-600"
        >
          <p className="text-slate-700 dark:text-slate-300 leading-7">
            Need production-ready Web Apps, Mobile Apps, Dashboards, or SaaS
            Platforms fast? Tap "Hire Me", or send me an email, and we’ll
            discuss how we can build together. I build reliable full-stack
            applications end-to-end — from frontend (React.js, Next.js, React
            Native) to backend (Node.js, Express.js,), with PostgreSQL/MongoDB
            databases, AWS deployments, APIs, socket programming, and real-time
            features. With 1.5+ years of industry expertise and 20+ successful
            projects, I’ve helped hospitals, startups, and businesses launch
            applications that actually deliver value. 🚀
            <br />
            <br />
            🔄 𝐒𝐭𝐮𝐜𝐤 𝐢𝐧 𝐭𝐡𝐞𝐬𝐞 𝐀𝐈 𝐥𝐨𝐨𝐩𝐬?
            <br />
            → Your apps crash under scale?
            <br />
            → Your apps are slow and insecure?
            <br />
            → Tech teams deliver late or fail to meet requirements?
            <br />
            → Payment systems & APIs are unreliable?
            <br />
            → No real-time updates — manual refresh everywhere?
            <br />
            → AI integration with existing systems feels impossible.
            <br />
            <br />
            👉 I’m here to be your strategic partner — not just to build AI
            systems, but to make sure they actually solve your problems and
            drive measurable business growth.
          </p>
        </Section>
        <Section
          id="skills"
          icon={Wrench}
          title="Skills"
          color="from-indigo-600 to-fuchsia-600"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(profile.skills).map(([k, arr]: any) => (
              <Card key={k}>
                <CardHeader>
                  <CardTitle className="text-base">{k}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(arr as string[]).map((s, i) => (
                      <Badge key={i}>{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          icon={Rocket}
          title="Projects"
          color="from-emerald-600 to-teal-600"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </Section>
        <Section
          id="achievements"
          icon={Award}
          title="Achievements"
          color="from-rose-600 to-pink-600"
        >
          <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            {profile.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Section>
        <Section
          id="education"
          icon={GraduationCap}
          title="Education"
          color="from-sky-700 to-indigo-700"
        >
          <Card>
            <CardContent className="py-6 pt-6">
              <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                <GraduationCap className="w-5 h-5" />
                <p className="font-medium">{profile.education}</p>
              </div>
            </CardContent>
          </Card>
        </Section>
        <Section
          id="contact"
          icon={Mail}
          title="Contact"
          color="from-indigo-700 to-purple-700"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm">
              <p>Reach out for collaborations or product builds.</p>
              <div className="space-y-2">
                {profile.emails.map((e, i) => (
                  <a
                    key={i}
                    href={`mailto:${e}`}
                    className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-300 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {e}
                  </a>
                ))}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-2 inline-flex items-center gap-2 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block inline-flex items-center gap-2 hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


