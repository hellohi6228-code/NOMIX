import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin, X, Send } from 'lucide-react';
import { CAREER_PERKS, CAREER_ROLES } from '../data/careers';
import { JobOpening } from '../types';

export const CareersPage: React.FC = () => {
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header with Visual Banner */}
      <section className="pt-10 md:pt-16 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Careers at NOMIX
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917]">
              Join the Family
            </h1>
            <p className="font-serif text-2xl sm:text-3xl text-[#44403C] italic">
              Real people, real food, pride in every plate
            </p>
            <p className="text-sm text-[#57534E]">
              Over 70% of our general managers started on the dining room floor or behind the wok line
            </p>
          </motion.div>

          <div className="lg:col-span-6 h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg relative">
            <img src="/assets/food/restaurant_vibe.jpg" alt="Restaurant team dining room" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 text-white">
              <span className="font-serif italic text-lg text-amber-200">The Daily Family Meal before every shift</span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAREER_PERKS.map((perk, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E7E3DC] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                0{idx + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-[#1C1917]">{perk.title}</h3>
              <p className="text-xs text-[#57534E] leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-[#F5F2EB] py-16 border-y border-[#E7E3DC]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
              Open Opportunities
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
              {CAREER_ROLES.length} Roles Available
            </span>
          </div>

          <div className="space-y-3">
            {CAREER_ROLES.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-[#E7E3DC] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B45309]">
                    <span>{job.brand}</span>
                    <span>/</span>
                    <span className="text-[#78716C]">{job.department}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#1C1917]">{job.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#57534E]">
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-xs text-[#78716C] pt-1">{job.vibe}</p>
                </div>

                <button
                  onClick={() => {
                    setActiveJob(job);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E7E3DC] relative">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 p-2 text-neutral-500 hover:text-neutral-900 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#B45309]">
                  {activeJob.brand} / {activeJob.department}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#1C1917]">
                  {activeJob.title}
                </h3>
                <p className="text-xs text-[#57534E]">{activeJob.location}</p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#44403C] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E3DC] rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#44403C] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E3DC] rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#44403C] mb-1">
                      Tell Us About Your Experience
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share a short note about your hospitality background"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E7E3DC] rounded-xl"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1C1917] rounded-xl cursor-pointer"
                >
                  Send Application
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-display font-bold text-2xl text-[#1C1917]">
                  Application Sent
                </h3>
                <p className="text-xs text-[#57534E]">
                  Thank you {name}, the {activeJob.brand} team will reach out to {email}
                </p>
                <button
                  onClick={() => setActiveJob(null)}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase text-white bg-[#1C1917] rounded-xl"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
