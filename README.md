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

npm run dev  (need to be in the client folder(frontend))



bacnkend -> root folder -> npm init -y
                            npm i express
                            npm i nodemon ( to auto restart the server if a change happen)
                            updated the script of package json and (npm run dev)

npm run dev


Database -> Mongo DB


redux tool kit (for store data that are neccesary for just use in one log )