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
        <div>
          <h5>Username</h5>
          <Input></Input>
        </div>

        <div>
          <h5>Password</h5>
          <Input></Input>
        </div>

        <div className="actions">
          <p>Forgot your password?</p>
          <Button>Lets' go</Button>
        </div>
      </aside>

      <article>
        <img src={image} alt="Imagem" />
      </article>
    </section>
  );
}
