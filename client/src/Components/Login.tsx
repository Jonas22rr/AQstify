import React, { useState, FunctionComponent as FC } from "react";
import "./Login.css";
import { LoginProps as Props } from "../model/types";

const Login: FC<Props> = ({ userLogin }) => {
    const [password, setPassword] = useState("");
    return (
        <div className="Login-Container">
            <input
                type="Password"
                className="Login-Password"
                id="idPassword"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button
                type="submit"
                className="Login-Btn"
                onClick={() =>
                    password === "2412" ? userLogin(true) : userLogin(false)
                }
            >
                Submit
            </button>
        </div>
    );
};

export default Login;
