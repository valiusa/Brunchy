import * as React from "react";

// global vars
import { itemsInBasket, total } from "../../../src/global_vars";

// styles
import classNames from "classnames";
import styles from "./CarouselItems.module.scss";

export default function CarouselItems({ items = [], itemStyles = {} }) {
    const handleBasketClick = (e) => {
        let priceId = e.target.id;
        priceId = priceId.replace("img", "price");

        let price = document.getElementById(priceId).innerText;
        price = price.replace("$", "");

        let nameId = e.target.id;
        nameId = nameId.replace("img", "name");
        let name = document.getElementById(nameId).innerText;

        let balance = document.getElementById("balance");

        total.length === 0
            ? total.push(
                  parseFloat(balance.innerText.replace("$", "")) +
                      parseFloat(price)
              )
            : (total[0] =
                  parseFloat(balance.innerText.replace("$", "")) +
                  parseFloat(price));

        itemsInBasket.push({
            name: name,
            price: price,
            isProcessed: false,
            quantity: 1,
        });

        balance.innerText = `${total[0].toFixed(2)}$`;
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
                <h1 id={`name${id}`}>{item.name}</h1>
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
