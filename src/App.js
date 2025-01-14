import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // Декларативно: описываем, как должен выглядеть DOM-дерево нашего компонента.
    <div className="App">
      <header className="App-header">
        {/* Декларативно: указываем, что нужно отобразить изображение с заданными классами и атрибутами */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Декларативно: описание абзаца с текстом */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Декларативно: описание ссылки, которая ведёт на React сайт */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/*
          Декларативно: выводим текущий год внутри абзаца.
          Здесь присутствует императивная часть: вызов new Date().getFullYear() – он выполняется как функция для вычисления значения.
          Однако результат этого вычисления используется декларативно в JSX.
        */}
        <p style={{ marginTop: '1rem' }}>
          &copy; {new Date().getFullYear()}
        </p>
      </header>
    </div>
  );
}

export default App;
