import React from 'react'
import BoardNav from './BoardNav'
const { API_BASE_URL } = require('../config')


export default function BoardList(props) {

  return (
    <section className="board-list">
      <ul>
        <li>
          <div className="wrapper">
            <div>
              <BoardNav match={props.board_id}/>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
