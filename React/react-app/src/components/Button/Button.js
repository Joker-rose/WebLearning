import "./Button.scss";

function Button() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={`/`}>home</a>
          </li>
          <li>
            <a href={`about`}>about</a>
          </li>
        </ul>
      </nav>
      <div className="Button">按钮</div>
    </div>
  );
}

export default Button;
