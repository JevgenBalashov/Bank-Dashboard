import styles from "../SideMenu/SideMenu.module.scss";

import { ReactComponent as Logo } from "../assets/Svg/MainLogo/Logo.svg";
import { ReactComponent as BankDash } from "../assets/Svg/MainLogo/BankDash.svg";

import { ReactComponent as Home } from "../assets/Svg/AsideMenu/Home.svg";
import { ReactComponent as Transactions } from "../assets/Svg/AsideMenu/Transfer.svg";
import { ReactComponent as Accounts } from "../assets/Svg/AsideMenu/Account.svg";
import { ReactComponent as Investments } from "../assets/Svg/AsideMenu/Investments.svg";
import { ReactComponent as CreditCards } from "../assets/Svg/AsideMenu/CreditCard.svg";
import { ReactComponent as Loans } from "../assets/Svg/AsideMenu/Loans.svg";
import { ReactComponent as Services } from "../assets/Svg/AsideMenu/Services.svg";
import { ReactComponent as MyPrivileges } from "../assets/Svg/AsideMenu/MyPrivileges.svg";
import { ReactComponent as Setting } from "../assets/Svg/AsideMenu/Settings.svg";



function Menu() {
    return ( 
        <aside className={styles.Menu}>
            <div className={styles.MenuHeaderContainer}>
                <div className={styles.LogoContainer}>
                    <Logo className={styles.logoSvg} />
                    <BankDash className={styles.logoSvg} />
                </div>
            </div>
            <div className={styles.MenuBodyContainer}>
                <ul className={styles.MenuList}>
                    <li className={styles.MenuItem}>
                        <Home className={styles.MenuSvg} />
                        <span>Dashboard</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Transactions className={styles.MenuSvg} />
                        <span>Transactions</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Accounts className={styles.MenuSvg} />
                        <span>Accounts</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Investments className={styles.MenuSvg} />
                        <span>Investments</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <CreditCards className={styles.MenuSvg} />
                        <span>Credit Cards</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Loans className={styles.MenuSvg} />
                        <span>Loans</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Services className={styles.MenuSvg} />
                        <span>Services</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <MyPrivileges className={styles.MenuSvg} />
                        <span>My Privileges</span>
                    </li>
                    <li className={styles.MenuItem}>
                        <Setting className={styles.MenuSvg} />
                        <span>Setting</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Menu;