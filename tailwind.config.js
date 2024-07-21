/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        // whenever we use customized colors in theme extends component then we are going to work on customized colors and default colors..
        BgColor: "var(--color-BgColor)",
        TextColor: "var(--color-TextColor)",
      },
    },
  },
  plugins: [],
};
