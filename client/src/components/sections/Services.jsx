import { servicesData } from '../../data/services';
import { Layout, BarChart4, Cpu, Server, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Layout: Layout,
  BarChart4: BarChart4,
  Cpu: Cpu,
  Server: Server,
};

const Services = () => {
  return (
    <section className="py-20 bg-slate-900/40 relative border-t border-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            What I Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] mt-3 tracking-tight">
            Services & Expertise
          </h2>
          <p className="mt-3 text-[#94A3B8] text-base">
            Tailored engineering solutions designed for high performance, clean maintainability, and measurable business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-700/80 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-sky-400 flex items-center justify-center border border-blue-500/25 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                          <Check size={12} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="pt-4 border-t border-slate-800 inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Discuss your project
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
