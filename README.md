# Contact Manager

A simple Contact Manager application built with React, TypeScript, React Router and Redux Toolkit and RTK Query. This app demonstrates basic CRUD functionality using RTK Query for API interactions.

## Features

- Fetch and display a list of contacts.
- View detailed information for a selected contact.
- Handle loading and error states gracefully.
- State management powered by Redux Toolkit and RTK Query.

## Tech Stack

- **React** with TypeScript
- **Redux Toolkit** (with RTK Query)
- **React Router**

## API Endpoints

This app interfaces with a fake REST API using [json-server](https://github.com/typicode/json-server) to demonstrate CRUD operations:

- (CREATE) **POST** /contacts: Create a new contact record
- (READ) **GET** /contacts: Fetch list of contacts
- (READ) **GET** /contacts/:id: Fetch details for a specific contact
- (UPDATE) **PATCH** /contacts/:id: Edit an existing contact record
- (DELETE) **DELETE** /contacts/:id: Delete an existing contact record
