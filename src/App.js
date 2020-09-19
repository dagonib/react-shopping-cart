import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <header>
                        <a href="/">React Shopping Cart</a>
                    </header>
                    <main className="content">
                        <div className="main">
                            <Filter></Filter>
                            <Products></Products>
                        </div>
                        <div className="sidebar">
                            <Cart />
                        </div>
                    </main>
                    <footer>All rigth reserved.</footer>
                </div>
            </Provider>
        );
    }
}

export default App;
