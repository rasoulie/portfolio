/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        "1-0-0": "1 0 0px",
      },
      colors: {
        "my-yellow": "#eaff27",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "my-yellow": "0px 0px 15px 1px rgba(234, 255, 39, 0.5)",
        "my-yellow-2": "0px 0px 50px 10px rgba(234, 255, 39, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--tw-color-my-yellow": theme("colors.my-yellow"),
        },
      });
    },
    require("@tailwindcss/typography"),
  ],
};
