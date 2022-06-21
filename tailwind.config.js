/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [//aqui passamos quais componentes vai usar tailwind
    './src/**/*.tsx' //lendo isso, na pasta raiz src, todas as pasta com qualquer arquivo com extensão .tsx.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
