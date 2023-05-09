import { Link, Outlet } from "react-router-dom"

export const Survey = () => {
    return (
        <>
            <h1>Survey❓</h1>
            <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <Outlet/>
        </>
    )
}
