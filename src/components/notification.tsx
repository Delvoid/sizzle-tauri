'use client';
import React, { useState, useEffect } from 'react';
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/api/notification';

function NotificationButton() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      let granted = await isPermissionGranted();
      console.log({ granted });
      if (!granted) {
        const permission = await requestPermission();
        granted = permission === 'granted';
      }
      setPermissionGranted(granted);
    };

    checkPermission();
  }, []);

  const handleButtonClick = () => {
    if (permissionGranted) {
      sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
    } else {
      alert('Permission not granted for notifications');
    }
  };

  return (
    <button className="px-3 py-2 rounded-md bg-purple-300" onClick={handleButtonClick}>
      Send Notification
    </button>
  );
}

export default NotificationButton;
