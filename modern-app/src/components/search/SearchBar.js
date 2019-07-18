import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="enter search text" onInput={(event) => this.setState({term: event.target.value})}/>
                <button >search</button>
                {this.state.term}
            </div>
        );
    }
}

export default SearchBar;