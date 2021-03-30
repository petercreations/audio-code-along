import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AlbumList } from 'pages/AlbumList'
import { AlbumDetail } from 'pages/AlbumDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
        <Route path="/album-detail/:idAlbum">
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
