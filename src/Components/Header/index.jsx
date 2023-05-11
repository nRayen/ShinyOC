import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../Utils/Style/colors'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 20px;
    ${({ $isFullLink }) =>
        $isFullLink &&
        `color: white;
         border-radius: 30px;
         background-color: ${colors.primary};
         padding: 10px 30px`}
`

export const Header = () => {
    return (
        <StyledHeader>
            <img src="src\assets\dark-logo.png" alt="Shiny Agency Logo" />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </StyledHeader>
    )
}
