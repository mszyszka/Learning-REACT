// function MyComponent1() {
//     return (
//       <div>
//         <h1>Witaj, świecie!</h1>
//         <h2>Jestem ambitna/y, więc przerabiam kurs React.js!</h2>
//       </div>
//     );
//   } 

// function MyComponent2() {
//   return (
//     <div>
//         <p>To jest mega drugi komponent</p>
//         <button>I jeszcze button</button>
//     </div>
//   );
// } 

// function MyComponent3() {
//   return (
//     <div>
//         <p>A to trzeci komponent</p>
//         <input type="text" placeholder="A to input"></input>
//     </div>
//   );
// } 

// ReactDOM.render(
//   <MyComponent1 />,
//   <MyComponent2 />,
//   <MyComponent3 />,
//   document.getElementById('app')
// );


 function MojKomponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>Jestem ambitna/y, więc przerabiam kurs React.js!</h2>
    </div>
  );
}

function MojKomponent2() {
    return (
      <div>
        <h1>Komponent 2</h1>
        <h2>Jestem ambitna/y, więc robię kolejny komponent</h2>
      </div>
    );
  }

  function MojKomponent3() {
    return (
      <div>
        <h1>To już hardcorowa pracowitość, robię trzeci komponent</h1>
        <h2>Trzeci komponent</h2>
      </div>
    );
  }

ReactDOM.render(
    <div>
        <MojKomponent />
        <MojKomponent2 />
        <MojKomponent3 />
    </div>,
  document.getElementById('app')
);

