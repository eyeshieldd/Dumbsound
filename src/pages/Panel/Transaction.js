import React, { useEffect } from "react";
import "../css/Transcation.css";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getTransaction, updatePayment } from "../../redux/actions/payment";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const IncomingTransaction = () => {
  let dateNow = dayjs();
  let now = dateNow.format("YYYY-MM-DD");

  const transaction = useSelector((state) => state.payment.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransaction());
  }, []);
  console.log(dateNow);

  const handleUpdate = (status, idTransaction, idUser) => {
    dispatch(updatePayment(status, idTransaction, idUser));
  };

  // console.log(transaction)
  const data = transaction.map((data, index) => {
    let diffDate = dayjs(data.dueDate).diff(dayjs(new Date(Date.now())), "day");

    return (
      <tr key={data.id}>
        <td>{index + 1}</td>
        <td>{data.userInfo.fullName}</td>
        <td>
          <img
            style={{ width: 100 }}
            src={`http://localhost:5000/uploads/${data.attache}`}
            alt="data"
          />
        </td>
        <td>{`${diffDate && diffDate > 0 ? diffDate : 0} Day remaining`}</td>
        <td
          style={{
            color: data.userInfo.subscribe ? "#0ACF83" : "#FF0742",
          }}
        >
          {data.userInfo.subscribe ? "Active" : "Not Active"}
        </td>
        <td
          style={{
            color:
              data.status == "Approved"
                ? "#0ACF83"
                : data.status == "Pending"
                ? "#F7941E"
                : "#FF0742",
          }}
        >
          {data.status}
        </td>
        <td>
          <span
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "#1C9CD2",
            }}
          >
            {/* {data.status === 'Approved' || data.status === 'Reject' ? null : ( */}
            <div className="dropdown">
              <div className="dropdown-content">
                <label htmlFor="">
                  <ul>
                    <p
                      style={{ color: "#0ACF83" }}
                      onClick={() =>
                        handleUpdate("Approved", data.id, data.userInfo.id)
                      }
                    >
                      Active
                    </p>
                    <p
                      style={{ color: "red" }}
                      onClick={() =>
                        handleUpdate("Reject", data.id, data.userInfo.id)
                      }
                    >
                      Reject
                    </p>
                  </ul>
                </label>
              </div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {/* )} */}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div className="transcation-container">
      {/* <h1>Incoming Transcation</h1> */}
      <table className="transcation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Bukti</th>
            <th>Remaining Day</th>
            <th>Status User</th>
            <th>Status Payment</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default IncomingTransaction;
