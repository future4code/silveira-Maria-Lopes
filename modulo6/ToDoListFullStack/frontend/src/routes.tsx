import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Tasks from './pages/Tasks';
import TasksForm from "./pages/Tasks/Form";

const RoutesComponent: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/tasks_create" element={<TasksForm />} />
                <Route path="/task/:id" element={<TasksForm />} />
            </Routes>
        </>
    )
}

export default RoutesComponent;