interface MyInterface<T> {
  field: T;
}

class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

function getData<T>(id: string): Promise<T> | void {}

getData("Hola");

//Example with classes
interface UserRespone {
  id: number;
  name: string;
}

class HTTPResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserRespone => {
  return {
    id: 1,
    name: "Rudy",
  };
};

const myUser = fetchUser();

const res = new HTTPResponse(myUser, 200, 1);
console.log(res);

class CRUD<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem(item: T) {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserRespone[] = [
  { id: 1, name: "Rudy" },
  { id: 2, name: "Roman" },
  { id: 3, name: "Victoria" },
];

const userCRUD: CRUD<UserRespone> = new CRUD(users);
userCRUD.addItem({ id: 4, name: "Sebastian" });
console.log(userCRUD.printItems());
