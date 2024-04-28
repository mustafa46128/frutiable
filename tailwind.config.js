/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bs-blue": "var(--bs-blue)",
        "bs-indigo": "var(--bs-indigo)",
        "bs-purple": "var(--bs-purple)",
        "bs-pink": "var(--bs-pink)",
        "bs-red": "var(--bs-red)",
        "bs-orange": "var(--bs-orange)",
        "bs-yellow": "var(--bs-yellow)",
        "bs-green": "var(--bs-green)",
        "bs-teal": "var(--bs-teal)",
        "bs-cyan": "var(--bs-cyan)",
        "bs-white": "var(--bs-white)",
        "bs-gray": "var(--bs-gray)",
        "bs-gray-dark": "var(--bs-gray-dark)",
        "bs-primary": "var(--bs-primary)",
        "bs-secondary": "var(--bs-secondary)",
        "bs-success": "var(--bs-success)",
        "bs-info": "var(--bs-info)",
        "bs-warning": "var(--bs-warning)",
        "bs-danger": "var(--bs-danger)",
        "bs-light": "var(--bs-light)",
        "bs-dark": "var(--bs-dark)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        openSans: ["var(--font-open-sans)"],
        roboto: ["var(--font-roboto)"],
      },
      boxShadow: {
        custom: `0px 0px 10px 6px theme('colors.bs-primary')`,
      },
    },
  },
  plugins: [],
};
