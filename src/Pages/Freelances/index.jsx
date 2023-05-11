import styled from 'styled-components'
import { Card } from '../../Components/Card'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

export const Freelances = () => {
    return (
        <>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={index}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </>
    )
}
