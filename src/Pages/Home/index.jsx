import styled from 'styled-components'
import colors from '../../Utils/Style/colors'
import { Link } from 'react-router-dom'

const StyledContainer = styled.main`
    background-color: ${colors.backgroundLight};
    height: calc(100vh - 97px);
    display: flex;
    gap: 25px;
    padding: 80px;
`

const LeftContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    flex-direction: column;
    gap: 80px;
`

const HeroText = styled.h3`
    font-weight: 700;
    font-size: 50px;
    line-height: 160.5%;
`

const StyledLink = styled(Link)`
    padding: 10px 45px;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
`

export function Home() {
    return (
        <StyledContainer>
            <LeftContainer
                className="flex-center"
                style={{
                    width: '50%',
                    height: '100%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <HeroText>
                    Repérez vos besoins,<br /> on s&apos;occupe du reste,<br /> avec nos
                    meilleurs talents
                </HeroText>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </LeftContainer>
            <div>
                <img
                    src="src\assets\home-illustration.svg"
                    alt="Illustration homePage"
                    width={'541px'}
                />
            </div>
        </StyledContainer>
    )
}
