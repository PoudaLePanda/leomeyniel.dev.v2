"use client";

import { motion } from "framer-motion";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { Briefcase } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies: string[];
  isActive?: boolean;
  index: number;
}

const TimelineItem = ({
  title,
  company,
  period,
  description,
  technologies,
  isActive,
  index,
}: TimelineItemProps) => {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 flex gap-4 hover:shadow-2xl p-6"
    >
      <div className="relative">
        <div
          className="absolute h-full w-0.5 left-3"
          style={{ backgroundColor: colors.bg5 }}
        ></div>
        <div
          className="w-6 h-6 rounded-full z-10 relative flex items-center justify-center"
          style={{
            backgroundColor: isActive ? colors.green : colors.bg3,
            border: `2px solid ${isActive ? colors.green : colors.bg5}`,
          }}
        >
          {isActive && (
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: theme === "dark" ? colors.bg0 : colors.fg,
              }}
            ></div>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
          <h3 className="text-base font-semibold" style={{ color: colors.fg }}>
            {title}
            {company && (
              <span style={{ color: colors.grey2 }}> @ {company}</span>
            )}
          </h3>
          <div
            className="text-xs font-medium px-2 py-1 rounded-full inline-flex items-center"
            style={{
              backgroundColor: isActive ? colors.green + "33" : colors.bg2,
              color: isActive ? colors.green : colors.grey1,
            }}
          >
            {period}
          </div>
        </div>
        <p className="mb-3 text-sm" style={{ color: colors.grey2 }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded"
              style={{
                backgroundColor: colors.bg2,
                color: colors.grey1,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Timeline() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const experiences = [
    {
      title: "Développeur Fullstack",
      company: "Feuille",
      period: "Actuellement en poste • 8 ans",
      description:
        "Création d'applications web basées sur une stack Angular en lien avec une équipe de dev back sur API REST. Création de modules spécifiques : Atelier de création de mail, formulaire en ligne et atelier graphique WYSIWYP (what you see is what you print).",
      technologies: ["Next.js", "Gitlab/CI", "Prisma", "Tailwind CSS", "React"],
      isActive: true,
    },
    {
      title: "Développeur Front-end",
      period: "Précédemment",
      description:
        "Création d'applications web basées sur une stack Angular en lien avec une équipe de dev back sur API REST. Création de modules spécifiques : Atelier de création de mail, formulaire en ligne et atelier graphique WYSIWYP (what you see is what you print).",
      technologies: ["Angular", "Jenkins", "GitLab", "Material"],
    },
    {
      title: "Integrateur Freelance",
      period: "1 an",
      description:
        "Création d'un atelier graphique en ligne pour l'édition de documents prints.",
      technologies: ["Angular v1"],
    },
    {
      title: "Développeur web junior",
      period: "Précédemment",
      description: "Refonte et développement d'application web",
      technologies: [],
    },
    {
      title: "Développeur Fullstack",
      period: "Alternance",
      description:
        "Entretiens d'application web existante et création de nouvelles fonctionnalités. Alternance en contrat de professionnalisation.",
      technologies: ["PHP", "MySQL", "JavaScript Objet", "Framework custom"],
    },
  ];

  return (
    <div className="py-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold mb-8 flex items-center gap-2"
        style={{ color: colors.fg }}
      >
        <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm">
          <Briefcase className="w-6 h-6 " style={{ color: colors.blue }} />
        </span>
        Expérience Professionnelle
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} index={index} />
        ))}
      </div>
    </div>
  );
}
