import { ReactComponent as Logo } from "logo.svg"; // 将svg作为组件导入
import Menu from "components/Menu/Menu";

function About() {
  return (
    <div>
      <Menu />
      <Logo className="App-logo" />
      <h3>about</h3>
    </div>
  );
}

export default About;
