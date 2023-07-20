import React from "react";
import "./ActivityList.css";

function ActivityList({ activities }) {
  return (
    <div>
      <table>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.time}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityList;
