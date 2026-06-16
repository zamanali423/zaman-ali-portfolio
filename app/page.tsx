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
  role: "Full Stack Developer | MERN Stack Developer | AI Developer | 2+ Years Experience",
  summary:
    "Passionate and self-taught Full Stack Developer with 2+ years of experience delivering high-quality web & mobile applications. Skilled in React.js, Node.js, PostgreSQL, MongoDB, and React Native, with a strong background in Skilltrends – AI Job & Interview Platform, OneStopCar - e-commerce platform, and scalable mobile apps. Known for problem-solving, teamwork, and a drive to keep learning and improving",
  emails: ["zamanyaseen2024@gmail.com", "zamanali2024@gmail.com"],
  github: "https://github.com/zamanali423",
  linkedin: "https://www.linkedin.com/in/zamanali27",
  resumeUrl:
    "https://drive.google.com/file/d/1EhV1YEzVYQhZo1WureoF7uOnzzK9EJso/view?usp=drive_link",
  UpworkUrl: "https://www.linkedin.com/in/zamanali27",
  education: "Bachelors (Software Engineering)",
  achievements: [
    "Built Skilltrends AI Jobs & Interview Platform with 200+ registered users",
    "Developed AI-powered chatbot platform using OpenAI and web scraping",
    "Built scalable B2B lead generation platform using Puppeteer and Redis",
    "Designed real-time school transport tracking and route management system",
    "Developed advanced online exam proctoring and monitoring platform",
    "Delivered 30+ web and mobile applications using MERN Stack technologies",
    "Specialized in AI integrations, SaaS platforms, and real-time architectures",
  ],
  skills: {
    FullStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "Stripe",
      "Authentication",
      "CI/CD",
      "Automation",
      "AI Integration",
      "Chatbot Development",
      "WhatsApp API",
    ],

    Databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],

    Mobile: [
      "React Native",
      "Push Notifications",
      "Real-Time Chat",
      "Camera Integration",
      "WebRTC",
      "Exam Proctoring",
      "GPS Tracking",
    ],

    Projects: [
      "Skilltrends AI Jobs & Interview Platform",
      "ScrapeChat AI Chatbot Widget",
      "B2B Leads Generation Platform",
      "Van Pooling & School Transport System",
      "Real-Time Exam Proctoring System",
      "Hospital Management System",
      "Boxigo Logistics Platform",
      "Real-Time Collaboration Tool",
      "Full-Stack E-Commerce Platform",
      "Luxegentlemen Barber Salon Platform",
    ],

    AI: [
      "OpenAI",
      "AI Chatbots",
      "Prompt Engineering",
      "Interview Simulation",
      "AI Automation",
      "Conversational AI",
      "Web Scraping + AI",
    ],

    RealTime: [
      "Socket.IO",
      "WebRTC",
      "Live Tracking",
      "Real-Time Notifications",
      "Event-Driven Systems",
      "Live Monitoring",
    ],

    DevOps: [
      "Docker",
      "GitHub",
      "Vercel",
      "Netlify",
      "Postman",
      "BullMQ",
      "Redis",
    ],

    Soft: [
      "Leadership",
      "Critical Thinking",
      "Problem Solving",
      "Agile Development",
      "Communication",
      "Team Collaboration",
      "Project Management",
    ],
  },
};

const projects = [
  {
    icon: Rocket,
    title: "Skilltrends AI Jobs & Interview Platform",
    bullets: [
      "Built AI-powered job discovery and interview coaching SaaS platform",
      "Integrated OpenAI for mock interviews, scoring, and personalized feedback",
      "Implemented Stripe subscription billing with multiple pricing tiers",
      "Supported 200+ registered users with real-time interview simulations",
      "Developed analytics dashboards for job trends, technologies, and hiring insights",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://skilltrends-front.vercel.app/",
      },
    ],
    chips: [
      "Next.js",
      "NestJS",
      "OpenAI",
      "Stripe",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "CI/CD",
    ],
  },

  {
    icon: Sparkles,
    title: "ScrapeChat - Embeddable AI Chatbot Widget",
    bullets: [
      "Built embeddable AI chatbot deployable through a single JavaScript integration",
      "Implemented website-specific knowledge retrieval using web scraping",
      "Integrated OpenAI API for intelligent contextual conversations",
      "Enabled businesses to deploy AI assistants on websites within minutes",
      "Developed scalable backend architecture with chatbot management dashboard",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://chatbot-frontend-hazel-eta.vercel.app",
      },
    ],
    chips: [
      "Next.js",
      "NestJS",
      "OpenAI API",
      "MongoDB",
      "Web Scraping",
      "AI Chatbot",
      "JavaScript Widget",
    ],
  },

  {
    icon: Shield,
    title: "B2B Leads Generation Platform",
    bullets: [
      "Developed automated lead generation platform for businesses and agencies",
      "Built scalable scraping pipelines using Puppeteer and Google Maps",
      "Collected business emails, social profiles, phone numbers, and company data",
      "Implemented BullMQ and Redis for distributed job processing",
      "Created analytics dashboard for managing and exporting generated leads",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://brainscraft-leads.vercel.app",
      },
    ],
    chips: [
      "Node.js",
      "React.js",
      "Puppeteer",
      "Redis",
      "BullMQ",
      "Google Maps",
      "Web Scraping",
    ],
  },

  {
    icon: Rocket,
    title: "Van Pooling & School Transport System",
    bullets: [
      "Built complete school transport and ride-sharing management platform",
      "Implemented live GPS tracking and route visualization",
      "Developed automated route planning and vehicle monitoring modules",
      "Integrated real-time notifications for parents, drivers, and administrators",
      "Provided guard attendance monitoring and trip safety management",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://van-pooling-front.vercel.app",
      },
    ],
    chips: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Socket.IO",
      "GPS Tracking",
      "Real-Time Systems",
    ],
  },

  {
    icon: Award,
    title: "Full-Stack E-Commerce Platform",
    bullets: [
      "Built complete e-commerce platform with customer and admin portals",
      "Implemented authentication, product catalog, cart, and checkout modules",
      "Developed order management and inventory tracking features",
      "Created responsive user interface and secure APIs",
      "Integrated role-based administration panel",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://onestopcar.net",
      },
    ],
    chips: [
      "MERN Stack",
      "JWT",
      "MongoDB",
      "React.js",
      "Node.js",
      "REST APIs",
    ],
  },

  {
    icon: Shield,
    title: "Real-Time Exam Proctoring System",
    bullets: [
      "Developed online examination platform with advanced anti-cheating mechanisms",
      "Integrated WebRTC-based monitoring and camera surveillance",
      "Implemented real-time proctoring dashboard for administrators",
      "Built automated cheating detection using snapshots and activity tracking",
      "Supported live exam management and performance reporting",
    ],
    links: [
      {
        label: "GitHub Samples",
        href: profile.github,
      },
    ],
    chips: [
      "React Native",
      "Node.js",
      "WebRTC",
      "Socket.IO",
      "MongoDB",
      "AI Monitoring",
      "Real-Time Systems",
    ],
  },

  {
    icon: Award,
    title: "Hospital Management System",
    bullets: [
      "Designed role-based hospital administration platform",
      "Implemented doctor, patient, appointment, and department management",
      "Developed scheduling and reporting modules",
      "Built secure authentication and authorization workflows",
      "Automated hospital operational processes and reporting",
    ],
    links: [
      {
        label: "GitHub Samples",
        href: profile.github,
      },
    ],
    chips: [
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "Authentication",
      "Reporting",
    ],
  },

  {
    icon: Wrench,
    title: "Boxigo Logistics Platform",
    bullets: [
      "Built courier and parcel booking management platform",
      "Implemented shipment tracking and order lifecycle management",
      "Integrated AI chatbot for customer support and automation",
      "Developed admin dashboard for logistics operations",
      "Enabled real-time shipment status updates",
    ],
    links: [
      {
        label: "GitHub Samples",
        href: profile.github,
      },
    ],
    chips: [
      "MERN Stack",
      "AI Chatbot",
      "Node.js",
      "MongoDB",
      "React.js",
      "Logistics",
    ],
  },

  {
    icon: Wrench,
    title: "Real-Time Collaboration Tool",
    bullets: [
      "Built multi-user collaboration platform with live synchronization",
      "Implemented real-time chat and collaborative document editing",
      "Developed CRUD modules and project management features",
      "Enabled exportable reports and activity tracking",
      "Supported concurrent users with Socket.IO architecture",
    ],
    links: [
      {
        label: "GitHub Samples",
        href: profile.github,
      },
    ],
    chips: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Real-Time Collaboration",
      "REST APIs",
    ],
  },
  {
    icon: Award,
    title: "Luxegentlemen Barber Salon Platform",
    bullets: [
      "Developed complete online barber shop booking and management platform",
      "Implemented appointment scheduling and availability management",
      "Integrated WhatsApp API for booking confirmations and customer communication",
      "Built AI-powered chatbot for customer support and service inquiries",
      "Created admin dashboard for managing appointments, services, and customers"
    ],
    links: [
      {
        label: "GitHub Samples",
        href: profile.github,
      },
    ],
    chips: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WhatsApp API",
      "AI Chatbot",
      "Appointment Booking",
      "Admin Dashboard",
    ],
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
              href={profile.resumeUrl}
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
            Native) to backend (Node.js, Nest.js, Express.js,), with PostgreSQL/MongoDB
            databases, AWS deployments, APIs, socket programming, and real-time
            features. With 2+ years of industry expertise and 30+ successful
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


