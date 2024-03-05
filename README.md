- [CSE 341 - Web Services - Winter 2024](#cse-341---web-services---winter-2024)
- [Extra Material](#extra-material)
- [w01 - Introducing our tech stack](#w01---introducing-our-tech-stack)
  - [Course Setup](#course-setup)
  - [Getting started with our first APIs](#getting-started-with-our-first-apis)
  - [API Deployment at Render](#api-deployment-at-render)
- [w02 -](#w02--)
- [w03 - HTTP Requests \& Dev Tools (and, Linters and Formatters)](#w03---http-requests--dev-tools-and-linters-and-formatters)
  - [Linters and Formatters](#linters-and-formatters)
- [w04 - API Documentation](#w04---api-documentation)
  - [API Documentation](#api-documentation)
  - [Swagger](#swagger)
  - [Other Options](#other-options)
  - [Extra](#extra)
- [w05 - REST \& JSON Alternatives](#w05---rest--json-alternatives)
- [w06 - Validation \& Error Handling](#w06---validation--error-handling)
  - [Validation](#validation)
  - [Error Handling](#error-handling)
  - [Extra](#extra-1)
- [w07 - OAuth](#w07---oauth)
  - [Explanation](#explanation)
    - [Authentication Overview](#authentication-overview)
    - [OAuth Introduction](#oauth-introduction)
    - [OAuth2 Vs OAuth1](#oauth2-vs-oauth1)
  - [Hands On](#hands-on)
    - [Getting Started with OAuth](#getting-started-with-oauth)
    - [Node.js API + OAuth + MongoDb](#nodejs-api--oauth--mongodb)
  - [Extra](#extra-2)
- [w08 - OAuth](#w08---oauth)
  - [Explanation](#explanation-1)
    - [OAuth and Swagger](#oauth-and-swagger)
    - [JSON Web Tokens (JWT)](#json-web-tokens-jwt)
    - [JWT meets OAuth](#jwt-meets-oauth)
  - [Extra](#extra-3)
- [w09 - API Gateways and Managers](#w09---api-gateways-and-managers)
  - [What Is An API Gateway?](#what-is-an-api-gateway)
  - [Popular API Gateways and Managers](#popular-api-gateways-and-managers)
- [w10 -](#w10--)
- [w11 -](#w11--)
- [w12 -](#w12--)
- [w13 -](#w13--)
- [Resources](#resources)
- [PROJECT IDEA: CMS (Content Management System)](#project-idea-cms-content-management-system)
  - [Readings](#readings)

---

# CSE 341 - Web Services - Winter 2024

# Extra Material

- [User implementation 🔗📺](https://youtu.be/L7qj_g06NhY)

---

# w01 - Introducing our tech stack

- [Lesson 01 🔗](https://cse341.netlify.app/lesson1)
- Videos:
  - Intro: https://youtu.be/bUKgMUl5JyU
  - VS Code: https://youtu.be/5FE7L8syBm4
  - How to Install GIT on Windows, MacOS and ChromeOS: https://youtu.be/idN0wJqVTyo
  - CSE 341 MongoDB setup (January 2023): https://youtu.be/g4V7n86mMr0
  - Deploy Node js API with Env Variables on Render Automatically with GitHub Deploys: https://youtu.be/68ubggfsQlE
  - Create Github Repository and save all your code there: https://youtu.be/bLPPQ0R5hj0
  - Node and Express Tutorial: https://youtu.be/K00J87SofEc

## Course Setup

- Visual Studio Code [🔗](https://code.visualstudio.com/download)
- Microsoft Teams [🔗](https://www.microsoft.com/en-us/microsoft-teams/download-app)
- Node.js [🔗](https://www.microsoft.com/en-us/microsoft-teams/download-app)
- YouTube Recorders: Zoom, Loom, Screencastify, screencast-o-matic, OBS Studio, [best screen recorder for Windows 🔗](https://www.google.com/search?q=best+screen+recorder+for+Windows)
- Git [🔗](https://git-scm.com/downloads)
  - Add to the PATH on Windows 10 and Windows 11 [🔗](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
- GitHub [🔗](https://github.com/)
- MongoDB Atlas [🔗](https://www.mongodb.com/cloud/atlas)

## Getting started with our first APIs

- Building the API with Node.js
  - [(OPTIONAL) JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour 🔗](https://youtu.be/W6NZfCO5SIk)
  - [Node and Express Tutorial 🔗](https://codeforgeek.com/express-nodejs-tutorial/)
  - [Node docs 🔗](https://nodejs.org/en/docs/guides/getting-started-guide/)
  - [(OPTIONAL) YouTube: Node.js Tutorial for Beginners: Learn Node in 1 Hour 🔗](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=1s)
  - [(OPTIONAL) YouTube search: nodejs for beginners 🔗](https://www.youtube.com/results?search_query=nodejs+for+beginners)
  - [Even a simple web search like "nodejs web server example" can be extremely helpful. 🔗](https://www.google.com/search?q=nodejs+web+server+example&oq=nodejs+web+server+example&aqs=chrome.0.69i59j0i22i30l3j0i390l3.1545j0j7&sourceid=chrome&ie=UTF-8)
- Saving to GitHub
  - [How to add a new project to Github using VS Code 🔗](https://stackoverflow.com/questions/46877667/how-to-add-a-new-project-to-github-using-vs-code)
  - [Youtube: Create Github Account and Repository From Existing Code Using VS Code 🔗](https://youtu.be/507icmrtczI)

## API Deployment at Render

- What is API Deployment? A2 Hosting, Heroku, Amazon Web Services, DigitalOcean, Glitch, Google Cloud Platform, Microsoft Azure, Platform.sh, NodeChef, Render, Fly, Railway, Vercel, - Render
- Render [🔗](https://render.com/)
  - Deploy a Node Express App [🔗](https://docs.render.com/deploy-node-express-app)
  - Environment variables and config vars Setup [🔗](https://medium.com/@Hybeecodes/using-environment-variables-in-your-node-project-66f284cd9fe6)
  - Environment Variables and Secrets [🔗](https://docs.render.com/configure-environment-variables)
- Testing your deployed API
  - REST Client in VSCode [🔗](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

# w02 -

- [Lesson 02 🔗](https://cse341.netlify.app/lesson2)

---

# w03 - HTTP Requests & Dev Tools (and, Linters and Formatters)

- [Lesson 03 🔗](https://cse341.netlify.app/lesson3)

## Linters and Formatters

- [VSCode ESLint, Prettier & Airbnb Style Guide Setup 🔗](https://youtu.be/SydnKbGc7W8)
  - eslint.org/docs/latest/ [🔗](https://eslint.org/docs/latest/)
- [VS Code Autoformatter - Configuring Prettier 🔗](https://youtu.be/wTRe2CjRZ4g)
- [Setup ESLINT and PRETTIER in React app 🔗](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

---

# w04 - API Documentation

- [Lesson 04 🔗](https://cse341.netlify.app/lesson4)

## API Documentation

- [(OPTIONAL) Youtube: Intro to API Documentation 🔗](https://youtu.be/5pzhtrrtkXY)
- [What is API Documentation, and Why It Matters? 🔗](https://swagger.io/blog/api-documentation/what-is-api-documentation-and-why-it-matters/)

## Swagger

- [What is Swagger? 🔗](https://swagger.io/tools/open-source/getting-started/)
- [Create swagger.json from scratch (Design First) 🔗](https://support.smartbear.com/swaggerhub/docs/tutorials/getting-started.html)
- [Create swagger.json npm package (Development First) - `swagger-autogen` 🔗](https://www.npmjs.com/package/swagger-autogen)
  - Swagger Autogen Docs [🔗](https://swagger-autogen.github.io/docs/)
- [swagger-ui-express 🔗](https://www.npmjs.com/package/swagger-ui-express)

## Other Options

- Be aware that there are other resources for doing very similar types of API documentation. None of them appear to be as widely integrated with npm or as widely used in industry. Two other popular ones are Postman (which started off as just a rest client), and Readme. We will only use Swagger in this course.

## Extra

- Repo: davibaltar/example-swagger-autogen [🔗](https://github.com/davibaltar/example-swagger-autogen/blob/master/swagger.js)

---

# w05 - REST & JSON Alternatives

- [Lesson 5 🔗](https://cse341.netlify.app/lesson5)

---

# w06 - Validation & Error Handling

- [Lesson 6 🔗](https://cse341.netlify.app/lesson6)

## Validation

- [What is Data Validation? 🔗](https://engage.safe.com/what-is/data-validation/)
- A Clean Approach to Using `express-validator` [🔗](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go)
  - https://express-validator.github.io/docs/
- `validatejs`
  - [./helpers/validate.js 🔗](https://github.com/byui-cse/cse341-code-student/blob/L06-team-complete/helpers/validate.js)
  - [./middleware/validate.js 🔗](https://github.com/byui-cse/cse341-code-student/blob/L06-team-complete/middleware/validate.js)
- Validation in Node js Express Rest API [🔗](https://www.tutsmake.com/validation-in-node-js-express-rest-api/)
- 📺 7 - JOI Validation Schema to validate request body | Node JS API Authentication [🔗](https://www.youtube.com/watch?v=u9kxYilQ9l8)

## Error Handling

- Node.js Error Handling Made Easy: Best Practices On Just About Everything You Need to Know [🔗](https://sematext.com/blog/node-js-error-handling/)
- Cleaner code in an Express REST API with unified error handling [🔗](https://www.codepedia.org/ama/cleaner-code-in-expressjs-rest-api-with-custom-error-handling)
- 📺 Handling API Errors | RESTful API using NodeJS and MongoDB [🔗](https://www.youtube.com/watch?v=yNO-eA-8Fuo)
  - https://github.com/trulymittal/Nodejs-REST-API

## Extra

- From teacher:
  - `user.js` [🔗](https://github.com/byui-cse/cse341-code-student/tree/L06-personal-solution-example)
  - Error handling video [🔗](https://youtu.be/S0przpEKKGU)
  - `validate.js` video [🔗](https://youtu.be/S0przpEKKGU?si=3htSi66dToezA5HI&t=631)
- [How to handle data validation in Node.js using validatorjs 🔗](https://blog.logrocket.com/handle-data-validation-node-js-validatorjs/)
- `validation-express`
  - [ValidationChain explanation 🔗](https://express-validator.github.io/docs/guides/validation-chain)
  - [ValidationChain API 🔗](https://express-validator.github.io/docs/api/validation-chain/)
  - [ARE YOU OVERUSING EXPRESS-VALIDATOR’S CUSTOM VALIDATOR? 🔗](https://addissoftware.com/are-you-overusing-express-validators-custom-validator/)

---

# w07 - OAuth

- [Lesson 7 🔗](https://cse341.netlify.app/lesson7)
  - Class Solution [🔗](https://github.com/byui-cse/cse341-code-student/tree/L07-class-complete?tab=readme-ov-file)

## Explanation

### Authentication Overview

- [Website Authentication: The Complete Guide with FAQs 🔗](https://swoopnow.com/website-authentication/)
  - A Modern Password: 6 Top Tips for A Secure Login Process [🔗](https://swoopnow.com/modern-password/)
- [RESTful API Authentication Basics 🔗](https://blog.restcase.com/restful-api-authentication-basics/)
  - Basic access authentication [🔗](https://en.wikipedia.org/wiki/Basic_access_authentication)
  - Intuitive Api Designer [🔗](https://www.restcase.com/platform/design) 🤔
- [Authorization vs Authentication 🔗](https://www.oauth.com/oauth2-servers/openid-connect/authorization-vs-authentication/)
  - OAuth 2.0 Playground [🔗](https://developers.google.com/oauthplayground/)

### OAuth Introduction

- [What is OAuth? Definition and How it Works 🔗](https://www.varonis.com/blog/what-is-oauth)
- [What the Heck is OAuth? 🔗](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
  - Enter OpenID Connect, aka OIDC (OAuth 2.0 extension) [🔗](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth#enter-openid-connect) - OIDC was made famous by Google and Microsoft, both big early adopters. Okta has made a big investment in OIDC as well.
  - OAuth 2.0 and OpenID Connect (in plain English) [🔗 ](https://youtu.be/996OiexHze0) 📺 1h

### OAuth2 Vs OAuth1

- [What’s the difference? OAuth 1.0 vs OAuth 2.0 🔗](https://www.synopsys.com/blogs/software-security/oauth-2-0-vs-oauth-1-0.html)
- [Differences Between OAuth 1 and 2 🔗](https://www.oauth.com/oauth2-servers/differences-between-oauth-1-2/)
- [OAuth 2.0: Benefits and use cases — why? 🔗](https://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why)

## Hands On

### Getting Started with OAuth

- [Simplified Oauth 2.0 Tutorial - Example with Node.js 🔗](https://youtu.be/PdFdd4N6LtI) 📺 ~11m
- [Google OAuth Docs - Node.js quickstart 🔗](https://developers.google.com/people/quickstart/nodejs)

### Node.js API + OAuth + MongoDb

- [Node.js App From Scratch | Express, MongoDB & Google OAuth 🔗](https://youtu.be/SBvmnHTQIPY) 📺 2h 28m
- [OAuth (Passport.js) Tutorial #12 - Saving User to MongoDB 🔗](https://youtu.be/KRCh6mSSsb8) 📺 ~10m

## Extra

- NodeJS & Express - Google OAuth2 using PassportJS [🔗](https://youtu.be/Q0a0594tOrc) 📺 ~20m
- Lesson 7 Class Activity Walkthrough: Auth0 + Google [🔗](https://youtu.be/52gurOGtaJM)
- `User` model implementation:
  - GitHub Code Repo [🔗](https://github.com/byui-cse/cse341-code-student/tree/L06-personal-solution-example/models)
  - Video From Teacher [🔗](https://youtu.be/L7qj_g06NhY)

---

# w08 - OAuth

- [Lesson 8 🔗](https://cse341.netlify.app/lesson8)
  - Class Solution [🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L08)

## Explanation

### OAuth and Swagger

- [OAuth 2.0 🔗](https://swagger.io/docs/specification/authentication/oauth2/)
  - The OAuth 2.0 Authorization Framework - fc6749 [🔗](https://datatracker.ietf.org/doc/html/rfc6749)
- [OAuth 2.0 configuration 🔗](https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/)

### JSON Web Tokens (JWT)

- [Introduction to JSON Web Tokens 🔗](https://jwt.io/introduction)
  - JSON Web Token (JWT) - fc7519 [🔗](https://datatracker.ietf.org/doc/html/rfc7519)
- [What is JWT and how does it work? 🔗](https://www.akana.com/blog/what-is-jwt)
  - API Basics For the Enterprise [🔗](https://www.akana.com/resources/api-basics)
  - API Security Best Practices [🔗](https://www.akana.com/resources/api-security-best-practices)
- [(OPTIONAL) YouTube: What Is JWT and Why Should You Use JWT 🔗](https://www.youtube.com/watch?v=7Q17ubqLfaM) 📺 ~15m
  - JWT Authentication Tutorial - Node.js [🔗](https://youtu.be/mbsmsi7l3r4) 📺 ~27m
  - JWT Playground [🔗](https://jwt.io/)

### JWT meets OAuth

- [OAuth vs JWT (JSON Web Tokens): An In-Depth Comparison 🔗](https://supertokens.com/blog/oauth-vs-jwt)
  - Revoking Access to JWT tokens with a Blacklist/Deny List [🔗](https://supertokens.com/blog/revoking-access-with-a-jwt-blacklist)
  - OAuth 2.0 vs Session Management [🔗](https://supertokens.com/blog/oauth-2-vs-session-management)
- [API Keys vs OAuth Tokens vs JSON Web Tokens 🔗](https://zapier.com/engineering/apikey-oauth-jwt/)

## Extra

- Top 3 Things You Should Know About Webhooks! [🔗](https://youtu.be/x_jjhcDrISk)
- Passportjs:
  - Passport-GitHub2 [🔗](https://www.passportjs.org/packages/passport-github2/)
  - Code example for `passport-github` [🔗](https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js)

---

# w09 - API Gateways and Managers

- [Lesson 9 🔗](https://cse341.netlify.app/lesson9)
  - GitHub source code [🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L09)

## What Is An API Gateway?

As your API scales, you start to run into questions like "How can I control who makes requests to it and how many requests can they make? How can I make sure the interface with the frontend stays the same while the backend is being updated? How can I handle influxes of requests?" API management tools exist to help with questions like these. One of these tools is an API gateway. API gateways serve as a middle layer to go between your API and the clients that use it.

- [(OPTIONAL) YouTube: What is API gateway really all about? 🔗](https://www.youtube.com/watch?v=1vjOv_f9L8I)
- [Microsoft Tutorial: Hello World: API Management 🔗](https://docs.microsoft.com/en-us/shows/Hello-World/Hello-World-API-Management)
- [14 Open Source and Managed API Gateway for Modern Applications 🔗](https://geekflare.com/api-gateway/)
- [Understanding the API Gateway: When You Need It and How to Implement It 🔗](https://www.altexsoft.com/blog/api-gateway/)

## Popular API Gateways and Managers

An API Gateway acts as a middle layer between your API services and the clients that use them. Here are some popular solutions out there today:

- [WSO2 🔗](https://wso2.com/api-manager/)
- [Azure API Management 🔗](https://azure.microsoft.com/en-us/services/api-management/#overview)
- [Amazon API Gateway 🔗](https://aws.amazon.com/api-gateway/)
- [Kong 🔗](https://konghq.com/products/kong-gateway)
- [Tyk 🔗](https://tyk.io/open-source/)
- [KrakenD 🔗](https://www.krakend.io/)
- [Gloo Edge 🔗](https://docs.solo.io/gloo-edge/latest/)
- [Express Gateway 🔗](https://www.express-gateway.io/)

---

# w10 -

- [Lesson 10 🔗](https://cse341.netlify.app/lesson10)

---

# w11 -

- [Lesson 11 🔗](https://cse341.netlify.app/lesson11)

---

# w12 -

- [Lesson 12 🔗](https://cse341.netlify.app/lesson12)

---

# w13 -

- [Lesson 13 🔗](https://cse341.netlify.app/lesson13)

---

# Resources

- GitHub OAuth Apps - https://github.com/settings/developers
- `supertokens/supertokens-core` - https://github.com/supertokens/supertokens-core
- OpenAPI Guide - https://swagger.io/docs/specification/basic-structure/

---

# PROJECT IDEA: CMS (Content Management System)

- A CMS software application allows users to create, manage, and publish digital content like articles, images, and videos.

## Readings

- https://github.com/totaljs/cms/tree/master

  ![alt text](am6l001bn41d.png)

- https://blog.tooljet.com/build-cms-using-lowcode-and-mongodb/
