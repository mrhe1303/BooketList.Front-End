import { useLoaderData, Link, useNavigate } from "react-router";

export async function loader({ params }) {
    const { bookId } = params;
    const response = await fetch(`http://127.0.0.1:5000/api/books/${bookId}`);

    if (!response.ok) {
        throw new Response("Libro no encontrado", { status: 404 });
    }

    const book = await response.json();
    return { book };
}

export default function DetalleLibro() {
    const { book } = useLoaderData();
    const navigate = useNavigate();

    const genreSlug = book.genre
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');

    return (
        <div className="container my-4">
            <button
                onClick={() => navigate(-1)}
                className="btn btn-outline-secondary mb-3"
            >
                ← Volver
            </button>

            <div className="row">
                <div className="col-md-4 text-center">
                    <img
                        src={book.cover_url || "https://placehold.co/300x450"}
                        alt={book.title}
                        className="img-fluid rounded shadow"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-8">
                    <h1>{book.title}</h1>
                    <h3 className="text-muted">{book.author}</h3>
                    <span className="badge bg-primary mb-3">{book.genre}</span>

                    <p className="lead mt-3">{book.description}</p>

                    <div className="mt-4">
                        {book.amazon_asin && (
                            <a
                                href={`https://www.amazon.com/dp/${book.amazon_asin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-warning me-2"
                            >
                                Ver en Amazon
                            </a>
                        )}

                        <Link
                            to={`/generosTodos/${genreSlug}`}
                            className="btn btn-outline-primary"
                        >
                            Ver más libros como este
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}