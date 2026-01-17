import Book from "@/app/interfaces/Book";
import Image from "next/image";

interface ReadingSectionProps {
    books: Book[];
}

const stripHtmlTags = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
};

export function ReadingSection({ books }: ReadingSectionProps) {
    return (
        <section id="reading">
            <p className="section__text__p1">Currently Reading</p>
            <h1 className="title">Books & Articles</h1>
            <div className="reading-list" style={{ marginTop: '2rem' }}>
                {books.length === 0 ? (
                    <p className="section__text__p2">No books or articles to display.</p>
                ) : (
                    books.map((book) => (
                        <div key={book.bookId} className="flex flex-row gap-4 items-stretch">
                            <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 relative h-full">
                                <Image fill src={book.cover} alt={`${book.title} cover`} className="h-full !w-auto !relative object-contain" />
                            </a>
                            <div className="flex flex-col justify-start flex-1">
                                <a href={book.link} target="_blank" rel="noopener noreferrer" className="reading-item__title">
                                    {book.title}
                                </a>
                                <p className="reading-item__author">by {book.author}</p>
                                <p className="reading-item__description">{stripHtmlTags(book.description)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Image
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                width={30}
                height={30}
                onClick={() => window.location.href = '#contact'}
                style={{ cursor: 'pointer' }}
            />
        </section>
    );
}