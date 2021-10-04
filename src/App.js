import './App.css';
import NavBar from './components/NavBar';
import TabsComp from './components/TabsComp';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <NavBar />
                <TodoListContextProvider>
                    <TabsComp />
                </TodoListContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
