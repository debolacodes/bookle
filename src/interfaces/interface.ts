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