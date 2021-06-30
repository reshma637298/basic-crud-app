import React, { Component } from "react";

class CartNewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { Name: "Apple", Price: 80, Type: "Kashmiri" },
        { Name: "Mango", Price: 249, Type: "Alphonso Hapus" },
        { Name: "Orange", Price: 42, Type: "Nagpur Special" },
        { Name: "Grapes", Price: 45, Type: "Green grapes" },
        { Name: "Watermelon", Price: 20, Type: "Dark Green Kiran" },
        { Name: "Banana", Price: 34, Type: "Robusta" },
        { Name: "Pomegranate", Price: 80, Type: "Unbranded" },
        { Name: "Kiwi", Price: 75, Type: "Green Kiwi" },
        { Name: "Pear", Price: 125, Type: "Green Imported" },
        { Name: "Pineapple", Price: 49, Type: "Unbranded" },
      ],
      cartList: [],
      input: "",
      quantity: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem = (key) => {
    console.log(this.state.cartList);
    const itemIndexInCart = this.state.cartList.findIndex(
      (cartItem) => cartItem.item.Name === this.state.items[key].Name
    );
    if (itemIndexInCart === -1)
      this.setState((prev) => ({
        cartList: [
          ...prev.cartList,
          {
            item: prev.items[key],
            quantity: 1,
            price: 1 * prev.items[key].Price,
          },
        ],
      }));
    else
      this.setState((prev) => {
        const newCartList = [...prev.cartList];
        newCartList[itemIndexInCart].quantity =
          newCartList[itemIndexInCart].quantity + 1;
        newCartList[itemIndexInCart].price =
          newCartList[itemIndexInCart].quantity * this.state.items[key].Price;
        return { cartList: [...newCartList] };
      });
  };

  deleteItem = (key) => {
    let currentItem = this.state.cartList[key];
    if (currentItem.quantity !== 1) {
      this.setState((prev) => {
        const newCartList = [...prev.cartList];
        newCartList[key].quantity = newCartList[key].quantity - 1;
        newCartList[key].price -= newCartList[key].item.Price;
        return { cartList: [...newCartList] };
      });
    } else {
      let currentItemList = this.state.cartList;
      currentItemList.splice(key, 1);
      this.setState({ cartList: currentItemList });
      return { cartList: currentItemList };
    }
    console.log(currentItem);
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Welcome to R-Mart</h1>
        {/* <label>Enter the item</label> */}
        {/* <input type="text" placeholder="Item Name" onChange={this.inputlist}></input>
               <br/> 
                <button onClick={this.addItem}>Add to Cart</button> */}
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
            {this.state.items.map((item, key) => {
              return (
                <tr key={key} style={{ textAlign: "left" }}>
                  <td>{key + 1}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>{item.Type}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.addItem(key);
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
        <h2>Your Cart</h2>

        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Sr.No.</th>
              <th>Item_Name </th>
              <th>Price</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Delete Item</th>
            </tr>
            {this.state.cartList.map((cartItem, key) => {
              return (
                <tr key={key} style={{ textAlign: "left" }}>
                  <td>{key + 1}</td>
                  <td>{cartItem.item.Name}</td>
                  <td>{cartItem.item.Price}</td>
                  <td>{cartItem.item.Type}</td>
                  <td>{cartItem.quantity}</td>
                  <td>{cartItem.price}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        this.deleteItem(key);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CartNewClass;
