import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
    return (
        <Spinner animation="grow" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}