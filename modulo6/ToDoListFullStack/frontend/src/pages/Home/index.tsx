import React, { useState, useEffect, ChangeEvent } from 'react'
import './index.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useForm from '../../hooks/useform';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import { isPlusToken } from 'typescript';

function Login() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { form, InputChange, clear } = useForm({
        email: "",
        password: ""
    })

    async function onSubmitLogin(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        const body = form

        const response = await api.post('/login', body)
     
        console.log(response.data.token)
        if (response) {
            alert('Login realizado com sucesso!')
            navigate('/tasks')
            localStorage.setItem('token', response.data.token)
            console.log(response)
        } else {
            alert('Usuário não encontrado!')
        }
    }



    return (
        <>

            <Button variant="secondary mt-3" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmitLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={InputChange}
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={InputChange}
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Login;
