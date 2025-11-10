import { useLoaderData, Link } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { API_BASE_URL } from "../utils/api";

export async function loader() {
    const genresResponse = await fetch(`${API_BASE_URL}/api/books/genres`);
    const genresData = await genresResponse.json();

    const genresWithBooks = await Promise.all(
        genresData.genres.map(async (genre) => {
            const genreSlug = genre.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, '-');
            const booksResponse = await fetch(
                `${API_BASE_URL}/api/books/genre/${genreSlug}`
            );
            const books = await booksResponse.json();
            return {
                name: genre,
                slug: genreSlug,
                books: books.slice(0, 6)
            };
        })
    );

    return { genres: genresWithBooks };
}

export default function Genero() {
    const { genres } = useLoaderData();
    const auth = useAuth();
    const [userLibrary, setUserLibrary] = useState(null);

    useEffect(() => {
        if (auth?.isAuthenticated) {
            fetch(`${API_BASE_URL}/api/my-library`, {
                headers: { 'Authorization': `Bearer ${auth.user.token}` }
            })
                .then(res => res.json())
                .then(setUserLibrary)
                .catch(console.error);
        }
    }, [auth?.isAuthenticated]);

    const sortedGenres = [...genres].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const sortedGenresWithBooks = sortedGenres.map(genre => ({
        ...genre,
        books: [...genre.books].sort((a, b) =>
            a.title.localeCompare(b.title)
        )
    }));

    const getBookStatus = (bookId) => {
        if (!userLibrary) return null;

        if (userLibrary.quiero_leer?.find(item => item.book.id_libros === bookId))
            return { icon: 'heart', color: 'danger', label: 'Quiero Leer' };
        if (userLibrary.leyendo?.find(item => item.book.id_libros === bookId))
            return { icon: 'clock', color: 'warning', label: 'Leyendo' };
        if (userLibrary.leido?.find(item => item.book.id_libros === bookId))
            return { icon: 'check-circle', color: 'success', label: 'Leído' };

        return null;
    };

    return (
        <div className="container text-start" id="top">
            <h1 className="m-1">Todos los Géneros</h1>
            <h3>Descubre todos los géneros literarios en nuestro catálogo</h3>
            <div>
                {sortedGenresWithBooks.map((genre, index) => (
                    <div className="container my-4" key={index} style={{ width: '1000px' }}>
                        <Link to={`/generosTodos/${genre.slug}`} style={{ color: "white", textDecoration: "none" }}>
                            <h2>{genre.name}</h2>
                        </Link>
                        <div className="bookstand">
                            <div className="overflow-auto h-25">
                                <div className="d-flex flex-nowrap gap-4 pb-3">
                                    {genre.books.map((book) => {
                                        const status = getBookStatus(book.id);
                                        return (
                                            <div className="flex-shrink-0 position-relative" key={book.id}>
                                                <Link
                                                    to={`/detalle/${book.id}`}>
                                                    <img
                                                        src={book.cover_url || "https://placehold.co/150"}
                                                        className="img-fluid img-thumbnail"
                                                        alt={book.title}
                                                        style={{ width: '150px', height: '200px', objectFit: 'contain' }}
                                                    />
                                                </Link>
                                                {status && (
                                                    <span
                                                        className={`position-absolute top-0 end-0 m-2 badge bg-${status.color}`}
                                                        title={status.label}
                                                    >
                                                        <i className={`fas fa-${status.icon}`}></i>
                                                    </span>
                                                )}
                                                <h5 className="text-truncate" style={{ maxWidth: '150px' }}>
                                                    {book.title}
                                                </h5>
                                                <h6 className="text-truncate" style={{ maxWidth: '150px' }}>{book.author}</h6>
                                                <Link
                                                    to={`/detalle/${book.id}`}
                                                    className="btn btn-light btn-sm"
                                                >
                                                    Más información
                                                </Link>
                                            </div>
                                        );
                                    })}
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link
                                            to={`/generosTodos/${genre.slug}`}
                                            className="btn btn-light"
                                        >
                                            Más {genre.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#top" className="text-warning">Volver al inicio</a>
                    </div>
                ))}
            </div>
        </div>
    );
}