import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const Input = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const cleanInputs = () => {
        setForm(initialState)
    }

    return { form, Input, cleanInputs }
}

export default useForm;


