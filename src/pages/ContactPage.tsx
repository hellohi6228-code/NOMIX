import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const INQUIRY_TYPES = [
  'Franchising Opportunities',
  'Real Estate & Landlords',
  'Private Events & Catering',
  'Partnerships & Vendors',
  'Media & Press',
  'Guest Feedback',
  'General Question'
];

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');

  return (
    <div className="pt-10 md:pt-16 pb-24">
      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#13110F] border border-[#CBB48B]/30 text-white space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#CBB48B] block">
              Direct Contact
            </span>
            <p className="font-serif text-2xl text-amber-100 italic">
              Houston and Dallas, Texas
            </p>

            <div className="space-y-4 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#CBB48B]" />
                <a href="mailto:hello@nomixus.com" className="text-sm font-bold text-white hover:text-[#E2C99C]">
                  hello@nomixus.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#CBB48B]" />
                <span className="text-sm text-neutral-200">Houston and Dallas, Texas</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CBB48B]/15 text-xs text-neutral-400 space-y-1">
              <span className="text-white font-bold block uppercase tracking-wider text-[10px]">
                Real Estate & Landlords
              </span>
              <p>Actively seeking 2,500 to 10,000 sq ft restaurant and retail spaces</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#13110F] p-8 rounded-3xl border border-[#2A251F] shadow-xs">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="font-display font-bold text-2xl text-[#F3EBDD]">
                  Send a Note
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#D3C8B8] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0908] border border-[#2A251F] rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#D3C8B8] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0908] border border-[#2A251F] rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#D3C8B8] mb-1">
                    Inquiry Type
                  </label>
                  <select
                    required
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm bg-[#0A0908] border border-[#2A251F] rounded-xl cursor-pointer ${
                      inquiryType ? 'text-[#F3EBDD]' : 'text-[#A8A29E]'
                    }`}
                  >
                    <option value="" disabled>
                      Select an inquiry type
                    </option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} className="text-[#F3EBDD]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#D3C8B8] mb-1">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what is on your mind"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0A0908] border border-[#2A251F] rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0908] bg-[#CBB48B] hover:bg-[#E2C99C] rounded-xl cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-display font-bold text-2xl text-[#F3EBDD]">
                  Message Received
                </h3>
                <p className="text-xs text-[#B5AB9C]">
                  Thank you {name}, we will reply to {email} shortly
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 text-xs font-bold uppercase text-[#0A0908] bg-[#CBB48B] rounded-xl cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
