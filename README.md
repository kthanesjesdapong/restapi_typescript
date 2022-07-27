# Introduction

This project was created with 
- TypeScript 
- Express 
- MongoDB
- Zod

## Explanation 

All we're doing within this simple application is writing RESTful API's and using TypeScript, for our middleware we used Express and for our DB IS we used mongoDB, Zod is used to form our schemas for validating our schemas. Later in the readMe I'll provide a better breakdown of our file structure, and directories.

## Installation

Use either [npm] or [yarn] to install the application and this should install all the necessary dependencies.
```zsh
yarn add

```

# Breakdown of Each Directory

## Config
```
within our config file, you'll notice a default.ts here we host information such as
- The Port, we're using
- dbUri, which is our MongoDB connection
- saltWorkFactor, the number of rounds we plan on hashing our user's password
- accessTokenTtl, how long our accessToken will be valid for
- refreshTokenTtl, how long our refreshToken will be valid for
- publicKey, our publicKey needed for jwtSigning
- privateKey, our privateKey needed for Verifying a jwt.
```

## Controller

# The Controller is the logic we insert into our routes
```
Everything in our controller has our logic that controls the way a user interacts with our MVC model. 
This determines what responses is sent back to the user based on the parameters/ queries they pass through.
It interacts with both the model and the View.




- Think of Controllers as the managers
 - manages the incoming work requests
 - decides which worker should do the work
 - splits up the work into sizable units
 - passes that work off
 - if the work requires multiple people working on multiple things, orchestrates the work
 - but does not do the work himself/herself (again, using a basic stereotype here!)

```

## Middleware
### within our middleware we have middleware that we are passing onto routes that may requried them 
```
- deserializeUser, takes either the access token and we verify the Jwt to ensure that we have the correct accessToken for the user and if their refreshToken is attached && their accesstoken is expired we issue a new accessToken for the user.

- requireUser, this middleware is attached to routes that may require a user to make a request, if there isnt a user avaiable we'll send them a 403

- validateResources, this middleware is attached to routes that require us to update,create, or get a specific information concering the item. it ensures that the requests we're sending are valid per schema.
```

## Models
```
- Withing our models directory we're defining the types based off of the mongooseDocument so we can use specific methods associated with Document.
ie(find, findByone, etc...

- Based off of the types, we are then able to define our schema for mongDb,

-and finally create models, that fit the document, and the schema.
```

## Routes
```
Within our routes, we are validating the request the user makes per schema of the route and attaching functions which needs to be called per route
```

## Schema
```
The schema directory is the schema type that is to be passed into our handler function so the parameters understand the types of data we're interacting with.
```

## Service
```
The service directory are functions whose return values are dependent on the model, and we generally use these within our controller.
- Think of service as the workers
  - receives the request from the manager
  - figures out the individual details involved in completing the request
  - is generally only concerned with the tasks he/she has to complete
  - not responsible for making decisions about the "bigger" picture
  - does the actual work necessary to complete the tasks/request
  - returns the completed work to the manager
```

## Utils
```
Within our utils folder we have

- connect, this establishes our connection to monDB
- jwt.utils, are our functions which will sign a token, and then verify a token
- logger, this is a logger that allows us to log to the terminal/ console in a way which makes the data a lot more ledgible.
- we use pino to minimize the resources we use for logging messages.

```
