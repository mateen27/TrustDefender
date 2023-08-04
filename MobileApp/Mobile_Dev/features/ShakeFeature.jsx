import React, { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors'; // Assuming you're using expo-sensors for accelerometer data

const ShakeFeature = () => {
    const [shakeStartTime, setShakeStartTime] = useState(0);
    const [shakeEndTime, setShakeEndTime] = useState(0);
    const shakeThreshold = 1500; // Adjust the shake threshold as needed
    const minShakeDuration = 10000; // Minimum shake duration in milliseconds (adjust as needed)

    const handleShake = () => {
        const currentTimestamp = Date.now();
        const shakeDuration = currentTimestamp - shakeStartTime;
      
        // You can display the message here or trigger any other action once the shake duration exceeds the threshold
        if (shakeDuration > minShakeDuration) {
          console.log('Hi Luv Saini');
          // Your action here (e.g., send distress signal, alert, etc.)
        }
      
        // If the shakeStartTime is not set or the last shake was too long ago, start a new shake
        if (!shakeStartTime || currentTimestamp - shakeEndTime > shakeThreshold) {
          setShakeStartTime(currentTimestamp);
        }
      
        // Update the shake end time for each shake event
        setShakeEndTime(currentTimestamp);
      };

    useEffect(() => {
        const startShakeDetection = async () => {
        try {
            await Accelerometer.setUpdateInterval(100); // Set accelerometer update interval
            Accelerometer.addListener(accelerometerData => {
            const { x, y, z } = accelerometerData;
            const acceleration = Math.sqrt(x * x + y * y + z * z) - 1; // Subtracting gravity

            if (acceleration > 1.2) { // Adjust the shake sensitivity as needed
                handleShake();
            }
            });
        } catch (error) {
            console.error('Error while starting shake detection:', error);
        }
        };

        startShakeDetection();

        return () => {
        Accelerometer.removeAllListeners();
        };
    }, []);
}

export default ShakeFeature;
