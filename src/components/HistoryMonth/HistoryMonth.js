import React, {Component} from "react";

import './HistoryMonth.css';

import Aux from '../../hoc/Aux/Aux';

class HistoryMonth extends Component{
    render(){
        return(
            <Aux>
                <div className="HistoryMonth"  onClick={this.props.onClick}>
                    <h2>January 2022</h2>
                    <i className="fas fa-chevron-right historyChevron"></i>
                </div>
            </Aux>
        );
    }
}

export default HistoryMonth;