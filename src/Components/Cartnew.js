import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal.js";

const Cartnew = () => {
  const items = [
    { id: 0, Name: "Apple", Price: 80, Type: "Kashmiri" },
    { id: 1, Name: "Mango", Price: 249, Type: "Alphonso Hapus" },
    { id: 2, Name: "Orange", Price: 42, Type: "Nagpur Special" },
    { id: 3, Name: "Grapes", Price: 45, Type: "Green grapes" },
    { id: 4, Name: "Watermelon", Price: 20, Type: "Dark Green Kiran" },
    { id: 5, Name: "Banana", Price: 34, Type: "Robusta" },
    { id: 6, Name: "Pomegranate", Price: 80, Type: "Unbranded" },
    { id: 7, Name: "Kiwi", Price: 75, Type: "Green Kiwi" },
    { id: 8, Name: "Pear", Price: 125, Type: "Green Imported" },
    { id: 9, Name: "Pineapple", Price: 49, Type: "Unbranded" },
  ];
  const [cartList, setCartList] = useState([]);
  let quantity = 0;
  let [totalAmount, setTotalAmount] = useState(0);
  let [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const addItem1 = (id) => {
    const cartLength = cartList.length;
    console.log(cartLength);

    if (cartLength === 0) {
      const newCart = [{ cartItem: items[id], quantity: 1 }];
      setCartList(newCart);
      setTotalAmount(items[id].Price);
      console.log(cartList, "length =0");
    } else {
      console.log(cartList, "length !=0");
      cartList.map((item) => {
        if (item.cartItem.id === id) {
          const cartListCopy = item;
          cartListCopy.quantity += 1;
          cartListCopy.cartItem.Price *= cartListCopy.quantity;
          console.log(cartList, "id same");
        } else {
          const newCart = [...cartList, { cartItem: items[id], quantity: 1 }];
          setCartList(newCart);
          setTotalAmount(totalAmount + items[id].Price);
          console.log(cartList, "id different");
        }
        //  else {
        //   // const newQuantity = item.quantity + 1;
        //   // const modifiedItem = [item, newQuantity];
        //   // const modifiedCartList = [...cartList, newQuantity];
        //   // setCartList(modifiedCartList);
        //   // console.log(modifiedCartList);

        //   const cartListCopy = item;
        //   cartListCopy.quantity += 1;
        //   cartListCopy.cartItem.Price *= cartListCopy.quantity;
        //   console.log(cartList);
        // }
      });
    }
  };

  const editItem = (item) => {
    const cartListCopy = item;
    console.log(cartListCopy);
    item.cartItem.Name = newName;
    item.quantity = newQuantity;
  };

  const deleteItem = (id) => {
    const remainingItem = [...cartList];
    const delItem = remainingItem.splice(id, 1);
    setCartList(remainingItem);
    setIsOpen(false);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Basic CRUD app</h1>
      <br />
      <h2>Store Items:-</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Price</b>
            </th>
            <th>
              <b>Type</b>
            </th>
            <th>
              <b>Add to cart</b>
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, key) => {
            return (
              <tr key={key} style={{ textAlign: "left" }}>
                <td>{item.id + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>{item.Type}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      addItem1(item.id);
                    }}
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Your Cart:-</h2>

      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Sr.No.</th>
            <th>Item_Name </th>
            <th>Price</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete Item</th>
          </tr>
          {cartList.map((item, key) => {
            return (
              <tr key={item.cartItem.id} style={{ textAlign: "left" }}>
                <td>{key + 1}</td>
                <td>{item.cartItem.Name}</td>
                <td>{item.cartItem.Price}</td>
                <td>{item.cartItem.Type}</td>
                <td>{item.quantity}</td>

                <td>
                  <EditModal
                    id={item.id}
                    item={item}
                    editItem={editItem}
                    newName={newName}
                    newQuantity={newQuantity}
                    setNewName={setNewName}
                    setNewQuantity={setNewQuantity}
                  />
                </td>
                <td>
                  <DeleteModal id={item.id} deleteItem={deleteItem} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>Total Amount:- {totalAmount}</h4>
    </>
  );
};

export default Cartnew;
