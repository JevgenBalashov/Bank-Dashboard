import styles from "./Dashboard.module.scss";
import CardComponent from "./CardComponent/Card";
import RecentTransaction from "./RecentTransaction/RecentTransaction";

function Dashboard() {
    return (
        <section className={styles.PageContainer}>
            <div className={styles.DashboardContainer}>
                <div className={styles.CardSection}>
                    <div className={styles.CardHeader}>
                        <span>My Cards</span>
                        <span>See All</span>
                    </div>
                    <div className={styles.CardContainer}>
                        <CardComponent
                            fillOfMastercard={{ fill: "#FFF"}}
                        />
                        <CardComponent
                            cardBodyStyle={{ background: "#FFF", border: "1px solid #DFEAF2" }}
                            textBalance={{ color: "#718EBF"}}
                            textPrice={{ color: "#343C6A"}}
                            cardHolder={{color: "#718EBF"}}
                            valid={{color: "#718EBF"}}
                            cardName={{color: "#343C6A"}}
                            dataValid={{ color: "#343C6A"}}
                            cardNumberStyle={{ borderTop: "1px solid #DFEAF2", background: "#FFF", borderRadius: "0px 0px 25px 25px"}}
                            fillOfChip={{ fill: "black" }}
                            fillOfMastercard={{ fill: "#9199AF80" }}
                        />
                    </div>
                </div>
                <div className={styles.RecentTransactionSection}>
                    <RecentTransaction />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;