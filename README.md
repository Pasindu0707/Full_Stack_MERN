Frontend->
1.npm create vite@latest client -> react
                                JS+SWC
2.npm install


Tailwind->
1.Tailwind CSS initializing ->npm install -D tailwindcss
                            npx tailwindcss init
2.Tailwind.config.js-> clean all code and add->
            /** @type {import('tailwindcss').Config} */
            module.exports = {
              content: ["./src/**/*.{html,js}"],
              theme: {
                extend: {},
              },
              plugins: [],
            }

  index.css-> clean all the code->
              @tailwind base;
              @tailwind components;
              @tailwind utilities;

npm run dev
