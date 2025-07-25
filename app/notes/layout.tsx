"use client"

import type React from "react"

import { PageTransition } from "../../components/page-transition"

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
