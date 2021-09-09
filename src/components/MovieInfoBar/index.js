import PropTypes from 'prop-types';

//helpers
import { calcTime, convertMoney } from '../../helpers';

//styles
import { Wrapper, Content } from "./MovieInfoBar.styles";


export default function MovieInfoBar({ time, budget, revenue }) {

    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Running time: {time ? calcTime(time) : "No Data Available"}</p>

                </div>
                <div className="column">
                    <p>Budget: {budget ? convertMoney(budget) : "No Data Available"}</p>

                </div>
                <div className="column">
                    <p>Revenue: {revenue ? convertMoney(revenue) : "No Data Available"}</p>

                </div>
            </Content>
        </Wrapper>
    );
}


MovieInfoBar.propType = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
};
