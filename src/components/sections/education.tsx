"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className={cn(
        "scroll-mt-32", // Fix for navbar overlap
        "flex flex-col items-center justify-center",
        "min-h-[50vh] py-10 z-10"
      )}
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
        id="education"
        title="Education"
        desc="My academic foundation."
        className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          <EducationCard />
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                Integrated B.Tech in Computer Science Engineering
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                Jain University, Bangalore
              </div>
            </div>

            <Badge
              variant="secondary"
              className="w-fit font-mono text-xs font-normal"
            >
              Aug 2023 - Present
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            <li>
              Specialization in Artificial Intelligence & Data Engineering.
            </li>
            <li>
              CGPA: <strong>8.36</strong> | GPA: <strong>9.40</strong>
            </li>
            <li>
              Core focus areas: Machine Learning, NLP, Data Engineering,
              Distributed Systems, and Advanced AI.
            </li>
            <li>
              Active participant in hackathons, AI research initiatives,
              and technical leadership roles.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 border-transparent"
            >
              Artificial Intelligence
            </Badge>

            <Badge
              variant="outline"
              className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 border-transparent"
            >
              Machine Learning
            </Badge>

            <Badge
              variant="outline"
              className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 border-transparent"
            >
              Data Engineering
            </Badge>

            <Badge
              variant="outline"
              className="text-xs font-normal bg-secondary/30 hover:bg-secondary/50 border-transparent"
            >
              Natural Language Processing
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;