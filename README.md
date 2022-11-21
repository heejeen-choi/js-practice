# js-practice
javaScript &amp; cra and other processes

### React로 Component 만들기

- ```
  class App extends Component {
  render() {
  return( Hello, React!!);
  }
  }
  ```
  : App 이라는 class를 만들고 React의 Component 라고 하는 class를 상속해 새로운 class를 만드는 것을 의미한다. 그리고 그 class는 render()라는 메소드를 가지고 있다는 의미이다. 
- ```
  Directory public/ pure.html
  
  <html>
    <body>
        <header>
            <h1>MEOW</h1>
        </header>
        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>
        <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>
    </body>
  </html>
- ```
  Component 만드는 부분
  
  
  class App extends Component {
    render() {
        return (
            <div className="App">
                Hello, React!!
            </div>
        );
    }
  }
  ```
  : App이라는 클래스를 만들고 리액트의 Component 라고 하는 클래스를 상속해 새로운 클래스를 만드는 것을 의미한다. 그리고 그 클래스는 render()라는 메소드를 가지고 있다. 다음은, pure.html의 header 태그 안의 코드와 같은 동작을 수행하는 Subject 컴포넌트를 만들어 본다. App.js를 수정하면,
- ```
  import React, { Component } from 'react';
  import './App.css';
  
  class Subject extends Component {
    render() {
        return (
            <header>
                <h1>MEOW</h1>
                The cat rules the world!
            </header>
        );
    }
  }
  
  class App extends Component {
    render() {
        return (
            <div clssName="App">
                <Subject></Subject>
            </div>
        );
    }
  }
  
  export default App;
  
