import styles from "./RecentTransaction.module.scss";
import { ReactComponent as DoubleCard } from "../../../assets/Svg/RecentTransaction/DoubleCart.svg";
import { ReactComponent as PayPal } from "../../../assets/Svg/RecentTransaction/PayPal.svg";
import { ReactComponent as Dolar } from "../../../assets/Svg/RecentTransaction/Dolar.svg";
 
function RecentTransaction() {
    return (
        <div className={styles.RecentTransactionContainer}>
            <h1 className={styles.title}>
                Recent Transaction
            </h1>
            <div className={styles.TransactionList}>
                <ul>
                    <li>
                        <div className={styles.svgBox}>
                            <DoubleCard />
                            <div className={styles.TransactionInfo}>
                                <h3>Deposit from my Card</h3>
                                <span>28 January 2021</span>
                            </div>
                        </div>
                        
                        <div className={styles.amount}>-$850</div>
                    </li>
                    <li>
                        <div className={styles.svgBox}>
                            <PayPal />
                            <div className={styles.TransactionInfo}>
                                <h3>Deposit Paypal</h3>
                                <span>21 January 2021</span>
                            </div>
                        </div>
                        <div className={styles.amount}>+$2,500</div>
                    </li>
                    <li>
                        <div className={styles.svgBox}>
                            <Dolar />
                            <div className={styles.TransactionInfo}>
                                <h3>Jemi Wilson</h3>
                                <span>21 January 2021</span>
                            </div>
                        </div>
                        <div className={styles.amount}>+$5,400</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RecentTransaction;