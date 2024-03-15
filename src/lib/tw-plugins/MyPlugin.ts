import plugin from "tailwindcss/plugin";

export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--neutral": "241,245,249", //? slate 100
        "--neutral-revert": "30,41,59", //? slate 200
        "--primary": "29,78,216", //? blue 700
        "--primary-hover": "37,99,235 ", //? blue 600
        "--alert": "225,29,72",
        "--alert-hover": "244,63,94",
        "--success": "110,231,183", //? emerald 300,
        "--info": "8,145,178" //? cyan 600,
      },
      "::-ms-reveal": {
        filter: "invert(100%)"
      }
    });
    addBase({

      body: {
        "@apply bg-neutral  h-svh text-neutral-revert": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',

      },
      h1: { "@apply capitalize text-2xl": {} },
      h2: { "@apply capitalize text-xl": {} },
      h3: { "@apply capitalize text-lg": {} },
      h4: { "@apply capitalize text-base": {} },
      p: { "@apply text-sm": {} },
      li: { "@apply list-none": {} },
      a: { "@apply !text-current": {} },

    });
    addUtilities({
      ".remove-scroll-bar": {
        "scroll-behavior": "smooth",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      ".remove-scroll-bar::-webkit-scrollbar": {
        display: "none",
      },
      ".text-border": {
        "text-shadow":
          `-1px -1px 0 rgb(var(--neutral-revert)),
            1px -1px 0 rgb(var(--neutral-revert)),
           -1px 1px 0 rgb(var(--neutral-revert)),
            1px 1px 0 rgb(var(--neutral-revert))`
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          neutral: "rgb(var(--neutral),<alpha-value>)",
          "neutral-revert": "rgb(var(--neutral-revert),<alpha-value>)",
          primary: "rgb(var(--primary),<alpha-value>)",
          "primary-hover": "rgb(var(--primary-hover),<alpha-value>)",
          alert: "rgb(var(--alert),<alpha-value>)",
          "alert-hover": "rgb(var(--alert-hover),<alpha-value>)",
          success: "rgb(var(--success),<alpha-value>)",
        },
        screens: {
          mn: "420px",
          xs: "576px",
          mb: "768px" //? the main breack point of the website
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        animation: {
          reset: "reset var(--reset-duration) infinite var(--reset-delay)",
          fadein:
            "fadein var(--fadein-duration,0.3s) forwards  var(--fadein-delay,0s)",
          fadeout:
            "fadeout var(--fadeout-duration,0.3s) forwards var(--fadeout-delay,0s)",
          buzz: "buzz 2s infinite linear  ",
          slideDown: "slideDown 0.3s forwards linear  ",
          slideUp: "slideUp 0.3s forwards linear  ",
        },
        keyframes: {
          reset: {
            "50%": {
              transform:
                "translate(0,0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);",
            },
            "0%,100%": {
              transform:
                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            },
          },
          fadein: {
            to: {
              opacity: "var(--fadein-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          fadeout: {
            from: {
              opacity: "var(--fadeout-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          buzz: {
            "0%,20%,40%,60%,80%,100%": {
              transform:
                "rotate(0deg) ",
            },
            "10%,50%": {
              transform:
                "rotate(-12.5deg) ",
            },
            "30%,70%": {
              transform:
                "rotate(12.5deg)",
            },
          },
          slideDown: {
            from: {
              height: "0"
            },
            to: {
              height: "var(--radix-collapsible-content-height)"
            }
          }
          , slideUp: {
            from: {
              height: "var(--radix-collapsible-content-height)"
            },
            to: {
              height: "0"
            }
          }
        },
      },
    },
  });
export default MyPlugin;
