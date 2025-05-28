"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Phone, Shield, Terminal, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Navigation */}
      <header className="relative z-10 container mx-auto py-6">
        <nav className="cyber-frame p-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-cyan-400 glitch-text">KRISH PATEL</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
              <Link href="#experience" className="nav-link">
                Experience
              </Link>
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
              <Link href="#education" className="nav-link">
                Education
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <button className="md:hidden cyber-button p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-cyan-500/30">
              <div className="flex flex-col space-y-4">
                <Link href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Skills
                </Link>
                <Link href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Experience
                </Link>
                <Link href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </Link>
                <Link href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Education
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center">
          <div className="hero-name-container mb-8">
            <h1 className="hero-name">
              HEY, I'M
              <br />
              <span className="text-cyan-400 glitch-text">KRISH PATEL</span>
            </h1>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            A cybersecurity student securing networks, systems, and data
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
            <Link href="https://github.com/0xdf-sec" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="cyber-button-large cyber-button-spark w-full">VIEW PROJECTS</Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/krish-patel4204/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="cyber-button-large cyber-button-outline cyber-button-spark w-full">
                LET'S CONNECT
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="cyber-frame p-8">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I am a highly motivated and driven individual actively seeking an opportunity to expand expertise in
                  cybersecurity techniques and strategies within a professional environment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about leveraging technical skills and analytical abilities to protect digital assets,
                  identify vulnerabilities, and contribute to a secure and resilient IT infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated to continuous learning and applying cybersecurity best practices to make a significant and
                  positive impact in the workplace.
                </p>
              </div>
              <div className="space-y-4">
                <Link href="mailto:krishp4220@gmail.com" className="contact-item contact-item-clickable">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>krishp4220@gmail.com</span>
                </Link>
                <Link href="tel:+13683994220" className="contact-item contact-item-clickable">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+1 368-399-4220</span>
                </Link>
                <div className="contact-item">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span>Calgary, Canada</span>
                </div>
                <Link
                  href="https://www.linkedin.com/in/krish-patel4204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item contact-item-clickable"
                >
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                  <span>linkedin.com/in/krish-patel4204</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="section-title text-center mb-12">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Linux", icon: <Terminal className="h-8 w-8" /> },
              { name: "Threat Detection", icon: <Shield className="h-8 w-8" /> },
              { name: "Network Analysis", icon: <Zap className="h-8 w-8" /> },
              { name: "Web App Pentesting", icon: <Terminal className="h-8 w-8" /> },
              { name: "Exploitation Frameworks", icon: <Terminal className="h-8 w-8" /> },
              { name: "Access Control", icon: <Shield className="h-8 w-8" /> },
              { name: "Windows Pentesting", icon: <Terminal className="h-8 w-8" /> },
              { name: "Active Directory", icon: <Terminal className="h-8 w-8" /> },
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="font-medium text-center mt-4">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="section-title text-center mb-12">EXPERIENCE</h2>
          <div className="cyber-frame p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Intern</h3>
                <p className="text-xl text-gray-300">Let's Secure Us</p>
              </div>
              <Badge className="cyber-badge">06/2022 – 11/2022</Badge>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▶</span>
                Executed thorough vulnerability assessments, identifying and mitigating potential security risks to
                ensure robust protection.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▶</span>
                Worked closely with seasoned professionals to enhance network and system security protocols, gaining
                insights from their experience.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▶</span>
                Acquired and applied practical knowledge of industry-leading tools and techniques in cybersecurity, such
                as Burp Suite, OWASP ZAP, and Nmap.
              </li>
            </ul>
            <div className="mt-6">
              <Badge className="cyber-badge-outline">Vadodara, India</Badge>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="section-title text-center mb-12">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card">
              <div className="project-header">
                <h3 className="text-xl font-bold text-cyan-400">LockNCrypt</h3>
                <p className="text-gray-400">Secure MFA File Encryption Tool</p>
              </div>
              <div className="project-content">
                <p className="text-gray-300 mb-4">
                  Designed and developed LockNCrypt, a secure file encryption tool that integrates Multi-Factor
                  Authentication to protect sensitive data using AES-256-CBC encryption.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="tech-badge">Python</Badge>
                  <Badge className="tech-badge">Tkinter</Badge>
                  <Badge className="tech-badge">Encryption</Badge>
                  <Badge className="tech-badge">MFA</Badge>
                </div>
                <Link href="https://github.com/0xdf-sec/LockNCrypt" className="project-link">
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="text-xl font-bold text-cyan-400">Security Audit</h3>
                <p className="text-gray-400">Web Application Penetration Testing</p>
              </div>
              <div className="project-content">
                <p className="text-gray-300 mb-4">
                  Conducted a comprehensive security audit on a Java-based banking web application. Performed gray box
                  testing to identify vulnerabilities including SQL injection, XSS, and CSRF.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="tech-badge">Security Audit</Badge>
                  <Badge className="tech-badge">Penetration Testing</Badge>
                  <Badge className="tech-badge">Vulnerability Assessment</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-16">
          <h2 className="section-title text-center mb-12">EDUCATION & CERTIFICATIONS</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="cyber-frame p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">EDUCATION</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Information Systems Security</h4>
                <p className="text-gray-400">SAIT • 01/2024 – present</p>
                <p className="text-gray-400">Calgary, Canada</p>
              </div>
            </div>

            <div className="cyber-frame p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">CERTIFICATIONS</h3>
              <div className="space-y-3">
                <div className="cert-item">
                  <span className="text-cyan-400">▶</span>
                  <span>Ethical Hacking - Cisco</span>
                </div>
                <div className="cert-item">
                  <span className="text-cyan-400">▶</span>
                  <span>Advanced Ruber Ducky - Hak5</span>
                </div>
                <div className="cert-item">
                  <span className="text-cyan-400">▶</span>
                  <span>Cybersecurity Course - ISC2</span>
                </div>
                <div className="cert-item">
                  <span className="text-cyan-400">▶</span>
                  <span>Certified Cybersecurity Technician - EC Council</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="cyber-frame p-6">
            <div className="flex justify-center space-x-8 mb-6">
              <Link
                href="https://github.com/0xdf-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/krish-patel4204/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:krishp4220@gmail.com" className="footer-link">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-center text-gray-400">© {new Date().getFullYear()} KRISH PATEL - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
