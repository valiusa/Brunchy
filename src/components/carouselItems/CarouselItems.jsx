import * as React from "react";

// styles
import classNames from "classnames";
import styles from "./CarouselItems.module.scss";

export default function CarouselItems({ items = [], itemStyles = {} }) {
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
                <p className={classNames(styles.price)}>
                    <span>$</span> {item.price}
                </p>
                <div className={classNames(styles.ci_button_img_contaainer)}>
                    <img
                        alt="basket"
                        src="basket.svg"
                        className={classNames(styles.ci_button_img)}
                    ></img>
                </div>
            </div>
        </div>
    ));
}
