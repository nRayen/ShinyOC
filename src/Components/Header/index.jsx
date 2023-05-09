import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/survey'>Survey</Link>
    </nav>
  )
}
