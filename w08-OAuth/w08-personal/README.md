- [Class Readings](#class-readings)
  - [w05 - REST \& JSON Alternatives](#w05---rest--json-alternatives)
  - [w06 - Validation \& Error Handling](#w06---validation--error-handling)
    - [Explanation](#explanation)
  - [w07 - OAuth](#w07---oauth)
    - [Explanation](#explanation-1)
    - [Hands On](#hands-on)
  - [w08 - OAuth](#w08---oauth)
    - [Explanation](#explanation-2)
- [PROJECT IDEA: CMS (Content Management System)](#project-idea-cms-content-management-system)
  - [Readings](#readings)

---

# Class Readings

## w05 - REST & JSON Alternatives

- [Lesson 5: REST & JSON Alternatives 🔗](https://cse341.netlify.app/lesson5)

## w06 - Validation & Error Handling

- [Lesson 6: Validation & Error Handling 🔗](https://cse341.netlify.app/lesson6)

### Explanation

- Validation:
  - [What is Data Validation? 🔗](https://engage.safe.com/what-is/data-validation/)
  - A Clean Approach to Using `express-validator` [🔗](https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go)
    - https://express-validator.github.io/docs/
  - `validatejs`
    - [./helpers/validate.js 🔗](https://github.com/byui-cse/cse341-code-student/blob/L06-team-complete/helpers/validate.js)
    - [./middleware/validate.js 🔗](https://github.com/byui-cse/cse341-code-student/blob/L06-team-complete/middleware/validate.js)
  - Validation in Node js Express Rest API [🔗](https://www.tutsmake.com/validation-in-node-js-express-rest-api/)
  - 📺 7 - JOI Validation Schema to validate request body | Node JS API Authentication [🔗](https://www.youtube.com/watch?v=u9kxYilQ9l8)
- Error Handling:
  - Node.js Error Handling Made Easy: Best Practices On Just About Everything You Need to Know [🔗](https://sematext.com/blog/node-js-error-handling/)
  - Cleaner code in an Express REST API with unified error handling [🔗](https://www.codepedia.org/ama/cleaner-code-in-expressjs-rest-api-with-custom-error-handling)
  - 📺 Handling API Errors | RESTful API using NodeJS and MongoDB [🔗](https://www.youtube.com/watch?v=yNO-eA-8Fuo)
    - https://github.com/trulymittal/Nodejs-REST-API

## w07 - OAuth

- [Lesson 7: OAuth 🔗](https://cse341.netlify.app/lesson7)
  - Class Solution [🔗](https://github.com/byui-cse/cse341-code-student/tree/L07-class-complete?tab=readme-ov-file)

### Explanation

- Authentication Overview:
  - [Website Authentication: The Complete Guide with FAQs 🔗](https://swoopnow.com/website-authentication/)
    - A Modern Password: 6 Top Tips for A Secure Login Process [🔗](https://swoopnow.com/modern-password/)
  - [RESTful API Authentication Basics 🔗](https://blog.restcase.com/restful-api-authentication-basics/)
    - Basic access authentication [🔗](https://en.wikipedia.org/wiki/Basic_access_authentication)
    - Intuitive Api Designer [🔗](https://www.restcase.com/platform/design) 🤔
  - [Authorization vs Authentication 🔗](https://www.oauth.com/oauth2-servers/openid-connect/authorization-vs-authentication/)
    - OAuth 2.0 Playground [🔗](https://developers.google.com/oauthplayground/)
- OAuth:
  - [What is OAuth? Definition and How it Works 🔗](https://www.varonis.com/blog/what-is-oauth)
  - [What the Heck is OAuth? 🔗](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
    - Enter OpenID Connect, aka OIDC (OAuth 2.0 extension) [🔗](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth#enter-openid-connect) - OIDC was made famous by Google and Microsoft, both big early adopters. Okta has made a big investment in OIDC as well.
    - OAuth 2.0 and OpenID Connect (in plain English) [🔗 ](https://youtu.be/996OiexHze0) 📺 1h
- OAuth2 Vs OAuth1:
  - [What’s the difference? OAuth 1.0 vs OAuth 2.0 🔗](https://www.synopsys.com/blogs/software-security/oauth-2-0-vs-oauth-1-0.html)
  - [Differences Between OAuth 1 and 2 🔗](https://www.oauth.com/oauth2-servers/differences-between-oauth-1-2/)
  - [OAuth 2.0: Benefits and use cases — why? 🔗](https://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why)

### Hands On

- Getting Started with OAuth:
  - [Simplified Oauth 2.0 Tutorial - Example with Node.js 🔗](https://youtu.be/PdFdd4N6LtI) 📺 ~11m
  - [Google OAuth Docs - Node.js quickstart 🔗](https://developers.google.com/people/quickstart/nodejs)
- Node.js API + OAuth + MongoDb:
  - [Node.js App From Scratch | Express, MongoDB & Google OAuth 🔗](https://youtu.be/SBvmnHTQIPY) 📺 2h 28m
  - [OAuth (Passport.js) Tutorial #12 - Saving User to MongoDB 🔗](https://youtu.be/KRCh6mSSsb8) 📺 ~10m
- Extra:
  - NodeJS & Express - Google OAuth2 using PassportJS [🔗](https://youtu.be/Q0a0594tOrc) 📺 ~20m

## w08 - OAuth

- [Lesson 8: OAuth 🔗](https://cse341.netlify.app/lesson8)
  - Class Solution [🔗](https://github.com/byui-cse/cse341-code-student/branches/all?query=L08)

### Explanation

- OAuth and Swagger:
  - [OAuth 2.0 🔗](https://swagger.io/docs/specification/authentication/oauth2/)
  - [OAuth 2.0 configuration 🔗](https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/)
- JSON Web Tokens (JWT):
  - [Introduction to JSON Web Tokens 🔗](https://jwt.io/introduction)
  - [What is JWT and how does it work? 🔗](https://www.akana.com/blog/what-is-jwt)
  - [(OPTIONAL) YouTube: What Is JWT and Why Should You Use JWT 🔗](https://www.youtube.com/watch?v=7Q17ubqLfaM) 📺 ~15m
- JWT meets OAuth:
  - [OAuth vs JWT (JSON Web Tokens): An In-Depth Comparison 🔗](https://supertokens.com/blog/oauth-vs-jwt)
  - [API Keys vs OAuth Tokens vs JSON Web Tokens 🔗](https://zapier.com/engineering/apikey-oauth-jwt/)

---

# PROJECT IDEA: CMS (Content Management System)

- A CMS software application allows users to create, manage, and publish digital content like articles, images, and videos.

## Readings

- https://github.com/totaljs/cms/tree/master
- ![alt text](am6l001bn41d.png)
- https://blog.tooljet.com/build-cms-using-lowcode-and-mongodb/
