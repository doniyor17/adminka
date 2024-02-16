export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js, ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D39353",
        secondary: "#F39353",
        info: "#0dcaf0",

        authBgS: "#feb206",
        authBgE: "#f9cb33",
        btnBg: "#feaf00",
        navBg: "#F2EAE1",
        mainBg: "#fdfdfd",
      },
    },
  },
  plugins: [],
};
