import { Link } from 'react-router'
import { faLightbulb, faBook } from '../utils/faIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`navbar navbar-expand bg-${theme}`}>
      <div className='container-fluid'>
        <ul className='navbar-nav ms-auto align-items-center d-flex mb-3'>
          <li className='nav-item me-auto p-2'>
            <Link
              to='/'
              className='nav-link'
            >
              <FontAwesomeIcon icon={faBook}/>
            </Link>
          </li>
          <li className='nav-item p-2'>
            <Link
              to='/users'
              className='nav-link'
            >
              Users
            </Link>
          </li>
          <li className='nav-item p-2'>
            <Link
              to='/contact'
              className='nav-link'
            >
              Contact
            </Link>
          </li>
          
          <li className='nav-item p-2'>
            <Link to="/register" className="nav-link">
              Crear Cuenta
            </Link>
          </li>
          <li className='nav-item p-2'>
            <button
              className={`btn btn-outline-${
                theme === 'dark' ? 'light' : 'dark'
              } border-0 p-1 mx-2`}
              onClick={toggleTheme}
            >
              <FontAwesomeIcon icon={faLightbulb} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}