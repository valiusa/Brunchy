import * as React from "react";

// global vars
import { itemsInBasket, total } from "../../../src/global_vars";

// mui componets
import { Box, Button, Modal } from "@mui/material";

// styles
import classNames from "classnames";
import styles from "./Basket.module.scss";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none !important",
    borderRadius: "15px",
    backgroundColor: "#F9F6F6 !important",
    boxShadow: 24,
    p: 4,
};

export default function Basket() {
    const [openBalance, setOpenBalance] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);

    const handleOpenSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = () => setOpenSuccess(false);

    const handleCloseModal = () => {
        itemsInBasket.forEach((x) => {
            x.isProcessed = false;
        });

        setOpenBalance(false);
    };

    const handleBalanceCloseModal = (e) => {
        setOpenBalance(true);

        setTimeout(() => {
            const modal_desc = document.getElementById("modal-desc");

            for (let i = 0; i <= itemsInBasket.length - 1; i++) {
                let count = 1;

                if (!itemsInBasket[i].isProcessed) {
                    for (let j = i + 1; j <= itemsInBasket.length - 1; j++) {
                        if (
                            itemsInBasket[i].name === itemsInBasket[j].name &&
                            !itemsInBasket[j].isProcessed
                        ) {
                            count += 1;
                            itemsInBasket[j].isProcessed = true;
                            itemsInBasket[i].isProcessed = true;
                        }
                    }

                    modal_desc.innerHTML += `<div id="modal-modal-description" style="display: flex; justify-content: space-between; font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 65px; color: #363636"><div>${
        itemsInBasket[i].name
    } x ${count}</div><div>${(itemsInBasket[i].price * count).toFixed(
                        2
                    )}<span style="color: #FF8515">$</span></div></div>`;
                }
            }

            modal_desc.innerHTML += `<div style="border: 1px solid rgba(121, 121, 121, 0.4)"></div><div id="modal-modal-description" style="display: flex; justify-content: space-between; font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 65px; color: #363636"><p>Total</p><p>${total[0].toFixed(
        2
    )}<span style="color: #FF8515">$</span></p></div>`;
        }, 1000);
    };

    return (
        <div className={classNames(styles.basket_container)}>
            <img
                alt="basket"
                src="basket.svg"
                className={classNames(styles.basket_img)}
                onClick={handleBalanceCloseModal}
            ></img>
            <p id="balance" className={classNames(styles.balance)}>
                0.00$
            </p>
            <Button
                variant="contained"
                className={classNames(styles.order_btn)}
                onClick={handleOpenSuccess}
            >
                {" "}
                Order Now
            </Button>
            <Modal
                open={openBalance}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <div id="modal-desc"></div>
                </Box>
            </Modal>
            <Modal
                open={openSuccess}
                onClose={handleCloseSuccess}
                aria-labelledby="modal-success-title"
                aria-describedby="modal-success-description"
            >
                <Box sx={modalStyle}>
                    <div
                        id="modal-success-description"
                        className={classNames(styles.success_modal_container)}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <h1>Congratulations!</h1>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <p>Your order is on it's way</p>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                className={classNames(styles.order_btn)}
                                onClick={handleCloseSuccess}
                                sx={{ width: "154px" }}
                            >
                                OK
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
