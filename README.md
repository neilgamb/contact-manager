# Contact Manager

A simple Contact Manager application built with React, TypeScript, and Redux Toolkit. This app demonstrates basic CRUD functionality using RTK Query for API interactions and React Router for routing.

## Features

- Fetch and display a paginated list of contacts.
- View detailed information for a selected contact.
- Handle loading and error states gracefully.
- Toggle to simulate API errors for demonstration purposes.
- Infinite scroll for contact list pagination.
- State management powered by Redux Toolkit and RTK Query.

## Tech Stack

- **React** with TypeScript
- **Redux Toolkit** (RTK Query)
- **React Router**

## API Endpoints

This app interfaces with [{JSON} Placeholder](https://jsonplaceholder.typicode.com/), a mock API to demonstrate CRUD operations:

GET /users: Fetch paginated list of contacts.
GET /users/:id: Fetch details for a specific contact.

todo:

- pagination?
- debounce infinite scroll?
- force refetch
- skip?
