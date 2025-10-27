// routes/admin-edit-book.jsx
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

export default function AdminEditBook() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [book, setBook] = useState({
    id: parseInt(id),
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    genre: 'Ficción',
    description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.',
    isbn: '978-8437604947',
    publishedDate: '1967-05-30',
    status: 'published',
    coverImage: 'https://th.bing.com/th/id/OIF.Y2rN6VOb3ioE4J1sqv1huw?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3'
  })

  const handleSave = () => {
    alert('Libro actualizado correctamente')
    navigate('/admin/books')
  }

  const handleCoverChange = (e) => {
    setBook({...book, coverImage: e.target.value})
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
              <h1>Editar Libro</h1>
              <Link to="/admin/books" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left me-2"></i>Volver a Libros
              </Link>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Información del Libro</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Título *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={book.title}
                            onChange={(e) => setBook({...book, title: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Autor *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={book.author}
                            onChange={(e) => setBook({...book, author: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Género *</label>
                          <select 
                            className="form-select"
                            value={book.genre}
                            onChange={(e) => setBook({...book, genre: e.target.value})}
                          >
                            <option value="Ficción">Ficción</option>
                            <option value="Ciencia Ficción">Ciencia Ficción</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Romance">Romance</option>
                            <option value="Misterio">Misterio</option>
                            <option value="Biografía">Biografía</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">ISBN</label>
                          <input
                            type="text"
                            className="form-control"
                            value={book.isbn}
                            onChange={(e) => setBook({...book, isbn: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Portada del Libro</label>
                        <div className="row">
                          <div className="col-md-4">
                            <img 
                              src={book.coverImage} 
                              alt="Portada del libro"
                              className="img-fluid rounded shadow-sm mb-3"
                              style={{maxHeight: '200px', objectFit: 'cover'}}
                            />
                          </div>
                          <div className="col-md-8">
                            <input
                              type="url"
                              className="form-control"
                              placeholder="URL de la portada..."
                              value={book.coverImage}
                              onChange={handleCoverChange}
                            />
                            <small className="form-text text-muted">
                              Ingresa la URL de la imagen de portada
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          value={book.description}
                          onChange={(e) => setBook({...book, description: e.target.value})}
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Fecha de Publicación</label>
                          <input
                            type="date"
                            className="form-control"
                            value={book.publishedDate}
                            onChange={(e) => setBook({...book, publishedDate: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Estado</label>
                          <select 
                            className="form-select"
                            value={book.status}
                            onChange={(e) => setBook({...book, status: e.target.value})}
                          >
                            <option value="published">Publicado</option>
                            <option value="draft">Borrador</option>
                            <option value="archived">Archivado</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                          <i className="fas fa-save me-2"></i>Guardar Cambios
                        </button>
                        <Link to="/admin/books" className="btn btn-outline-secondary">
                          Cancelar
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Vista Previa</h5>
                  </div>
                  <div className="card-body text-center">
                    <img 
                      src={book.coverImage} 
                      alt="Portada del libro"
                      className="img-fluid rounded shadow mb-3"
                      style={{maxHeight: '250px', objectFit: 'cover'}}
                    />
                    <h5>{book.title}</h5>
                    <p className="text-muted">{book.author}</p>
                    <span className="badge bg-secondary">{book.genre}</span>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Acciones Rápidas</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-warning">
                        <i className="fas fa-eye me-2"></i>Vista Previa Pública
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="fas fa-chart-bar me-2"></i>Ver Estadísticas
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="fas fa-archive me-2"></i>Archivar Libro
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Información de Moderación</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <strong>Reseñas:</strong> 156
                    </div>
                    <div className="mb-3">
                      <strong>Calificación Promedio:</strong> 4.5/5
                    </div>
                    <div className="mb-3">
                      <strong>Última Actualización:</strong> 2024-01-20
                    </div>
                    <div className="mb-3">
                      <strong>Agregado por:</strong> María García
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}