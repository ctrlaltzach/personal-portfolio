"use client";

import { useState, useEffect } from "react";

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0d1117] dark:to-[#0d1117]">
      {/* Navigation */}
      <nav className="bg-white dark:bg-[#161b22] shadow-sm dark:shadow-none dark:border-b dark:border-[#30363d] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-[#e6edf3]">Zach Burgess</h1>
            <div className="flex gap-6 items-center">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3]">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3]">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3]">Projects</a>
              <a href="#education" className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3]">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3]">Contact</a>
              <button
                onClick={toggleDark}
                className="text-slate-600 hover:text-slate-900 dark:text-[#8b949e] dark:hover:text-[#e6edf3] p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-[#21262d] transition"
                aria-label="Toggle dark mode"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo - Left 1/4 */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-[#21262d] dark:to-[#30363d] flex items-center justify-center overflow-hidden border-4 border-white dark:border-[#30363d] shadow-lg">
              <img src="/profile.jpg" alt="handsome young man" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio Content - Right 3/4 */}
          <div className="w-full md:w-3/4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-[#e6edf3] mb-3">
              Hey! I'm Zach
            </h2>
            <p className="text-xl text-slate-700 dark:text-[#c9d1d9] mb-2 font-semibold">
              Data Solutions Engineer
            </p>
            <p className="text-lg text-slate-600 dark:text-[#8b949e] mb-6 leading-relaxed">
              I specialize in data engineering, cloud solutions, and GenAI applications,
              currently building at Fortitude Re.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/zach-b-7aaa9826b/"
                target="_blank"
                className="px-6 py-3 bg-blue-600 dark:bg-[#1f6feb] text-white rounded-lg hover:bg-blue-700 dark:hover:bg-[#388bfd] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ctrlaltzach"
                target="_blank"
                className="px-6 py-3 bg-slate-800 dark:bg-[#21262d] dark:border dark:border-[#30363d] text-white rounded-lg hover:bg-slate-900 dark:hover:bg-[#30363d] transition"
              >
                GitHub
              </a>
              <a
                href="mailto:mz.burgess@outlook.com"
                className="px-6 py-3 border-2 border-slate-800 dark:border-[#30363d] text-slate-800 dark:text-[#c9d1d9] rounded-lg hover:bg-slate-800 dark:hover:bg-[#21262d] hover:text-white dark:hover:text-[#e6edf3] transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-[#161b22] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3] mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 dark:text-[#c9d1d9] mb-4">
                I'm a Data Engineer with interests in building strong & scalable data
                infrastructure while leveraging cutting-edge technologies to solve problems.
                On the side, I work on pursuing my Master's in Computer Science
                at the University of Tennessee, Knoxville.
              </p>
              <p className="text-slate-700 dark:text-[#c9d1d9]">
                My experience spans data engineering, cloud computing, and GenAI applications,
                with academic foundations in both analytics and software development.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-[#e6edf3] mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'dbt', 'AWS', 'Palantir Foundry', 'Git/GitHub',
                  'Tableau', 'PowerBI', 'Streamlit', 'Azure', 'Selenium',
                  'Machine Learning', 'GenAI/LLMs', 'ETL/ELT', 'Cloud Architecture'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#c9d1d9] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3] mb-8">Experience</h3>
          <div className="space-y-8">
            {/* Fortitude Re - Data Solutions Engineer */}
            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Data Solutions Engineer</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">Fortitude Re</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Jan 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-[#c9d1d9]">
                <li>Worked collaboratively with other developers in an Agile environment, building efficiently and integrating business-user feedback seamlessly</li>
                <li>Employed Palantir Foundry to build AI agents, Ontology data infrastructure, and construct frontend solutions</li>
                <li>Utilized AWS Step Functions, Glue, Lambda, and CloudWatch to orchestrate and troubleshoot data operations</li>
                <li>Led initiatives to decommission unused AWS & Foundry compute resources</li>
              </ul>
            </div>

            {/* Fortitude Re - Intern */}
            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Data Engineering Intern</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">Fortitude Re</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Jun 2025 – Aug 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-[#c9d1d9]">
                <li>Enhanced existing dbt code to support ingestion of new volumes of data, using Git and GitHub for version control</li>
                <li>Established a working relationship with business stakeholders to flesh out use-cases in Foundry</li>
                <li>Wrote Python, SQL, and dbt code to modify and feed data into a PowerBI dashboard recurringly</li>
              </ul>
            </div>

            {/* Nissan */}
            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Data Analytics Intern</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">Nissan Motor Corporation</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Jan 2025 – Apr 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-[#c9d1d9]">
                <li>Created T.R.A.M. (Technical Resource Access Management), an internal Tableau usage analytics tool using TDEs, Python, and Streamlit</li>
                <li>Presented regularly to senior leadership, providing updates on project progress and discussing business implications</li>
                <li>Established POCs for Copilot and Tableau Signature Training, optimizing the way end users learn Tableau</li>
              </ul>
            </div>

            {/* TSBDC */}
            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Quantitative Research Intern</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">Tennessee Small Business Development Centers (TSBDC)</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Aug 2024 – May 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-[#c9d1d9]">
                <li>Conducted quantitative research through MTSU's Business and Economic Research Center (BERC)</li>
                <li>Focus: Availability of Clinical Services (relating to Mental Health) in Tennessee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-[#161b22] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3] mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ChatRRT */}
            <div className="border border-slate-200 dark:border-[#30363d] rounded-lg p-6 hover:shadow-lg dark:hover:bg-[#1c2128] transition">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3] mb-3">ChatRRT – A Tool for Medical Professionals</h4>
              <p className="text-slate-700 dark:text-[#c9d1d9] mb-4">
                Created an LLM application for Emergency Rapid Response Teams (RRTs) to improve
                patient familiarity upon activation, enabling quicker and more informed responses.
                Won the academic division at TN HIMSS 2024 Annual AI Hackathon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Azure SQL</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">GPT-4o</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Azure OpenAI</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Python</span>
              </div>
            </div>

            {/* Cookie Data Aggregation */}
            <div className="border border-slate-200 dark:border-[#30363d] rounded-lg p-6 hover:shadow-lg dark:hover:bg-[#1c2128] transition">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3] mb-3">Cookie Data Aggregation with Selenium</h4>
              <p className="text-slate-700 dark:text-[#c9d1d9] mb-4">
                Gathered cookie metadata from various URLs using Selenium WebDriver for browser
                automation. Implemented multi-threading with a Queue to recycle drivers, making
                the process faster and less memory-intensive.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Selenium</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-[#1f3049] text-blue-700 dark:text-[#58a6ff] rounded text-sm">Multi-threading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3] mb-8">Education</h3>
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Master of Science – Computer Science</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">University of Tennessee, Knoxville</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Jan 2026 – May 2027</span>
              </div>
              <p className="text-slate-700 dark:text-[#c9d1d9]">GPA: 4.0 • Relevant Coursework: Machine Learning, Data Engineering, Human-Computer Interaction</p>
            </div>

            <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-6 rounded-lg shadow-sm dark:shadow-none">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3]">Bachelor of Science – Data Science</h4>
                  <p className="text-blue-600 dark:text-[#58a6ff]">Middle Tennessee State University</p>
                </div>
                <span className="text-slate-600 dark:text-[#8b949e]">Aug 2023 – Dec 2025</span>
              </div>
              <p className="text-slate-700 dark:text-[#c9d1d9]">GPA: 3.9 (Summa Cum Laude) • Steve & Kathy Anderson Data Science Scholarship</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-[#e6edf3] mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-4 rounded-lg shadow-sm dark:shadow-none">
                <p className="font-medium text-slate-900 dark:text-[#e6edf3]">AWS Certified Cloud Practitioner</p>
                <p className="text-slate-600 dark:text-[#8b949e] text-sm">Issued Jun 2023 • Expires Jun 2026</p>
              </div>
              <div className="bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] p-4 rounded-lg shadow-sm dark:shadow-none">
                <p className="font-medium text-slate-900 dark:text-[#e6edf3]">CITI Program: Social and Behavioral Research</p>
                <p className="text-slate-600 dark:text-[#8b949e] text-sm">Issued Aug 2024 • Expires Aug 2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-[#161b22] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-[#e6edf3] mb-4">Let's Connect</h3>
          <p className="text-slate-700 dark:text-[#c9d1d9] mb-8 max-w-2xl mx-auto">
            Interested in all things Computational Science, love hearing about new opportunities,
            collaborations, or just connecting with fellow data enthusiasts.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:mz.burgess@outlook.com"
              className="px-8 py-3 bg-blue-600 dark:bg-[#1f6feb] text-white rounded-lg hover:bg-blue-700 dark:hover:bg-[#388bfd] transition"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/zach-b-7aaa9826b/"
              target="_blank"
              className="px-8 py-3 border-2 border-slate-800 dark:border-[#30363d] text-slate-800 dark:text-[#c9d1d9] rounded-lg hover:bg-slate-800 dark:hover:bg-[#21262d] hover:text-white dark:hover:text-[#e6edf3] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-[#010409] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="dark:text-[#c9d1d9]">© 2026 Michael Z. Burgess. Built with Next.js and Tailwind CSS.</p>
          <p className="text-slate-400 dark:text-[#8b949e] text-sm mt-2">Nashville, TN</p>
        </div>
      </footer>
    </div>
  );
}
