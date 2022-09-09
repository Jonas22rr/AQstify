import { useState, FunctionComponent as FC } from "react";
import "./Login.css";
import { LoginProps as Props } from "../types/types";

const Login: FC<Props> = ({ userLogin }) => {
    const [password, setPassword] = useState("");

    function onClickBtn(): void {
        if (password === "2412") {
            userLogin(true);
            sessionStorage.setItem("password", "2412");
        } else {
            userLogin(false);
        }
    }

    return (
        <div className="Login-Container">
            <input
                type="Password"
                className="Login-Password"
                id="idPassword"
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button type="submit" className="Login-Btn" onClick={onClickBtn}>
                Submit
            </button>
        </div>
    );
};

export default Login;
