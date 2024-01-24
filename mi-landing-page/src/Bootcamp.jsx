import "./bootcamp.css"

function Bootcamp(props) {

    return (
        <div className="bootcampCard">
            <h1>{props.title}</h1>
            <div className="timeCardBox">
                <p className="timeCard">🕓 {props.hours}</p>
                <p className="timeCard">📍 {props.format}</p>
            </div>
            <p>{props.description}</p>
            <a className="infoLink">+ INFO</a>
        </div>
    );
}

export default Bootcamp;