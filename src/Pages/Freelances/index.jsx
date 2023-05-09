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

export const Freelances = () => {
    return (
        <>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={index}
                    label={profile.jobTitle}
                    title={profile.name}
                />
            ))}
        </>
    )
}
