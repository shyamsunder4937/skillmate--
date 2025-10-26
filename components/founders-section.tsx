"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users } from "lucide-react"

const founders = [
  {
    name: "K. Shyam Sunder",
    branch: "B.Tech IT",
    batch: "2023–2027",
    role: "Developed MockIT and TestIt",
    expertise: "Full-Stack Development",
  },
  {
    name: "P.Naga Bala Karteek",
    branch: "B.Tech ECE",
    batch: "2023–2027",
    role: "Developed CheckIt",
    expertise: "Product Strategy",
  },
  {
    name: "P.Shasank",
    branch: "B.Tech CSE",
    batch: "2023–2027",
    role: "Developed CrackIt",
    expertise: "Business Development",
  },
  
]

export function FoundersSection() {
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

      // Cards animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, rotateY: 15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
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
    <section id="founders" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold">Our Team</span>
          </div>
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet the Founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate engineering students building the future of career development.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={founder.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {founder.name}
                </h3>

                <p className="text-sm font-medium text-secondary mb-2">{founder.role}</p>

                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {founder.branch}
                  </Badge>
                  <Badge variant="outline" className="text-xs block w-fit mx-auto">
                    {founder.batch}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground">{founder.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
