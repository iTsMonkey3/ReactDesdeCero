
import './App.css'

function App() {

  // const imprimir = (e) => {
  //   e.preventDefault();
  //   // El preventeDefault evita el recargar la pagina al pulsar el boton de 'enviar' del forms
  //   console.log("Haz pulsado el boton");
  //   // Esta funcion es el evento de cuando se pulsa el boton
  // };

  const addToDo = (e) => {
    e.preventDefault();
    console.log("add");
  };

  return (
    <>
        <h1>Todo debe de ir dentro del fragmento principal -ES EL QUE ESTÁ DESPUES DEL RETURN-</h1>
        <hr/>
        <form onSubmit={addToDo}>
          <input type="text" placeholder='Agrega lo que quieres a la lista'/>
          <button type='submit'>Add</button>
          {/* <button onClick={imprimir}>Echale</button> */}
          {/* Aqui arriba se llama a la funcion que está declarada más arriba, es Js */}
        </form>
    </>
  )
}

export default App
