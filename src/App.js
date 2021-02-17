import "./Assets/css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminView from "./Views/AdminView";
import AdminCreateView from "./Views/AdminCreateView";
import LandingPageView from "./Views/LandingPageView";
import AboutPageView from "./Views/AboutPageView";
import ContactView from "./Views/ContactView";
import ProductDetails from "./Views/ProductDetails";
import AdminUpdateProductView from "./Views/AdminEditView";
import AdminProductConfirmDeleteView from "./Views/AdminProductConfirmDelete";
import AdminClientConfirmDeleteView from "./Views/AdminClientConfirmDelete";
import AdminPotentialClientsView from "./Views/AdminPotentialClientsView";

import LoginView from "./auth/LoginView";
import ProtectedRoute from "./auth/ProtectedRoute";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPageView}></Route>
          <Route exact path="/about" component={AboutPageView}></Route>
          <Route exact path="/contact" component={ContactView}></Route>
          <Route path="/product/:productid">
            <ProductDetails />
          </Route>

          <ProtectedRoute
            exact
            path="/admin"
            component={AdminView}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/potential_clients"
            component={AdminPotentialClientsView}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/create-product"
            component={AdminCreateView}
          ></ProtectedRoute>
          <ProtectedRoute path="/admin/product/update/:productid">
            <AdminUpdateProductView />
          </ProtectedRoute>
          <ProtectedRoute path="/admin/product/delete/:productid">
            <AdminProductConfirmDeleteView />
          </ProtectedRoute>
          <ProtectedRoute path="/admin/potential_clients/delete/:productid">
            <AdminClientConfirmDeleteView />
          </ProtectedRoute>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
