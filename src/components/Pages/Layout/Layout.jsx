import styles from "../Layout/Layout.module.scss";
//eslint-disable-next-line
import { Form, Formik, Field } from "formik";
import { ReactComponent as SettingSvg } from "../../assets/Svg/LayoutSvg/HeaderSettingSvg.svg";
import { ReactComponent as NotificationSvg } from "../../assets/Svg/LayoutSvg/HeaderNotificationSvg.svg";


function Layout(props) {
    return ( 
        <section className={styles.Layout}>
            <div className={styles.LayoutHeader}>
                <div className={styles.HeaderTitle}>
                    <h1>{props.title}</h1>
                </div>
                <div className={styles.HeaderMainElement}>
                    <div className={styles.HeaderSearchForm}>
                        <Formik
                            initialValues={{ searchQuery: '' }}
                            onSubmit={() => {}}
                        >
                            <Form>
                                <Field
                                    type="text"
                                    id="searchQuery"
                                    name="searchQuery"
                                    placeholder="Search for something"
                                />
                            </Form>
                        </Formik>
                    </div>
                    <div className={styles.HeaderSvg}>
                        <SettingSvg />
                    </div>
                    <div className={styles.HeaderSvg}>
                        <NotificationSvg />
                    </div>
                    <div className={styles.HeaderAccountImage}></div>
                </div>
            </div>
            {props.children}
        </section>
    );
}

export default Layout;