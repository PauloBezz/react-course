import "./styles.css";
import { useState } from "react";
import { Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/svg/leon-logo.svg";
import image from '../../assets/images/svg/imagem.svg';

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = () => {
    return (
      console.log(`Usuário ${user} autorizado`)
    )
  }

  return (
    <section>
      <aside>
        <img src={logo} alt="Logo" />
        <h1>Login</h1>
        <h2>Enter your email and password:</h2>
        <div className="user-input">
          <h3>Username</h3>
          <Input type="text" className="input" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>

        <div className="user-input">
          <h3>Password</h3>
          <Input type="password" className="input" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>

        <div className="actions">
          <p>Forgot your password?</p>
          <Link to={'/'}><Button variant="outlined" className="btn-go" onClick={handleLogin}><p>Lets' go</p></Button></Link>
        </div>
      </aside>

      <article>
        <div className="rec"></div>
        <img src={image} className="Fotográfia" />
        <div className="rec"></div>
      </article>
    </section>
  );
}