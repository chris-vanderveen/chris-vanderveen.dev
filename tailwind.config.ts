import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        kodeMono: ["KodeMono-Regular", "mono"],
        kodeMonoMedium: ["KodeMono-Medium", "mono"],
        kodeMonoSemiBold: ["KodeMono-SemiBold", "mono"],
        satoshi: ["Satoshi-Regular", "sans serif"],
        satoshiBold: ["Satoshi-Bold", "sans serif"],
        jetBrainsMonoMedium: ["JetBrainsMono-Medium", "mono"],
      },
    },
  },
  plugins: [],
} satisfies Config;
