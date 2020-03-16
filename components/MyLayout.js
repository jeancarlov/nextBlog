// import Header from './Header';
import Navbar from './Header';
// import SignIn from '../pages/SignIn'



const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <div> 
      <title>100% Hustle </title>
      <link rel= "stylesheet" href= "https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
    </div>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
    
  </div>
);

export default Layout;
