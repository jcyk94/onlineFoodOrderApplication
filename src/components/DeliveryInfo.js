import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { itemContext } from "../App";

var store = require("store");
// const timeNow = new Date().toLocaleString();

function DeliveryInfo() {
  //console.log("delvry-info rendered");
  const timeNow = store.get("orderTime");
  const iL = useContext(itemContext);

  if (store.get("orderedItems") != null) {
    store.set("confirmedOrderItems", store.get("orderedItems"));
  }

  if (store.get("totalCost") != null) {
    store.set("confirmedTotalCost", store.get("totalCost"));
  }

  useEffect(() => {
    iL.method({ type: "clearCart" });
  }, [iL]);

  // useEffect(iL.method({ type: 'clearCart' }), [])

  // // eslint-disable-next-line
  // const [clearCart, setClearCart] = useState(iL.method({ type: 'clearCart' }));

  const getItem = store.get("confirmedOrderItems");
  const totalCost = store.get("confirmedTotalCost");
  const paymentMethod = store.get("paymentMethod") ?? "";

  // const [clearCart, setClearCart] = useState(clearCarts);

  // const removeOrderedItem = store.remove('orderedItems');
  // const removeTotalItem = store.remove("totalitems");
  // const removeTotalCost = store.remove("totalCost");

  const printOrder = () => {
    function hex_to_ascii(str1) {
      let hex = str1.toString();
      let str = "";
      for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
      }
      return str;
    }

    // let fullCut = hex_to_ascii("1b69");
    // let newLine = hex_to_ascii("0A");
    // let center = hex_to_ascii("1B6101");
    // let left = hex_to_ascii("1B6100");
    // let data = '';

    // data += "------------------------------------------" + newLine;
    // data += center + "Order Details" + newLine;
    // data += "------------------------------------------" + newLine;
    // data += left + "Status          : Delivery Pending" + newLine;
    // data += "Payment Mode    : " + paymentMethod + newLine;
    // data += "Order Time      : " + timeNow + newLine;
    // data += "Delivery To     : 2 Ang Mo Kio Street 62," + newLine;
    // data += "                  Singapore 569138" + newLine + newLine + newLine + newLine;
    // data += "------------------------------------------" + newLine;
    // data += center + "Order Summary" + newLine;
    // data += "------------------------------------------" + newLine;
    // data += left + "Item               Price   Qty      Amt" + newLine;

    // getItem.forEach(l => {
    //   data += newLine + `${(l.itemName + "                  ").slice(0, 17)}  ${(((parseInt(l.price)).toString()).padStart(3) + "").slice(0, 3)}.00   ${(l.quantity + "  ").slice(0, 3)} S$${((l.quantity * l.price).toString()).padStart(5)}.00`
    // });

    // data += newLine + newLine;

    // data += "              Subtotal        : S$" + ((parseInt(totalCost)).toString()).padStart(5) + ".00" + newLine;
    // data += "              Delivery Charges: S$" + ("5").padStart(5) + ".00" + newLine;
    // data += "              Offer Price     : S$" + ("0").padStart(5) + ".00" + newLine;
    // data += "              Total           : S$" + ((parseInt(totalCost) + 5).toString()).padStart(5) + ".00" + newLine;
    // data += "------------------------------------------" + newLine + newLine + newLine + newLine + newLine + newLine + newLine + newLine + fullCut;

    //mPOS sample print
    let data = "";
    data +=
      '<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">';
    data += '<text lang="en"/>';
    data += '<text smooth="true"/>';

    data += '<text align="center"/>';
    data += "<text>Order Details</text>";
    data += "<feed/>";
    data += "<text>------------------------------------------</text>";
    data += "<feed/>";
    data += '<text align="left"/>';
    data += "<text>Status          : Delivery Pending</text>";
    data += "<feed/>";
    data += `<text>Payment Mode    : ${paymentMethod}</text>`;
    data += "<feed/>";
    data += `<text>Order Time      : ${timeNow}</text>`;
    data += "<feed/>";

    data += "<text>Delivery To     : 2 Ang Mo Kio Street 62,</text>";
    data += "<feed/>";
    data += "<text>                  Singapore 569138</text>";
    data += "<feed/><feed/><feed/>";

    data += '<text align="center"/>';
    data += "<text>Order Summary</text>";
    data += "<feed/>";
    data += "<text>------------------------------------------</text>";
    data += "<feed/>";

    data += "<text>Item               Price   Qty      Amt</text>";
    data += "<feed/>";

    getItem.forEach((l) => {
      data += `<feed/><text>${(l.itemName + "                  ").slice(
        0,
        17
      )}  ${(parseInt(l.price).toString().padStart(3) + "").slice(
        0,
        3
      )}.00   ${(l.quantity + "  ").slice(0, 3)} S$${(l.quantity * l.price)
        .toString()
        .padStart(5)}.00</text>`;
    });

    data += "<feed/><feed/>";

    data += `<text>              Subtotal        : S$${parseInt(totalCost)
      .toString()
      .padStart(5)}.00</text><feed/>`;
    data += `<text>              Delivery Charges: S$${"5".padStart(
      5
    )}.00</text><feed/>`;
    data += `<text>              Offer Price     : S$${"0".padStart(
      5
    )}.00</text><feed/>`;
    data += `<text>              Total           : S$${(parseInt(totalCost) + 5)
      .toString()
      .padStart(5)}.00</text><feed/>`;

    data += "<feed/><feed/><feed/>";

    data += "<text>Looking forward to see you again!</text>";
    data += "<feed/>";

    data += '<cut type="feed"/>';
    data += "</epos-print>";

    axios
      .post("http://172.17.11.83:8080/data/", {
        data: data,
      })
      .then((res) => {
        console.log("file sent");
        //redirect to login page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="deliveryInfo d-flex flex-column">
      <div className="beforeh2"></div>
      <h4 className="delTitle fw-400 text-center d-flex justify-content-center">
        {getItem.length > 0
          ? "Thanks For Your Order!"
          : "Your Cart is Empty..!!"}
      </h4>
      {getItem.length > 0 ? (
        <div className="summaryBill d-flex flex-column">
          <div className="orderDetails p-3">
            <h3>Order Details</h3>
            <hr />
            <div className="table-responsive">
              <table className="table-light m-2">
                <tbody>
                  <tr>
                    <td colSpan="3">Status:</td>
                    <td>Delivery Pending</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Payment Mode:</td>
                    <td>{paymentMethod}</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Order Time:</td>
                    <td>{timeNow}</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Delivery To:</td>
                    <td>2 Ang Mo Kio Street 62,Singapore 569138</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="orderSummary p-3">
            <h3>Order Summary</h3>
            <hr />
            <div className="items">
              <div className="table-responsive">
                <table className="table-light m-2">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Amt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getItem.map((l) => (
                      <tr key={l.itemName}>
                        <td>{l.itemName}</td>
                        <td>{l.price}</td>
                        <td>{l.quantity}</td>
                        <td>{l.quantity * l.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              <hr />
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="summaryTotal">Subtotal</div>
                <div>S&#36;{totalCost}</div>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="summaryTotal">Delivery Charges</div>
                <div>S&#36;5</div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="summaryTotal">Offer Price</div>
                <div>S&#36;0</div>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2 mb-1 totalamt">
                <div className="summaryTotal">Total</div>
                <div>S&#36;{totalCost + 5}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 text-center h4 text-danger border-danger">
          Something went wrong. Please visit the page after sometime.
        </div>
      )}

      {getItem.length > 0 ? (
        <button
          type="button"
          className=" delTitle btn btn-outline-dark printBtn"
          onClick={printOrder}
        >
          Confirm Order
        </button>
      ) : (
        ""
      )}
      <br />
      <Link to="/" className=" delTitle btn btn-outline-dark printBtn">
        Back to Home
      </Link>
    </div>
  );
}

export default DeliveryInfo;
