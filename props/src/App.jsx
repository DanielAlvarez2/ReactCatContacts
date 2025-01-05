import Contact from './Contact.jsx'

const cats=[
  {
    pfp:'./mr-whiskerson.jpg',
    name:'Mr. Whiskerson',
    phone:'(212) 555-1234',
    email:'mr.whiskaz@catnap.meow'
  },
  {
    pfp:'./fluffykins.jpeg',
    name:'Fluffykins',
    phone:'(212) 555-2345',
    email:'fluff@me.com'
  },
  {
    pfp:'felix.jpeg',
    name:'Felix',
    phone:'(212) 555-4567',
    email:'thecat@hotmail.com'
  },
  {
    pfp:'pumpkin.jpeg',
    name:'Pumpkin',
    phone:'(800) CAT-KING',
    email:'pumpkin@scrimba.com'
  }
]

function App() {
  return (
    <div className="contacts">
      <Contact pfp={cats[0].pfp} name={cats[0].name} phone={cats[0].phone} email={cats[0].email} />
      <Contact pfp={cats[1].pfp} name={cats[1].name} phone={cats[1].phone} email={cats[1].email} />
      <Contact pfp={cats[2].pfp} name={cats[2].name} phone={cats[2].phone} email={cats[2].email} />
      <Contact pfp={cats[3].pfp} name={cats[3].name} phone={cats[3].phone} email={cats[3].email} />

    </div>
  )
  }

export default App
