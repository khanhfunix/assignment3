import { useState, useEffect } from "react";
import classes from "./OrderDetail.module.css";
import { useParams } from "react-router-dom";

function OrderDetail() {
  const [order, setOrder] = useState(undefined);
  const orderId = useParams().orderid;

  const fetchOrder = async function () {
    try {
      const response = await fetch(`http://localhost:5000/order/${orderId}`);
      if (response.status !== 200) {
        window.alert("Something went wrong!! Please try refresh the page");
      }
      const data = await response.json();
      setOrder(data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div className={classes.orderDetailWrapper}>
      {order && (
        <div className={classes.informationOrder}>
          <h1>INFORMATION ORDER</h1>
          <p>ID USER : {order.user} </p>
          <p>FULL NAME : {order.fullName}</p>
          <p>PHONE : {order.phoneNumber}</p>
          <p>ADDRESS : {order.address}</p>
          <p>TOTAL : {order.totalPrice.toLocaleString("de-DE")} VND</p>
        </div>
      )}
      {order && (
        <div className={classes.tableDetail}>
          <table>
            <tr>
              <th>ID PRODUCT</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>COUNT</th>
            </tr>
            {order.cart.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>
                    <img src={e.image} alt={e.name} width="150"></img>
                  </td>
                  <td>{e.name}</td>
                  <td>{e.price.toLocaleString("de-DE")} VND</td>
                  <td>{e.quantity}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
