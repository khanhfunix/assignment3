import { useEffect, useState } from "react";
import classes from "./OrderList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function OrderList() {
  const [orderList, setOrderList] = useState(undefined);
  const navigate = useNavigate();
  const fetchOrder = async function () {
    try {
      const response = await fetch("http://localhost:5000/order");
      if (response.status !== 200) {
        window.alert("Something went wrong!!");
      }
      const data = await response.json();

      setOrderList(data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className={classes.listContainer}>
      {orderList && (
        <table>
          <tr>
            <th>ID ORDER</th>
            <th>USER NAME</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>TOTAL</th>
            <th>DELIVERY</th>
            <th>STATUS</th>
            <th>DETAIL</th>
          </tr>
          {orderList.map((e) => {
            return (
              <tr key={e._id}>
                <td>{e._id}</td>
                <td>{e.fullName}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.address}</td>
                <td>{e.totalPrice.toLocaleString("de-DE")} VND</td>
                <td>{e.delivery}</td>
                <td>{e.status}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`${e._id}`);
                    }}
                  >
                    VIEW
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default OrderList;
