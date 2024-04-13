import UserApp from "./user/userapp";
import SellerApp from "./seller/sellerapp";

function App() {
  let login = true;
  if (login) return <SellerApp />;
  else return <UserApp />;
}

export default App;
