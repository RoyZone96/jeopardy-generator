import React, { Component } from 'react'

export default class SortSelect extends Component {
    state = {
        isSorted: false
    }

    // componentDidMount(){
    //     Promise.all([
    //         fetch(`${config.API_ENDPOINT}/boards/`)
    //     ])
    //         .then(([boardsRes]) => {
    //             if (!boardsRes.ok)
    //                 return boardsRes.json().then(e => Promise.reject(e));
    //             return Promise.all([boardsRes.json()]);
    //         })
    //         .then(([boards]) => {
    //             this.setState({ boards });
    //             console.log(boards)
    //         })
    //         .catch(error => {
    //             console.log({ error });
    //         });
    // }
    // }

    handleToggleDefault = () => {
        window.location = '/myboards'

        const user_id = TokenService.getUserId()
        console.log(user_id)

        let boardUrl = `${config.API_ENDPOINT}/boards`

        console.log(boardUrl)

        fetch(boardUrl)
            .then((boardsRes) => {
                if (!boardsRes.ok)
                    return boardsRes.json().then(e => Promise.reject(e));
                return boardsRes.json();
            })
            .then((boards) => {

                console.log(boards)
                console.log(user_id)

                let filteredBoards = [];
                for (let i = 0; i < boards.length; i++) {
                    if (boards[i].user_id == user_id) {
                        filteredBoards.push(boards[i]);
                    }
                }
                this.setState({ boards: filteredBoards });
            })
            .catch(error => {
                console.log({ error });
            });

    }

    handleToggleNames = () => {
        this.setState({ isSorted: true })
        window.location = '/myboards'

        const user_id = TokenService.getUserId()
        console.log(user_id)

        let boardUrl = `${config.API_ENDPOINT}/boards/sort-by/names`

        console.log(boardUrl)

        fetch(boardUrl)
            .then((boardsRes) => {
                if (!boardsRes.ok)
                    return boardsRes.json().then(e => Promise.reject(e));
                return boardsRes.json();
            })
            .then((boards) => {

                console.log(boards)
                console.log(user_id)

                let filteredBoards = [];
                for (let i = 0; i < boards.length; i++) {
                    if (boards[i].user_id == user_id) {
                        filteredBoards.push(boards[i]);
                    }
                }
                this.setState({ boards: filteredBoards });
            })
            .catch(error => {
                console.log({ error });
            });

    }

    handleToggleDates = () => {
        this.setState({ isSorted: true })
        window.location = '/myboards'

        const user_id = TokenService.getUserId()
        console.log(user_id)

        let boardUrl = `${config.API_ENDPOINT}/boards/sort-by/names`

        console.log(boardUrl)

        fetch(boardUrl)
            .then((boardsRes) => {
                if (!boardsRes.ok)
                    return boardsRes.json().then(e => Promise.reject(e));
                return boardsRes.json();
            })
            .then((boards) => {

                console.log(boards)
                console.log(user_id)

                let filteredBoards = [];
                for (let i = 0; i < boards.length; i++) {
                    if (boards[i].user_id == user_id) {
                        filteredBoards.push(boards[i]);
                    }
                }
                this.setState({ boards: filteredBoards });
            })
            .catch(error => {
                console.log({ error });
            });
    }

    render() {
        return (
            <div className="sorter clearfix">
                <select name="sorting" id="sort-bar">
                    <option value="default" onChange={this.handleToggleDefault}>Default</option>
                    <option value="name" onChange={this.handleToggleNames}>Alphabetical</option>
                    <option value="recent" onChange={this.handleToggleDates}>Recent</option>
                </select>
            </div>
        )
    }
}

