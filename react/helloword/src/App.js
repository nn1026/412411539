import './App.css';

function App() {
  return (
    <div className='App'>
      <Car></Car>
    </div>
  );
}
const Car = () => {
  return (
    <div className='car'>
      <h2>hello world</h2>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://media.istockphoto.com/id/2158887472/photo/environmental-disasters-climate-crisis-and-nuclear-wars-will-eventually-doom-the-world.jpg?s=612x612&w=is&k=20&c=9ZQ56JH-9iDZcma_rluR5OeaieynfwNbunQwV4HrlQQ='
        ></img>
      </div>
      <p>this my first react code</p>
    </div>
  );
};

export default App;
