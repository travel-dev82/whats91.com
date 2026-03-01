"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Coffee,
  TrendingUp,
  Home,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Building2,
  Laptop,
  Gift,
  Sparkles
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Home,
    title: "Remote Flexibility",
    description: "Hybrid work model with flexible hours and remote-first culture"
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Learning budgets, conference attendance, and clear career paths"
  },
  {
    icon: Coffee,
    title: "Perks & Benefits",
    description: "Free meals, gym membership, and team outings"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access to courses, certifications, and mentorship programs"
  },
  {
    icon: Gift,
    title: "Competitive Compensation",
    description: "Market-leading salaries with ESOPs and performance bonuses"
  },
];

const departments = [
  { name: "All Departments", value: "all" },
  { name: "Engineering", value: "engineering" },
  { name: "Product", value: "product" },
  { name: "Sales", value: "sales" },
  { name: "Marketing", value: "marketing" },
  { name: "Customer Success", value: "customer-success" },
];

const jobs = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "4-6 years",
    description: "Join our engineering team to build scalable WhatsApp API solutions. You'll work on high-traffic systems processing millions of messages daily.",
    requirements: [
      "4+ years of experience with Node.js/TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Strong understanding of RESTful APIs and microservices",
      "Experience with message queues and real-time systems",
      "Knowledge of database design (PostgreSQL, Redis)"
    ],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build beautiful, responsive interfaces for our dashboard and customer portal using React and Next.js.",
    requirements: [
      "2+ years of experience with React/Next.js",
      "Strong TypeScript skills",
      "Experience with Tailwind CSS and modern styling",
      "Understanding of responsive design principles",
      "Experience with state management (Zustand/Redux)"
    ],
    posted: "3 days ago"
  },
  {
    id: 3,
    title: "Product Manager",
    department: "product",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead product strategy for our WhatsApp integration platform, working closely with engineering and customers.",
    requirements: [
      "3+ years of product management experience in B2B SaaS",
      "Strong analytical and problem-solving skills",
      "Experience with agile development methodologies",
      "Excellent communication and stakeholder management",
      "Technical background is a plus"
    ],
    posted: "1 week ago"
  },
  {
    id: 4,
    title: "Enterprise Sales Manager",
    department: "sales",
    location: "Mumbai / Delhi / Bangalore",
    type: "Full-time",
    experience: "4-8 years",
    description: "Drive enterprise sales across India, building relationships with C-level executives and closing major deals.",
    requirements: [
      "4+ years of enterprise B2B sales experience",
      "Track record of meeting/exceeding quotas",
      "Experience selling SaaS/API products",
      "Strong presentation and negotiation skills",
      "Existing enterprise network is a plus"
    ],
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "customer-success",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Ensure customer success by onboarding, training, and supporting enterprise clients using our platform.",
    requirements: [
      "2+ years of customer success experience in B2B SaaS",
      "Excellent communication and relationship-building skills",
      "Experience with CRM tools and customer analytics",
      "Technical aptitude to understand API integrations",
      "Fluent in Hindi and English"
    ],
    posted: "1 week ago"
  },
  {
    id: 6,
    title: "Technical Writer",
    department: "marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Create comprehensive documentation, API guides, and technical content for our developer community.",
    requirements: [
      "2+ years of technical writing experience",
      "Experience documenting APIs and developer tools",
      "Strong portfolio of technical documentation",
      "Familiarity with Markdown and documentation tools",
      "Understanding of REST APIs and web technologies"
    ],
    posted: "2 weeks ago"
  },
];

function JobCard({ job }: { job: typeof jobs[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-border/60 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <CardTitle className="text-lg sm:text-xl text-text-primary mb-2">{job.title}</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 font-normal">
                {job.department}
              </Badge>
              <Badge variant="outline" className="font-normal">
                <MapPin className="h-3 w-3 mr-1" />
                {job.location}
              </Badge>
              <Badge variant="outline" className="font-normal">
                <Clock className="h-3 w-3 mr-1" />
                {job.type}
              </Badge>
            </div>
          </div>
          <span className="text-xs text-text-muted shrink-0">{job.posted}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-text-secondary mb-4">{job.description}</p>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-brand-primary hover:text-brand-primary-hover p-0 h-auto"
        >
          {expanded ? (
            <>
              Hide requirements <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              View requirements <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-border/60">
            <h4 className="text-sm font-semibold text-text-primary mb-3">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Sparkles className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-4 bg-brand-primary text-white hover:bg-brand-primary-hover">
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredJobs = selectedDepartment === "all" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 gradient-brand-subtle pointer-events-none" />
          
          <div className="relative px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 border border-brand-primary/15 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-primary mb-6">
                <Users className="h-3.5 w-3.5" />
                Join Our Team
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
                Build the Future of{" "}
                <span className="text-brand-primary">Enterprise Communication</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                We're looking for passionate people to help us transform how Indian businesses 
                communicate with their customers. Join a team that values innovation, growth, and impact.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 sm:py-12 bg-surface/50 border-y border-border/60">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">30+</div>
                <div className="text-sm text-text-secondary">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">5</div>
                <div className="text-sm text-text-secondary">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">500+</div>
                <div className="text-sm text-text-secondary">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">4.8★</div>
                <div className="text-sm text-text-secondary">Glassdoor Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-14 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Why Work With Us
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                We believe in taking care of our team so they can do their best work. Here's what you can expect.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border/60 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 mb-4 group-hover:bg-brand-primary/15 transition-colors">
                      <benefit.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-14 sm:py-16 md:py-20 bg-surface/30">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Open Positions
              </h2>
              <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                Find the role that's right for you. We're always looking for talented people.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <Button
                  key={dept.value}
                  variant={selectedDepartment === dept.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept.value)}
                  className={selectedDepartment === dept.value 
                    ? "bg-brand-primary text-white hover:bg-brand-primary-hover" 
                    : "border-border text-text-secondary hover:text-text-primary"
                  }
                >
                  {dept.name}
                </Button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="space-y-4 max-w-3xl mx-auto">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No positions found</h3>
                  <p className="text-sm text-text-secondary">
                    No open positions in this department. Check back later or explore other departments.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-14 sm:py-16 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Our Culture
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <p>
                    At Whats91, we believe great products come from great teams. Our culture is built on 
                    <strong className="text-text-primary"> trust, transparency, and collaboration</strong>.
                  </p>
                  <p>
                    We're a remote-first company that values outcomes over hours. Our team members have 
                    the flexibility to work from anywhere while staying connected through regular sync-ups, 
                    team offsites, and virtual social events.
                  </p>
                  <p>
                    We encourage experimentation and learning from failures. Everyone's voice matters, 
                    and we actively seek diverse perspectives to build better solutions for our customers.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Laptop className="h-4 w-4 text-brand-primary" />
                    Remote-first
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Coffee className="h-4 w-4 text-brand-primary" />
                    Unlimited PTO
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <GraduationCap className="h-4 w-4 text-brand-primary" />
                    Learning budget
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 border border-border/40 flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-brand-primary/60" />
                  </div>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-border/40 flex items-center justify-center">
                    <Users className="h-10 w-10 text-brand-primary/40" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 border border-border/40 flex items-center justify-center">
                    <Coffee className="h-10 w-10 text-brand-primary/40" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/10 border border-border/40 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-brand-primary/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/95 font-semibold"
              asChild
            >
              <a href="mailto:careers@whats91.com">
                Send Your Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
