# Minimalist CV

This project is a minimalist CV built with a modern TS stack.

## Getting Started

App built with:

- [React](https://react.dev/ "https://react.dev")
- [TypeScript](https://www.typescriptlang.org/ "https://www.typescriptlang.org/")
- [Vite](https://vitejs.dev/ "https://vitejs.dev/")
- [Mantine](https://mantine.dev/ "https://mantine.dev/") from the following template: [https://github.com/mantinedev/vite-min-template](https://github.com/mantinedev/vite-min-template "https://github.com/mantinedev/vite-min-template")
- [Biome](https://biome.js.org/ "https://biome.js.org/")

1. Clone the repository:

    `git clone https://github.com/movoid12/my-cv.git`

2. Install dependencies:

    ```ts
    
    cd my-cv
    
    npm install
    
    // install using yarn
    yarn install
    
    // install using pnpm
    pnpm install
    
    ```

3. Start the development server:

    ```bash
    npm run dev
    
    yarn dev
    
    pnpm dev
    ```

### How to enter your own data

This CV Template that allows you to showcase your skills, education, work experience, projects, and languages. In order to make this template work correctly, you need to fill out the [Example-Portfolio](docs/portfolio-example.json) and host it on an API endpoint.

## How to Use

1. Fill out the [Example-Portfolio](docs/portfolio-example.json) with your own information following the provided schema.
2. Host the data on an API endpoint using [Beeceptor](https://beeceptor.com/) for example to mock and host your data.
3. Sign up in Vercel and connect it to your Github account and setup the deployment of the Github repo.
4. After hosting and deploying the App, set the environment variable `VITE_CONFIG_API_URL` in Vercel to point to the API endpoint what you already created in the step 2.

<hr>

### **Thank you for using this template! Feel free to customize it further to suit your needs**

```yml
If you like the template,

please support me with a star ⭐️ on my GitHub repo.
 ```
