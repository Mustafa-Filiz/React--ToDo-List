import './App.css';
import NavBar from './components/NavBar';
import TabsComp from './components/TabsComp';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
    return (
        <div className="App">
            <TodoListContextProvider>
                <NavBar />
                <TabsComp />
            </TodoListContextProvider>
        </div>
    );
}

export default App;
