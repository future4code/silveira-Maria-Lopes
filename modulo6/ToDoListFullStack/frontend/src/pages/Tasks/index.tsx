import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import api from "../../services/api";
import './index.css'
import { useNavigate, useParams } from 'react-router-dom'

interface Tasks {
    id: string,
    title: string,
    status: string
}
// para tipar em react, usamos interfaces

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Tasks[]>([])
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/')
        alert('Logout realizado com sucesso!')
    }

    // assíncrona pois a requisição pode demorar ou não
    async function getTasks() {
        const response = await api.get('/tasks')
        console.log(response)
        setTasks(response.data.task)
    }

    // para carregar as tasks assim que a página for iniciada
    useEffect(() => {
        getTasks();
    }, [])

    async function deleteTask(id: string) {
        await api.delete(`/task/${id}`)
        getTasks()
    }

    // para criar uma nova tarefa
    function newTask() {
        navigate('/tasks_create')
    }

    function editTask(id: string) {
        navigate(`/task/${id}`)
    }

    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Tasks page</h1>
                <Button variant="dark" size='sm' onClick={newTask}>Nova tarefa</Button>
            </div>
            <br />

            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks && tasks.map(task => (
                            <tr key={task.id}>
                                <td> {task.id} </td>
                                <td> {task.title} </td>
                                <td>
                                    {task.status}
                                </td>
                                <td>
                                    <Button size='sm' onClick={() => editTask(task.id)}>Editar</Button>{'  '}
                                    <Button size='sm' variant="danger" onClick={() => deleteTask(task.id)}>Remover</Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            <Button variant="primary" type="submit" onClick={logout}>
                Sair
            </Button>
        </div>
    )
}

export default Tasks;