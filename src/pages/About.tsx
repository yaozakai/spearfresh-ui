// import React from "react";
// import logo from '/logos/logo.svg';

function About() {
  return (
    <main className="flex-1 w-full flex flex-col">
      {/* Hero/Intro Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="h2 mb-2">Empowering Social Media Managers</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-700 dark:text-gray-200">Spearfresh thrives on innovation as we aim to deliver cutting edge applications to make your social media workflows as optimal as possible.</p>
          <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-300">We are developers with over 15 years of experience in SaaS, CRM, and multimedia integrations. Our mission is to help social media managers better plan and execute their content by connecting the tools they use every day to the networks that matter most.</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="/logos/logo-monday.png" alt="monday.com integration" className="h-32 w-auto rounded-xl shadow-lg bg-white p-4 dark:bg-[#1a2332]" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 transition-colors">
        <h2 className="h2 text-center mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">🚀</span>
            <h3 className="h3">App Innovation</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">We build apps that streamline your workflow and connect your favorite platforms.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">🔗</span>
            <h3 className="h3">Seamless Integrations</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">From CRMs to multimedia tools, we make your systems work together effortlessly.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">🤝</span>
            <h3 className="h3">Empowering Teams</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">We help social media managers and teams plan, schedule, and analyze with confidence.</p>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="w-full py-16 px-8 max-w-5xl mx-auto">
        <h2 className="h2 text-center mb-8">Our Experience</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-lg text-gray-700 dark:text-gray-200">With over 15 years in SaaS and integrations, our team has delivered solutions for startups, agencies, and enterprises. We understand the challenges of modern social media management and are passionate about building tools that solve real problems.</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Deep expertise in SaaS, CRM, and social media APIs</li>
              <li>Proven track record with multimedia and workflow automation</li>
              <li>Focus on security, reliability, and user experience</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="/logos/logo.svg" alt="Spearfresh App Suite" className="h-32 w-auto rounded-xl shadow-lg bg-white p-4 dark:bg-[#1a2332]" />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 transition-colors">
        <h2 className="h2 text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">💡</span>
            <h3 className="h3">Innovation</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">We never stop learning and improving, always seeking new ways to help our users.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">🔒</span>
            <h3 className="h3">Trust & Security</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">Your data and privacy are our top priorities, with enterprise-grade security in every app.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition">
            <span className="text-4xl">🌎</span>
            <h3 className="h3">Global Impact</h3>
            <p className="text-center text-gray-600 dark:text-gray-300">We build for a worldwide audience, helping teams everywhere connect and grow.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-8 max-w-3xl mx-auto text-center">
        <h2 className="h2 mb-4">Ready to optimize your social media workflow?</h2>
        <p className="text-lg mb-6">Explore our apps or contact us to see how Spearfresh can help your team work smarter, not harder.</p>
        <a href="mailto:support@example.com" className="btn-teal px-8 py-3 rounded font-bold shadow hover:scale-105 transition">Contact Us</a>
      </section>
    </main>
  );
}

export default About;
