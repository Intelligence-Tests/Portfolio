import React, { useState } from 'react';
import { User, Mail, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add form submission logic
    // For now, we'll just show a submission confirmation
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-32 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl opacity-20 blur-xl"></div>

        <div className="relative bg-black/30 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
          {!submitted ? (
            <>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Let's <span className="text-purple-400">Connect</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-purple-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-purple-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <Check className="mx-auto w-16 h-16 text-green-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Message Sent!
              </h2>
              <p className="text-slate-300 mb-8">
                We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;