import React from 'react'
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import './App.css';
import { Button } from "./component/Button";

function App() {
  return (
    <div className="App">
      <Navbar />
<div className = "jumbotron" id="jumbo">
<div className = "name">
THE ART GALLERY
</div>

<hr id='hrtag'></hr>
</div>
<div className = "body">
<br></br>

<p>Welcome to our Art Gallery!</p>
<p>We have a collection of priceless artworks from all around the world.</p>
<p>Hope you enjoy it :)</p>
<br></br>
<Button>View Artworks </Button>
</div>

    </div>
	
  );

}
export default App;
