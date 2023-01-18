import * as React from "react";

// mui componets
//import { Grid, Button } from "@mui/material";

// styles
import classNames from "classnames";
import styles from "./Title.module.scss";

export default function Title({ mainTitle = "", spanTitle = "" }) {
    return (
        <div className={classNames(styles.title_container)}>
            <h1 className={classNames(styles.title)}>
                {mainTitle}{" "}
                <span className={classNames(styles.span_title)}>
                    {spanTitle}
                </span>
            </h1>
        </div>
    );
}
