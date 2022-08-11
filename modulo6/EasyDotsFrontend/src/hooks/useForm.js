import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const InputChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }

    return { form, InputChange, clear, setForm }
}

export default useForm