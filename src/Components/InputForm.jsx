import React from "react";
import styles from "./InputForm.module.css";
import memes from "../memes";

export default function InputForm(props) {

    function randomMeme() {
        const memesArray = memes.data.memes;
        let randomNum = Math.floor(Math.random()*memesArray.length);
        console.log(memesArray[randomNum]);
    }

    return (
        <form className={styles.form} action="#">
            <div className={styles.form__inputsContainer}>
                <label className={styles.form__label} htmlFor="TopText">top text</label>
                <input 
                    id="TopText" 
                    type="text" 
                    name="topText" 
                    className={styles.form__input}
                    placeholder="top text"
                    />

                <label 
                    className={styles.form__label} htmlFor="bottomText">top text</label>
                <input 
                    id="bottomText" 
                    type="text" 
                    name="bottomText" 
                    className={styles.form__input}
                    placeholder="bottom text"
                    />
            </div>

            <input 
                type="submit" 
                value="Get a new meme image" 
                className={styles.form__submit}
                onClick={props.onClickFunction}
                />
        </form>
    )
}