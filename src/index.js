import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3000/api/v1/characters';

const getBooks = async () => {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const addBook = book => {};

const books = getBooks().then(book => console.log(book));
