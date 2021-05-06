import logo from './logo.svg';
import './App.css';
import Unit from './Unit';
function App() {
  const units = [
    {
      name: "Unit 1",
      price: 1250,
      sqFt: 600
    },
    {
      name: "Unit 2",
      price: 1500,
      sqFt: 850
    },
    {
      name: "Unit 3",
      price: 1500,
      sqFt: 850
    },
    {
      name: "Unit 4",
      price: 1500,
      sqFt: 850
    }
  ]
  return (
    <div className="App">
      <h1>My first React Application by Nick!</h1>
      { units.map(unit => (
        <Unit oneUnit={unit} />
      ))}
    </div>
  );
}
export default App;
