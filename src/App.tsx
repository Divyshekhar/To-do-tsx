import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useState } from "react";


const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle] = useState<TodoItemType["title"]>("");
  
  const submitHandler = ():void => {
    const newTodo:TodoItemType = {
      title,
      isCompleted:false,
      id: String(Math.random()*1000)
    };
    setTodos((prev)=>[...prev, newTodo]);
    setTitle("");
  }

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos:TodoItemType[] = todos.map((i)=>{
      if(i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    }
  );
      setTodos(newTodos);
  };
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos:TodoItemType[] = todos.filter((i)=> i.id !== id);
      setTodos(newTodos);
    
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
          {todos.map((i) => (
            <TodoItem
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
              key={i.id}
              todo={i}
            />
          ))}
        </Stack>
        <TextField 
          fullWidth 
          value={title} 
          label={"New Task"} 
          onChange={(e)=>setTitle(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter" && title !=="") submitHandler() ; 
          }}
          />
        <Button 
          sx={{ margin: "1rem 0", paddingLeft: 0 }} 
          fullWidth 
          variant="contained" 
          onClick={submitHandler}
          disabled={title === ""}
          >
          Add
        </Button>
      </Container>
    </>
  )
}

export default App
