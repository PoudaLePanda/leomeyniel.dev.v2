"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { everforestTheme } from "../lib/everforest-theme";
import { availableSkills, type Skill } from "../lib/skills-data";

interface SelectedSkillProps {
  skill: Skill;
  index: number;
}

const SelectedSkill = ({ skill, index }: SelectedSkillProps) => {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return colors.blue;
      case "backend":
        return colors.green;
      case "outils":
        return colors.orange;
      case "ia":
        return colors.purple;
      case "déploiement":
        return colors.red;
      case "base de données":
        return colors.aqua;
      default:
        return colors.grey1;
    }
  };

  const getProficiencyStars = (proficiency: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="w-3 h-3"
        style={{
          color: i < proficiency ? colors.yellow : colors.bg5,
          fill: i < proficiency ? colors.yellow : "transparent",
        }}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="p-4 rounded-lg relative group hover:shadow-2xl"
      style={{
        backgroundColor: colors.bg2,
        border: `2px solid ${getCategoryColor(skill.category)}33`,
      }}
    >
      <div className="pr-8">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-base" style={{ color: colors.fg }}>
            {skill.name}
          </h3>
          <Badge
            variant="secondary"
            className="text-xs"
            style={{
              backgroundColor: getCategoryColor(skill.category),
              color: "white",
            }}
          >
            {skill.category}
          </Badge>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {getProficiencyStars(skill.proficiency)}
          <span className="text-xs ml-2" style={{ color: colors.grey1 }}>
            {skill.proficiency}/5
          </span>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: colors.grey2 }}>
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

export function Skills() {
  const { theme } = useTheme();
  const colors = everforestTheme[theme];

  const selectedSkillsData = availableSkills.filter((skill) => skill.selected);

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <h2
          className="text-xl font-bold flex items-center gap-2"
          style={{ color: colors.fg }}
        >
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
            style={{ backgroundColor: colors.bg3 }}
          >
            ⚡
          </span>
          Compétences Techniques
        </h2>
      </motion.div>

      {/* Selected Skills Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <AnimatePresence>
          {selectedSkillsData.map((skill, index) => (
            <SelectedSkill key={skill.id} skill={skill} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
