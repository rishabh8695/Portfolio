import React, { useRef, useState } from 'react';
import { Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic anti-spam: check honeypot field
    const formElementData = new FormData(formRef.current);
    if (formElementData.get('botcheck')) {
      toast.error("Spam detected!");
      return;
    }

    // Form validation
    if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Use provided EmailJS keys
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_82cdbjb';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gk8mqqn';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'V0ihKK42yWSLjkdEq';

    if (!publicKey || publicKey === 'your_public_key_here') {
      toast.error(
        "Missing EmailJS Keys! Please add your keys to the .env file and restart the server.",
        { duration: 6000 }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      toast.success('Message Sent Successfully!');
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      // Show the exact error message returned by EmailJS
      const errorMessage = error?.text || error?.message || 'Unknown error occurred';
      toast.error(`Failed to send: ${errorMessage}`, { duration: 6000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <span className="bg-blue-500/10 text-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block border border-blue-500/20">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Let's Work <span className="text-blue-500">Together</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          <div className="card text-left flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Email</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">rishabhkumargupta9935@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="text-pink-400" size={20} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Location</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Moradabad • India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <Clock className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Response Time</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="card text-center p-8">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 flex items-center justify-center gap-2">
              Connect with me 👋
            </h4>
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/rishabh8695" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishabh-kumar-gupta-56b004326" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-500 dark:text-blue-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhkumargupta9935@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-pink-300 hover:bg-slate-700 hover:-translate-y-1 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="card">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-blue-500">✦</span> Send a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from users to catch bots */}
            <input
              type="text"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-slate-100 dark:bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-600"
              />
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-slate-100 dark:bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-600"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-slate-100 dark:bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all placeholder:text-slate-500 dark:placeholder:text-slate-600"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
              rows={6}
              className="w-full bg-slate-100 dark:bg-background/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-500 dark:placeholder:text-slate-600"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-slate-900 dark:text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message →'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
