<center>
<img src="https://res.cloudinary.com/farmz2u/image/upload/v1729435354/bookle/book_rtickh.svg" alt="drawing" width="200"/>
</center>

# Book Search Application

## Author

Adebola Oyenuga (debolacodes@gmail.com)

## Project Description

This web application allows users to search for books using the Google Books API and display the results. It features an intuitive user interface that enhances the book searching experience.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-search-app.git

### Live Demo

Check out the live version of the app [here](https://bookle-teal.vercel.app/).

#### Screenshots

| Empty State (No Search Performed) | Search Results | Details Page | Pagination |
| --------------------------------- | -------------- | ------------ | ------------ |
| ![Empty State](https://res.cloudinary.com/farmz2u/image/upload/v1729435328/bookle/empty_u5njga.jpg) | ![Search Result](https://res.cloudinary.com/farmz2u/image/upload/v1729435328/bookle/results_fy5bod.jpg) | ![Details Page](https://res.cloudinary.com/farmz2u/image/upload/v1729435328/bookle/popup_afiapv.jpg) |![Pagination](https://res.cloudinary.com/farmz2u/image/upload/v1729436854/bookle/bwdyh1nmfnsin64zf6g5.jpg)


### Features

- **Search Functionality:** Users can enter keywords to search for books using a user-friendly search bar.
- **Visually Appealing Results:** Search results are displayed attractively, showcasing:
  - Book title
  - Author
  - Publication date
  - Book cover image
- **Detailed View:** Users can click on a book to view additional details, including:
  - Description
  - Publisher information
- **Pagination/Infinite Scrolling:** Implements pagination for effective display management when there are more than 10 results.
- **Responsive Design:** Fully responsive design ensures an optimal viewing experience on both desktop and mobile devices.



## Components

- **BookList.tsx:** Component that lists the books from the Google Books API.
- **BookSearch.tsx:** Component for the search input and buttons.
- **EmptyBook.tsx:** Component that displays the UI for an empty state in the book list.
- **Modal.tsx:** Component for the modal that shows the book details when clicked.
- **Pagination.tsx:** Component for pagination in the book list.

## Pages

- **Book.tsx:** The parent component for the search functionality and book list.

## Technical Requirements

- **Framework:** Built using **React.js** with **TypeScript** for type safety and enhanced maintainability.
- **API Integration:** Utilizes the **Google Books API** for seamless book data fetching.
- **JavaScript Features:** Incorporates modern **JavaScript ES6+** features throughout the codebase.
- **Code Quality:** Follows best practices for clean and maintainable code, with clear and concise comments where necessary.
- **Error Handling:** Implements basic **error handling** for API requests to improve user experience during failures.
- **Styling:** Styled using **TailwindCSS** with a little vanilla **CSS** for styling the scroll bar.
- **Testing:** Unit tests implemented using **Jest**/**Vitest** to ensure code reliability and functionality.

