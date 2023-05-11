import propTypes from 'prop-types'
import styled from 'styled-components'
import defaultPicture from '../../assets/profile.png'
import colors from '../../Utils/Style/colors'


// Styles ===============================================================
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
// Component ============================================================
export const Card = ({ label, title, picture }) => {
    return (
        <CardContainer>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <span>{title}</span>
        </CardContainer>
    )
}

// Props =================================================================
Card.propTypes = {
    label: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
}

Card.defaultProps = {
    title : '',
    label : '',
    picture : defaultPicture
}
