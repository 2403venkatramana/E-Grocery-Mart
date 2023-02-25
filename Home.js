import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://thumbs.dreamstime.com/b/young-girl-holds-full-paper-bag-groceries-white-wooden-background-above-top-view-flat-lay-young-girl-holds-full-paper-117080551.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The juicy Chicken: Much tender and soft chicken 1KG best for BBQ and Biriyani from handpicked country hens"
            price={250.96}
            rating={5}
            image="https://th.bing.com/th/id/R.a1dc3376a59aae3024afb51e582cee55?rik=eODU7e%2fUTc8kFg&riu=http%3a%2f%2fwww.gulftoday.ae%2f-%2fmedia%2fgulf-today%2fimages%2farticles%2flifestyle%2f2019%2f5%2f16%2fchicken.ashx%3fh%3d450%26w%3d750%26hash%3d90CA565ECE4071D8310191134EDFE2A5&ehk=ycR6d12fF3lNTjgfOS6AQq8456lN0JOm6l7IZ5mcRAI%3d&risl=&pid=ImgRaw&r=0"
          />
          <Product
            id="49538094"
            title="Fine harvested Basmati rice from foot meshed farmers fields of thanjavur 1KG "
            price={120.0}
            rating={4}
            image="https://5.imimg.com/data5/VW/NA/MY-14442040/long-grain-basmati-rice-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Juicy Tendery Mutton "
            price={900.99}
            rating={5}
            image="https://s3.ap-south-1.amazonaws.com/diingdong/1588869169_Mutton-curry-cut-with-bone1.jpg"
          />
          <Product
            id="23445930"
            title="Deep rooted carrot from the fresh fields of ooty and hill stations"
            price={98.99}
            rating={5}
            image="https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/02/iStock-1015995028.jpg?fit=2119%2C1414&ssl=1https://www.msn.com/en-in/health/health-news/whip-up-this-quick-hormone-balancing-carrot-salad-today/ar-AA16Ar2S?fullscreen=true&cvid=982b9225ae96409f8665a2e0a8630300#image=1"
          />
          <Product
            id="3254354345"
            title="Fine harvested green Broccolli from the fields of Rajasthan"
            price={75.00}
            rating={4}
            image="https://www.agrifarming.in/wp-content/uploads/2015/03/Harvested-Broccoli.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="juicy Tomatoes from the fields of udagamandalam"
            price={45.00 }
            rating={3}
            image="https://th.bing.com/th/id/R.3dad5b35b5c2154fbd2ccfff58bfdb2d?rik=LpMV%2f4Y3%2bVdEuw&riu=http%3a%2f%2freadyplanted.files.wordpress.com%2f2011%2f07%2ftomato.jpg&ehk=PbonS8Zx0hWSI7NCiaQd2iV4x2gTOq8ctfzwx7imtoI%3d&risl=&pid=ImgRaw&r=0"
          />
          <Product
            id="23445930"
            title="Fine treated beef from the cattle of our own state"
            price={98.99}
            rating={5}
            image="https://south40beef.com/wp-content/uploads/2020/05/London-Broil.jpg"
          />
          <Product
            id="3254354345"
            title="Freshly made panner from the full fat milk"
            price={80.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoGg_-Fyi8RqLm2Ijaqmlvh-CbGHqBcytTQ&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Finely processed Margherita cheese from jersey cow milk"
            price={100.96}
            rating={5}
            image="https://ca-times.brightspotcdn.com/dims4/default/2b7deda/2147483647/strip/true/crop/2048x1280+0+43/resize/1200x750!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fa5%2Fd673ffac73e3ff63f2f3c095fde9%2Fhomemade-american-cheese-recipes-db"
          />
          <Product
            id="49538094"
            title="Freshly harvested Mushrooms from the coolness of ooty"
            price={50.0}
            rating={4}
            image="https://cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Freshly baked sliced bread from the owens of chennai"
            price={35.20}
            rating={3}
            image="https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/3abc9dec-59b6-445e-8ad7-eacc5fd80b1f.jpg"
          />
          <Product
            id="23445930"
            title="Freshly got from the country cows of tamilnadu"
            price={40.00}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="3254354345"
            title="Finely harvested potatoes from the roots of haryana"
            price={25.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezc4jE9ffNs2wTUlN--upfrkVNwBNqgYvVg&usqp=CAU"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="One of the finest thing about the dairy product is dark chocolate directly from the factories of ooty"
            price={190.98}
            rating={4}
            image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F08%2F09%2Ffair-trade-chocolate-bar-102843272-silo-horiz-0822.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
