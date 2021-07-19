import './App.css';
import NavBar from './Components/NavBar';
import NewLesson from './Components/NewLesson';

function App() {
  const onNewLessonSubmit = (target) => {
    console.log(target);
  }

  return (
    <div className="App">
      <h1>Languages App</h1>
      <NavBar />
      <header className="App-header">
        <NewLesson onSubmit={onNewLessonSubmit} />
      </header>
    </div>
  );
}

export default App;
