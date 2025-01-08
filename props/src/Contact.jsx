export default function Contact({pfp,phone,namephone,email}){
    return(
        <article className="contact-card">
            <img
                className="pfp"
                src={pfp}
                alt="Photo of {props.name}"
            />
            <h3>{name}</h3>
            <div className="info-group">
            <img
                src="./phone-icon.png"
                alt="phone icon"
            />
            <p>{phone}</p>
            </div>
            <div className="info-group">
            <img
                src="./email-icon.png"
                alt="email icon"
            />
            <p>{email}</p>
            </div>
        </article>

    )
}

const person = {
    img: "./mr-whiskerson.jpg",
    name: 'Mr. Whiskerson',
    phone:'(800) 555-1234',
    email:'mr.whiskaz@catnap.meow'
}

const {img, name} = person
console.log(img)