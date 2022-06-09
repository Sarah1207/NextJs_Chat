# START
Commands :
- npm install
- npm run dev (port 3000)
- npm run start-server (port 3005)

# API
- You can find the API swagger file in `docs/api-swagger.yaml`
- For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

# Routes :

- "/"                                                     => Home Page including a list of the users
- "/conversations/:id": "/conversations?senderId=:id"     => Conversations Page
  "/conversation/:id": "/conversations?id=:id",           => Conversation Page
  "/messages/:id": "/messages?conversationId=:id"         => Messages Page
  "/message/:id": "/messages?id=:id",                     => Message Page
  "/user/:id": "/users?id=:id"                            => User Page


  # Types :

  All types are here : \src\types
  - conversations interface
  - message interface
  - user interface

  # Test :

  We are using React-testing librairies
  All test are here : \src\__tests__


# About the project
1 / I didn't know some next features so I had to study them (cf. next router)
2 / I had difficulties for the calls to the API. I've started with the users and I should have change it in order to start with the conversations


