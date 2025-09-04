import { createServer, Model, Server } from "miragejs";

createServer({
  models: {
    todos: Model,
  },
  routes() {
    this.namespace = "api";
    //especifica o '/api'
    //get('/api/todos')
    //get('/api/todos/:id')
    this.get("/todos", (schema) => {
      return schema.all("todos"); //Retorna todos os todos
    });
    this.post("/todos", (schema, request) => {
      const atributos = JSON.parse(request.requestBody); //Pega o atributo da request
      const todo = schema.create("todos", atributos); // Cria um novo registro todo no schema
      return todo; //Retorna o registro criado
      //return schema.create('todos', JSON.parse(request.requestBody))
    });
    //Pode ser usado o this.patch tambem, o put substitui algo que já existe de forma completa, o patch substitui partes
    this.put("/todos/:id", (schema, request) => {
      const id = String(request.params.id); //Pega o id da URL
      const newAtributo = JSON.parse(request.requestBody); // Pega o 'novo atributo'
      const todo = schema.find("todos", id); //Encontra o schema via ID
      todo?.update(newAtributo); //Atualiza o todo encontrado
      return {};
    });
    this.delete("/todos/:id", (schema, request) => {
      const id = String(request.params.id); //Pega o id da URL
      const todo = schema.find("todos", id); //Encontra o schema via ID
      todo?.destroy(); //Remove o todo
      return {};
    });
  },
});
