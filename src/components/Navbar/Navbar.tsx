import './Navbar.scss'
const Navbar = () => {
  const links = ['Cars', 'Electric', 'Autonomous', 'Trucks', 'Vans']
  const actions = ['Sign in', 'Create account']
  return (
    <div className="container">
      <div className="left-section">
        <h1>BKB</h1>
      </div>
      <div className="right-section">
        <div className="links">
          {links.map((link) => (
            <h6>{link}</h6>
          ))}
        </div>
        <div className="actions">
          {actions.map((act) => (
            <button>{act}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
