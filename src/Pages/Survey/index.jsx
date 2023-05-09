import { Link, useParams } from 'react-router-dom'

export const Survey = () => {

    let { questionNumber } = useParams()
    const questionInt = parseInt(questionNumber)

    return (
        <>
            <h1>Survey❓</h1>
            <h3>Question {questionNumber} </h3>

            <div>
                <Link to={ questionInt == 1 ? '/survey/1' : `/survey/${questionInt - 1}`} >Précédent</Link>

                {questionInt !== 10 ? (
                    <Link to={`/survey/${questionInt + 1}`}>Suivant</Link>
                ) : (
                    <Link to={'/results'}>Résultats</Link>
                )}
            </div>
        </>
    )
}
