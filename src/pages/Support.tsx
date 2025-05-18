import React, { useState } from "react";

const APPS = [
  { label: "Push to Sprinklr", value: "push-to-sprinklr" },
  { label: "Push to Hootsuite", value: "push-to-hootsuite" },
  { label: "Spearfresh Social Planner", value: "spearfresh-social-planner" },
  { label: "Dexter City", value: "dexter-city" },
];

function Support() {
  const [form, setForm] = useState({ name: "", email: "", app: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  }

  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <div className="w-full max-w-lg bg-white dark:bg-[#19202b] rounded-lg shadow p-8">
        <h1 className="h2 mb-4 text-center">Support</h1>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">Have a question or need help? Fill out the form below and our team will get back to you soon.</p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold py-8">Thank you! Your message has been received.</div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101726]" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101726]" />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="app">Which app/platform?</label>
              <select id="app" name="app" value={form.app} onChange={handleChange} required className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101726]">
                <option value="" disabled>Select an app/platform</option>
                {APPS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
            <button type="submit" className="btn-teal px-6 py-2 rounded font-bold shadow hover:scale-105 transition">Submit</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Support;
