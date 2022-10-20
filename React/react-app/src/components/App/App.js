import logo from "logo.svg";  // 图片等静态资源
import { ReactComponent as Logo  } from "logo.svg";  // 将svg作为组件导入
import Button from '../Button/Button';
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* className="App-link" */}
        <a
          href="https://reactjs.org"
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        <Logo className="App-logo"/>
      </header>
    </div>
  );
}

export default App;
