import styles from "../Layout/Layout.module.scss";


function Layout(props) {
    return ( 
        <div className={styles.Layout}>
            <h1>this is Layout</h1>
            {props.children}
        </div>
    );
}

export default Layout;