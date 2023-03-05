import React, { useReducer } from 'react'

import { useFetch } from '../../../HOC/useFetch'
import Card from '../card/Card'
import { urls } from '../../../helpers/urlForApi'
import './userList.css'

function UserList() {
  const { users, links, total_pages, page, getNewListOfUsers, isLastPages } =
    useFetch(urls.GET)

  return (
    <div className="block_get content_center ">
      <h2 className="h1" onClick={() => {}}>
        Working with GET request
      </h2>
      <section className="block_get--list">
        {users.map((user, index) => {
          return <Card {...user} key={user.id} />
        })}
      </section>
      <button
        className={`${
          isLastPages ? 'p1 btn show_btn finished' : 'p1 btn show_btn'
        }`}
        onClick={() => {
          getNewListOfUsers(links.next_url, total_pages, page)
        }}
      >
        Show more
      </button>
    </div>
  )
}

export default UserList
