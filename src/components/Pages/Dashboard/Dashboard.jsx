import styles from "./Dashboard.module.scss";
import CardComponent from "../../CardComponent/Card";

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
                        <CardComponent />
                        <CardComponent />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;