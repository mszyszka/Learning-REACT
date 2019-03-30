import React from 'react';
/////////////////////Lekcja 5 ///////////////////////////
function App() {
  return (
    <div>
      <AppHeader />
      <main className="ui main text container">
        <ContactList />
      </main>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));

// function AppHeader() {
//   return (
//     <header className="ui  menu">
//       <nav className="ui container">
//         <a href="#" className="header item">
//           <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
//           Lista kontaktów
//         </a>
//         <div className="header item">
//           <button className="ui button">Dodaj</button>
//         </div>
//       </nav>
//     </header>
//     );
// }



// function ContactList() {
//   return (
//       <ul className="ui relaxed divided list selection">
//         <ContactItem 
//                 login="typeofweb2"
//                 name="Lena"
//                 department="JavaScript Developer"
//         />
//         <ContactItem 
//                 login="typeofweb1"
//                 name="Mark"
//                 department="Java Master"
//         />
//         <ContactItem 
//                 login="typeofweb3"
//                 name="John"
//                 department="Head Hunterd"
//         />
//       </ul>
//   );
// }



// function ContactItem({login, name, department}) {
//   const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
//   return (
//     <li className="item">
//       <img src= {imgUrl} className="ui mini rounded image" />
//       <div className="content">
//         <h4 className="header">{name}</h4>
//         <div className="description">{department}</div>
//       </div>
//     </li>
//     );  
// }

/////////////////////Lekcja 6 - klasy jako komponenty w REACT///////////////////////////
export class AppHeader extends React.Component {
  render(){
    return(
    <header className="ui  menu">
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
}

export class ContactList extends React.Component {
  render(){
    return(
      <ul className="ui relaxed divided list selection">
        <ContactItem 
                login="typeofweb2"
                name="Lena"
                department="JavaScript Developer"
        />
        <ContactItem 
                login="typeofweb1"
                name="Mark"
                department="Java Master"
        />
        <ContactItem 
                login="typeofweb3"
                name="John"
                department="Head Hunterd"
        />
      </ul>
    )
  }
}

export class ContactItem extends React.Component {
  render() {
    const {login, name, department} = this.props;
    const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
    return (
      <li className="item">
      <img src= {imgUrl} className="ui mini rounded image" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
    );
  }
}
