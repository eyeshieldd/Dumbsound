import React, { useEffect } from "react";
import "../css/Transcation.css";
import { useSelector, useDispatch } from "react-redux";
import { getHistory } from "../../redux/actions/payment";
import dayjs from "dayjs";

const History = () => {
  const history = useSelector((state) => state.payment.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
  }, []);
  const data = history.map((data, index) => {
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
            color:
              data.status == "Approved"
                ? "#0ACF83"
                : data.status == "Pending"
                ? "#F7941E"
                : "#FF0742",
          }}
        >
          {data.status}
        </td>{" "}
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
            <th>Status Payment</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};
export default History;
