import axios from "axios";

const axisoInstance = axios.create({});

export const TodoAPI = {
  async getAll() {
    const response = await axisoInstance.get("/api/todos");
    console.log(response);
    return response.data.todos;
  },
  async post() {},
};
