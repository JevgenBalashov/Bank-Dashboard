//eslint-disable-next-line
import styles from "./style.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./components/SideMenu/SideMenu";
import Menu from "./components/SideMenu/SideMenu";
import Layout from "./components/Pages/Layout/Layout";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Transaction from "./components/Pages/Transactions/Transactions";
import Accounts from "./components/Pages/Accounts/Accounts";
import Investments from  "./components/Pages/Investments/Investments";
import CreditCards from "./components/Pages/CreditCards/CreditCards";
import Loans from "./components/Pages/Loans/Loans";
import Services from "./components/Pages/Services/Services";
import MyPrivileges from "./components/Pages/MyPrivileges/MyPrivileges";
import Settings from "./components/Pages/Setting/Setting";



function App() {
	return (
		<div className="application">
		<Menu />
		<Routes>
			<Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
			<Route path={ROUTES.DASHBOARD} element={<Layout title="Overview"><Dashboard /></Layout>} />
			<Route path={ROUTES.TRANSACTIONS} element={<Layout title="Transactions"><Transaction /></Layout>} />
			<Route path={ROUTES.ACCOUNTS} element={<Layout title="Accounts"><Accounts /></Layout>} />
			<Route path={ROUTES.INVESTMENTS} element={<Layout title="Investments"><Investments /></Layout>} />
			<Route path={ROUTES.CREDIT_CARDS} element={<Layout title="Credit Cards"><CreditCards /></Layout>} />
			<Route path={ROUTES.LOANS} element={<Layout title="Loans"><Loans /></Layout>} />
			<Route path={ROUTES.SERVICES} element={<Layout title="Services"><Services /></Layout>} />
			<Route path={ROUTES.MY_PRIVILEGES} element={<Layout title="My Privileges"><MyPrivileges /></Layout>} />
			<Route path={ROUTES.SETTINGS} element={<Layout title="Settings"><Settings /></Layout>} />
		</Routes>
		</div>
	)
}

export default App;
