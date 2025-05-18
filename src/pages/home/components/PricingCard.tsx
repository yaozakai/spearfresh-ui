import React from "react";

export function PricingCard({ plan, price, features, cta, highlight, animate, delay, description }: { plan: React.ReactNode, price: string, features: string[], cta: string, highlight?: boolean, animate?: boolean, delay?: number, description?: string, monthly?: number, yearly?: number }) {
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
