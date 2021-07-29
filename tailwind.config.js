module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '11': 11,
        '12': 12,
        '13': 13,
        '14': 14,
        '15': 15,
        '16': 16,
        '17': 17,
        '18': 18,
        '19': 19,
        '21': 21,
        '22': 22,
        '23': 23,
        '24': 24,
        '25': 25,
        '26': 26,
        '27': 27,
        '28': 28,
        '29': 29,
        '31': 31,
      },
      fontSize: {
        'xxxs': '.4rem',
        'xxs': '.5rem'
      },
      width: {
        '1/7': '14.2857143%'
      },
      maxWidth: {
        '1/7': '14.2857143%'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '100': '100px',
        '168': '168px',
        '248': '248px',
        '448': '448px',
       },
       height: {
        '11px': '11px',
        '580px': '580px'
       },
       minHeight: {
        'list': 'calc(100vh - 117px)',
        'mail-list': 'calc(100vh - 145px)'
       },
       flex: {
        'basis-56': '0 56px',
        'basis-168': '0 168px'
       },
       colors: {
        "brown-1": {
          100: "#EFEBE9",
          200: "#D7CCC8",
          300: "#BCAAA4",
          400: "#A1887F",
          500: "#8D6E63",
          600: "#795548",
          700: "#6D4C41",
          800: "#4E342E",
          900: "#3E2723"
        },
        "gold-3": {
          100: "#FFF8E1",
          200: "#FFECB3",
          300: "#FFE082",
          400: "#FFD54F",
          500: "#FFCA28",
          600: "#FFC107",
          700: "#FFB300",
          800: "#FF8F00",
          900: "#FF6F00"
        },
        "cyan-7": {
          100: "#E4FBFE",
          200: "#C6F6FD",
          300: "#7CECFA",
          400: "#48E4F9",
          500: "#00DAF7",
          600: "#00C5DF",
          700: "#00ADC4",
          800: "#0090A3",
          900: "#006876"
        }
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    },
  },
  plugins: [],
}
