import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component {
    state = {
        greeting: "hello!"
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         greeting: "Hello! Again!"
        //     });
        //     console.log("timeout executed!!!");
        // },5000);
        // let movieComponent = this;

        // setTimeout(function(){
        //     movieComponent.setState({
        //         greeting: "Hello Another!"
        //     });
        //     console.log("timeout executed!!!");
        // }, 5000);
    }

    static propTypes = {
        movieTitle: PropTypes.string.isRequired,
        // validation1
        /* movie : function(props, propName, componentName){
            let movieObject = props[propName];

            if(!movieObject.id || typeof movieObject.id !== "number"){
                return new Error(`property ${propName}.id is not valid.`);
            }

            if(!movieObject.title || typeof movieObject.title !== "string"){
                return new Error(`property ${propName}.title is not valid.`);
            }
         }*/

        //validation2
        movie: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            genres: PropTypes.array.isRequired,
            synopsis: PropTypes.string.isRequired
        })
    };

    render() {
        return (
            <div className="movie">
                <div>
                    <h1>{this.props.movie.title}</h1>
                    <h3>{this.state.greeting}</h3>
                </div>
                <div>
                    <MoviePoster imageSource={this.props.movie.imageSource} alterText={this.props.movie.title}/>
                    <MovieDumbPoster imageSource={this.props.movie.imageSource} alterText={this.props.movie.title}/>
                </div>
                <div>
                    <div>
                        {
                            this.props.movie.genres.map((genre) => <MovieGenre key={genre} genre={genre}/>)
                        }
                    </div>
                    <div>{this.props.movie.synopsis}</div>
                </div>
            </div>
        );
    }
}


class MoviePoster extends Component {
    //Smart Component
    static propTypes = {
        imageSource: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h4>This is Smart Component</h4>
                <img className="movie-poster" src={this.props.imageSource} alt={this.props.alterText}/>
            </div>
        );
    }
}

function MovieDumbPoster({imageSource, alterText}) {
    //Dumb Component
    return (
        <div>
            <h4>This is Dumb Component</h4>
            <img className="movie-poster" src={imageSource} alt={alterText}/>
        </div>
    );
}

MovieDumbPoster.propTypes = {
    imageSource: PropTypes.string.isRequired
}

function MovieGenre({genre}) {
    return (
        <span>{genre} </span>
    );
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
};

export default Movie;