import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Создаем элемент <div className="App">...</div> через React.createElement:
  return React.createElement(
    'div',
    { className: 'App' },
    // В качестве дочернего элемента передаем элемент header:
    React.createElement(
      'header',
      { className: 'App-header' },
      // Элемент <img src={logo} className="App-logo" alt="logo" />
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      // Элемент абзаца с текстом "Edit <code>src/App.js</code> and save to reload."
      React.createElement(
        'p',
        null,
        'Edit ',
        // Вложенный элемент <code>src/App.js</code>
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.'
      ),
      // Элемент ссылки <a ...>Learn React</a>
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      ),
      // Элемент абзаца, в котором отображается текущий год
      React.createElement(
        'p',
        { style: { marginTop: '1rem' } },
        '\u00A9 ', // Символ ©
        new Date().getFullYear() // Вычисляем текущий год
      )
    )
  );
}

export default App;
