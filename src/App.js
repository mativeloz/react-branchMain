import logo from './logo.svg';
import './App.css';
import MyComponents from './components/MyComponents';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {

// const saludar = () => {
//   console.log('Que onda pana');
// }

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a mi tienda'}/>
      {/* <MyComponents name='ALUMNOS CODER' saludar={saludar}  /> */}
    </>
  );
}

export default App;
