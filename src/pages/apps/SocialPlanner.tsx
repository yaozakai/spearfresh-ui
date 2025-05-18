import logo from '/logos/logo.svg';
import { FeatureCard } from "../home/components/FeatureCard";
import SubNavBar from "../../main/SubNavBar";
import { useInView } from "../../main/useInView";
import React from "react";

function SocialPlanner() {
  // Section refs and inView states
  const [heroRef, heroInView] = useInView();
  const [featuresRef, featuresInView] = useInView();
  const [metaRef, metaInView] = useInView();
  const [twitterRef, twitterInView] = useInView();
  const [nextdoorRef, nextdoorInView] = useInView();
  const [telegramRef, telegramInView] = useInView();
  const [pricingRef, pricingInView] = useInView();

  // Helper function for scrolling with offset (matches PushToSprinklr)
  function scrollWithOffset(id: string) {
    const yOffset = -128; // header (64px) + nav (64px)
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const navLinks = [
    { href: "#meta", label: "Meta Integration", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollWithOffset('meta'); } },
    { href: "#twitter", label: "Twitter/X Integration", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollWithOffset('twitter'); } },
    { href: "#nextdoor", label: "Nextdoor Integration", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollWithOffset('nextdoor'); } },
    { href: "#telegram", label: "Telegram Integration", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollWithOffset('telegram'); } },
    { href: "#pricing", label: "Pricing", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollWithOffset('pricing'); } },
  ];

  return (
    <main className="flex-1 w-full flex flex-col pt-12">
      <SubNavBar title="Spearfresh Social Media Planner" links={navLinks} />
      {/* Hero Section */}
      <section ref={heroRef} className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 md:py-24 max-w-6xl mx-auto transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex-1 flex flex-col gap-6">
          <div className="items-center space-y-2">
            <div className="pill flex items-center gap-1 w-fit">
              <img src={logo} alt="App Logo" className="h-8" />
              Spearfresh Social Media Planner
            </div>
            <h1 className="h5">Plan, schedule, and manage your social content across platforms</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-xl">Integrate with Meta (Facebook, Instagram), Twitter/X, Nextdoor, Telegram, and more. Collaborate, schedule, and analyze your social media campaigns from one place.</p>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <a href="#" className="btn-teal px-6 py-2 rounded font-bold shadow">Connect monday.com Board</a>
            <a href="#" className="underline text-[#0c915e] dark:text-[#42D49C]" target="_blank" rel="noopener noreferrer">View Social Media Planner Template</a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[440px] bg-gray-200 dark:bg-[#1a2332] rounded-xl shadow-inner flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg shadow-lg">
            <img src="/assets/socialPlannerHero.jpg" alt="Social Planner Demo" className="w-full h-fit rounded-xl object-cover" />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section ref={featuresRef} className={`w-full py-12 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon="📅" title="Advanced Scheduling" desc="Schedule posts in 5-minute intervals. Higher plans allow scheduling further into the future." animate={featuresInView} delay={0} />
          <FeatureCard icon="🚀" title="Multi-Channel One-Click Send" desc="Send your content to multiple platforms with a single click for maximum reach." animate={featuresInView} delay={100} />
          <FeatureCard icon="🔗" title="monday.com Integration" desc="Full sync with your monday.com boards for collaborative planning and tracking." animate={featuresInView} delay={200} />
        </div>
      </section>
      {/* Meta Integration */}
      <section ref={metaRef} id="meta" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${metaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 mb-4 transition-all duration-700 ${metaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Meta (Facebook & Instagram) Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <FeatureCard icon="📄" title="Facebook Pages" desc="Post status updates, photos, and videos to your managed Pages." animate={metaInView} delay={0} />
          <FeatureCard icon="📸" title="Instagram Business" desc="Schedule or publish image/video posts via the Content Publishing API." animate={metaInView} delay={100} />
          <FeatureCard icon="👥" title="Facebook Groups" desc="Post to groups you manage (requires app review/permissions)." animate={metaInView} delay={200} />
          <FeatureCard icon="🙅‍♂️" title="User Timelines" desc="Not supported due to privacy policies." animate={metaInView} delay={300} />
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-left border border-gray-200 dark:border-[#222c2a]">
            <thead>
              <tr className="bg-[#e8f7f1] dark:bg-[#143059]">
                <th className="px-4 py-2">Surface</th>
                <th className="px-4 py-2">Supports Posting?</th>
                <th className="px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-bold">Facebook Pages</td>
                <td className="px-4 py-2">✅ Yes</td>
                <td className="px-4 py-2">Post status updates, photos, videos</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold">Instagram Business</td>
                <td className="px-4 py-2">✅ Yes (via Content Publishing API)</td>
                <td className="px-4 py-2">Schedule or publish image/video posts</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold">Facebook Groups</td>
                <td className="px-4 py-2">🔶 Partially (Requires app review and permissions)</td>
                <td className="px-4 py-2">Posts possible in groups your app manages</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold">User Timelines</td>
                <td className="px-4 py-2">❌ No longer supported</td>
                <td className="px-4 py-2">Restricted due to privacy policies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Scheduling, cancel, delete, enable/disable comments, location selection</li>
          <li>Syncs with your monday.com board (Social Media Planner template)</li>
          <li>Supports Facebook Pages, Instagram Business, and (partially) Facebook Groups</li>
        </ul>
      </section>
      {/* Twitter/X Integration */}
      <section ref={twitterRef} id="twitter" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${twitterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 mb-4 transition-all duration-700 ${twitterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Twitter/X Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <FeatureCard icon="📝" title="Long-form Tweets" desc="Support for long-form content and threads." animate={twitterInView} delay={0} />
          <FeatureCard icon="🃏" title="X Cards" desc="Create and schedule X Cards and Twitter-specific features." animate={twitterInView} delay={100} />
        </div>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-4">
          <li>Schedule tweets, threads, and long-form content</li>
          <li>Support for X Cards and Twitter-specific features</li>
          <li>Syncs with your monday.com board</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400">(Integration coming soon!)</p>
      </section>
      {/* Nextdoor Integration */}
      <section ref={nextdoorRef} id="nextdoor" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${nextdoorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 mb-4 transition-all duration-700 ${nextdoorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Nextdoor Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <FeatureCard icon="👤" title="Customer Member" desc="Post and control comments as a customer member." animate={nextdoorInView} delay={0} />
          <FeatureCard icon="🏢" title="Agency Member" desc="Post, select boundary zones, and control comments as an agency member." animate={nextdoorInView} delay={100} />
        </div>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-4">
          <li>Customer members: post and control comments</li>
          <li>Agency members: post, select boundary zones, control comments</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400">(Integration coming soon!)</p>
      </section>
      {/* Telegram Integration */}
      <section ref={telegramRef} id="telegram" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${telegramInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 mb-4 transition-all duration-700 ${telegramInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Telegram Integration</h2>
        <FeatureCard icon="📢" title="Bot Broadcasts" desc="Schedule messages for your bot to broadcast or DM for you." animate={telegramInView} delay={0} />
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-4">
          <li>Schedule messages for your bot to broadcast or DM</li>
          <li>Syncs with your monday.com board</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400">(Integration coming soon!)</p>
      </section>
      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className={`w-full py-16 px-8 bg-white/60 dark:bg-[#1a2332]/80 max-w-5xl mx-auto rounded-xl mb-8 transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>        
        <h2 className={`h2 text-center mb-8 transition-all duration-700 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
          <FeatureCard icon="💸" title="Basic Plan" desc="Schedule up to 1 post per day, up to 2 days in advance. Multi-channel send and monday.com sync included." animate={pricingInView} delay={0} />
          <FeatureCard icon="💼" title="Pro Plan" desc="Schedule up to 10 posts per day, up to 14 days in advance. Priority support and advanced analytics." animate={pricingInView} delay={100} />
          <FeatureCard icon="🏆" title="Premium Plan" desc="Unlimited posts, schedule up to 90 days in advance, all features unlocked." animate={pricingInView} delay={200} />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-4">The amount of time in the future a post can be scheduled is capped by your plan. Upgrade for more flexibility.</p>
      </section>
    </main>
  );
}

export default SocialPlanner;
