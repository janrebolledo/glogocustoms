import React from "react";
import styles from "../styles/ColorOptions.module.scss"
import Colors from "../public/FAQ Images/Color Palette.png"

export default function ColorOptions() {
    return (
        <div className={styles.ColorOptions}>
            <h5>Color Options</h5>
            <img src={Colors.src} alt="" />
        </div>
    )
}