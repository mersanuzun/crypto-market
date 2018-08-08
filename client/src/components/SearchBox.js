import React from 'react';
import { makeDebounce } from '../utils';
import * as actions from '../actions';
import { connect } from "react-redux";

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.debouncFunc = makeDebounce(this, 700);
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <textarea
                        id="textarea2"
                        className="materialize-textarea"
                        data-length="120"
                        onChange={(e) => {
                            const value = e.target.value;
                            this.debouncFunc(
                                () => this.props.fetchCoin(value)
                            );
                        }}
                    />
                    <label htmlFor="textarea2">Coin Name</label>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(SearchBox);