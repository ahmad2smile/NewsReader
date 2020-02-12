# News Reader

<img src="https://github.com/ahmad2smile/NewsReader/workflows/Build/badge.svg" />

## Description

News Reader App from The Guardian News API

Built using ExpressJS, ReactJS and The Guardian Open API

## Hosting & CI/CD

CI/CD: is done using **GitHub Actions**.

Hosting: App is hosted on **Azure** in **Azure AppServices** on [https://news-reader.azurewebsites.net/](https://news-reader.azurewebsites.net/)

## Usage:

Using `make` (commands are `Windows` supported)

```bash
make start
```

else follow the below steps:

### Installation

1. Install `shared` Shared Code

```bash
cd shared && npm install
```

2. Install `app` React App

```bash
cd app && npm install
```

3. Install `api` Express JS API

```bash
cd api && npm install
```

### Running the app

Express API:

```bash
cd api && npm run start:dev
```

React APP:

```bash
cd app && npm run start
```

## Stay in touch

-   Author - [Ahmad](http://shafiqahmad.com/)
-   Website - [https://news-reader.azurewebsites.net/](https://news-reader.azurewebsites.net/)

## License

This project is [MIT licensed](LICENSE).
