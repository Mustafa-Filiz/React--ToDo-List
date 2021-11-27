import './App.css';
import NavBar from './components/NavBar';
import TabsComp from './components/TabsComp';
import ToggleColorMode from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
    return (
        <div className="App">
            <ToggleColorMode>
                <NavBar />
                <TodoListContextProvider>
                    <TabsComp />
                </TodoListContextProvider>
            </ToggleColorMode>
        </div>
    );
}

export default App;
