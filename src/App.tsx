import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Transaction = lazy(() => import("./pages/transactions"));
const Customers = lazy(() => import("./pages/customers"));
const NewProduct = lazy(() => import("./pages/management/newProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/productManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/transactionManagement")
);

const BarCharts = lazy(() => import("./pages/charts/barCharts"));
const LineCharts = lazy(() => import("./pages/charts/lineCharts"));
const PieCharts = lazy(() => import("./pages/charts/pieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/stopwatch"));
const Coupon = lazy(() => import("./pages/apps/coupon"));
const Toss = lazy(() => import("./pages/apps/toss"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps */}

          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;