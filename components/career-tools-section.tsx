"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, FileText, MessageSquare, CheckCircle, Search, ArrowRight } from "lucide-react"

const tools = [
  {
    name: "CrackIt",
    description: "Practice DS & Aptitude Tests",
    icon: Brain,
    details: "Master data structures and aptitude with our comprehensive test platform.",
    color: "text-blue-600",
  },
  {
    name: "BuildIt",
    description: "Easy Resume Builder",
    icon: FileText,
    details: "Create professional resumes with our intuitive drag-and-drop builder.",
    color: "text-green-600",
  },
  {
    name: "MokIt",
    description: "AI-Powered Mock Interview",
    icon: MessageSquare,
    details: "Practice interviews with AI feedback to boost your confidence.",
    color: "text-purple-600",
  },
  {
    name: "TestIt",
    description: "ATS Resume Checker",
    icon: CheckCircle,
    details: "Optimize your resume to pass Applicant Tracking Systems.",
    color: "text-orange-600",
  },
  {
    name: "CheckIt",
    description: "Smart Job Search",
    icon: Search,
    details: "Find relevant job opportunities with our intelligent matching system.",
    color: "text-red-600",
  },
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
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
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
                  <p className="text-sm text-muted-foreground mb-6 text-pretty">{tool.details}</p>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    variant="outline"
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
