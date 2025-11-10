import { useLoaderData, Link } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { API_BASE_URL } from "../utils/api";

export async function loader() {
    const response = await fetch(`${API_BASE_URL}/api/books`)
    return response.json()
}

export default function Libros() {
    const data = useLoaderData();
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

    const sortedData = [...data].sort((a, b) =>
        a.titulo_libro.localeCompare(b.titulo_libro)
    );

    return (
        <div className="containerLibros" id="top">
            <h1>Biblioteca</h1>
            <h3>Acá podrás explorar todos los libros en nuestra colección</h3>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
                    {sortedData.map((item) => {
                        const status = getBookStatus(item.id_libros);
                        return (
                            <div className="col" key={item.id_libros}>
                                <div className="card h-100">
                                    <div className="position-relative">
                                        <Link to={`/detalle/${item.id_libros}`}>
                                            <img src={item.enlace_portada_libro}
                                                className="card-img-top"
                                                alt="portada"
                                                style={{ height: '400px', objectFit: 'contain' }} />
                                        </Link>
                                        {status && (
                                            <span
                                                className={`position-absolute top-0 end-0 m-2 badge bg-${status.color} border border-light`}
                                                title={status.label}
                                            >
                                                <i className={`fas fa-${status.icon} fs-6 p-2`}></i>
                                            </span>
                                        )}
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.titulo_libro}</h5>
                                        <p className="card-text">{item.autor.nombre_autor} {item.autor.apellido_autor}</p>
                                        <Link to={`/detalle/${item.id_libros}`}
                                            className="link-dark link-underline link-underline-opacity-0 btn btn-light mt-auto">
                                            Más información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <a href="#top" className="text-warning">Volver al inicio</a>
        </div>
    )
}