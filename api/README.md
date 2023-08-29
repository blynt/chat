# API for Chat

A future REST-based API for Chat.

## How to start

Build a Docker image using Dockerfile:

```
$ docker build -t chat .
```

Run Docker container (will remove itself when stopped):

```
$ docker run -it --rm -p 3000:3000 chat
```

Now you have a tiny API at `http://localhost:3000`.

You can visit the `/health` endpoint at `http://localhost:3000/health`.
