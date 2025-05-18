import React from "react";

export function FeatureCard({ icon, title, desc, animate, delay }: { icon: string, title: string, desc: string, animate?: boolean, delay?: number }) {
  return (
    <div className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-white dark:bg-[#19202b] shadow hover:shadow-lg transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <div className="text-4xl">{icon}</div>
      <h3 className="h3">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  )
}
