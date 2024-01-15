import styles from "./style.scss";
import { Routes, Route } from "react-router-dom";
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
        <Route path={ROUTES.DASHBOARD} element={<Layout><Dashboard /></Layout>} />
        <Route path={ROUTES.TRANSACTIONS} element={<Layout><Transaction /></Layout>} />
        <Route path={ROUTES.ACCOUNTS} element={<Layout><Accounts /></Layout>} />
        <Route path={ROUTES.INVESTMENTS} element={<Layout><Investments /></Layout>} />
        <Route path={ROUTES.CREDIT_CARDS} element={<Layout><CreditCards /></Layout>} />
        <Route path={ROUTES.LOANS} element={<Layout><Loans /></Layout>} />
        <Route path={ROUTES.SERVICES} element={<Layout><Services /></Layout>} />
        <Route path={ROUTES.MY_PRIVILEGES} element={<Layout><MyPrivileges /></Layout>} />
        <Route path={ROUTES.SETTINGS} element={<Layout><Settings /></Layout>} />
      </Routes>
    </div>
  )
}

export default App;
