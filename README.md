# Book Management Application

A React-based web application for managing and exploring books. This app allows users to view all books, search books by title or author, and add new books to the collection.

## Features

  - View All Books
  - Add New Books
  - Delete Books
  - Search by Title
  - Search by Author

## Backend API

The application connects to a backend API hosted at:
https://backend-book-api.vercel.app/books


## Components

### 1. `AddBookForm`
A form component for adding new books to the database with the following fields:
- Title
- Author
- Published Year
- Genre
- Language
- Country
- Rating
- Summary
- Cover Image URL

### 2. `Books`
Displays all books in the database with the ability to delete individual books.

### 3. `BookByTitle`
Shows detailed information about a specific book when searched by title.

### 4. `BookByAuthor`
Lists all books by a particular author.

## Technologies Used

- React.js
- Bootstrap CSS
- Fetch API for backend communication
- Custom hooks (useFetch)
- React Icons (HiCheckBadge, HiArchiveBoxXMark)

