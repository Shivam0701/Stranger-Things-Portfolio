import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useForm } from "@formspree/react";

import { personalInfo } from "../data/mockData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "../hooks/use-toast";
import "./ContactSection.css";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Formspree hook (YOUR FORM ID)
  const [state, handleSubmit] = useForm("mqekgqjq");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Success toast
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "MESSAGE RECEIVED",
        description:
          "Your transmission from the Upside Down has been captured 👹",
        duration: 5000,
      });
    }
  }, [state.succeeded]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1628763448808-9433311579e5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="section-title text-5xl md:text-7xl font-bold mb-4 text-red-500">
            CONTACT FROM THE OTHER SIDE
          </h2>
          <p className="text-xl text-gray-400 tracking-widest font-mono">
            OPEN THE PORTAL & REACH OUT
          </p>
          <div className="section-divider mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`contact-info ${
              isVisible ? "fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              CONNECT WITH ME
            </h3>

            <div className="space-y-4 mb-8">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-link">
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <div className="portal-visual">
              <div className="portal-ring portal-ring-1"></div>
              <div className="portal-ring portal-ring-2"></div>
              <div className="portal-ring portal-ring-3"></div>
              <div className="portal-center"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`contact-form-wrapper ${
              isVisible ? "fade-in-up delay-400" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              SEND A MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-black/70 border-red-900/50 text-white placeholder:text-gray-500 focus:border-red-600"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-black/70 border-red-900/50 text-white placeholder:text-gray-500 focus:border-red-600"
              />

              <Textarea
                name="message"
                placeholder="Your Message from the Upside Down..."
                required
                rows={5}
                className="bg-black/70 border-red-900/50 text-white placeholder:text-gray-500 focus:border-red-600 resize-none"
              />

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 shadow-[0_0_30px_rgba(212,31,45,0.6)] hover:shadow-[0_0_50px_rgba(212,31,45,1)] transition-all duration-300"
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="loading-spinner"></span>
                    TRANSMITTING...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
