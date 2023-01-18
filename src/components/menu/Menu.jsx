import * as React from "react";

// mui componets
import { Grid, Button } from "@mui/material";

// styles
import classNames from "classnames";
import styles from "./Menu.module.scss";

export default function Menu({ title = "", menu_items = [] }) {
    return (
        <nav>
            <Grid container gridRow={1} gridColumn={menu_items.length}>
                <Grid item xs={7}>
                    <h1 className={classNames(styles.logo)}>{title}</h1>
                </Grid>
                {menu_items.map((item) => (
                    <Grid item xs={1}>
                        {item.hasImg === false ? (
                            <div className={styles.menu_buttons_container}>
                                <Button
                                    className={styles.menu_buttons}
                                    variant="contained"
                                    href={item.link}
                                    target={"_blank"}
                                >
                                    {item.name}
                                </Button>
                            </div>
                        ) : (
                            <div
                                className={
                                    (styles.delivery_guy_container,
                                    styles.menu_buttons_container)
                                }
                            >
                                <Button
                                    className={
                                        (styles.menu_buttons,
                                        styles.delivery_guy_button)
                                    }
                                    variant="contained"
                                    href={item.link}
                                    target={"_blank"}
                                >
                                    {item.name}
                                </Button>
                                <img
                                    alt="delivery_guy"
                                    src="delivery_guy.svg"
                                    className={classNames(
                                        styles.delivery_guy_img
                                    )}
                                />
                            </div>
                        )}
                    </Grid>
                ))}
            </Grid>
        </nav>
    );
}
