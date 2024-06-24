import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";


export default function Signin(props) {
    return (
        <>
            <section>
                <img className="image" />
                <div className="content">
                    <img src="" alt="logo" />
                    <div className="box">
                        <h1>Sign Up</h1>

                        <div className="input">
                            <h3>{props.user}</h3>
                            <Input />
                        </div>


                        <div className="input">
                            <h3>{props.email}</h3>
                            <Input />
                        </div>

                        <div className="input">
                            <h3>{props.pass}</h3>
                            <Input />
                        </div>

                        <div className="input">
                            <h3>{props.confirm}</h3>
                            <Input />
                        </div>

                        <Button className="btn-create"><p>Create account</p></Button>
                        <div>
                            <p>Already have an account?</p>
                            <Link className="link" to={"/login"}>Login here</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}