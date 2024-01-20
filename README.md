# Github Finder App

This Github Finder App allows users to search for public repositories and users. It provides a
user-friendly interface to discover and explore public repositories and users.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

#### Clone the repository:

```bash
git clone https://github.com/MohammadSheadeh/github-finder.git
cd github-finder
```

#### Select the desired Node.js version:

```bash
nvm use
```

- nvm: [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating)

### Environment Variables

The following environment variables are required for the proper functioning of the project.\
Create a `.env` file in the root directory and add the following values:

#### `NEXT_PUBLIC_VERCEL_URL`

- The base URL for the Vercel deployment of your application.
- Example: `NEXT_PUBLIC_VERCEL_URL=https://your-vercel-app.vercel.app`

#### `GITHUB_ACCESS_TOKEN`

- This variable is used to increase github fetch rate limit.
- Example: `GITHUB_ACCESS_TOKEN=your-github-access-token`

#### Install dependencies:

```bash
npm ci
```

#### Run the project:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

#### Build for Production:

```bash
npm run build
```

Builds the app for production to the `.next` folder.\
It correctly bundles Next in production mode and optimizes the build for the best performance.

note: make sure to create a `.env` file in the root directory before running this command

#### Run in Production Mode:

```bash
npm run start
```

Execute this script to run the Next.js app in production mode. Once the app is running,\
you can access it in the browser at [http://localhost:3000](http://localhost:3000)\
This command is typically used after running the `npm run build` script.

#### Run Tests:

```bash
npm run test
```

It executes the test suites to ensure the functionality of your code.

#### Format Code with Prettier:

```bash
npm run format
```

Prettier is used for code formatting. To ensure consistent formatting throughout the project.\
This command will automatically format the code based on the rules defined in the `.prettierrc.js`\
configuration file.

#### Run Linter:

```bash
npm run lint
```

Run the linter to analyze the code for potential errors.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
