"use client";

import { useState, useEffect } from "react";

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

const skills = [
  "Python", "SQL", "dbt", "AWS", "Palantir Foundry", "Git/GitHub",
  "Tableau", "PowerBI", "Streamlit", "Azure", "Selenium",
  "Machine Learning", "GenAI / LLMs", "ETL / ELT", "Cloud Architecture",
];

const experience = [
  {
    date: "Jan 2026 – Present",
    role: "Data Solutions Engineer",
    company: "Fortitude Re",
    desc: "Built AI agents, Ontology data infrastructure, and frontend solutions on Palantir Foundry. Orchestrated data operations using AWS Step Functions, Glue, Lambda, and CloudWatch. Led initiatives to decommission unused compute resources.",
  },
  {
    date: "Jun 2025 – Aug 2025",
    role: "Data Engineering Intern",
    company: "Fortitude Re",
    desc: "Enhanced dbt code to support new data volumes, collaborated with business stakeholders on Foundry use-cases, and built Python/SQL pipelines feeding a recurring PowerBI dashboard.",
  },
  {
    date: "Jan 2025 – Apr 2025",
    role: "Data Analytics Intern",
    company: "Nissan Motor Corporation",
    desc: "Built T.R.A.M., an internal Tableau usage analytics tool using TDEs, Python, and Streamlit. Presented to senior leadership and established POCs for Copilot and Tableau Signature Training.",
  },
  {
    date: "Aug 2024 – May 2025",
    role: "Quantitative Research Intern",
    company: "Tennessee Small Business Development Centers (TSBDC)",
    desc: "Conducted quantitative research through MTSU's BERC, focused on the availability of clinical services relating to mental health in Tennessee.",
  },
];

const projects = [
  {
    num: "01",
    title: "ChatRRT – A Tool for Medical Professionals",
    skills: ["Azure SQL", "GPT-4o", "Azure OpenAI", "Python"],
    desc: "An LLM application for Emergency Rapid Response Teams to improve patient familiarity upon activation, enabling quicker and more informed responses. Won the academic division at TN HIMSS 2024 Annual AI Hackathon.",
  },
  {
    num: "02",
    title: "Cookie Data Aggregation with Selenium",
    skills: ["Python", "Selenium", "Multi-threading"],
    desc: "Gathered cookie metadata from various URLs using Selenium WebDriver for browser automation. Implemented multi-threading with a Queue to recycle drivers, making the process faster and less memory-intensive.",
  },
];

const education = [
  {
    date: "Jan 2026 – May 2027",
    degree: "Master of Science – Computer Science",
    school: "University of Tennessee, Knoxville",
    details: "GPA: 4.0  ·  Machine Learning  ·  Data Engineering  ·  Human-Computer Interaction",
  },
  {
    date: "Aug 2023 – Dec 2025",
    degree: "Bachelor of Science – Data Science",
    school: "Middle Tennessee State University",
    details: "GPA: 3.9 (Summa Cum Laude)  ·  Steve & Kathy Anderson Data Science Scholarship",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", detail: "Issued Jun 2023  ·  Expires Jun 2026" },
  { name: "CITI Program: Social and Behavioral Research", detail: "Issued Aug 2024  ·  Expires Aug 2028" },
];

const LINE = "border-l border-[#9db2bf]/40 dark:border-[#526d82]/50";

function SectionLabel({ num, name }: { num: string; name: string }) {
  return (
    <div className="hidden md:flex flex-col items-end justify-start pr-8 pt-1 shrink-0 w-[140px]">
      <span className="text-[28px] font-bold leading-none text-[#9db2bf]/60 dark:text-[#526d82]">
        {num}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#9db2bf] dark:text-[#526d82]/80 mt-1.5">
        {name}
      </span>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-1 gap-y-1.5 items-center">
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-1">
          <span className="px-2.5 py-0.5 text-xs rounded-full border border-[#9db2bf]/50 dark:border-[#526d82]/60 text-[#526d82] dark:text-[#9db2bf] bg-[#9db2bf]/10 dark:bg-[#526d82]/10">
            {tag}
          </span>
          {i < tags.length - 1 && (
            <span className="text-[#9db2bf]/60 dark:text-[#526d82]/60 text-xs select-none">·</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleDark() {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  }

  return (
    <div className="min-h-screen bg-[#dde6ed] dark:bg-[#1c2b3a]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#dde6ed]/95 dark:bg-[#1c2b3a]/95 backdrop-blur-sm border-b border-[#9db2bf]/30 dark:border-[#526d82]/30">
        <div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#526d82] dark:text-[#9db2bf]">
            Zach Burgess
          </span>
          <div className="flex items-center gap-6">
            {["About", "Experience", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-wide text-[#526d82] dark:text-[#9db2bf] hover:text-[#27374d] dark:hover:text-[#dde6ed] transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleDark}
              className="text-[#526d82] dark:text-[#9db2bf] hover:text-[#27374d] dark:hover:text-[#dde6ed] transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="max-w-5xl mx-auto px-8">

        {/* 01 – About */}
        <section id="about">
          <div className="md:flex">
            <SectionLabel num="01" name="About" />
            <div className={`${LINE} pl-10 pt-14 pb-16 grow`}>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border border-[#9db2bf]/50 dark:border-[#526d82]">
                  <img src="/profile.jpg" alt="Zach Burgess" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-[#27374d] dark:text-[#dde6ed] mb-1">
                    Zach Burgess
                  </h1>
                  <p className="text-base font-medium text-[#526d82] dark:text-[#9db2bf] mb-3">
                    Data Solutions Engineer
                  </p>
                  <p className="text-sm text-[#526d82] dark:text-[#9db2bf] leading-relaxed max-w-lg">
                    I specialize in data engineering, cloud solutions, and GenAI applications,
                    currently building at Fortitude Re. My experience spans scalable data
                    infrastructure and cutting-edge technologies—while on the side, pursuing
                    a Master&apos;s in Computer Science at the University of Tennessee, Knoxville.
                  </p>
                </div>
              </div>
              <TagList tags={skills} />
            </div>
          </div>
        </section>

        {/* 02 – Experience */}
        <section id="experience">
          <div className="md:flex">
            <SectionLabel num="02" name="Experience" />
            <div className={`${LINE} pl-10 pb-16 grow`}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#27374d] dark:text-[#dde6ed]">Experience</h2>
                <p className="text-sm text-[#526d82] dark:text-[#9db2bf] mt-1">
                  Where I&apos;ve worked and what I&apos;ve built.
                </p>
              </div>
              <div className="space-y-10">
                {experience.map(({ date, role, company, desc }) => (
                  <div key={role + date} className="grid grid-cols-[120px_1fr] gap-5">
                    <p className="text-xs text-[#9db2bf] dark:text-[#526d82] leading-relaxed text-right pt-0.5">
                      {date}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold text-[#27374d] dark:text-[#dde6ed]">{role}</h3>
                      <p className="text-xs text-[#526d82] dark:text-[#9db2bf] mb-2">{company}</p>
                      <p className="text-xs text-[#526d82]/80 dark:text-[#9db2bf]/80 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 – Projects */}
        <section id="projects">
          <div className="md:flex">
            <SectionLabel num="03" name="Projects" />
            <div className={`${LINE} pl-10 pb-16 grow`}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#27374d] dark:text-[#dde6ed]">Projects</h2>
                <p className="text-sm text-[#526d82] dark:text-[#9db2bf] mt-1">
                  Things I&apos;ve built outside of work.
                </p>
              </div>
              <div className="space-y-10">
                {projects.map(({ num, title, skills: projSkills, desc }) => (
                  <div key={num} className="grid grid-cols-[40px_1fr] gap-4">
                    <span className="text-sm font-bold text-[#9db2bf]/70 dark:text-[#526d82] pt-0.5">
                      {num}
                    </span>
                    <div>
                      <div className="mb-2">
                        <TagList tags={projSkills} />
                      </div>
                      <h3 className="text-sm font-semibold text-[#27374d] dark:text-[#dde6ed] mb-1">{title}</h3>
                      <p className="text-xs text-[#526d82]/80 dark:text-[#9db2bf]/80 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 – Education */}
        <section id="education">
          <div className="md:flex">
            <SectionLabel num="04" name="Education" />
            <div className={`${LINE} pl-10 pb-16 grow`}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#27374d] dark:text-[#dde6ed]">Education</h2>
                <p className="text-sm text-[#526d82] dark:text-[#9db2bf] mt-1">
                  Where I&apos;ve studied.
                </p>
              </div>
              <div className="space-y-10">
                {education.map(({ date, degree, school, details }) => (
                  <div key={degree} className="grid grid-cols-[120px_1fr] gap-5">
                    <p className="text-xs text-[#9db2bf] dark:text-[#526d82] leading-relaxed text-right pt-0.5">
                      {date}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold text-[#27374d] dark:text-[#dde6ed]">{degree}</h3>
                      <p className="text-xs text-[#526d82] dark:text-[#9db2bf] mb-1">{school}</p>
                      <p className="text-xs text-[#526d82]/80 dark:text-[#9db2bf]/80 leading-relaxed">{details}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9db2bf] dark:text-[#526d82]/80 mb-5">
                  Certifications
                </p>
                <div className="space-y-4">
                  {certifications.map(({ name, detail }) => (
                    <div key={name} className="grid grid-cols-[120px_1fr] gap-5">
                      <div />
                      <div>
                        <p className="text-xs font-medium text-[#27374d] dark:text-[#dde6ed]">{name}</p>
                        <p className="text-xs text-[#9db2bf] dark:text-[#526d82]">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 – Contact */}
        <section id="contact">
          <div className="md:flex">
            <SectionLabel num="05" name="Contact" />
            <div className={`${LINE} pl-10 pb-20 grow`}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#27374d] dark:text-[#dde6ed]">Contact</h2>
                <p className="text-sm text-[#526d82] dark:text-[#9db2bf] mt-1">
                  Interested in all things computational science—open to opportunities,
                  collaborations, or just connecting.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-10">
                {/* Styled email */}
                <a
                  href="mailto:mz.burgess@outlook.com"
                  className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
                >
                  <span className="text-[#9db2bf]">mz</span>
                  <span className="text-[#27374d] dark:text-[#dde6ed]">[dot]</span>
                  <span className="text-[#9db2bf]">burgess</span>
                  <span className="text-[#27374d] dark:text-[#dde6ed]">[at]</span>
                  <span className="text-[#9db2bf]">outlook</span>
                  <span className="text-[#27374d] dark:text-[#dde6ed]">[dot]</span>
                  <span className="text-[#9db2bf]">com</span>
                </a>
                {/* Numbered links */}
                <div className="space-y-3">
                  {[
                    { num: "01", label: "GitHub", href: "https://github.com/ctrlaltzach" },
                    { num: "02", label: "LinkedIn", href: "https://www.linkedin.com/in/zach-b-7aaa9826b/" },
                  ].map(({ num, label, href }) => (
                    <a
                      key={num}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#526d82] dark:text-[#9db2bf] hover:text-[#27374d] dark:hover:text-[#dde6ed] transition-colors group"
                    >
                      <span className="text-[10px] font-mono text-[#9db2bf] dark:text-[#526d82]">{num}</span>
                      <span>{label}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer — line stops here */}
      <footer className="max-w-5xl mx-auto px-8 pb-10">
        <div className="md:flex">
          <div className="hidden md:block w-[140px] shrink-0" />
          <div className="pl-10 md:pl-10">
            <p className="text-xs text-[#9db2bf] dark:text-[#526d82]">
              © 2026 Zach Burgess built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
