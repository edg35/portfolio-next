const GOODREADS_RSS_URL = process.env.GOODREADS_RSS_URL;
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
    try {
        if (!GOODREADS_RSS_URL) {
            console.error('GOODREADS_RSS_URL environment variable is not set');
            return new Response(
                JSON.stringify({ error: 'Goodreads service not configured' }),
                { status: 503 }
            );
        }

        const parser = new Parser({
            customFields: {
                item: [
                    'book_id',
                    'book_large_image_url',
                    'book_medium_image_url',
                    'book_small_image_url',
                    'book_description',
                    'book_published',
                    'author_name',
                    'isbn',
                    'user_rating',
                    'user_read_at',
                    'user_date_added',
                    'user_shelves',
                    'average_rating',
                    'num_pages'
                ]
            }
        });
        const feed = await parser.parseURL(GOODREADS_RSS_URL);

        const books = feed.items?.map(item => ({
            title: item.title,
            author: item.author_name,
            cover: item.book_large_image_url,
            coverMedium: item.book_medium_image_url,
            coverSmall: item.book_small_image_url,
            bookId: item.book_id,
            isbn: item.isbn,
            description: item.book_description,
            publishedYear: item.book_published,
            averageRating: item.average_rating,
            userRating: item.user_rating,
            userShelves: item.user_shelves,
            userReadAt: item.user_read_at,
            userDateAdded: item.user_date_added,
            numPages: item.num_pages,
            link: item.link
        }));

        return NextResponse.json(books);
    } catch (error) {
        console.error('Error fetching Goodreads data:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch Goodreads data' }),
            { status: 500 }
        );
    }
}