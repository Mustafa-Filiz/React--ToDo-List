import './App.css';
import NavBar from './components/NavBar';
import TabsComp from './components/TabsComp';
import Tasks from './components/Tasks';
import ToggleColorMode from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
    return (
        <div className="App">
            <ToggleColorMode>
                <NavBar />
                <TodoListContextProvider>
                    <TabsComp />
                    {/* <Tasks /> */}
                </TodoListContextProvider>
            </ToggleColorMode>
        </div>
    );
}

export default App;
