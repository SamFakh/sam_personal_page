"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <div className="space-y-6">
          <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/40">
            Data Engineer
          </Badge>

          <div className="space-y-4">
            <motion.h1
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              I design and build reliable data systems.
            </motion.h1>

            <motion.p
              className="max-w-2xl text-base text-slate-400 sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I’m a data engineer focused on dependable data pipelines, modern
              analytics platforms, and making raw data actually useful. I like
              TypeScript, well-designed schemas, and observability.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-200 hover:border-emerald-500/60 hover:bg-emerald-500/5"
            >
              <Link href="#contact">Get in touch</Link>
            </Button>

            <p className="text-xs text-slate-500">
              Currently exploring better ways to observe data pipelines.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
