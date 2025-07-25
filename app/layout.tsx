import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";
import "../styles/globals.css";

import { ThemeProvider } from "../contexts/theme-context";
import { ConstructProvider } from "@/providers/construct";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.className, GeistMono.className)}>
      <body>
        <ThemeProvider>
          <ConstructProvider>{children}</ConstructProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
