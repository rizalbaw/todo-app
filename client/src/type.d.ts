interface ITodo{
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    upadatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodos[]
    todo?: ITodo
}