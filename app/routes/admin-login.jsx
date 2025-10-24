// routes/admin-login.jsx
export default function AdminLogin() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h2 className="card-title">Admin Login</h2>
            <p className="text-muted">Acceso exclusivo para administradores</p>
          </div>
          
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="admin@booketlist.com"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="••••••••"
              />
            </div>
            
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Recordar sesión
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary w-100 py-2">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}