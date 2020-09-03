/*
 * #DevLog
 * 9/3/20: Implemented the setInterval function with the Notification-Max vibration set to 600 milliseconds. It builds. 
 * TODO: implement version control.
 * First step: I need to get the loop set up for the haptics to function as a metronome
 * Second step: stop the loop when the user exits or the gyro is not y > 35
 * Third step: get the heart animation playing
 * #Haptics
 * Query: How long do the various vibrations play?
 * A: Unk 8/29
 * A: See testy boi documentation; specifics not known, but the gist is laid out there
 * #Timer
 *9/3/20: Trying to use the setInterval function to fir the vibration.start function on repeat
 */

import { Gyroscope } from "gyroscope";
import { vibration } from "haptics";
//vibration.start("Confirmation-Max");
//"alert" "bump" "confirmation" "confirmation-max" "nudge" "nudge-max" "ping" "ring"

//Just copypastad this from the guide, not too clear on what the heck is going on here; 
//TODO: figure this mess out.
if (Gyroscope) {
  // 30 readings per second, 60 readings per batch
  const gyro = new Gyroscope({ frequency: 30, batch: 60 });
  gyro.addEventListener("reading", () => {
    for (let index = 0; index < gyro.readings.timestamp.length; index++) {
      console.log(
        `Gyroscope Reading: \
          timestamp=${gyro.readings.timestamp[index]}, \
          [${gyro.readings.x[index]}, \
          ${gyro.readings.y[index]}, \
          ${gyro.readings.z[index]}]`
      );
    }
  });
  gyro.start();
}
  //lol not sure if this will work, double check axes and API notation
while(gyro.readings.y > 30){
  setInterval(vibration.start("Confirmation-Max"), 600)
}