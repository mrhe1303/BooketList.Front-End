export default [
    { path: '/', file: 'routes/_index.jsx' },
    { path: '/genre', file: 'routes/_genre.jsx' },
    { path: '/users', file: 'routes/users.jsx' },
    { path: '/contact', file: 'routes/contact.jsx' },
    { path: '/admin/login', file: 'routes/admin-login.jsx' },
    { path: '/admin', file: 'routes/admin-dashboard.jsx' },
    { path: '/admin/users', file: 'routes/admin-users.jsx' },
    { path: '/admin/books', file: 'routes/admin-books.jsx' },
    { path: '/admin/authors', file: 'routes/admin-authors.jsx' },
    
    // Rutas dinámicas - mantener los nombres originales de archivos
    { path: '/admin/books/edit/:id', file: 'routes/admin-edit-book.jsx' },
    { path: '/admin/authors/:id', file: 'routes/admin-author-detail.jsx' },
    { path: '/admin/users/:id', file: 'routes/admin-user-detail.jsx' },
    { path: '/admin/authors/:id/books', file: 'routes/admin-author-books.jsx' }
]