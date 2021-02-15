import "./Assets/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminView from "./Views/AdminView";
import AdminCreateView from "./Views/AdminCreateView";
import LandingPageView from "./Views/LandingPageView";
import AboutPageView from "./Views/AboutPageView";
import ContactView from "./Views/ContactView";
import ProductDetails from "./Views/ProductDetails";
import AdminUpdateProductView from "./Views/AdminEditView";
import AdminPotentialClientsView from "./Views/AdminPotentialClientsView";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  // let productId = "";
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/" component={LandingPageView}></Route>
        <Route exact path="/about" component={AboutPageView}></Route>
        <Route exact path="/contact" component={ContactView}></Route>
        <Route path="/product/:productid">
          <ProductDetails />
        </Route>

        <Route exact path="/admin" component={AdminView}></Route>
        <Route
          exact
          path="/admin/potential_clients"
          component={AdminPotentialClientsView}
        ></Route>
        <Route path="/admin/create-product" component={AdminCreateView}></Route>
        <Route path="/admin/product/update/:productid">
          <AdminUpdateProductView />
        </Route>
      </Router>
    </GlobalProvider>
  );
}

export default App;
