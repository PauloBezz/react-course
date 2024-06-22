import "./styles.css";
import logo from "./images/svg/leon-logo.svg";
import image from "./images/svg/imagem.svg";
import { Input, Button } from "@mui/material";

export default function Login() {
  return (
    <section>
      <aside>
        <img src={logo} alt="logo" />
        <h1>Login</h1>
        <h3>Enter your email and password:</h3>
        <div className="user-input">
          <h5>Username</h5>
          <Input className="input" />
        </div>

        <div className="user-input">
          <h5>Password</h5>
          <Input className="input" />
        </div>

        <div className="actions">
          <p>Forgot your password?</p>
          <Button variant="outlined" className="btn-go"><p>Lets' go</p></Button>
        </div>
      </aside>

      <article>
        <div className="rec"></div>
        <img src={image} className="image" />
        <div className="rec"></div>
      </article>
    </section>
  );
}