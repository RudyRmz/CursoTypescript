//Partial<T>
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {
  console.log();
}

const newTask = { name: "Kevin" };
updateTask("1", newTask);

//Required<T>
interface ToDo {
  id?: number;
  name?: string;
}

const myTodo: Required<ToDo> = { id: 1, name: "Johan" };

//Records<Keys, Types> para la creacion de objetos
//{key: value;}

interface CatInfo {
  age: number;
  name: string;
}

type CatName = "Ares" | "Venus" | "Manchas" | "Odin";

const cats: Record<CatName, CatInfo> = {
  Ares: { age: 4, name: "" },
  Manchas: { age: 6, name: "" },
  Venus: { age: 5, name: "" },
  Odin: { age: 8, name: "" },
};

//Pick<T, Properties>
interface ToDo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<ToDo2, "title" | "completed">;
const otherTodo: TodoPreview = { title: "Clean room", completed: true };

//Omit<T, Properties>

type TodoOmitted = Omit<ToDo2, "description">;
const todoOmitted: TodoOmitted = { completed: true, title: "Pagar internet" };
