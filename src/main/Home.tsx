import React from "react";
import logo from '/logos/logo.svg'
import { useInView } from "./useInView";

function Home() {
  // Section refs and inView states
  const [heroRef, heroInView] = useInView();
  const [featuresRef, featuresInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [pricingRef, pricingInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [faqsRef, faqsInView] = useInView();

  return (
    <main className="flex-1 w-full flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 md:py-24 max-w-6xl mx-auto transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className={`flex-1 flex flex-col gap-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="items-center space-y-2">
            <div className="pill flex items-center gap-1">
              <img src='/logos/logo-monday.png' alt="App Logo" className="h-8 w-auto" />
              monday.com Marketplace
            </div>
            <h1 className="h5">Push to Sprinklr</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-xl">Easily synchronize your social media content planning between monday.com and Sprinklr. Plan, schedule, and send posts to all your Sprinklr-supported networks—securely and collaboratively, right from your monday.com boards.</p>
          <a id="cta" href="#" className="btn-teal w-fit px-8 py-3 rounded text-lg font-bold shadow hover:scale-105 transition">Try Free</a>
        </div>
        <div className={`flex-1 flex items-center justify-center transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {/* Replace with screenshots or video demo */}
          <div className="w-[340px] h-[220px] bg-gray-200 dark:bg-[#1a2332] rounded-xl shadow-inner flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg">App Screenshot / Demo</div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 transition-colors transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard icon="🔗" title="Seamless monday.com Integration" desc="Works natively inside your monday.com boards for a unified workflow." animate={featuresInView} delay={0} />
          <FeatureCard icon="🔒" title="Secure Sprinklr Connection" desc="Connect and authenticate your Sprinklr account with enterprise-grade security." animate={featuresInView} delay={100} />
          <FeatureCard icon="📅" title="Plan & Schedule Social Content" desc="Create, schedule, and send posts to all Sprinklr-supported social networks directly from monday.com." animate={featuresInView} delay={200} />
          <FeatureCard icon="🤝" title="Collaborative Account Sharing" desc="Share Sprinklr accounts with your team using a secure email authentication system." animate={featuresInView} delay={300} />
          <FeatureCard icon="⚡" title="Fast & Reliable" desc="Instant sync and updates between monday.com and Sprinklr for real-time planning." animate={featuresInView} delay={400} />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className={`w-full py-16 px-8 max-w-3xl mx-auto transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`h2 transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>About AppName</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">We built AppName to solve a real problem for [target users]. Our mission is to make [what your app does] simple, delightful, and accessible to everyone.</p>
        <p className="text-lg text-gray-700 dark:text-gray-300">What makes us different? We focus on [unique differentiator or philosophy].</p>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 transition-colors transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
          <PricingCard
            plan="Basic"
            price="$5"
            features={["1 scheduled message per month", "Secure Sprinklr connection", "monday.com integration", "Email authentication", "Basic support"]}
            cta="Get Basic"
            animate={pricingInView}
            delay={0}
            description="For individuals getting started."
            monthly={5}
            yearly={5}
          />
          <PricingCard
            plan="Pro"
            price="$10"
            features={["10 scheduled messages per month", "All Basic features", "Share Sprinklr accounts via email", "Priority support"]}
            cta="Go Pro"
            highlight
            animate={pricingInView}
            delay={100}
            description="For teams and power users."
            monthly={10}
            yearly={10}
          />
          <PricingCard
            plan="Premium"
            price="$20"
            features={["Unlimited scheduled messages", "All Pro features", "Premium support"]}
            cta="Get Premium"
            animate={pricingInView}
            delay={200}
            description="For agencies and enterprises."
            monthly={20}
            yearly={20}
          />
          <PricingCard
            plan={<span className="flex items-center gap-2"><span className="text-xl"><i className="fa-brands fa-x-twitter"></i></span>Twitter Package</span>}
            price="$5"
            features={["Connect Twitter/X accounts", "Schedule up to 20 tweets per month", "All Premium features"]}
            cta="Add Twitter/X"
            animate={pricingInView}
            delay={300}
            description="Add-on for Twitter/X posting. $5 for every 20 tweets scheduled per month."
            monthly={5}
            yearly={5}
          />
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section ref={testimonialsRef} id="testimonials" className={`w-full py-16 px-8 max-w-5xl mx-auto transition-all duration-700 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard name="Jane D." quote="AppName changed the way I work. It’s fast, easy, and reliable!" animate={testimonialsInView} delay={0} />
          <TestimonialCard name="Alex P." quote="The collaboration features are a game changer for my team." animate={testimonialsInView} delay={100} />
          <TestimonialCard name="Chris T." quote="I love the clean design and how secure my data feels." animate={testimonialsInView} delay={200} />
        </div>
        <div className={`flex flex-wrap items-center justify-center gap-8 mt-12 opacity-70 transition-all duration-700 ${testimonialsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {/* Company logos (replace with real ones) */}
          <img src={logo} alt="Company 1" className="h-10" />
          <img src={logo} alt="Company 2" className="h-10" />
          <img src={logo} alt="Company 3" className="h-10" />
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqsRef} id="faqs" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 transition-colors transition-all duration-700 ${faqsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${faqsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>FAQs</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <FaqItem q="Is my data private?" a="Yes! We use industry best practices to keep your data safe and never share it." animate={faqsInView} delay={0} />
          <FaqItem q="What platforms are supported?" a="AppName works on web, iOS, and Android. More platforms coming soon!" animate={faqsInView} delay={100} />
          <FaqItem q="How do I get support?" a={<span>You can reach us anytime at <a href="mailto:support@example.com" className="text-[#0c915e] dark:text-[#42D49C] underline">support@example.com</a>.</span>} animate={faqsInView} delay={200} />
        </div>
      </section>
    </main>
  )
}

// Reuse the same components from App.tsx
function FeatureCard({ icon, title, desc, animate, delay }: { icon: string, title: string, desc: string, animate?: boolean, delay?: number }) {
  return (
    <div className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <div className="text-4xl">{icon}</div>
      <h3 className="h3">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  )
}
function PricingCard({ plan, price, features, cta, highlight, animate, delay, description }: { plan: React.ReactNode, price: string, features: string[], cta: string, highlight?: boolean, animate?: boolean, delay?: number, description?: string, monthly?: number, yearly?: number }) {
  return (
    <div className={`flex-1 rounded-lg shadow p-4 flex flex-col items-center ${highlight ? 'bg-[#e8f7f1] border-2 border-[#0c915e] shadow-lg scale-105 dark:bg-[#143059] dark:border-[#42D49C]' : 'bg-white dark:bg-[#19202b]'} transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <h3 className="h3">{plan}</h3>
      <div className="text-3xl font-extrabold mb-2">{price}</div>
      <ul className="text-gray-600 dark:text-gray-300 mb-4 text-left list-disc list-inside">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{description}</p>
      <a href="#" className="btn-teal px-6 py-2 mt-auto rounded font-bold shadow">{cta}</a>
    </div>
  )
}

function TestimonialCard({ name, quote, animate, delay }: { name: string, quote: string, animate?: boolean, delay?: number }) {
  return (
    <div className={`bg-white dark:bg-[#19202b] rounded-lg shadow p-6 flex flex-col gap-3 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-xl">★★★★★</span>
        <span className="h4">{name}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">“{quote}”</p>
    </div>
  )
}

function FaqItem({ q, a, animate, delay }: { q: string, a: React.ReactNode, animate?: boolean, delay?: number }) {
  return (
    <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <h4 className="h4">{q}</h4>
      <p className="text-gray-700 dark:text-gray-300">{a}</p>
    </div>
  )
}

export default Home;
