import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import MyBoards from './Routes/MyBoards'
import CommunityBoards from './Routes/CommunityBoards'
import CommunityPlayboard from './Routes/CommunityPlayboard'
import Support from './Routes/Support'
import LoginForm from './Routes/LoginForm'
import LandingPage from './Routes/LandingPage';
import RegistrationForm from './Routes/RegistrationForm';
import QuestionForm from './Routes/QuestionForm'
import ApiContext from './ApiContext'
import PlayBoard from './Routes/Playboard'
import PlayQuestion from './Routes/PlayQuestion'
import Board from './components/Board'
import AddBoard from './AddBoard';


class App extends Component {
  state = {
    hasError: false,
    board: [],
    user: {}
  }

  requestSupport = (event) => { }

  setUser = (event) => { }

  addBoard = (event) => { }

  deleteBoard = (event) => { }

  shareBoard = (event) => { }

  addQuestion = (event) => { }

  render() {
    const value = {
      board: this.state.board,
      addBoard: this.addBoard,
      deleteBoard: this.deleteBoard,
      shareBoard: this.shareBoard,
      addQuestion: this.addQuestion
    }
    console.log(value)

    return (
      <ApiContext.Provider value={value}>
        <div>
          <BrowserRouter>
            <Header />
            <main className='App'>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path='/login' component={LoginForm} />
                <Route path='/registration' component={RegistrationForm} />
                <Route path='/myboards' component={MyBoards} />
                <Route path='/newboard' component={AddBoard} />
                <Route path='/board/:id' component={Board} />
                <Route path='/questions/:category_id/:question_id/:board_id' component={QuestionForm} />
                <Route path='/play/:id' component={PlayBoard} />
                <Route path='/playquestion/:category_id/:question_id/:board_id' component={PlayQuestion} />
                <Route path='/community' component={CommunityBoards} />
                <Route path='/communityPlay/:id' component={CommunityPlayboard} />

                <Route path='/support' component={Support} />
                <Route component={Error} />
              </Switch>
            </main>
          </BrowserRouter>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App