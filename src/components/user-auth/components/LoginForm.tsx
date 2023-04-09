import React, { FC, useContext, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Context } from "../..";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div className="mt-5 loginFormBox d-flex align-items-center flex-column container">
      <div className="inpsBox row mb-3">
        <div className="emailBox">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="passwordBox">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              type="password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>

      <div className="buttonBox d-flex flex-column">
        <Button className="mb-2" onClick={() => store.login(email, password)}>
          Login
        </Button>

        <Button
          variant="success"
          className="mb-2"
          onClick={() => store.registration(email, password)}
        >
          Registration
        </Button>

        <Button variant="danger" onClick={() => store.logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
