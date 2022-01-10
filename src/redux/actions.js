export const addTodo = (data) => {
    return{
        type:"todoList/addTodo",
        payload: data
    }
}

export const updateStatusTodo = (id) => {
    return{
        type:"todoList/updateStatusTodo",
        payload: id
    }
}

export const filterSearchText = (text) => {
    return{
        type:"filters/searchText",
        payload: text
    }
}

export const filterByStatus = (status) => {
    return{
        type:"filters/status",
        payload: status
    }
}

export const filterBypriorities = (priorities) => {
    return{
        type:"filters/priorities",
        payload: priorities
    }
}