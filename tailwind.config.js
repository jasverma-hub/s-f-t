/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      darkblue: "#0a2540", // You can adjust this color
      lightblue: "#e0f2fe", // You can adjust this color
    },
  },
};
export const plugins = [];
