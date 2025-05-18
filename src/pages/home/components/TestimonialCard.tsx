import React from "react";

export function TestimonialCard({ name, quote, animate, delay }: { name: string, quote: string, animate?: boolean, delay?: number }) {
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
