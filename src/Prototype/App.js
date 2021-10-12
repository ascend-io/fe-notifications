import "./app.css";
import nzImg from "./new-zealand.jpeg";
import {useRef, useState} from "react";
import { generateParagraph, uuid } from "../utils/helper";
import Notification from "./Notification";

function App() {
  const [notifications, setNotifications] = useState([]);
  const notifRef = useRef(null);
  notifRef.current = notifications;
  const handleAddNotification = () => {
    setNotifications([
      ...notifications,
      { uuid: uuid(), content: generateParagraph() },
    ]);
  };
  const handleRemoveNotification = (uuid) => {
    setNotifications(notifRef.current.filter((n) => n.uuid !== uuid));
  };

  return (
    <div
      className="app"
      style={{
        background: `url(${nzImg}) no-repeat center center fixed`,
      }}
    >
      <div className="center-button" onClick={handleAddNotification}>
        Add Notification!
      </div>
      <div className="left">
        {notifications.map((n) => (
          <Notification
            key={n.uuid}
            notification={n}
            handleRemoveNotification={handleRemoveNotification}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
