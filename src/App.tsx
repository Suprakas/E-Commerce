import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from './components/loader'
import "./styles/app.scss"

// const Home = lazy(() => import ("./pages/home"))
// const Search = lazy(() => import("./pages/search"))
// const Cart = lazy(() => import("./pages/cart"))

const Dashboard = lazy(() => import("./pages/dashboard"))
const Products = lazy(() => import("./pages/products"))
const Customers = lazy(() => import("./pages/customers"))
const Transaction = lazy(() => import("./pages/transactions"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          /> */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          

          {/* Charts */}


          {/* Apps */}


          {/* Management */}
         
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App