export default function Contact(props){
    return(
        <article className="contact-card">
            <img
                className="pfp"
                src={props.pfp}
                alt="Photo of {props.name}"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
            <img
                src="./phone-icon.png"
                alt="phone icon"
            />
            <p>{props.phone}</p>
            </div>
            <div className="info-group">
            <img
                src="./email-icon.png"
                alt="email icon"
            />
            <p>{props.email}</p>
            </div>
        </article>

    )
}