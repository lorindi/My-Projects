# SoftUni Practice Server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Base URL

The Base URL for the API is: `http://localhost:3030/jsonstore`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: Todos

- `/todos` -- get todo list/ create todo;
- `/todos/{todoId}` -- get todo/update todo/ delete todo by provided id;;

## Get todo list

Send a `GET` request to `/todos`. The service will respond with an array of todo objects.

### Success Response:

Code: 200 OK

Content:

```
[
  {
    "_id": string,
    "text": string,
    "isCompleted": boolean,
  }, ...
]
```

## Create a new todo

Create a new todo by sending a `POST` request to `/todos` with properties `text` and `isCompleted`. The service will respond with an object, containing newly created todo.

### Body

```
{
  "text": string,
  "isCompleted": boolean
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  "_id": string,
  "text": string,
  "isCompleted": boolean,
}
```

## Update todo by provided todoId

Update an existing todo by sending a `PUT` request to `/todos/{todoId}` with property `isCompleted`. The service will respond with an object, containing newly updated todo.

### Body

```
{
  isCompleted: boolean,
}
```

### Success Response:

Code: 200 OK

Content:

```
{
  "_id": string,
  "text": string,
  "isCompleted": boolean,
}
```

