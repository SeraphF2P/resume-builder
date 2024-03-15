import { MyPlugin } from "./MyPlugin";

import type { Config } from "tailwindcss";
import Forms from "@tailwindcss/forms";
import Typography from "@tailwindcss/typography";

const config = {
  darkMode: ["class"],
  content: [],
  plugins: [MyPlugin, Forms({ strategy: "class" }), Typography({ target: "modern" })],
} satisfies Config;
export default config;
