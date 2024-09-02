- [CSE 341 - Web Services - Winter 2024](#cse-341---web-services---winter-2024)
  - [Best Links](#best-links)
- [w01 - Introducing our tech stack](#w01---introducing-our-tech-stack)
  - [Course Setup](#course-setup)
  - [Getting started with our first APIs](#getting-started-with-our-first-apis)
  - [API Deployment at Render](#api-deployment-at-render)
- [w02 - REST Clients, GET Requests, Node Architecture](#w02---rest-clients-get-requests-node-architecture)
  - [Connect API to MongoDB Securely](#connect-api-to-mongodb-securely)
  - [REST Clients](#rest-clients)
  - [GET Requests](#get-requests)
  - [Query Parameters](#query-parameters)
  - [Debugging Node](#debugging-node)
  - [Headers](#headers)
  - [Node Architecture and API Organization](#node-architecture-and-api-organization)
- [w03 - HTTP Requests \& Dev Tools (and, Linters and Formatters)](#w03---http-requests--dev-tools-and-linters-and-formatters)
  - [URI Hierarchies](#uri-hierarchies)
  - [POST](#post)
  - [PUT](#put)
  - [DELETE](#delete)
  - [MongoDB CRUD](#mongodb-crud)
  - [Linters](#linters)
  - [Code Formatters](#code-formatters)
  - [Project Configuration and Management](#project-configuration-and-management)
- [w04 - API Documentation](#w04---api-documentation)
  - [API Documentation](#api-documentation)
  - [Swagger](#swagger)
  - [Other Options](#other-options)
  - [Extra](#extra)
- [w05 - REST \& JSON Alternatives](#w05---rest--json-alternatives)
  - [JSON vs XML](#json-vs-xml)
  - [REST Overview](#rest-overview)
  - [RPC](#rpc)
  - [XML+RPC](#xmlrpc)
  - [SOAP](#soap)
  - [GraphQL](#graphql)
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
  - [OAuth and Swagger](#oauth-and-swagger)
  - [JSON Web Tokens (JWT)](#json-web-tokens-jwt)
  - [JWT meets OAuth](#jwt-meets-oauth)
  - [Extra](#extra-3)
- [w09 - API Gateways and Managers](#w09---api-gateways-and-managers)
  - [What Is An API Gateway?](#what-is-an-api-gateway)
  - [Popular API Gateways and Managers](#popular-api-gateways-and-managers)
- [w10 - API Gateways and Managers](#w10---api-gateways-and-managers)
  - [Setting up an Azure Gateway](#setting-up-an-azure-gateway)
- [w11 - Testing](#w11---testing)
  - [Why Testing?](#why-testing)
  - [JavaScript Testing Frameworks](#javascript-testing-frameworks)
  - [Writing Unit Tests with Jest](#writing-unit-tests-with-jest)
- [w12 - Testing](#w12---testing)
- [w13 - Wrap Up](#w13---wrap-up)
  - [Resume Tips](#resume-tips)
  - [Interview Prep](#interview-prep)
  - [Interview Questions](#interview-questions)
- [Resources](#resources)
- [PROJECT IDEA: CMS (Content Management System)](#project-idea-cms-content-management-system)
  - [Readings](#readings)

---

# CSE 341 - Web Services - Winter 2024

## Best Links

- [User implementation 📺](https://youtu.be/L7qj_g06NhY)
- [Maphnew/node_andrew/README.md ⭐](https://github.com/Maphnew/node_andrew/blob/master/README.md)
- Node Architecture and API Organization:
  - [Node.js project architecture best practices 🔗](https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/)
  - [Bulletproof node.js project architecture 🔗](https://softwareontheroad.com/ideal-nodejs-project-structure/)
  - [Organizing your Express.js project structure for better productivity 🔗](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)

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

# w02 - REST Clients, GET Requests, Node Architecture

- [Lesson 02 🔗](https://cse341.netlify.app/lesson2)
  - Repository [🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L02)
  - Videos:
    - cse341 L02 Introduction [🔗](https://youtu.be/Yf6podqP-zE)
    - Publish Node API to Heroku with GET requests (cse341 Lesson 2 Personal Assignment) [🔗](https://youtu.be/MhObHmqk58U)

## Connect API to MongoDB Securely

- [Connect to a MongoDB Database Using Node.js 🔗](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)
- [(OPTIONAL) YouTube: MongoDB (Atlas) connection using Node 🔗](https://youtu.be/Qn0SOL8vK8w)
- [Moving nodejs MongoDB connection code to another file 🔗](https://stackoverflow.com/questions/58354629/moving-nodejs-mongodb-connection-code-to-another-file)

## REST Clients

A REST client is a tool that allows us to invoke a REST service API. In lesson 1, we created our first GET request API and we actually ended up seeing that data directly in the browser. To an extent, our browser functioned as our REST client last week. However, there are many things that our browsers cannot do without some client-side code. For example, if I needed to make a GET request with any type of dynamic data, headers, authentication keys, or other similar pieces of data, I would not be able to unless I had a frontend project in place. REST clients on the other hand, will allow us to make all sorts of HTTP requests with all sorts of data in an environment that is intuitive and convenient.

The number of REST clients in production today is very great, with these programs coming and going like much of the software we see on a regular basis. Here are several REST clients being used widely in industry today:

- [HTTPie 🔗](https://httpie.io/)
- [Postman 🔗](https://www.postman.com/)
- [Swagger 🔗](https://swagger.io/tools/swagger-ui/)
- [Thunder Client (VS Code Extension) 🔗](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [Rest Client (VS Code Extension) 🔗](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [You can read about many others in this Google search. 🔗](https://www.google.com/search?q=most+popular+rest+clients+in+industry+today&oq=most+popular+rest+clients+in+industry+today)

## GET Requests

There are a lot of different ways to learn about GET requests, and you're likely already familiar with what they are from previous classes you've taken. For example, in WDD 230, you made several fetch requests (JavaScript client way of sending http requests to a server), to get temple data, or weather data...those were GET requests. Here are some resources below to learn more about these, and also to learn how to make them in Node.

- [W3schools HTTP Methods 🔗](https://www.w3schools.com/tags/ref_httpmethods.asp)
- [GET - What is the GET Method 🔗](https://rapidapi.com/blog/api-glossary/get/)
- [Build Node.js RESTful APIs in 10 Minutes 🔗](https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
- [(OPTIONAL) YouTube: Node.js + Express - Tutorial - GET and POST Requests 🔗](https://www.youtube.com/watch?v=Sb8xyCa2p7A)
- [(OPTIONAL) YouTube: How to build a REST API with Node js & Express 🔗](https://www.youtube.com/watch?v=pKd0Rpw7O48)

## Query Parameters

- [What are query parameters? 🔗](https://rapidapi.com/blog/api-glossary/parameters/query/)
- [How to access query string parameters 🔗](https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/)
- [Stack Overflow: How to get GET (query string) variables in Express.js on Node.js? 🔗](https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js?rq=1)

## Debugging Node

- [Node Debugging Guide 🔗](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [The Absolute Easiest Way to Debug Node.js — with VS Code 🔗](https://itnext.io/the-absolute-easiest-way-to-debug-node-js-with-vscode-2e02ef5b1bad)
- [(Optional) YouTube: Debug NodeJS Project in VS Code 🔗](https://www.youtube.com/watch?v=HtiigX7wHC4&ab_channel=Nathan)

## Headers

- [HTTP Headers 🔗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Stackoverflow: get headers from a request using Node 🔗](https://stackoverflow.com/questions/13147693/how-to-extract-request-http-headers-from-a-request-using-nodejs-connect)

## Node Architecture and API Organization

- [Node.js project architecture best practices 🔗](https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/)
- [Bulletproof node.js project architecture 🔗](https://softwareontheroad.com/ideal-nodejs-project-structure/)
- [Organizing your Express.js project structure for better productivity 🔗](https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/)

---

# w03 - HTTP Requests & Dev Tools (and, Linters and Formatters)

- [Lesson 03 🔗](https://cse341.netlify.app/lesson3)
  - [cse341 L03 Introduction 📺](https://youtu.be/iGuKWTT1-qs)
  - [Publish NodeJS MongoDB CRUD API to Heroku (cse341 L03 personal assignment) 📺](https://youtu.be/0iVptecZ0-E)

## URI Hierarchies

- [JavaScript URIs 🔗](https://medialize.github.io/URI.js/)
- [Node.js - RESTful API 🔗](https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm)

## POST

As you learn about these different HTTP methods, know that there are always other ways to do things. For example, MongoDB uses queries and functions to insert, update, delete and retrieve data. Technically, I could use a POST to get data, modify it, or even delete it. However, these HTTP methods are here to add clarity and consistency to applications, and will work with other databases that don't rely on functions as much as MongoDB does.

- [Building a REST API with Node and Express 🔗](https://stackabuse.com/building-a-rest-api-with-node-and-express/)
- [MongoDB http.post() 🔗](https://docs.mongodb.com/realm/services/http-actions/http.post/)
- [Building a RESTful API Using Node.JS and MongoDB 🔗](https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/)
- [(OPTIONAL) YouTube: Build A Restful Api With Node.js Express & MongoDB | 🔗](https://www.youtube.com/watch?v=vjf774RKrLc)

## PUT

- [Node JS Make HTTP Put Request Example 🔗](https://www.itsolutionstuff.com/post/node-js-make-http-put-request-exampleexample.html)
- [MongoDB Update Documents 🔗](https://docs.mongodb.com/manual/tutorial/update-documents/)
- [Node.js, Express & MongoDb: Build a CRUD Rest Api example 🔗](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/#Update_an_object)

## DELETE

- [Node JS Make HTTP Delete Request Example 🔗](https://www.itsolutionstuff.com/post/node-js-make-http-delete-request-exampleexample.html)
- [MongoDB drop index 🔗](https://docs.mongodb.com/manual/reference/method/db.collection.dropIndex/)
- [Node.js MongoDB Delete 🔗](https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp)

## MongoDB CRUD

Here is a great article that sums up the CRUD (Create, Read, Update, Delete) process using Node.js and MongoDB.

- [Building a Simple CRUD app with Node, Express, and MongoDB 🔗](https://zellwk.com/blog/crud-express-mongodb/)

## Linters

Once you learn how to use code linters, you should never go back. When properly configured, they help keep your code, neat, clean, functional, and error-free. You should use a linter on your code for the remainder of this class.

- [JavaScript Linters 🔗](https://gomakethings.com/javascript-linters/)
- [The Top Five JavaScript Linting Tools 🔗](https://www.codeguru.com/tools/the-top-five-javascript-linting-tools/)
- [(OPTIONAL) YouTube: VSCode ESLint, Prettier & Airbnb Style Guide Setup 🔗](https://www.youtube.com/watch?v=SydnKbGc7W8)

## Code Formatters

Once you learn how to use code formatters, you should never go back. When properly configured, they help keep your code neat, consistent and clean. You should use a formatter on your code for the remainder of this class.

- [Why You Should Use a Code Formatter 🔗](https://medium.com/@ryconoclast/why-you-should-use-a-code-formatter-4f02dd40db14)
- [Top 10 VS Code Extensions 🔗](https://www.apexhours.com/top-10-vs-code-extensions/)
- [(OPTIONAL) YouTube: VS Code Autoformatter - Configuring Prettier 🔗](https://youtu.be/wTRe2CjRZ4g)

More:

- [VSCode ESLint, Prettier & Airbnb Style Guide Setup 🔗](https://youtu.be/SydnKbGc7W8)
  - eslint.org/docs/latest/ [🔗](https://eslint.org/docs/latest/)
- [VS Code Autoformatter - Configuring Prettier 🔗](https://youtu.be/wTRe2CjRZ4g)
- [Setup ESLINT and PRETTIER in React app 🔗](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

## Project Configuration and Management

The following article shows how to set up a linter and formatter with your project. Ignore the React stuff this time around and be sure to select Node instead of Browser when it prompts for where your code will run.

- [Setup ESLINT and PRETTIER 🔗](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

Once this is all set up, you can run commands from the terminal like: "npm run lint" or the others that we put into the package.json.

---

# w04 - API Documentation

- [Lesson 04 🔗](https://cse341.netlify.app/lesson4)
  - [cse341 L04 Introduction 📺](https://youtu.be/Z-adw31RbEI)
  - [Contacts Frontend MERN stack Overview 📺](https://youtu.be/fLv6KkCOZ3o)
  - [Deploy Node.js Swagger API Documentation to Heroku (cse341 L04 personal assignment) 📺](https://youtu.be/6SIACHzJe3g)

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
  - [cse341 L05 Introduction 🔗](https://youtu.be/QXwaYh4Yt9Q)
  - [Set up Swagger (Design First) for Node.js and deploy to Heroku (cse341 Lesson 5 walkthrough) 🔗](https://youtu.be/AIi1gZOsRmY)

## JSON vs XML

- [JSON vs XML 🔗](https://www.w3schools.com/js/js_json_xml.asp)
- [A Deep Look at JSON vs. XML, Part 1: The History of Each Standard 🔗](https://www.toptal.com/web/json-vs-xml-part-1)

## REST Overview

- [What is REST? 🔗](https://www.codecademy.com/article/what-is-rest)

## RPC

- [Remote Procedure Call(RPC) 🔗](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC)
- [RPC vs REST 🔗](https://iq.opengenus.org/rpc-vs-rest/)

## XML+RPC

- [XML-RPC - Examples 🔗](https://www.tutorialspoint.com/xml-rpc/xml_rpc_examples.htm)
- [Stack: How to use XML RPC using Node.js 🔗](https://stackoverflow.com/questions/53514370/do-you-nou-how-to-run-xmlrpc-requests-from-node-js)

## SOAP

- [What is SOAP? 🔗](https://www.tutorialspoint.com/soap/what_is_soap.htm)
- [SOAP vs REST 🔗](https://smartbear.com/blog/soap-vs-rest-whats-the-difference/)

## GraphQL

- [GraphQL Docs 🔗](https://graphql.org/)
- [Setting up GraphQL Server with NodeJS, Express and MongoDb 🔗](https://medium.com/@utkarshprakash/setting-up-graphql-server-with-nodejs-express-and-mongodb-d72fba13216)

---

# w06 - Validation & Error Handling

- [Lesson 6 🔗](https://cse341.netlify.app/lesson6)
  - [cse341 L06 Introduction 🔗](https://youtu.be/4n2J90fC_eY)
  - [Node.js API Put and Delete with error handling (cse341 L06 personal assignment example) 🔗](https://youtu.be/L7qj_g06NhY)

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
  - [cse341 L08 Introduction 🔗](https://youtu.be/TqbTjEf5elQ)
  - [Class Solution 🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L08)
  - [cse341 L11 Introduction 🔗](https://youtu.be/CQq1wetWyKI)

## OAuth and Swagger

- [OAuth 2.0 🔗](https://swagger.io/docs/specification/authentication/oauth2/)
  - The OAuth 2.0 Authorization Framework - fc6749 [🔗](https://datatracker.ietf.org/doc/html/rfc6749)
- [OAuth 2.0 configuration 🔗](https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/)

## JSON Web Tokens (JWT)

- [Introduction to JSON Web Tokens 🔗](https://jwt.io/introduction)
  - JSON Web Token (JWT) - fc7519 [🔗](https://datatracker.ietf.org/doc/html/rfc7519)
- [What is JWT and how does it work? 🔗](https://www.akana.com/blog/what-is-jwt)
  - API Basics For the Enterprise [🔗](https://www.akana.com/resources/api-basics)
  - API Security Best Practices [🔗](https://www.akana.com/resources/api-security-best-practices)
- [(OPTIONAL) YouTube: What Is JWT and Why Should You Use JWT 🔗](https://www.youtube.com/watch?v=7Q17ubqLfaM) 📺 ~15m
  - JWT Authentication Tutorial - Node.js [🔗](https://youtu.be/mbsmsi7l3r4) 📺 ~27m
  - JWT Playground [🔗](https://jwt.io/)

## JWT meets OAuth

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
  - [cse341 L09 Introduction 🔗](https://youtu.be/I7y9vYNuCFc)
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

# w10 - API Gateways and Managers

- [esson 10 🔗](https://cse341.netlify.app/lesson10)
  - [cse341 L10 Introduction 🔗](https://youtu.be/tF7hLQtFLA0)

## Setting up an Azure Gateway

This is an example that would walk you through setting up an API manager through Microsoft Azure.

- [Create a new Azure API Management instance using Visual Studio Code 🔗](https://docs.microsoft.com/en-us/azure/api-management/vscode-create-service-instance)
  - Once you import the backend API into API Management, your API Management API becomes a façade for the backend API. You can customize the [_façade_ 🔗](https://refactoring.guru/design-patterns/facade) to your needs in API Management without touching the backend API.
- [Import and publish your first API (first of a series of 10 tutorials) 🔗](https://docs.microsoft.com/en-us/azure/api-management/import-and-publish)

---

# w11 - Testing

- [Lesson 11 🔗](https://cse341.netlify.app/lesson11)
  - [cse341 L11 Introduction 🔗](https://youtu.be/CQq1wetWyKI)
- Repository [🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L11)

## Why Testing?

- [Comparing Node.js unit testing frameworks 🔗](https://blog.logrocket.com/the-best-unit-testing-frameworks-for-node-js/#whatisunittestinginnodejs)
- [What Is the Best Unit Testing Framework for JavaScript? 🔗](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/)

## JavaScript Testing Frameworks

- [Jest 🔗](https://jestjs.io/)
- [Mocha 🔗](https://mochajs.org/)
- [Jasmine 🔗](https://jasmine.github.io/)
- [Ava 🔗](https://github.com/avajs/ava)

## Writing Unit Tests with Jest

- [Getting Started 🔗](https://jestjs.io/docs/getting-started)
- [Jest Tutorial for Beginners: Getting Started With JavaScript Testing 🔗](https://www.valentinog.com/blog/jest/)
- [Debug Jest test files (look at Leigh Mathieson's answer) 🔗](https://stackoverflow.com/questions/33247602/how-do-you-debug-jest-tests)
- [(OPTIONAL) How to add unit testing to express using jest 🔗](https://www.youtube.com/watch?v=hz0_q1MJa2k&t=0s&ab_channel=SamMeech-Ward)
- [Jest with Mockingoose Student Tutorial 🔗](https://youtu.be/EtTYi-6wiC8)
- [Using Jest with MongoDb 🔗](https://jestjs.io/docs/mongodb)
- [Supertest(Library to use with another testing framework, for testing APIs.) 🔗](https://fek.io/blog/how-to-add-unit-testing-to-express-using-jest)

---

# w12 - Testing

- [Lesson 12 🔗](https://cse341.netlify.app/lesson12)
  - [cse341 L12 Introduction 🔗](https://youtu.be/GiJUg9f1QBA)

Same content as Week 11.

- Additional content:
  1. [Introduction To Automated Testing 🔗](https://faun.pub/introduction-to-automated-testing-f3d004b2ca84#47f2)
  2. [How To Setup Your TypeScript App Test Environment With Jest 🔗](https://faun.pub/how-to-setupyour-typescript-app-test-environmentwith-jest-b41c481a2c)
  3. [How To Test Your Rest API With Jest And SuperTest (I) 🔗](https://faun.pub/how-to-test-your-rest-api-with-jest-and-supertest-i-196bc84e6c5f)
- Tags:
  - https://medium.com/tag/supertest

---

# w13 - Wrap Up

- [Lesson 13 🔗](https://cse341.netlify.app/lesson13)
  - [cse341 L13 Introduction 🔗](https://youtu.be/UNYsLLw3EL0)

## Resume Tips

- [How To Craft The Perfect Web Developer Ré­su­mé 🔗](https://www.smashingmagazine.com/2018/06/web-developer-resume/)
- [Sign up for a résumé review through Handshake. 🔗](https://app.joinhandshake.com/appointments)
- [Student Web Developer Resume Samples 🔗](https://www.qwikresume.com/resume-samples/student-web-developer/)

## Interview Prep

- [BYU-Idaho Career Center Powerful Job Interviews 🔗](https://www.byui.edu/career/preparation/interview-skills)
- [19 Web Developer Interview Questions You Should Know 🔗](https://www.codementor.io/blog/web-developer-interview-questions-3ey8yl7epg)
- [How to Ace the Web Developer Job Interview 🔗](https://www.codingdojo.com/blog/programming-interview-questions)

Here are some questions you should be prepared to answer for yourself:

- How do I schedule a practice or mock interview with the BYUI career center?
- What are the Wall Street Interviewing Strategies?
- What is your market value?
- How can you make a powerful introduction?
- How should you dress for interviews or career fairs? What does your appearance say about you?

## Interview Questions

Here are some questions you should be prepared to answer in an interview regarding the technologies taught in this class:

1. T/F: NPM is a programming language.
1. Node.js is a runtime for Javascript, NOT a Back End language.
1. Node.js is a back end language, NOT a runtime for JavaScript.
1. Node.JS allows JavaScript to be run outside of the browser.
1. What does NPM stand for?
1. What is the command to install the nodemon package globally?
1. How do you initialize a Node.js project that creates a package.json and node_modules for you?
1. What is the method to set up a server and make it run in a certain port?
1. What Node.JS code is compiled into?
1. What are Middleware functions?
1. What is Express.js?
1. What does MVC stand for?
1. How do you make use of an express router for your requests?
1. What is the responsibility of the Model?
1. What is the responsibility of the Controller?
1. How do you make relations in a NoSQL database such as MongoDB?
1. What are the most important pieces of the structure of a MongoDB database?
1. How do you find the id of a MongoDB document?
1. What is a Cookie?
1. What is a real disadvantage of using cookies on the client-side?
1. What is a CSRF attack?
1. The 300–399 range of http response status codes are for what?
1. The 200–299 range of http response status codes are for what?
1. The 400–499 range of http response status codes are for what?
1. The 500–599 range of http response status codes are for what?
1. What is the synchronous way of handling errors?
1. What does the term “Sanitizing” refer to in Node.js?
1. Where exactly do you inject your dependencies?
1. Is Node.js recommended for heavy calculations and 3D rendering?
1. What is risk?
1. What are the tasks of risk management?
1. When identifying and classifying risks, what are the 5 main risk impact areas?
1. Why isn’t it possible to pass images/files with the file picker through the body of the request?
1. What do the skip( ) and limit( ) methods do and where do you use them?
1. Which is the HTTP verb that should be used with client-side JavaScript in order to delete something upon request?
1. T/F: When performing an asynchronous request, the server has to send a response without reloading/re-rendering the page.
1. T/F: Because every company’s needs are unique, the payment process should not be outsourced and the development team should develop its own.

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
- https://blog.tooljet.com/build-cms-using-lowcode-and-mongodb/
- https://www.educative.io/courses/grokking-the-low-level-design-interview-using-ood-principles/getting-ready-library-management-system
