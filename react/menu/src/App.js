import './App.css';
import Category_xx from './component/Categony';
import menu from './deta';
import Menulist from './component/Menu';
import {useState} from 'react';
function App() {


    const [newmenu, setMenu] = useState(menu);
    const categoryFilter = (choose) => {
      if (choose === 'all') {
        setMenu(menu);
      } else {
        setMenu(menu.filter((value) => value.category === choose));
      }
    }

    return (
      <section className="menu">
        {/* <!-- title --> */}
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- filter buttons --> */}
        <Category_xx categories={categoryFilter}>
        </Category_xx>
        {/* <!-- menu items --> */}
        <Menulist item={newmenu} />
        </section>
    );
  }

  export default App;
