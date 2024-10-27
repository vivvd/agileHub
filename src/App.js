import React, { useState } from 'react';
import Glossary from './components/Glossary';
import Guide from './components/Guide';
import FAQ from './components/FAQ';
import Comparison from './components/Comparison';
import Templates from './components/Templates';
import Scrum from './components/Scrum';
import Kanban from './components/Kanban';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  const [showScrum, setShowScrum] = useState(false);
  const [showKanban, setShowKanban] = useState(false);


  const toggleScrum = () => setShowScrum(!showScrum);
  const toggleKanban = () => setShowKanban(!showKanban);

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>AgileHub - Гибкие методологии разработки</h1>
        <p>Краткий гайд по Agile для новичков</p>
      </header>

      <Glossary />

      <div>
        <h2>Узнать больше про Scrum и Kanban</h2>
        <button onClick={toggleScrum} style={styles.button}>Scrum</button>
        <button onClick={toggleKanban} style={styles.button}>Kanban</button>
        {showScrum && (
        <div style={styles.section}>
          <Scrum />
        </div>
      )}
      
      {showKanban && (
        <div style={styles.section}>
          <Kanban />
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      </div>

      <Guide />
      <Templates />
      <br></br>
      <br></br>
      <br></br>
      <FAQ />
      <br></br>
      <br></br>
      <br></br>
      <Comparison />
      <footer style={styles.footer}>
        <p>&copy; 2024 Информационный ресурс о Agile</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    fontSize: '0.9em',
    color: '#666',
    borderTop: '1px solid #ddd',
    marginTop: '20px'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  section: {
    margin: '20px auto',
    maxWidth: '600px',
    textAlign: 'left',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  }
};

export default App;

