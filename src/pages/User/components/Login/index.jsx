import "./styles.css";
import { useState } from "react";
import { Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/svg/leon-logo.svg";
import image from '../../assets/images/svg/imagem.svg';

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  async function handleLogin() {
    return (
      console.log(`Usuário ${user} autorizado`)
    )
  }

  return (
    <main className="login-container">
      <section className="login-content">
        <img src={logo} alt="Logo" />
        <h1>Login</h1>
        <h2>Enter your email and password:</h2>
        <article className="login-input">
          <h3>Username</h3>
          <Input type="text" disableUnderline='bool' className="input" value={user} onChange={(e) => setUser(e.target.value)} />
        </article>

        <article className="login-input">
          <h3>Password</h3>
          <Input type="password" disableUnderline='bool' className="input" value={pass} onChange={(e) => setPass(e.target.value)} />
        </article>

        <article className="actions">
          <Link><p className="forgot">Forgot your password?</p></Link>
          <Link to={'/'}><Button variant="outlined" className="btn-go" onClick={handleLogin}><p>Lets' go</p></Button></Link>
        </article>
      </section>

      <section className="login-image">
        <div className="rec"></div>
        <img src={image} className="Fotográfia" />
        <div className="rec"></div>
      </section>
    </main>
  );
}