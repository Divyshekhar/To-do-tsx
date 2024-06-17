import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

type PropTypes = {
    todo: TodoItemType;
    deleteHandler: (id:TodoItemType["id"])=>void;
    completeHandler: (id:TodoItemType["id"])=>void;

}

const TodoItem = ({ todo, completeHandler, deleteHandler }:PropTypes) => {
  return (
    <Paper sx={{
        padding:"1rem"
    }}> 
    <Stack direction={"row"} alignItems={"center"}>
    <Typography marginRight={"auto"}>
        {todo.title}
    </Typography>
    <Checkbox 
        checked = {todo.isCompleted}
        onClick={()=>{completeHandler(todo.id)}}/>
    <Button sx={{fontWeight: 'bold', fontSize:'20px'}} >✎</Button>
    <Button onClick={()=>{deleteHandler(todo.id)}}>🗑️</Button>
    </Stack>
    </Paper>

    
)
}

export default TodoItem;