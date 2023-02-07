import { useEffect, useState } from "react";
import axios from "axios";

export type todos = {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
  style?: string;
};

function FetchingApi() {
  const [todos, setTodos] = useState<todos[] | null>([]);
  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = () => {
    return axios
      .get(url)
      .then((data) => setTodos(data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className=" container mx-auto justify-center">
      <div className="container mx-auto text-center m-5">
        <h1>Fetched todo lists</h1>
        <h3>Lemme go to sleep soon</h3>
      </div>
      <div className="container mx-auto justify-center overflow-hidden">
        <table className="table-auto container mx-auto justify-center min-w-full">
          <thead className="border-b">
            <tr>
              <th className="text-sm font-medium text-violet-400 px-6 py-4 text-left">
                List No
              </th>
              <th className="text-sm font-medium text-violet-400 px-6 py-4 text-left">
                Todo
              </th>
              <th className="text-sm font-medium text-violet-400 px-6 py-4 text-left">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {todos
              ? todos.map((todo) => {
                  return (
                    <tr key={todo.id} className="border">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-violet-200">
                        {todo.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-violet-200">
                        {todo.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-violet-200">
                        {todo.completed ? "done" : "not yet"}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchingApi;
