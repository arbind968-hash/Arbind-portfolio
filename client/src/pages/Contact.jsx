import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactType: 'Data Science Opportunity',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', contactType: 'Data Science Opportunity', message: '' });
    }, 600);
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Address',
      value: profile.email,
      actionText: 'Open Mail Client →',
      actionHref: `mailto:${profile.email}`,
      copyValue: profile.email,
      key: 'email',
      iconColor: 'bg-blue-500/10 text-sky-400 border-blue-500/20',
      actionColor: 'text-sky-400 hover:text-sky-300'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: profile.phone,
      actionText: 'Call / WhatsApp →',
      actionHref: `tel:${profile.phone}`,
      copyValue: profile.phone,
      key: 'phone',
      iconColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      actionColor: 'text-cyan-400 hover:text-cyan-300'
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare size={13} />
            Let's Connect
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Interested in discussing Data Science roles, internship opportunities, or software collaboration? Send me a message and I will reply promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.key} className="glass-card rounded-2xl p-6 border border-slate-800/80 flex items-start justify-between gap-4 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border shrink-0 ${card.iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{card.title}</h3>
                      <p className="text-xs text-slate-400 break-all mb-2">{card.value}</p>
                      <a href={card.actionHref} className={`text-xs font-semibold ${card.actionColor}`}>
                        {card.actionText}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(card.copyValue, card.key)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title={`Copy ${card.title}`}
                    aria-label={`Copy ${card.title}`}
                  >
                    {copiedKey === card.key ? <Check size={16} className="text-sky-400" /> : <Copy size={16} />}
                  </button>
                </div>
              );
            })}

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-all">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Location & Availability</h3>
                <p className="text-xs text-slate-300 mb-1">{profile.location}</p>
                <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  Available for Data Science & Developer opportunities
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800/80">
              <h3 className="text-sm font-bold text-white mb-4">Profiles & Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium">
                  <Linkedin size={16} className="text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800/80 shadow-2xl relative">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-sky-400" />
                Send a Message
              </h2>

              {success && (
                <div className="mb-6 p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-xs text-sky-400/90 mt-0.5">Thank you for reaching out, Arbind will get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Inquiry Topic</label>
                  <select
                    name="contactType"
                    value={formData.contactType}
                    onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all"
                  >
                    <option>Data Science Opportunity</option>
                    <option>Full-Stack / Software Role</option>
                    <option>Internship / Apprenticeship</option>
                    <option>Project Collaboration</option>
                    <option>General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="5"
                    placeholder="Tell me about your project, timeline, or open role..."
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                >
                  <Send size={16} />
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;