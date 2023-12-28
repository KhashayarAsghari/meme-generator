import React from "react";
import styles from "./ImageContainer.module.css";

export default function ImageContainer(props) {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.ImageContainerImage} src={props.imgSrc} alt="" />
        </div>
    )
}