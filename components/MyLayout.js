import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <head> 
    <title>100% Hustle </title>
    <link rel= "stylesheet" href= "https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
    </head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
