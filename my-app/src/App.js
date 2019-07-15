import React, {Component} from 'react';
import './App.css';
import Movie from './movie';
import axios from 'axios';

/*
* <React Life Cycle>
* Render>
*   componentWillMount() -> render() -> componentDidMount()
*
* Update>
*   componentWillReceiveProps() -> shouldComponentUpdate() ->
*   componentWillUpdate() -> render() -> componentDidUpdate()
*
*   ###
*   react에서는 기존 prop 값과 새 prop 값을 비교하여 값이 변경된 경우에만 Update를 실행한다.
*   shouldComponentUpdate()에서 기존 prop 값과 새 prop 값을 비교
*
* <React State>
*   언제든지 Component의 State가 변경되면 react는 render를 다시 수행한다
*
*   Smart Component VS Dumb Component
*
*   Smart Component
*       : State가 있는 Component
*
*   Dumb Component
*       : State가 없는 Component(Stateless Component)
*         render() 함수가 없으며 Component의 라이프 사이클도 없다.
*
* */

class App extends Component {
    state = {
        // movies : [
        //     {
        //         id: 1,
        //         title: "Matrix",
        //         imageSource: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        //     },
        //     {
        //         id: 2,
        //         title: "Star Wars",
        //         imageSource: "https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
        //     },
        //     {
        //         id: 3,
        //         title: "Old Boy",
        //         imageSource: "http://blog.jinbo.net/attach/615/200937431.jpg"
        //     },
        //     {
        //         // id: "2tt",
        //         id: 4,
        //         title: "Test",
        //         imageSource: "http://blog.jinbo.net/attach/615/200937431.jpg"
        //     }
        // ]
    }

    componentWillMount() {
        console.log("###componentWillMount() START ###");

        console.log(this.state.movies);

        console.log("###componentWillMount() END ###");
    }

    componentDidMount() {
        let appComponent = this;
        console.log("###componentDidMount() START ###");


        appComponent._getMovies();

        // setTimeout(() => {
        //     this.setState({
        //         // movies: [
        //         //     ...this.state.movies,
        //         //     {
        //         //     id: 5,
        //         //     title: "Test1",
        //         //     imageSource: "https://pbs.twimg.com/media/DW-E70PV4AAl86E.jpg"
        //         // }]
        //
        //         movies: [
        //             {
        //                 id: 1,
        //                 title: "Matrix",
        //                 imageSource: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        //             },
        //             {
        //                 id: 2,
        //                 title: "Star Wars",
        //                 imageSource: "https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
        //             },
        //             {
        //                 id: 3,
        //                 title: "Old Boy",
        //                 imageSource: "http://blog.jinbo.net/attach/615/200937431.jpg"
        //             },
        //             {
        //                 // id: "2tt",
        //                 id: 4,
        //                 title: "Test",
        //                 imageSource: "http://blog.jinbo.net/attach/615/200937431.jpg"
        //             },
        //             {
        //                 id: 5,
        //                 title: "Test1",
        //                 imageSource: "https://pbs.twimg.com/media/DW-E70PV4AAl86E.jpg"
        //             }
        //         ]
        //     });
        // }, 3000);

        console.log("###componentDidMount() END ###");
    }

    async _getMovies() {
        let movies = await this._callApi();

        this.setState({
            movies: movies
        });
    }

    _callApi() {
        return axios.get("https://yts.lt/api/v2/list_movies.json", {}).then((response) =>{
            return response.data.data.movies.map(movie => {
                return {
                    id: movie.id,
                    title: movie.title,
                    imageSource: movie.medium_cover_image,
                    genres: movie.genres,
                    synopsis: movie.synopsis
                };
            })
        }).catch((error) => {
                console.log(error);
                throw new Error();
            });
    }

    _renderMovies() {
        return this.state.movies.map(movie => {
            return <Movie key={movie.id} movie={movie} movieTitle={movie.title}/>
        })
    }

    _loading() {
        console.log("###loading()");
        return "Loading...";
    }

    render() {
        console.log("###render()");
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : this._loading()}
            </div>
        );
    }
}

export default App;
