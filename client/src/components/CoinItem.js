import React from 'react';
import {connect} from "react-redux";

class CoinItem extends React.Component {
    render() {
        const coinData = this.props.coin.data;

        return (
            <li className="collection-item avatar">
                <div className="title">{coinData && coinData.symbol}</div>
                <div className="name">{coinData && coinData.name}</div>
                <div>{coinData && coinData.price}$</div>
                <div>Changed {coinData && coinData.percentChange24h}%</div>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps)(CoinItem);