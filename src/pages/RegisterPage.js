import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [secPassword, setSecPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            if (!name || !email || !password || !secPassword)
                throw new Error("빈칸이 있습니다.");
            if (password === secPassword) {
                const response = await api.post("/user", {
                    name,
                    email,
                    password,
                });
                if (response.status === 200) {
                    navigate("/login");
                } else {
                    throw new Error(response.message);
                }
            } else {
                throw new Error("패스워드가 일치하지 않습니다.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="display-center">
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Form className="login-box" onSubmit={handleSubmit}>
                <h1>회원가입</h1>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Name"
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>re-enter the password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="re-enter the password"
                        value={secPassword}
                        onChange={(evt) => setSecPassword(evt.target.value)}
                    />
                </Form.Group>

                <Button className="button-primary" type="submit">
                    회원가입
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;
