module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // 深蓝黑色作为主色调
        secondary: "#1E40AF", // 深蓝色作为辅助色
        accent: "#3B82F6", // 亮蓝色作为强调色
        darkBg: "#020617", // 更深的背景色
        lightText: "#F8FAFC", // 浅色文字
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
