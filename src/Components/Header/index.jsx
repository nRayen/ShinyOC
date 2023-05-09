import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/survey/1'>Survey</Link>
        <Link to='/freelances'>Freelances</Link>
    </nav>
  )
}
