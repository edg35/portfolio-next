"use client";
import Book from "@/app/interfaces/Book";

export function useGoodReads() {
    const fetchGoodReadsData = async (): Promise<Book[] | null> => {
        try {
            const response = await fetch('/api/me/books');
            if (!response.ok) throw new Error('Failed to fetch Goodreads data');
            const data = await response.json();
            return data as Book[];
        } catch (error) {
            console.error('Error fetching Goodreads data:', error);
            return null;
        }
    }
    return { fetchGoodReadsData };
}