export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Michael (Zach) Burgess</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900">Projects</a>
              <a href="#education" className="text-slate-600 hover:text-slate-900">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="flex flex-col md:flex-row items-center gap-12">
    {/* Profile Photo - Left 1/4 */}
    <div className="w-full md:w-1/4 flex justify-center md:justify-start">
      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
        {/* Replace the div below with an <img> tag when you have a photo */}
        {/* <div className="text-7xl text-blue-400 font-bold">MB</div>*/}
        <img src="/profile.jpg" alt="handsome young man" className="w-full h-full object-cover" />
      </div>
    </div>
    
    {/* Bio Content - Right 3/4 */}
    <div className="w-full md:w-3/4">
      <h2 className="text-4xl font-bold text-slate-900 mb-3">
        Hi, I'm Zach.
      </h2>
      <p className="text-xl text-slate-700 mb-2 font-semibold">
        Data Solutions Engineer
      </p>
      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
        I specialize in data engineering, cloud solutions, and GenAI applications, 
        currently building enterprise data architectures at Fortitude Re.
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="https://www.linkedin.com/in/zach-b-7aaa9826b/" 
          target="_blank"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/ctrlaltzach" 
          target="_blank"
          className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition"
        >
          GitHub
        </a>
        <a 
          href="mailto:mz.burgess@outlook.com"
          className="px-6 py-3 border-2 border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">
                I'm a Data Solutions Engineer with a passion for building scalable data 
                infrastructure and leveraging cutting-edge technologies to solve complex 
                business problems. On the side, I work on pursuing my Master's in 
                Computer Science at the University of Tennessee, Knoxville.
              </p>
              <p className="text-slate-700">
                My experience spans data engineering, cloud computing, and GenAI applications, 
                with a strong foundation in both analytics and software development.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'dbt', 'AWS', 'Palantir Foundry', 'Git/GitHub', 
                  'Tableau', 'PowerBI', 'Streamlit', 'Azure', 'Selenium', 
                  'Machine Learning', 'GenAI/LLMs', 'ETL/ELT', 'Cloud Architecture'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
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
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Experience</h3>
          <div className="space-y-8">
            {/* Fortitude Re - Data Solutions Engineer */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Data Solutions Engineer</h4>
                  <p className="text-blue-600">Fortitude Re</p>
                </div>
                <span className="text-slate-600">Jan 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Employed Palantir Foundry Applications to construct intricate enterprise data architecture solutions</li>
                <li>Utilized AWS Step Functions, Glue, Lambda, and CloudWatch to orchestrate and view data operations</li>
              </ul>
            </div>

            {/* Fortitude Re - Intern */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Data Engineering Intern</h4>
                  <p className="text-blue-600">Fortitude Re</p>
                </div>
                <span className="text-slate-600">Jun 2025 – Aug 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Enhanced existing dbt code to support ingestion of new volumes of data, using Git and GitHub for version control</li>
                <li>Wrote Python, SQL, and dbt code to modify and feed data into a PowerBI dashboard recurringly</li>
              </ul>
            </div>

            {/* Nissan */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Data Analytics Intern</h4>
                  <p className="text-blue-600">Nissan Motor Corporation</p>
                </div>
                <span className="text-slate-600">Jan 2025 – Apr 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Established POCs for Copilot and Tableau Signature Training, optimizing the way end users learn Tableau</li>
                <li>Created T.R.A.M. (Technical Resource Access Management), an internal Tableau usage analytics tool using TDEs, Python, and Streamlit</li>
              </ul>
            </div>

            {/* TSBDC */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Quantitative Research Intern</h4>
                  <p className="text-blue-600">Tennessee Small Business Development Centers (TSBDC)</p>
                </div>
                <span className="text-slate-600">Aug 2024 – May 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Conducted quantitative research through MTSU's Business and Economic Research Center (BERC)</li>
                <li>Focus: Urban Physical Environments in Tennessee - Impact on Mental Distress & Mental Health Providers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ChatRRT */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">ChatRRT – A Tool for Medical Professionals</h4>
              <p className="text-slate-700 mb-4">
                Created an LLM application for Emergency Rapid Response Teams (RRTs) to improve 
                patient familiarity upon activation, enabling quicker and more informed responses. 
                Won the academic division at TN HIMSS 2024 Annual AI Hackathon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Azure SQL</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">GPT-4o</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Azure OpenAI</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Python</span>
              </div>
              {/*<div className="flex gap-3">
                <a href="#" className="text-blue-600 hover:underline">View Project →</a>
              </div>*/}
            </div>

            {/* Cookie Data Aggregation */}
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Cookie Data Aggregation with Selenium</h4>
              <p className="text-slate-700 mb-4">
                Gathered cookie metadata from various URLs using Selenium WebDriver for browser 
                automation. Implemented multi-threading with a Queue to recycle drivers, making 
                the process faster and less memory-intensive.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Selenium</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">Multi-threading</span>
              </div>
              {/*<div className="flex gap-3">
                <a href="#" className="text-blue-600 hover:underline">View Code →</a>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Education</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Master of Science – Computer Science</h4>
                  <p className="text-blue-600">University of Tennessee, Knoxville</p>
                </div>
                <span className="text-slate-600">Jan 2026 – May 2027</span>
              </div>
              <p className="text-slate-700">Relevant Coursework: Machine Learning, Human-Computer Interaction</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Bachelor of Science – Data Science</h4>
                  <p className="text-blue-600">Middle Tennessee State University</p>
                </div>
                <span className="text-slate-600">Aug 2023 – Dec 2025</span>
              </div>
              <p className="text-slate-700">GPA: 3.9 (Summa Cum Laude) • Steve & Kathy Anderson Data Science Scholarship</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-slate-900">AWS Certified Cloud Practitioner</p>
                <p className="text-slate-600 text-sm">Issued Jun 2023 • Expires Jun 2026</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-slate-900">CITI Program: Social and Behavioral Research</p>
                <p className="text-slate-600 text-sm">Issued Aug 2024 • Expires Aug 2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow data enthusiasts.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:mz.burgess@outlook.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/zach-b-7aaa9826b/" 
              target="_blank"
              className="px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Michael Z. Burgess. Built with Next.js and Tailwind CSS.</p>
          <p className="text-slate-400 text-sm mt-2">Nashville, TN</p>
        </div>
      </footer>
    </div>
  );
}