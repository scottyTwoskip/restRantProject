const React = require('react')
const Def = require('./default')

function Home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <img src="/images/chris-knight-X64CwnARqzM-unsplash.jpg" alt="an image of a chocolate frapuccino" />
              <div>photo by <a href="https://unsplash.com/@chrisknight">Chris Knight</a><a href="https://unsplash.com/s/photos/free">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = Home