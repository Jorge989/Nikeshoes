import "./App.css";
import nike1 from "./assets/run2.png";
import nike2 from "./assets/run5.png";

import nike4 from "./assets/runnew.png";
function App() {
  return (
    <body>
      <section>
      <div className="container">
        <div className="card">
          <div className="imgBx">
          <img src={nike1} alt="nike"></img>
          <h2>Nike Shoes</h2>
          </div>
          <div className="content">
            <div className="size">
<h3>Size :</h3>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>

</div>
<div className="color">
<h3>Color :</h3>
<span></span>
<span></span>
<span></span>
<span></span>

</div>
<a href="/about">Buy Now</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
          <img src={nike2} alt="nike"></img>
          <h2 className="nike2">Nike Shoes</h2>
          </div>
          <div className="content">
            <div className="size">
<h3>Size :</h3>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>

</div>
<div className="color">
<h3>Color :</h3>
<span></span>
<span></span>
<span></span>
<span></span>

</div>
<a href="/about">Buy Now</a>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
          <img src={nike4} alt="nike"></img>
          <h2 className="nike3">Nike Shoes</h2>
          </div>
          <div className="content">
            <div className="size">
<h3>Size :</h3>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>

</div>
<div className="color">
<h3>Color :</h3>
<span></span>
<span></span>
<span></span>
<span></span>

</div>
<a href="/about">Buy Now</a>
          </div>
        </div>
      </div>
      </section>
    </body>
  );
}

export default App;
