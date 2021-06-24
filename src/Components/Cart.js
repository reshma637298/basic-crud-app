import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const Cart = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentItem(e.target.value);
  };

  const addItem = () => {
    setTodoList([...todoList, { item: currentItem, id: Date.now() }]);
    setCurrentItem("");
    console.log(todoList);
  };

  const deleteItem = (id) => {
    const updatedTodo = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(updatedTodo);
  };

  return (
    <div>
      <input
        className="mb-3"
        value={currentItem}
        onChange={handleChange}
      ></input>
      <Button onClick={addItem}>Add to Todo</Button>
      <Table striped bordered size="sm" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Delete</th>
          </tr>
        </thead>
        {todoList.map((itm, key) => {
          console.log(itm);
          return (
            <tbody key={itm.id}>
              <tr>
                <td key={itm.id}>{itm.item}</td>
                <td>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      deleteItem(itm.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Cart;
