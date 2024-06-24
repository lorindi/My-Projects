/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'base-phone': ['16px', '24px'],
        'base-tablet': ['18px', '26px'],
        'base-web': ['20px', '28px'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-image": "url('/images/renzo-d-souza-BlOLl_kkyHU-unsplash.jpg')",
      },
    },
    screens: {
      phone: "393px",
      tablet: "768px",
      web: "1280px",
    },
  },
  plugins: [],
};
