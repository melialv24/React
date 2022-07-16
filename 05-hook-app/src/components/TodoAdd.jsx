import { useForm } from "../hooks"

export const TodoAdd = ({ onNewTodo }) => {

    const {  formState, onInputChange, id, description, done, onResetForm } = useForm({
        id: new Date().getTime(),
        description: '',
        done: 'false'
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 1 ) return 

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: 'false'
        }

        onNewTodo( newTodo )
        onResetForm()
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type='text'
                placeholder="¿que hay que hacer?"
                className="form-control"
                value={description}
                name='description'
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-primary mt-2"
            > 
                Agregar 
            </button>
        </form>
    )
}
