import React from "react";

export function FaqItem({ q, a, animate, delay }: { q: string, a: React.ReactNode, animate?: boolean, delay?: number }) {
  return (
    <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay ? `delay-[${delay}ms]` : ''}`} style={{ transitionDelay: `${delay || 0}ms` }}>
      <h4 className="h4">{q}</h4>
      <p className="text-gray-700 dark:text-gray-300">{a}</p>
    </div>
  )
}
