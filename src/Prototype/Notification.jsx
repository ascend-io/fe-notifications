import { useEffect, useRef } from "react";

function Notification({ notification, handleRemoveNotification }) {
  const timeoutRef = useRef(null);
  useEffect(() => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        handleRemoveNotification(notification.uuid);
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [notification.uuid]);

  return (
    <div className="notif-item" key={notification.uuid}>
      <div
        className="delete-button"
        onClick={() => handleRemoveNotification(notification.uuid)}
      >
        x
      </div>
      {notification.content}
    </div>
  );
}

export default Notification;
