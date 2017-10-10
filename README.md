# Express With A Socket Demo

This is an example of a NodeJS server that uses both Express for serving static files and WS for a websocket backend. It is teh basic structure that I use for to serve the front-end files and run the logic of the game server for [Game of Ninja](www.gameof.ninja).

### Usage

There are two paths here: [http](https://github.com/JimTheMan/Express-With-A-Socket-Demo/tree/master/http) and https. The http is meant to be run locally and is easier to set up. It's a good starting place to get a feel for how using Express and Websockets works. The https folder contains a version that you could deploy to production for using with HTTPS secured pages and secure WSS websockets. It can be a little trickier to set up as it involves purchasing a domain name, registering an ssl certificate (possibly for free through letsencrypt), and paying for a server to keep everything running.
