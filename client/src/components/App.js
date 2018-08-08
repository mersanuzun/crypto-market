import React from 'react';
import SearchBox from './SearchBox';
import CoinList from './CoinList';
import Navbar from './Navbar';
import Loading from './Loading.js';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <SearchBox />
                {
                    this.props.coin.isFetching ? <Loading /> : (
                        (this.props.coin.data || this.props.coin.error) && <CoinList />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps)(App)