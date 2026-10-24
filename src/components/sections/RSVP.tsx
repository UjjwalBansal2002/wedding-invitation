'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';

interface RSVPProps {
  events: Array<{ id: string; name: string }>;
}

export function RSVP({ events }: RSVPProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    numberOfGuests: '1',
    events: {
      haldi: false,
      sangeet: false,
      sagai: false,
      wedding: false,
    } as Record<string, boolean>,
    dietaryPreferences: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleEventChange = (eventId: string) => {
    setFormData((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [eventId]: !prev.events[eventId],
      },
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.attending) newErrors.attending = 'Please let us know if you can attend';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Demo mode - show success without actual backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attending: '',
        numberOfGuests: '1',
        events: {
          haldi: false,
          sangeet: false,
          sagai: false,
          wedding: false,
        },
        dietaryPreferences: '',
        message: '',
      });
    }, 3500);
  };

  const eventColorMap: Record<string, string> = {
    haldi: '#F9A825',
    sangeet: '#7B3F98',
    sagai: '#26734D',
    wedding: '#B71C1C',
  };

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#FFF4E5] via-[#FFFDF8] to-[#FFF4E5] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#B71C1C]">
              Kindly Grace Our Celebrations
            </p>
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">
            Confirm Your Presence
          </h2>
          <p className="text-[#6B8E23] mt-2 italic font-serif text-base sm:text-lg">
            Kindly respond by November 15, 2026 to help us curate your warm hospitality
          </p>
        </motion.div>

        <FloralDivider height="small" />

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="mt-12 text-center py-16 px-6 rounded-3xl bg-white shadow-2xl border border-[#E5A93C]/40"
            >
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-[#26734D]" />
              <h3 className="text-elegant text-3xl sm:text-4xl text-[#D81B60] mb-3">
                Dhanyavaad & Thank You!
              </h3>
              <p className="text-lg text-[#2A1810]/85 font-serif max-w-lg mx-auto mb-2">
                Your response has been recorded. We look forward to welcoming you with warm blessings at The Mountain Front Resort & Spa!
              </p>
              <p className="text-xs text-[#B71C1C] font-serif font-semibold mt-4">
                [Confirmation Received]
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="mt-10 rounded-3xl p-[1px] bg-gradient-to-br from-[#E5A93C] via-[#FFFDF8] to-[#D81B60] shadow-2xl"
            >
              <div className="bg-[#FFFDF9] rounded-[23px] p-6 sm:p-12 border border-[#E5A93C]/30 space-y-7">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Rajesh & Sunita Bansal"
                      className={`w-full px-4 py-3 rounded-xl border bg-white font-serif text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40 ${
                        errors.name ? 'border-[#B71C1C]' : 'border-[#E5A93C]/40'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#B71C1C] font-serif mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., rajesh@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white font-serif text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40 ${
                        errors.email ? 'border-[#B71C1C]' : 'border-[#E5A93C]/40'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#B71C1C] font-serif mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Attendance */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5A93C]/40 bg-white font-serif text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                      Will You Attend? *
                    </label>
                    <select
                      name="attending"
                      value={formData.attending}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white font-serif text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40 ${
                        errors.attending ? 'border-[#B71C1C]' : 'border-[#E5A93C]/40'
                      }`}
                    >
                      <option value="">Select your attendance</option>
                      <option value="yes">Joyfully Attending</option>
                      <option value="no">Regretfully Unable to Attend</option>
                    </select>
                    {errors.attending && (
                      <p className="text-xs text-[#B71C1C] font-serif mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.attending}
                      </p>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid sm:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                        Total Guests Attending
                      </label>
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5A93C]/40 bg-white font-serif text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                        Dietary Preferences
                      </label>
                      <input
                        type="text"
                        name="dietaryPreferences"
                        value={formData.dietaryPreferences}
                        onChange={handleChange}
                        placeholder="e.g., Pure Vegetarian, Jain, Vegan"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5A93C]/40 bg-white font-serif text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Events Checkboxes */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-2"
                  >
                    <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-3">
                      Select Ceremonies You Will Grace
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {events.map((event) => {
                        const eventColor = eventColorMap[event.id] || '#D81B60';
                        const isChecked = !!formData.events[event.id];
                        return (
                          <label
                            key={event.id}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-white shadow-sm font-semibold'
                                : 'bg-[#FFFBF4] border-gray-200 opacity-85'
                            }`}
                            style={{
                              borderColor: isChecked ? eventColor : '#E5A93C33',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleEventChange(event.id)}
                              className="w-4 h-4 rounded accent-[#D81B60] cursor-pointer"
                            />
                            <span className="text-sm font-serif" style={{ color: isChecked ? eventColor : '#2A1810' }}>
                              {event.name}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Blessings Message */}
                <div>
                  <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#B71C1C] mb-2">
                    Warm Blessings & Wishes for the Couple
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write a heartfelt message or shubhkaamnaayein for Kajal & Ashish..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5A93C]/40 bg-white font-serif text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60]/40"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#D81B60] via-[#B71C1C] to-[#E87524] text-white rounded-xl font-serif font-semibold text-lg shadow-xl hover:shadow-2xl transition-all border border-[#FDD835]/40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-[#FDD835]" />
                    <span>Send RSVP & Blessings</span>
                  </motion.button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
