import React from 'react';
import styles from '../SideMenu/SideMenu.module.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Svg/MainLogo/Logo.svg';
import { ReactComponent as BankDash } from '../assets/Svg/MainLogo/BankDash.svg';
import { ReactComponent as Home } from '../assets/Svg/AsideMenu/Home.svg';
import { ReactComponent as Transactions } from '../assets/Svg/AsideMenu/Transfer.svg';
import { ReactComponent as Accounts } from '../assets/Svg/AsideMenu/Account.svg';
import { ReactComponent as Investments } from '../assets/Svg/AsideMenu/Investments.svg';
import { ReactComponent as CreditCards } from '../assets/Svg/AsideMenu/CreditCard.svg';
import { ReactComponent as Loans } from '../assets/Svg/AsideMenu/Loans.svg';
import { ReactComponent as Services } from '../assets/Svg/AsideMenu/Services.svg';
import { ReactComponent as MyPrivileges } from '../assets/Svg/AsideMenu/MyPrivileges.svg';
import { ReactComponent as Setting } from '../assets/Svg/AsideMenu/Settings.svg';

const menuItems = [
	{ icon: <Home className={styles.MenuSvg} />, text: 'Dashboard', path: '/dashboard' },
	{ icon: <Transactions className={styles.MenuSvg} />, text: 'Transactions', path: '/transactions' },
	{ icon: <Accounts className={styles.MenuSvg} />, text: 'Accounts', path: '/accounts' },
	{ icon: <Investments className={styles.MenuSvg} />, text: 'Investments', path: '/investments' },
	{ icon: <CreditCards className={styles.MenuSvg} />, text: 'Credit Cards', path: '/credit-cards' },
	{ icon: <Loans className={styles.MenuSvg} />, text: 'Loans', path: '/loans' },
	{ icon: <Services className={styles.MenuSvg} />, text: 'Services', path: '/services' },
	{ icon: <MyPrivileges className={styles.MenuSvg} />, text: 'My Privileges', path: '/my-privileges' },
  	{ icon: <Setting className={styles.MenuSvg} />, text: 'Setting', path: '/settings' },
];

export const ROUTES = {
	DASHBOARD: '/dashboard',
	TRANSACTIONS: '/transactions',
	ACCOUNTS: '/accounts',
	INVESTMENTS: '/investments',
	CREDIT_CARDS: '/credit-cards',
	LOANS: '/loans',
	SERVICES: '/services',
	MY_PRIVILEGES: '/my-privileges',
	SETTINGS: '/settings',
};

const MenuItem = ({ icon, text, path }) => (
	<Link to={path}>
		<li className={styles.MenuItem}>
			{icon}
			<span>{text}</span>
		</li>
	</Link>
);

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
					{menuItems.map((item, index) => (
						<MenuItem key={index} icon={item.icon} text={item.text} path={item.path} />
					))}
				</ul>
			</div>
		</aside>
	);
}

export default Menu;
