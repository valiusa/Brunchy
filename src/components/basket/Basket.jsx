import * as React from "react";

// mui componets
import { Button } from "@mui/material";

// styles
import classNames from "classnames";
import styles from "./Basket.module.scss";

export default function Basket() {
    return (
        <div className={classNames(styles.basket_container)}>
            <img
                alt="basket"
                src="basket.svg"
                className={classNames(styles.basket_img)}
            ></img>
            <p id="balance" className={classNames(styles.balance)}>
                0.00$
            </p>
            <Button
                variant="contained"
                className={classNames(styles.order_btn)}
            >
                {" "}
                Order Now
            </Button>
        </div>
    );
}
