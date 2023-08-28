const React = require('react')
const Def = require('./default')

function Error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/dan-cutler-WsBtj3RL0fs-unsplash.jpg" alt="An image of the harry potter area at Disney." />
              <a href="https://unsplash.com/@danielhombre19">Dan Culter</a><a href="https://unsplash.com/">Unsplash</a>
          </main>
      </Def>
    )
  }

  module.exports = Error404