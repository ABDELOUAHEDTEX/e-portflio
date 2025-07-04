import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs.sendForm(
      'service_hr0vb1j',
      'template_4nvvr8i',
      form.current,
      'AXIebAn1amY_tEXDi'
    )
    .then((result) => {
        console.log(result.text);
        setStatus("success");
        form.current?.reset();
    }, (error) => {
        console.log(error.text);
        setStatus("error");
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-wild-blue-yonder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="text-deep-champagne">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-dark-salmon to-african-violet mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-african-violet/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-sage" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-white/70 hover:text-deep-champagne transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-sage" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-white/70 hover:text-deep-champagne transition-colors duration-200"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-sage" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-white/70">Rabat, Morocco</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-wild-blue-yonder/30 rounded-lg">
                <p className="text-white/80 text-sm">
                  I am currently available for freelance work, internships, and junior positions in software engineering.
                </p>
              </div>
            </div>
            
            <div className="bg-african-violet/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-white/70 mb-4">
                Find me on professional networks:
              </p>
              <div className="flex space-x-4">
                <a 
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-deep-champagne/20 text-deep-champagne hover:bg-deep-champagne/30 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-sage/20 text-sage hover:bg-sage/30 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-african-violet/20 rounded-xl p-6 shadow-lg relative">
              
              {status === 'success' && (
                <div className="absolute inset-0 bg-african-violet/90 rounded-xl flex flex-col items-center justify-center text-center p-8 z-10">
                  <CheckCircle className="text-sage h-16 w-16 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/80">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 bg-dark-salmon text-white rounded-md hover:bg-opacity-80 transition-all">Send Another Message</button>
                </div>
              )}

              {status === 'error' && (
                <div className="absolute inset-0 bg-dark-salmon/95 rounded-xl flex flex-col items-center justify-center text-center p-8 z-10">
                  <XCircle className="text-white h-16 w-16 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Something Went Wrong</h3>
                  <p className="text-white/80">Please try again later or contact me directly via email.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 bg-white text-dark-salmon rounded-md hover:bg-opacity-80 transition-all">Try Again</button>
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-2 rounded-md bg-african-violet/30 border border-african-violet/50 text-white focus:outline-none focus:ring-2 focus:ring-deep-champagne transition-colors placeholder:text-white/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-4 py-2 rounded-md bg-african-violet/30 border border-african-violet/50 text-white focus:outline-none focus:ring-2 focus:ring-deep-champagne transition-colors placeholder:text-white/60"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-md bg-african-violet/30 border border-african-violet/50 text-white focus:outline-none focus:ring-2 focus:ring-deep-champagne transition-colors placeholder:text-white/60"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-md bg-african-violet/30 border border-african-violet/50 text-white focus:outline-none focus:ring-2 focus:ring-deep-champagne transition-colors placeholder:text-white/60"
                    placeholder="Your message"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 bg-dark-salmon text-white font-medium rounded-md hover:bg-opacity-80 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg disabled:bg-gray-500 disabled:scale-100"
                >
                  {status === 'sending' ? 'Sending...' : <> <Send className="mr-2 h-5 w-5" /> Send Message </>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;