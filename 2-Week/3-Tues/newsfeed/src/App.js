import logo from './logo.svg';
import './App.css';
import NewsFeedApp from './NewsFeedApp';
function App() {
  const newsFeedData = [
    {
      title: "New York is getting its very own checkout-free Amazon Go store",
      tags: "Tech",
      image: "https://i.amz.mshcdn.com/3b45dtSbBVYC4rp4K7o1WLJxs1c=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F80483%2Ff5ca53a6-fc95-41e9-9a65-2d5ad5712823.jpg",
      impressions: 14
    },
    {
      title: "9 of the best fitness trackers because there are literally too many to choose",
      tags: "Tech",
      image: "https://i.amz.mshcdn.com/3b45dtSbBVYC4rp4K7o1WLJxs1c=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F80483%2Ff5ca53a6-fc95-41e9-9a65-2d5ad5712823.jpg",
      impressions: 104
    },
    {
      title: "The most addictive Google Doodle games to waste an afternoon at work",
      tags: "Culture",
      image: "https://i.amz.mshcdn.com/3b45dtSbBVYC4rp4K7o1WLJxs1c=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F80483%2Ff5ca53a6-fc95-41e9-9a65-2d5ad5712823.jpg",
      impressions: 222
    }
  ]
  return (
    <div className="App">
      <header>
        <section class="container">
          <a href="#">
            <h1>Feedr</h1>
          </a>
          <nav>
            <ul>
              <li><a href="#">News Source: <span>Source Name</span></a>
                <ul id="sourceMenuMain"></ul>
              </li>
            </ul>
            <section id="search">
              <input type="text" name="name" value="" />
              <a href="#"><img src="http://res.cloudinary.com/jkeohan/image/upload/v1533735338/search_icon.png" alt="" /></a>
            </section>
          </nav>
          <div class="clearfix"></div>
        </section>
      </header>
      <div id="popUp" class="loader">
        <a href="#" class="closePopUp">X</a>
        <div class="container">
          <h1>My sister just discovered stop motion...</h1>
          <p>
            My sister just discovered stop motion...
          </p>
          <a href="https://v.redd.it/8uh20iio7pe11" class="popUpAction" target="_blank">Read more from source</a>
        </div>
      </div>
      {/*<!--recreate the entire section below   -->*/}
      <section id="main" class="container">
        {newsFeedData.map((article) =>
          <NewsFeedApp article={article} />
        )}
      </section>
    </div>
  );
}
export default App;