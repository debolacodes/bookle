// src/data.ts
export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description?: string;
    language?: string;
    maturityRating?: string;
    printType?: string;
    publishedDate?: string;
    publisher?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export interface BookSearchProps {
  searchTerm:string;
  setSearchTerm: (query: string) => void;
  handleSearch:() => void;  
}