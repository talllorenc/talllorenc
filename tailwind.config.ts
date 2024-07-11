import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        buttonPink: "2px 2px 7px 1px rgba(241,156,187, 1)",
        buttonPinkBrick: "0px 0px 7px 4px rgba(241,156,187, 1)",
        buttonBlack: "2px 2px 7px 1px rgba(145,149,153, 1)",
        buttonBlackBrick: "0px 0px 7px 4px rgba(145,149,153, 1)",
        buttonRed: "2px 2px 7px 1px rgba(243,18,96, 1)",
        buttonRedBrick: "0px 0px 7px 4px rgba(243,18,96, 1)",
      },
      keyframes: {
        "slide-tl": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          to: {
            transform: "translateY(-100px) translateX(-100px)",
          },
          from: {
            transform: "translateY(100px) translateX(-100px)",
          },
        },
        "slide-tr": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          to: {
            transform: "translateY(-100px) translateX(100px)",
          },
          from: {
            transform: "translateY(100px) translateX(-100px)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100px)",
          },
          from: {
            transform: "translateX(100px)",
          },
        },
      },
      animation: {
        "tracking-in-expand":
          "tracking-in-expand 5s ease-in 2s  alternate both",
        "slide-tl":
          "slide-tl 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both",
        "slide-tr":
          "slide-tr 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both",

        "slide-left":
          "slide-left 10s ease-in-out  infinite alternate-reverse both",
      },

      animations: {
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            opacity: "1",
          },
        },
        "pulsate-bck": {
          "0%,to": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(.9)",
          },
        },
        "shake-horizontal": {
          "0%,to": {
            transform: "translateX(0)",
          },
          "10%,30%,50%,70%": {
            transform: "translateX(-10px)",
          },
          "20%,40%,60%": {
            transform: "translateX(10px)",
          },
          "80%": {
            transform: "translateX(8px)",
          },
          "90%": {
            transform: "translateX(-8px)",
          },
        },

        "vibrate-1": {
          "0%,to": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
          },
        },

        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        jump: {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },

      animationDuration: {
        default: "1s",
        "0s": "0s",
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
      },
      animationTimingFunction: {
        default: "ease",
        linear: "linear",
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out",
      },
      animationDelay: {
        default: "0s",
        "0s": "0s",
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
      },
      animationIterationCount: {
        default: "infinite",
        once: "1",
        infinite: "infinite",
      },
      animationDirection: {
        default: "normal",
        normal: "normal",
        reverse: "reverse",
        alternate: "alternate",
        "alternate-reverse": "alternate-reverse",
      },
      animationFillMode: {
        default: "none",
        none: "none",
        forwards: "forwards",
        backwards: "backwards",
        both: "both",
      },
      animationPlayState: {
        running: "running",
        paused: "paused",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
