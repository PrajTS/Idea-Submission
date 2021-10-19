# Next.js Project

## Hosted URL

https://scripbox-two.vercel.app/

## Problem statement

Build a web application which lets employees of an organisation to  add/manage challenges for internal hackathons which they organise every  month. Let's call this application Hack Ideas.
 The application should have these features,
 \* Allow users to enter into application with 'employee id'(password is not necessary).
 \* Allow users to add a new challenges/ideas.
 \* A challenge will have a title, description and tags
 \* You can maintain fixed pre-defined tags (like 'feature', 'tech' etc.)
 \* Users can upvote a challenge
 \* Show the list of all challenges on home page
 \* Allow users to sort challenges with votes count, creation date


## Running locally in development mode

To get started,  run `npm install && npm run dev`:

```
npm install
npm run dev
```

This will startup both the backend and frontend.

## Running on docker

```
docker-compose up
```

This will startup both the backend and frontend as well as mongoDB

## Run unit testing

```
npm run test
```

## Tech-stack

1. **Frontend**: Next.js, material ui
2. **Backend**: Inbuilt express server of Next.js
3. **Database**: MongoDB

## Screenshots

#### Login screen

![Images listed view](https://drive.google.com/uc?export=view&id=1T-3G3SFGlAavSMBkGTG1_ruePhakcKDj)

#### List of idea with sort functionality

!['Load more' button](https://drive.google.com/uc?export=view&id=1CyF7W_BEeu3XpZUNm21hyDeo3dmxTdt3)

#### Individual idea view - upvoted

![Filtered Results](https://drive.google.com/uc?export=view&id=1bZXdZoiafUW5-EZXwk7SjG8JPrXtkqoC)

#### Submit new ideas

![Filtered Results](https://drive.google.com/uc?export=view&id=1N8HquHHviGRyFqFMb-iLyQfUmI3auIkI)