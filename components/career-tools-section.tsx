"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, FileText, MessageSquare, CheckCircle, Search, ArrowRight } from "lucide-react"

const tools = [
  {
    name: "CrackIt",
    description: "AI Interview Coaching",
    longDescription:
      "Master the art of cracking technical interviews. Our comprehensive platform provides in-depth practice for coding challenges, algorithmic problems, and core computer science concepts.",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    url: "https://hackgenex.vercel.app/",
    gradient: "from-blue-500 to-blue-700"
  },
  {
    name: "TestIt",
    description: "Ats resume creation",
    longDescription:
      "Validate and refine your skills with our advanced testing platform. Get detailed assessments, performance analytics, and targeted improvement recommendations.",
    icon: CheckCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    url: "https://testit-tau.vercel.app/",
    gradient: "from-orange-500 to-orange-700"
  },
  {
    name: "BuildIt",
    description: "Career Resume Creation",
    longDescription:
      "Transform your potential into a powerful career narrative. Build professional resumes, portfolios, and personal branding materials that stand out in competitive job markets.",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
    url: "https://resume-pro-khaki.vercel.app/",
    gradient: "from-green-500 to-green-700"
  },
  {
    name: "CheckIt",
    description: "Smart Job Matching",
    longDescription:
      "Navigate your career path with precision. Our intelligent job search engine matches your skills, experience, and aspirations with the perfect opportunities.",
    icon: Search,
    color: "text-red-600",
    bgColor: "bg-red-50",
    url: "https://7kk5xcvx-3000.inc1.devtunnels.ms/login",
    gradient: "from-red-500 to-red-700"
  },
  {
    name: "CrackIt",
    description: "AI Interview Coaching",
    longDescription:
      "Elevate your interview performance with AI-powered mock interviews. Receive real-time feedback, communication insights, and personalized coaching strategies.",
    icon: MessageSquare,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    url: "https://vl9hrdxs-3000.inc1.devtunnels.ms/",
    gradient: "from-purple-500 to-purple-700"
  }
]

export function CareerToolsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Cards stagger animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }

    loadGSAP()
  }, [])

  return (
    <section id="tools" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Career Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive tools designed to accelerate your career journey from preparation to placement.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card
                key={tool.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 cursor-pointer"
                onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit group-hover:bg-primary/10 transition-colors">
                    <IconComponent className={`h-8 w-8 ${tool.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-6 text-pretty">{tool.longDescription}</p>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(tool.url, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Try Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
