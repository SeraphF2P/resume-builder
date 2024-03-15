/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import MyPreset from "./src/lib/tw-plugins/MyPreset";
import type { Config } from "tailwindcss";

const config = {
  presets: [MyPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
} satisfies Config;
export default config;
