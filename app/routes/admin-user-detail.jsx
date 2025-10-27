// routes/admin-user-detail.jsx
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

export default function AdminUserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [user, setUser] = useState({
    id: parseInt(id),
    name: 'Juan Pérez',
    email: 'juan@email.com',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-10-24',
    booksAdded: 12,
    reviewsWritten: 8
  })

  const [userBooks] = useState([
    { id: 1, title: 'El principito', addedDate: '2024-01-20', status: 'published' },
    { id: 2, title: 'Don Quijote', addedDate: '2024-02-15', status: 'published' },
    { id: 3, title: '1984', addedDate: '2024-03-10', status: 'draft' }
  ])

  const handleStatusToggle = () => {
    const newStatus = user.status === 'active' ? 'blocked' : 'active'
    setUser({...user, status: newStatus})
    alert(`Usuario ${newStatus === 'active' ? 'desbloqueado' : 'bloqueado'} correctamente`)
  }

  const handleSave = () => {
    alert('Información del usuario actualizada')
    navigate('/admin/users')
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
              <Link to="/admin/users" className="nav-link text-white mb-2 active">
                <i className="fas fa-users me-2"></i>Gestión de Usuarios
              </Link>
              <Link to="/admin/books" className="nav-link text-white mb-2">
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
              <h1>Detalle del Usuario</h1>
              <Link to="/admin/users" className="btn btn-outline-secondary">
                <i className="fas fa-arrow-left me-2"></i>Volver a Usuarios
              </Link>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="avatar bg-primary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" 
                         style={{width: '100px', height: '100px', fontSize: '2rem'}}>
                      {user.name.charAt(0)}
                    </div>
                    <h4>{user.name}</h4>
                    <p className="text-muted">{user.email}</p>
                    
                    <div className="d-flex justify-content-center gap-2 mb-3">
                      <span className={`badge ${user.role === 'author' ? 'bg-info' : 'bg-secondary'}`}>
                        {user.role === 'author' ? 'Autor' : 'Usuario'}
                      </span>
                      <span className={`badge ${user.status === 'active' ? 'bg-success' : 'bg-danger'}`}>
                        {user.status === 'active' ? 'Activo' : 'Bloqueado'}
                      </span>
                    </div>

                    <div className="d-grid gap-2">
                      <button 
                        className={`btn ${user.status === 'active' ? 'btn-warning' : 'btn-success'}`}
                        onClick={handleStatusToggle}
                      >
                        <i className={`fas ${user.status === 'active' ? 'fa-lock' : 'fa-unlock'} me-2`}></i>
                        {user.status === 'active' ? 'Bloquear Usuario' : 'Desbloquear Usuario'}
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="fas fa-envelope me-2"></i>Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Estadísticas</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <strong>Libros Agregados:</strong> {user.booksAdded}
                    </div>
                    <div className="mb-3">
                      <strong>Reseñas Escritas:</strong> {user.reviewsWritten}
                    </div>
                    <div className="mb-3">
                      <strong>Miembro desde:</strong> {user.joinDate}
                    </div>
                    <div className="mb-3">
                      <strong>Último acceso:</strong> {user.lastLogin}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Información del Usuario</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Nombre Completo *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={user.name}
                            onChange={(e) => setUser({...user, name: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Rol</label>
                          <select 
                            className="form-select"
                            value={user.role}
                            onChange={(e) => setUser({...user, role: e.target.value})}
                          >
                            <option value="user">Usuario</option>
                            <option value="author">Autor</option>
                            <option value="moderator">Moderador</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Estado</label>
                          <select 
                            className="form-select"
                            value={user.status}
                            onChange={(e) => setUser({...user, status: e.target.value})}
                          >
                            <option value="active">Activo</option>
                            <option value="blocked">Bloqueado</option>
                            <option value="pending">Pendiente</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                          <i className="fas fa-save me-2"></i>Guardar Cambios
                        </button>
                        <Link to="/admin/users" className="btn btn-outline-secondary">
                          Cancelar
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card mt-4">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Libros del Usuario</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Título</th>
                            <th>Fecha Agregado</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userBooks.map(book => (
                            <tr key={book.id}>
                              <td>
                                <strong>{book.title}</strong>
                              </td>
                              <td>{book.addedDate}</td>
                              <td>
                                <span className={`badge ${
                                  book.status === 'published' ? 'bg-success' : 
                                  book.status === 'draft' ? 'bg-warning' : 'bg-secondary'
                                }`}>
                                  {book.status === 'published' ? 'Publicado' : 
                                   book.status === 'draft' ? 'Borrador' : 'Archivado'}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex gap-1">
                                  <Link 
                                    to={`/admin/books/edit/${book.id}`}
                                    className="btn btn-sm btn-outline-primary"
                                    title="Editar libro"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  <button className="btn btn-sm btn-outline-info" title="Ver detalles">
                                    <i className="fas fa-eye"></i>
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
      </div>
    </div>
  )
}