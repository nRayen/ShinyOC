import styled from 'styled-components'
import colors from '../../Utils/Style/colors'

const Container = styled.main`
    background-color: ${colors.backgroundLight};
    height: calc(100vh - 97px);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Comfortaa' , sans-serif
`

const ErrorTitle = styled.h3`
    font-size: 31px;
    line-height: 35px;
    text-align: center;
`

const ErrorMessage = styled.p`
    font-size: 20px;
    line-height: 22px;
    text-align: center;
`

const Illustration = styled.img`
`

export function Error() {
    return (
        <Container>
            <ErrorTitle>Dommage...</ErrorTitle>
            <Illustration src="src\assets\404.svg" alt="Error 404" />
            <ErrorMessage>Il semblerait que vous n&apos;ayez besoin<br />d&apos;aucune compétence</ErrorMessage>
        </Container>
    )
}
