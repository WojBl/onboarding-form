/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue-01": "var(--main-blue-01)",
        "main-blue-02": "var(--main-blue-02)",
        "main-blue-03": "var(--main-blue-03)",
        "green-01": "var(--green-01)"
      },
    },
  },

  plugins: [],
};
