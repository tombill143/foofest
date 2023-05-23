import React, { useRef } from 'react';
import styles from "../../styles/Booking.module.css";
import Link from "next/link";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Timer from "../componants/Timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";



const BuyerInfo = () => {
  

  return (
    <div >
      <h1>Info for payer</h1>

      <Timer />

      {/* input stuff like photos etc */}

      <form action="/send-data-here" method="post">
        
         <label for="first">First name:</label>
         <input type="text" id="first" name="first" />

         <label for="last">Last name:</label>
         <input type="text" id="last" name="last" />
         
         <label for="last">E-mail:</label>
         <input type="text" id="email" name="email" />
         
         <label for="last">Address:</label>
         <input type="text" id="address" name="address" />
         
         <label for="last">Phone number:</label>
         <input type="text" id="phonenumber" name="phonenumber" />


         <button type="submit">Submit</button>
         {/* and we should have this form for each number of tickets, so three if three tickets are being bought */}
     </form>

   


     <Link className={styles.btn} href="/payment">
          Submit and go to payment
     </Link>


     </div>



)}



export default BuyerInfo;