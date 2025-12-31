"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Code,
  Server,
  Database,
  LayoutPanelLeft,
  Quote,
  Star,
  Mail,
  Download,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  User,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of the first amazing project I built.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    imageHint: "abstract tech",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of the second amazing project I built.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    imageHint: "modern website",
    tags: ["TypeScript", "Node.js", "Firebase"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of the third amazing project I built.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    imageHint: "mobile application",
    tags: ["React Native", "GraphQL", "iOS"],
    liveLink: "#",
    githubLink: "#",
  },
];

const skills = [
  {
    name: "Frontend",
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "React, Next.js, TypeScript",
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Node.js, Express, Python",
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "PostgreSQL, MongoDB, Firebase",
  },
  {
    name: "CSS Frameworks",
    icon: <LayoutPanelLeft className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "TailwindCSS, Bootstrap",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Working with Bongnteh was an exceptional experience. His attention to detail and problem-solving skills delivered results beyond our expectations.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=0369a1",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "CTO at StartupXYZ",
    content:
      "Bongnteh delivered our project ahead of schedule with exceptional quality. His technical expertise and communication made the entire process seamless.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=7c3aed",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    content:
      "One of the most talented developers I've worked with. His code is clean, scalable, and well-documented.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=059669",
    rating: 5,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js 14",
    excerpt:
      "Learn how to leverage the latest Next.js features to build performant and scalable React applications.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    imageHint: "nextjs code editor",
    category: "Web Development",
    readTime: "5 min read",
    date: "2024-01-15",
    author: "Bongnteh Romarick",
    tags: ["Next.js", "React", "TypeScript"],
    slug: "scalable-react-apps-nextjs-14",
  },
  {
    id: 2,
    title: "The Future of Web Performance: Core Web Vitals Explained",
    excerpt:
      "Understanding and optimizing for Core Web Vitals to improve user experience and SEO rankings.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    imageHint: "performance metrics dashboard",
    category: "Performance",
    readTime: "7 min read",
    date: "2024-01-10",
    author: "Bongnteh Romarick",
    tags: ["Performance", "SEO", "Web Vitals"],
    slug: "future-web-performance-core-web-vitals",
  },
  {
    id: 3,
    title: "State Management in Modern React Applications",
    excerpt:
      "Comparing different state management solutions and when to use each one in your React projects.",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    imageHint: "state management diagram",
    category: "React",
    readTime: "8 min read",
    date: "2024-01-05",
    author: "Bongnteh Romarick",
    tags: ["React", "State Management", "Redux"],
    slug: "state-management-modern-react-apps",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt:
      "Essential TypeScript patterns and practices that will make your code more maintainable and robust.",
    imageUrl: "https://picsum.photos/seed/blog4/600/400",
    imageHint: "typescript code snippet",
    category: "TypeScript",
    readTime: "6 min read",
    date: "2023-12-28",
    author: "Bongnteh Romarick",
    tags: ["TypeScript", "Best Practices", "Enterprise"],
    slug: "typescript-best-practices-enterprise",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section - Optimized for Mobile */}
      <section className="relative overflow-hidden pt-16 md:pt-32 pb-12 px-2 sm:px-2 md:px-3">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute top-10 left-2 sm:left-4 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-2 sm:right-4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-0.5 bg-slate-800/50 rounded-full">
                <Sparkles className="h-3 w-3 text-yellow-400" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Full-Stack Developer & Innovator
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-3 md:mb-6">
                Bongnteh Romarick Ndzelen
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0">
                A passionate developer creating beautiful, functional, and
                scalable web experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    View My Work
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/experience" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full text-sm sm:text-base border-slate-700 text-white hover:bg-slate-800"
                  >
                    View Resume
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                <Avatar className="h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 border-4 border-slate-900 relative">
                  <AvatarImage
                    src="/romarick.jpeg"
                    alt="Bongnteh Romarick Ndzelen"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-slate-800 to-slate-900 text-white text-xl sm:text-2xl md:text-4xl">
                    BRN
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized for Mobile */}
      <section className="py-8 md:py-16 px-2 sm:px-2 md:px-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-slate-800/30 border border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="text-blue-400 mb-1.5 sm:mb-2 md:mb-3 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg bg-slate-800/50">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-xs md:text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Optimized for Mobile */}
      <section
        id="projects"
        className="scroll-mt-16 py-8 md:py-16 px-2 sm:px-2 md:px-3 bg-slate-900/20"
      >
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5 md:mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg">
              A selection of my best work.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col overflow-hidden bg-slate-800/30 border border-slate-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-0.5 md:hover:-translate-y-2 group"
              >
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 flex-grow">
                  <CardTitle className="mb-1.5 text-base sm:text-lg md:text-xl text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="mb-2 sm:mb-3 md:mb-4 text-slate-400 text-xs sm:text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] sm:text-xs bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 md:p-6 pt-0 flex justify-between gap-1.5 sm:gap-2">
                  <Link href={project.liveLink} passHref className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs sm:text-sm border-slate-700 hover:border-blue-500 py-1 h-auto"
                    >
                      <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Project
                    </Button>
                  </Link>
                  <Link href={project.githubLink} passHref className="flex-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs sm:text-sm text-slate-400 hover:text-white hover:bg-slate-700 py-1 h-auto"
                    >
                      <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Source
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 md:mt-12 text-center">
            <Link href="/projects" passHref>
              <Button
                variant="link"
                className="text-sm sm:text-base md:text-lg text-blue-400 hover:text-blue-300 group"
              >
                View All Projects
                <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section - Optimized for Mobile */}
      <section
        id="blog"
        className="scroll-mt-16 py-8 md:py-16 px-2 sm:px-2 md:px-3"
      >
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 md:mb-4">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400" />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                Latest From The Blog
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg">
              Insights, tutorials, and thoughts on web development and
              technology.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col overflow-hidden bg-slate-800/30 border border-slate-700/50 transition-all duration-300 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-900/20 hover:-translate-y-0.5 md:hover:-translate-y-2 group"
              >
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-600/80 hover:bg-green-600 text-white text-[10px] sm:text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 flex-grow">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm text-slate-400 mb-1.5 sm:mb-2 md:mb-3">
                    <div className="flex items-center gap-0.5">
                      <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-0.5">
                      <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <CardTitle className="mb-1.5 text-sm sm:text-base md:text-lg text-white group-hover:text-green-300 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="mb-2 sm:mb-3 md:mb-4 text-slate-400 text-xs sm:text-sm md:text-base line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                    <Avatar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}&backgroundColor=0f172a`}
                        alt={post.author}
                      />
                      <AvatarFallback className="text-xs">
                        {post.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm text-slate-400">
                      {post.author}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-0.5 sm:gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] sm:text-xs border-green-500/30 text-green-300 bg-green-500/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge
                        variant="outline"
                        className="text-[10px] sm:text-xs border-slate-700 text-slate-400"
                      >
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-3 sm:p-4 md:p-6 pt-0">
                  <Link href={`/blog/${post.slug}`} passHref className="w-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs sm:text-sm text-green-400 hover:text-green-300 hover:bg-green-500/10 group py-1.5 h-auto"
                    >
                      Read Article
                      <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 md:mt-12 text-center">
            <Link href="/blog" passHref>
              <Button
                variant="link"
                className="text-sm sm:text-base md:text-lg text-green-400 hover:text-green-300 group"
              >
                View All Blog Posts
                <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Optimized for Mobile */}
      <section className="py-8 md:py-16 px-2 sm:px-2 md:px-3">
        <div className="container mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1.5 md:mb-4">
              Client Testimonials
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg">
              What others say about working with me
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-slate-800/30 border border-slate-700/50 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10"
              >
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-500/30 mb-2 sm:mb-3 md:mb-4" />

                <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 mb-2 sm:mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm md:text-base italic mb-3 sm:mb-4 md:mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-2 sm:gap-3 pt-3 border-t border-slate-700/50">
                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="text-xs">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Intro - Optimized for Mobile */}
      <section className="py-8 md:py-16 px-2 sm:px-2 md:px-3">
        <div className="container mx-auto text-center">
          <h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl md:text-4xl font-bold text-white">
            A Little About Me
          </h2>
          <p className="mx-auto mb-3 md:mb-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 px-2 sm:px-0">
            I'm a full-stack developer with a passion for building innovative
            solutions. With a background in both design and development, I bring
            a unique perspective to every project, focusing on user experience
            without sacrificing performance.
          </p>
          <Link href="/about" passHref>
            <Button
              variant="link"
              className="text-sm sm:text-base md:text-lg text-blue-400 hover:text-blue-300 group"
            >
              More About Me
              <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section - Optimized for Mobile */}
      <section className="py-8 md:py-16 px-2 sm:px-2 md:px-3 bg-slate-900/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-2 sm:mb-3 md:mb-4 text-xl sm:text-2xl font-bold text-white">
              Let's Build Something Amazing
            </h2>
            <p className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg text-slate-300">
              Ready to bring your ideas to life? I'd love to hear about your
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Mail className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Get In Touch
                </Button>
              </Link>
              <Link href="/experience">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base border-slate-700 text-white hover:bg-slate-800"
                >
                  <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
