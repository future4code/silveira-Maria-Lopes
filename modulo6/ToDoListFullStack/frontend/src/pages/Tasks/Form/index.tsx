import React, { useState, useEffect, ChangeEvent } from "react";
import { Table, Button, Form } from 'react-bootstrap';
import api from "../../../services/api";
import './index.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

interface Tasks {
    title: string,
    status: string
}
// para tipar em react, usamos interfaces

const TasksForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [model, setModel] = useState<Tasks>({
        title: '',
        status: ''
    })

    useEffect(() => {
        console.log(id)
        if (id !== undefined) {
            findTask(id)
        }
    }, [id])

    // o changeEvent, que é do react, recebe o tipo html do campo que iremos atualizar
    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
        // dessa forma estamos atualizando o nome de cada campo e atribuindo o novo valor para ele
    }

    const token = localStorage.getItem('token')

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "authorization": `${token}`
        }
      };

      
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            await api.put(`/task/${id}`, model, axiosConfig)
            alert('Tarefa editada com sucesso!')
        } else {
            await api.post('/task', model, axiosConfig)
            alert('Tarefa criada com sucesso!')
        }
        // se o id for diferente de undefined, ou seja, se ele existir, será editado.
        // se o id não existir, a tarefa será criada!
    }

    async function findTask(id: string) {
        const response = await api.get(`gettask/${id}`)
        console.log(response)

        setModel({
            title: response.data.task[0].title,
            status: response.data.task[0].status
        })
    }


    function buttonVoltar() {
        navigate('/tasks')
    }


    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h3>New Task</h3>
                <Button variant="dark" size='sm' onClick={buttonVoltar}>Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            value={model.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={1}
                            name='status'
                            value={model.status}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                        />
                    </Form.Group>
                    <Button variant='dark mt-2' type="submit">
                        Salvar
                    </Button>
                </Form>

            </div>

        </div>
    )
}

export default TasksForm;