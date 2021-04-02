# Simple Notes App
@version 1.0.0

A simple API to manage notes.

## How install

Download the project and run the next commands:

```bash
    $ npm i
    $ npm start
```

## End Points

### All the EndPoints was initialize with:
```rest
    api/v1/
```

## User End Points
```rest 
    GET  | api/v1/me 
    POST | api/v1/verifyToken
    POST | api/v1/login 
    POST | api/v1/signup 
    PUT  | api/v1/me/edit 
```

## Notes End Points
```rest
    GET    | /notes
    GET    | /notes:id
    POST   | /createNote  
    PUT    | /notes/:id
    DELETE | /notes/:id
```

## Groups End Points
```rest
    GET    | /groups
    GET    | /groups/:id
    GET    | /groups/:id/notes
    POST   | /groups/new 
    POST   | /groups/:code/join
    POST   | /groups/:id/newNote
    DELETE | /groups/:code/notes/:id
```