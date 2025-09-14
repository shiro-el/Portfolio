'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SITE_CONFIG } from '@/lib/constants';

export function AboutSection() {
  const currentYear = new Date().getFullYear();
  const  yearsOfExperience = currentYear - 2020; // Assuming started in 2020

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Profile Image & Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/profile.jpg" alt="Jae Lee" />
                  <AvatarFallback className="text-2xl">JL</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl">{SITE_CONFIG.name}</CardTitle>
              <CardDescription className="text-lg">
                Full-Stack Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Daejeon, South Korea</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>{yearsOfExperience}+ years experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>me@shiroel.com</span>
              </div>
              <Button className="w-full" asChild>
                <a href="/resume.pdf" download>
                  <Download size={16} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Hello! I&apos;m Jae Lee, a passionate full-stack developer with a love for creating 
                beautiful, functional, and user-centered digital experiences. My journey in 
                web development began {yearsOfExperience} years ago, and I&apos;ve been hooked ever since.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I specialize in modern web technologies including React, Next.js, TypeScript, 
                and Node.js. I&apos;m passionate about clean code, performance optimization, and 
                creating intuitive user interfaces that make a difference.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What I Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Full-stack web development</li>
                  <li>• UI/UX design and implementation</li>
                  <li>• Performance optimization</li>
                  <li>• Code review and mentoring</li>
                  <li>• Technical documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• User-centered design thinking</li>
                  <li>• Clean, maintainable code</li>
                  <li>• Agile development practices</li>
                  <li>• Continuous integration/deployment</li>
                  <li>• Collaborative team environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Fun Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fun Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
