/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        36: "36px",
      },
      fontWeight: {
        900: 900,
        800: 800,
        700: 700,
        600: 600,
        500: 500,
        400: 400,
        300: 300,
        200: 200,
        100: 100,
      },
      spacing: {
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        26: '26px',
        28: '28px',
        50: '50px',
        100: '100px',
        120: '120px',
        'inputSearch': '46px',
        'detailmovieX': '15%',
        'detailmovieY': '20%',
      },
      borderRadius: {
        6: '6px',
        10: '10px',
        16: '16px'
      },
      gridTemplateColumns: {
        '2a': '250px auto'
      },
      backgroundColor: theme => ({
        ...theme('color'),
        '#221a2d': '#221a2d',
        '#170f23': '#170f23',
        '#130c1c': '#130c1c',
      }),
      height:{
        image: '450px',
        imageA: '500px',
        title: '60px',
        detailmovie: '600px'
      },
      width:{
        sidebar: '250px',
        detailmovie: '1300px',
        800: '800px'
      }
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}