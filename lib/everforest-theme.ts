export const everforestTheme = {
  dark: {
    // Background colors
    bg0: "#2d353b", // Dark background
    bg1: "#343f44", // Slightly lighter background
    bg2: "#3d484d", // Card/panel background
    bg3: "#475258", // Hover states
    bg4: "#4f585e", // Active states
    bg5: "#56635f", // Borders

    // Foreground colors
    fg: "#d3c6aa", // Primary text
    red: "#e67e80", // Red accent
    orange: "#e69875", // Orange accent
    yellow: "#dbbc7f", // Yellow accent
    green: "#a7c080", // Green accent
    aqua: "#83c092", // Aqua accent
    blue: "#7fbbb3", // Blue accent
    purple: "#d699b6", // Purple accent

    // UI colors
    grey0: "#7a8478", // Comments
    grey1: "#859289", // Line numbers
    grey2: "#9da9a0", // Secondary text
  },
  light: {
    // Background colors
    bg0: "#fdf6e3", // Light background
    bg1: "#f4f0d9", // Slightly darker background
    bg2: "#efebd4", // Card/panel background
    bg3: "#e6e2cc", // Hover states
    bg4: "#ddd8c0", // Active states
    bg5: "#bec5b2", // Borders

    // Foreground colors
    fg: "#5c6a72", // Primary text
    red: "#f85552", // Red accent
    orange: "#f57d26", // Orange accent
    yellow: "#dfa000", // Yellow accent
    green: "#8da101", // Green accent
    aqua: "#35a77c", // Aqua accent
    blue: "#3a94c5", // Blue accent
    purple: "#df69ba", // Purple accent

    // UI colors
    grey0: "#a6b0a0", // Comments
    grey1: "#939f91", // Line numbers
    grey2: "#829181", // Secondary text
  },
}

export type Theme = "dark" | "light"
