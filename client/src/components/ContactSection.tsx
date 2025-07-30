import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #0f4c28 0%, #1b4332 50%, #081c15 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">CONTACT US</h2>
          <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to join the conservation technology revolution? Let's discuss how we can protect our planet together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-sm font-semibold mb-2 opacity-90">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-sky focus:bg-white/30 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-semibold mb-2 opacity-90">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-sky focus:bg-white/30 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-semibold mb-2 opacity-90">Organization</Label>
                <Input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-sky focus:bg-white/30 transition-all duration-300"
                  placeholder="Your Organization"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-semibold mb-2 opacity-90">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-sky focus:bg-white/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your conservation project or how we can help..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-sky hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="scroll-reveal space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Headquarters</h4>
                    <p className="opacity-90">New Delhi<br />India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">contact@myristika.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
