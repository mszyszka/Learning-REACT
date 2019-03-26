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
        <br/>
        <br/>
        <h1>Lekcja 2 - Props - czyli atrybuty w React.Js</h1>
      </div>
    );
  }
 
  function MojKomponent4({title,content}) {
    return (
      <div>
        <dialog open>
          <h1>{title}</h1>
          <p>{content}</p>
        </dialog>
      </div>
    );
  }

ReactDOM.render(
    <div>
        <MojKomponent />
        <MojKomponent2 />
        <MojKomponent3 />
        <MojKomponent4 title='Tytuł' content='Kontent' />

    </div>,
  document.getElementById('app')
);

