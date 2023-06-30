import ControlledComponenets from './components/ControlledComponents';
import './App.css';
import FormSubmit from './components/FormSubmit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Forms in React</h1>
       <p>There are many ways to deal with forms in React.
        Here are two common ones.
       </p>
       <ControlledComponenets />
       <FormSubmit/>
      </header>
    </div>
  );
}

export default App;
