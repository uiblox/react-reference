import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link path="/">Back Home</Link>
        </div>
    )
}