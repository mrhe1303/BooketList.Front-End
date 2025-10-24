// routes/admin-books.jsx
import { useState } from 'react'
import { Link } from 'react-router'

export default function AdminBooks() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      genre: 'Ficción',
      status: 'published',
      addedBy: 'María García',
      addedDate: '2024-01-20',
      reviews: 156
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Ciencia Ficción',
      status: 'published',
      addedBy: 'Juan Pérez',
      addedDate: '2024-02-15',
      reviews: 89
    }
  ])

  const deleteBook = (bookId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      setBooks(books.filter(book => book.id !== bookId))
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white vh-100 position-fixed">
          <div className="p-3">
            <h4 className="text-center mb-4">BooketList Admin</h4>
            <nav className="nav flex-column">
              <Link to="/admin" className="nav-link text-white mb-2">
                <i className="fas fa-tachometer-alt me-2"></i>Dashboard
              </Link>
              <Link to="/admin/users" className="nav-link text-white mb-2">
                <i className="fas fa-users me-2"></i>Gestión de Usuarios
              </Link>
              <Link to="/admin/books" className="nav-link text-white mb-2 active">
                <i className="fas fa-book me-2"></i>Gestión de Libros
              </Link>
              <Link to="/admin/authors" className="nav-link text-white mb-2">
                <i className="fas fa-pen-fancy me-2"></i>Gestión de Autores
              </Link>
              <Link to="/" className="nav-link text-warning mt-4">
                <i className="fas fa-sign-out-alt me-2"></i>Volver al Sitio
              </Link>
            </nav>
          </div>
        </div>

        <div className="col-md-9 col-lg-10 ms-auto">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1>Gestión de Libros</h1>
              <Link to="/admin" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left me-2"></i>Volver al Dashboard
              </Link>
            </div>

            {/* Books Table */}
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>Estado</th>
                        <th>Agregado por</th>
                        <th>Fecha</th>
                        <th>Reseñas</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map(book => (
                        <tr key={book.id}>
                          <td>
                            <strong>{book.title}</strong>
                          </td>
                          <td>{book.author}</td>
                          <td>
                            <span className="badge bg-secondary">{book.genre}</span>
                          </td>
                          <td>
                            <span className="badge bg-success">Publicado</span>
                          </td>
                          <td>{book.addedBy}</td>
                          <td>{book.addedDate}</td>
                          <td>{book.reviews}</td>
                          <td>
                            <div className="btn-group">
                              <button className="btn btn-sm btn-outline-primary">
                                <i className="fas fa-eye"></i>
                              </button>
                              <button className="btn btn-sm btn-outline-warning">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => deleteBook(book.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}