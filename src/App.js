import './App.css';
import React, { useState, useContext } from 'react';
import ThemeButton from './ThemeButton';
import { themes, ThemeContext} from './ThemeContext';

// Crea el contexto
export const Context = React.createContext({count: 0, setCount: () => {}});

//
function LoadButton(props){
  return(
    <ThemeButton onClick={props.changeTheme}>
      Cambiar tema
    </ThemeButton>
  )
}


function App() {
  // const [count, setCount] = useState(0);
  const [theme, setTheme] = useState({background: '', color: ''});

  const themesNew = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }
  
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <LoadButton changeTheme={themesNew}/>
      </ThemeContext.Provider>
      
      {/* <Context.Provider value={{count, setCount}}>
        <ComponentConsumer></ComponentConsumer>
        <ComponentHook></ComponentHook>
        <ComponentClass></ComponentClass>
      </Context.Provider> */}
    </div>
  );
}


// Context Consumer
function ComponentConsumer() {
  return(
      <Context.Consumer>
        {(value) => {
          return(
            <div>
              <div>
                <span>{value.count}</span>
              </div>
              <button type="button" onClick={() => value.setCount(value.count + 1)}>
                Contar
              </button>
            </div>
          )
        }}
      </Context.Consumer>
  )
}

// Hook
function ComponentHook(){
  const contextHook = useContext(Context);

  return(
    <div>
      <div>
        <span>{contextHook.count}</span>
      </div>
      <button type="button" onClick={() => contextHook.setCount(contextHook.count + 1)}>Contar</button>
    </div>
  )

}

// Class
class ComponentClass extends React.Component{
  static contextType = Context;

  render(){
    return(
      <div>
        <div>
          <span>{this.context.count}</span>
        </div>
        <button type="button" onClick={() => this.context.setCount(this.context.count + 1)}>Contar</button>
      </div>
    )
  }
}

export default App;


