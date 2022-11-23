/** @type {import('tailwindcss').Config} */

module.exports = {  
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}", 
  ],
  theme: {
    extend: {
      screens: { 
        'tablet': '640px', // '960px',
        'laptop': '1024px',
        'desktop': '1280px',        
      },

      //colors: colors, // asi se le adiciona todos los colores (antes 8 despues 20)
      colors: ({theme}) =>({

        //https://wunnle.com/dynamic-text-color-based-on-background
        //https://twitter.com/steveschoger/status/1222198124111966209?lang=es
        //https://davidpiesse.github.io/tailwind-md-colours/
        //--https://tailwindcss.com/docs/customizing-colors
        //--https://tailwindcss.com/docs/customizing-colors
        
        "primary": {
          "50":  "rgb(var(--color-primary-50)) ",
          "100": "rgb(var(--color-primary-100))",
          "200": "rgb(var(--color-primary-200))",
          "300": "rgb(var(--color-primary-300))",
          "400": "rgb(var(--color-primary-400))",
          "500": "rgb(var(--color-primary-500))",
          "600": "rgb(var(--color-primary-600))",
          "700": "rgb(var(--color-primary-700))",
          "800": "rgb(var(--color-primary-800))",
          "900": "rgb(var(--color-primary-900))",
        },
        "accent": {
          "50":  "rgb(var(--color-accent-50))",
          "100": "rgb(var(--color-accent-100))",
          "200": "rgb(var(--color-accent-200))",
          "300": "rgb(var(--color-accent-300))",
          "400": "rgb(var(--color-accent-400))",
          "500": "rgb(var(--color-accent-500))",
          "600": "rgb(var(--color-accent-600))",
          "700": "rgb(var(--color-accent-700))",
          "800": "rgb(var(--color-accent-800))",
          "900": "rgb(var(--color-accent-900))",
        },
        "ternary": {
          "50":  "rgb(var(--color-ternary-50))",
          "100": "rgb(var(--color-ternary-100))",
          "200": "rgb(var(--color-ternary-200))",
          "300": "rgb(var(--color-ternary-300))",
          "400": "rgb(var(--color-ternary-400))",
          "500": "rgb(var(--color-ternary-500))",
          "600": "rgb(var(--color-ternary-600))",
          "700": "rgb(var(--color-ternary-700))",
          "800": "rgb(var(--color-ternary-800))",
          "900": "rgb(var(--color-ternary-900))",
        },
        "warning": {
          "50":  "rgb(var(--color-warning-50))",
          "100": "rgb(var(--color-warning-100))",
          "200": "rgb(var(--color-warning-200))",
          "300": "rgb(var(--color-warning-300))",
          "400": "rgb(var(--color-warning-400))",
          "500": "rgb(var(--color-warning-500))",
          "600": "rgb(var(--color-warning-600))",
          "700": "rgb(var(--color-warning-700))",
          "800": "rgb(var(--color-warning-800))",
          "900": "rgb(var(--color-warning-900))",
        },

        "surface": {
          "50":  "rgb(var(--color-surface-50))",
          "100": "rgb(var(--color-surface-100))",
          "200": "rgb(var(--color-surface-200))",
          "300": "rgb(var(--color-surface-300))",
          "400": "rgb(var(--color-surface-400))",
          "500": "rgb(var(--color-surface-500))",
          "600": "rgb(var(--color-surface-600))",
          "700": "rgb(var(--color-surface-700))",
          "800": "rgb(var(--color-surface-800))",
          "900": "rgb(var(--color-surface-900))",
        },

        success:"rgb(var(--color-success))",
        error:  "rgb(var(--color-error))",
        caution:"rgb(var(--color-caution))",
        info:   "rgb(var(--color-info))",

      }), // funcion theme


      // para tamaño movil h-movil-100 h-movil-100-min
      height: theme => ({       
        "movil-100":'calc(var(--vh) * 100)',
      }),

    },
   
  },
  plugins: [ ],
  
}
