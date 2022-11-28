import React, { useState, useEffect, ChangeEvent } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useform';
import api from '../../services/api';


export function Cadastro() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [confirmPassword, setConfirmPassword] = useState("");
    const { form, InputChange, clear } = useForm({
        id: "",
        email: "",
        password: "",
    });

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };
    // para garantir que as duas senhas preenchidas no cadastro são iguais

    async function onSubmitSignup(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        const body = form

        if (form.password === confirmPassword) {
            const response = await api.post('/user', body)
            alert('Cadastro realizado com sucesso! Estamos te redirecionando...')
            navigate('/tasks')
            setShow(false)
        } else {
            alert('Não foi possível cadastrar, tente novamente!')
        }
    }

    return (
        <>
            <Button variant="secondary mt-3" onClick={handleShow}>
                Cadastro
            </Button>{'  '}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmitSignup}>

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
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={confirmPassword}
                                onChange={onChangeConfirmPassword}
                                placeholder="Confirm Password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Cadastrar
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