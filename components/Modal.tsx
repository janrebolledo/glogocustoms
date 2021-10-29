export default function modal() {
  return (
    <div></div>
  )
}

// import React, { useState } from 'react';
// import styles from '../styles/Modal.module.scss';

// export default function Modal() {
//   const [isActive, setActive] = useState("false");

//   const handleToggle = () => {
//     setActive(!isActive);
//   };
//     return (
//       <div className={`modal ${isActive ? "" : "modal-closed"}`}>
//         <div className={styles.modal__container}>
//           <div className={styles.modal__text}>
//             <h3 className={styles.modal__heading}>Support a creator</h3>
//             <h1>GET 5% OFF</h1>
//             <p className={styles.modal__paragraph}>Enter a creator code at checkout. View all the partners <a href="/faq">here</a>.</p>
//           </div>
//           <button className={styles.modal__button} onClick={handleToggle}>✖</button>
//         </div>
//       </div>
//     )
// }