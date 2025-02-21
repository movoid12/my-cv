# Minimalist CV

This project is a minimalist CV built with a modern TS stack.

## Getting Started

App built with:

- [React](https://react.dev/ "https://react.dev")
- [TypeScript](https://www.typescriptlang.org/ "https://www.typescriptlang.org/")
- [Vite](https://vitejs.dev/ "https://vitejs.dev/")
- [Mantine](https://mantine.dev/ "https://mantine.dev/") from the following template: [https://github.com/mantinedev/vite-min-template](https://github.com/mantinedev/vite-min-template "https://github.com/mantinedev/vite-min-template")
- [Biome](https://biome.js.org/ "https://biome.js.org/")
- [Mockfly](https://www.mockfly.dev/) 

### Prerequisites:
- Node.js version 20 or higher, which can be verified by running `node --version` in your terminal
- Biome (Formatter/Linter) Extension installed in your IDE
- Install the Lokalise CLI tool, if you want to have multiple language support, by following the instructions at: https://github.com/lokalise/lokalise-cli-2-go -- This can be used to create projects, upload, and download translation files.
- 

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

### Multiple language support:

#### How to get an account on Lokalise?
1. Create an account with free plan here: [https://lokalise.com/](https://lokalise.com/)
2. Navigate to the “API tokens” section on your personal profile page and generate a read/write token
3. Create a new project and set English as the base language.
4. Go to Settings by clicking on “More” on the project page.
5. Copy the project ID and the generated token to the .env file

- Add Variables: In your .env file, add your Lokalise project ID and API token:

```sh
PROJECT_ID="your_actual_project_id"
API_TOKEN="your_actual_api_token"
```
- after that you will be able to download and upload translations from your Lokalise Project which are saved in the directory `./src/messages/*.json` using the following scripts:

```bash
pnpm lokalise:upload

pnpm lokalise:download
```

### How to enter your own data

That CV Template allows you to showcase your contact infos, skills, education, work experience, projects, and languages. In order to make this template work correctly, you need to fill out the [Example-Portfolio](docs/portfolio-example.json) and host it on an API endpoint.

# How to enter your own data:
1. Fill out the [Example-Portfolio](docs/portfolio-example.json) with your own information following the provided schema.
2. Host the data on an API endpoint using [Mockfly](https://www.mockfly.dev/) for example to mock and host your portfolio-example.json file.
3. Sign up in Vercel and connect it to your Github account and setup the deployment of the Github repo.
4. After hosting and deploying the App, set the environment variable `VITE_CONFIG_API_URL` in Vercel to point to the API endpoint what you already created in the step 2.

<hr>

### **Thank you for using my CV template! Feel free to customize it further to suit your needs**

```yml
If you like the template,

please support me with a star ⭐️ on my GitHub repo.
 ```
