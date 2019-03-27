function App() {
  return (
    <div>

    </div>
  );
}

function AppHeader() {
  return (
    <header classNameName="ui fixed menu">
      <nav className="ui container">
        <a href="#" className="header item">
          <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
          Lista kontaktów
        </a>
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
    );
}

function ContactList() {
  return (
    <main className="ui main text container">
      <ul className="ui relaxed divided list selection">

      </ul>
   </main>
  );
}

function ContactItem() {
  return (
    <li className="item">
      <img src="https://api.adorable.io/avatars/55/typeofweb1.png" className="ui mini rounded image" />
      <div className="content">
        <h4 className="header">Lena</h4>
        <div className="description">JavaScript Developer</div>
      </div>
    </li>
    );  
}