import "./Assets/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminView from "./Views/AdminView";
import AdminCreateView from "./Views/AdminCreateView";
import LandingPageView from "./Views/LandingPageView";
import ProductDetails from "./Views/ProductDetails";
import AdminUpdateProductView from "./Views/AdminEditView";

function App() {
  // let productId = "";
  return (
    <Router>
      <Route exact path="/" component={LandingPageView}></Route>
      <Route path="/product/:productid">
        <ProductDetails />
      </Route>

      <Route exact path="/admin" component={AdminView}></Route>
      <Route path="/admin/create-product" component={AdminCreateView}></Route>
      <Route path="/admin/product/update/:productid">
        <AdminUpdateProductView />
      </Route>
    </Router>
  );
}

export default App;
