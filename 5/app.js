import React, { Component } from 'react';
import './App.css';
import RhyWordRow from './RhyWordRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("test")
  }

  getRhymes(searchTerm);


    const getRhymes = async (searchTerm) => {
    var res = await fetch(`https://api.datamuse.com/words?rel_rhy=${searchTerm}&max=40`)
    var rhyme_list = await res.json()


    console.log(rhyme_list) 

    var new_rhymes = [];

    if (rhyme_list.length < 1) {
      setRhymes(["No rhymes in database D:"])
      return;
    }





    else {
      for(var i = 0; i < 3; i++) {
        var randInt = randomInt(1, rhyme_list.length)
        var rh = rhyme_list[randInt]['word'].toUpperCase()

        if (new_rhymes.includes(rh) || rh.includes(word) || rh.length <= 2) {
          i -= 1;
        } else {
          new_rhymes.unshift(rh);
        }
      }
    }

    setRhymes(new_rhymes);
  }

  performSearch(searchTerm) {
    console.log("Perform search using worddb")
    const urlString = "https://api.datamuse.com/words?rel_rhy=" + searchTerm + "&max=40"

    fetch(urlString)
      .then(res => res.json())
      .then(json => {
          this.setRhymes({
              isLoaded:true,
              item:json,
          })
      });

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    var{isLoaded, items} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
     
    else {
      return (
       <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>Near Rhymes Words Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter a search word"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
