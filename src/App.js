
import './App.css';

function App() {
  const pets = [
    {
      name: "Dolly",
      type: "gog",
      description: "Dolly is a great dog ",
      skills: ['purr','play dead','meow'],
      image: 'http://pets-images.dev-apis.com/pets/dog26.jpg',
    },
    {
      name: "molly",
      type: "dog",
      description: "our new dog",
      skills: ['playing','meow','purr'],
      image: 'http://pets-images.dev-apis.com/pets/dog32.jpg'
    }
  ]
  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul className='contain'>
        {
          pets.map((pet, index) => (
            <li key={index}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img 
              src={pet.image} 
              alt={pet.name}
              width="200px"
              height="200px"
              />
              <ul className='skill'>
                {
                  pet.skills.map((skill, index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
