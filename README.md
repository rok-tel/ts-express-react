# ts-express-react

An easy and straight forward full-stack web application boilerplate using [Node.js](#node-js) [Express](#express) as backend and [React](#react) as frontend.
All packages are structured as [Yarn Workspaces](#yarn-workspaces) and written in [Typescript](#typescript).
In addition, the web application can be built as [Docker](#docker) image using a multi stage built supported Dockerfile.

- [Introduction](#introduction)
  - [Prerequisite](#prerequisite)
  - [Common workspace](#common)
  - [Client workspace](#client)
  - [Server workspace](#server)
- [Quick Start](#quick-start)
  - [Development mode](#development-mode)
  - [Production mode](#production-mode)
  - [Docker container mode](#docker-container-mode)
- [Documentation](#documentation)
  - [Directory Structure](#directory-structure)
  - [Typescript](#typescript)
  - [Node.js](#node-js)
  - [Express](#express)
  - [React](#react)
  - [Yarn](#yarn)
  - [Yarn Workspaces](#yarn-workspaces)
  - [Docker](#docker)


## Introduction

This boilerplate uses yarn workspaces which allows both [client](#client) and [server](#server) workspaces to use [common](#common) workspace for type definitions or any other information relevant.

### Prerequisite

make sure [yarn](https://classic.yarnpkg.com/lang/en/docs/install) is installed.
```
npm i -g yarn
```

### Common
A workspace that includes common logic to be imported from other relevant workspaces.

### Server
A workspace that includes a Node.js Express web application.

### Client
A workspace that includes a React single page application.

## Quick Start

```bash
# Clone repository
git clone https://github.com/rok-tel/ts-express-react <Your_App_Name>

# Enter project root directory
cd <Your_App_Name>

# Install dependencies
yarn

# Running dev mode
yarn dev

# Build for production
yarn common build
yarn client build
yarn server build

# Running prod mode
yarn start
```

### Development mode

Running <code>yarn dev</code> runs both [client](#client) and [server](#server) concurrently with live reloading mode.
Which allows direct impact of changed code without build process.
1. Server -> <code>ts-node-dev --transpile-only src/index.ts</code>
2. Client -> <code>react-scripts start</code>

This enables running client react app at http://localhost:3000 with proxy to running server app at http://localhost:8080

- See [link](https://create-react-app.dev/docs/proxying-api-requests-in-development/) for more information.

### Production mode

Running <code>yarn server start</code> runs the web application with transpiled code of its workspaces.
- Remember running build commands beforehand. (See [Quick Start](#Quick-Start)).


### Docker container mode
- Notice - If Docker is not installed on your machine, you can download it from [here](https://docs.docker.com/get-docker/).
```bash
# Enter project root directory
cd <Your_App_Name>

# Build docker container image
# Notice - replace <Image_Name>, <Image_Tag> 
# with your chosen image name and tag
docker build . -t <Image_Name>:<Image_Tag>

# Run a docker image
# Notice - replace <Port> with desired port
# in host machine
docker run -p <Port>:8080 <Image_Name>:<Image_Tag>
```

## Documentation

### Directory Structure

All workspaces are under <code>packages</code> directory.

Each workspace -
1. contains <code>src</code> directory for Typescript code.
2. contains <code>tsconfig.json</code> file for Typescript options and configuration.
3. Would be built and transpiled to <code>build</code> directory.

### Typescript
[TypeScript](https://www.typescriptlang.org/) is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### Node js
[Node.js](https://nodejs.org/) is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### Express
[Express](https://expressjs.com/) is a backend web application framework for Node.js, It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
### React
[React](https://reactjs.org/) is a free and open-source front-end JavaScript library for building user interfaces or UI components.
### Yarn
[Yarn](https://classic.yarnpkg.com/en/) is a package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.
### Yarn Workspaces
[Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) are a new way to set up your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.
### Docker
[Docker](https://www.docker.com/) is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.