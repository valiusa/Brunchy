import * as React from "react";

// styles
import classNames from "classnames";
import styles from "./CarouselItems.module.scss";

export default function CarouselItems({ items = [], itemStyles = {} }) {
    let sum = 0;

    const handleBasketClick = (e) => {
        let priceId = e.target.id;
        priceId = priceId.replace("img", "price");

        let price = document.getElementById(priceId).innerText;
        price = price.replace("$", "");

        let balance = document.getElementById("balance");
        sum =
            parseFloat(balance.innerText.replace("$", "")) + parseFloat(price);
        balance.innerText = `${sum.toFixed(2)}$`;
    };

    return items.map((item, id) => (
        <div
            key={id}
            className={classNames(styles.item)}
            style={{ ...itemStyles }}
        >
            <div className={classNames(styles.ci_img_container)}>
                <img alt="img" src={item.image}></img>
            </div>
            <div className={classNames(styles.ci_text_container)}>
                <h1>{item.name}</h1>
                <p className={classNames(styles.caption)}>{item.caption}</p>
                <p id={`price${id}`} className={classNames(styles.price)}>
                    <span>$</span> {item.price.toFixed(2)}
                </p>
                <div className={classNames(styles.ci_button_img_contaainer)}>
                    <img
                        id={`img${id}`}
                        alt="basket"
                        src="basket.svg"
                        className={classNames(styles.ci_button_img)}
                        onClick={handleBasketClick}
                    ></img>
                </div>
            </div>
        </div>
    ));
}
