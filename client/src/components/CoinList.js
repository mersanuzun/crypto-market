import React from 'react';
import CoinItem from './CoinItem';
import {connect} from 'react-redux';
import Error from './Error';

class CoinList extends React.Component {
    render() {
        return (
            <ul className="collection">
                {
                    this.props.coin.error ? (
                        <Error message= {this.props.coin.error.message} />
                    ) : <CoinItem />
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps)(CoinList);