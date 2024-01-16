import React from "react";
import styles from "./Card.module.scss";
import {ReactComponent as PayChip} from "../assets/Svg/Card/PayChip.svg";
import {ReactComponent as MasterCard} from "../assets/Svg/Card/MasterCard.svg";

function CardComponent () {
    return (
        <div className={styles.CardContainer}>
            <div className={styles.CardBody}>
                <div className={styles.BalanceChip}>
                    <div className={styles.Balance}>
                        <span>Balance</span>
                        <span>$5,756</span>
                    </div>
                    <PayChip />
                </div>
                <div className={styles.ValidCardName}>
                    <div className={styles.VCNbox}>
                        <span>CARD HOLDER</span>
                        <span>Eddy Cusuma</span>
                    </div>
                    <div className={styles.VCNbox}>
                        <span>VALID THRU</span>
                        <span>12/22</span>
                    </div>
                </div>
                <div className={styles.CardNumber}>
                    <span>3778 **** **** 1234</span>
                    <MasterCard />
                </div>
            </div>
        </div>
    );
}

export default CardComponent;