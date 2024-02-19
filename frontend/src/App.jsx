import './App.scss';
import Menu from './Menu.jsx';
import Overview from './Overview.jsx';


function App() {

    return (
        <>
            <Menu />
            <div className='content'>
                <div className='search'>search</div>
                <Overview />
            </div>
        </>
    )
}

export default App
