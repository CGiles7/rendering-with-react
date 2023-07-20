import React from "react";
import "./Activity.css";

function Activities({ activities }) {
  return (
    <div>
      {activities.map((activity, index) => (
        <div key={index}>
          <p>{activity.time} {activity.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Activity;
