import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello world 
//     </div>
//   );
// }

// export default App;

function ComponenteFUncional(){
  return(
    <h1>Teste</h1>
  )
}

class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) =>{ 
    this.setState({
      nome : event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes= ["Acreúna", "Goiânia", "Rio verde"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }  

  render(){
    return(
        <>
          <input type="text" placeholder="Digite seu nome" onChange={this.modificarNome} />
          <h1>Olá {this.state.nome}</h1>
          {this.criaComboBox()}
        </>
    )
  }
}

export default App;