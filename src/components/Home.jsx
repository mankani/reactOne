import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home1" id="home">
        <main>
          <h1>Home</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            deserunt rerum odio, adipisci aut aperiam maxime perspiciatis nulla
            nisi minus?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate sapiente autem consectetur veritatis consequatur a
            suscipit obcaecati repudiandae officia tenetur!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <a
                href="https://en.wikipedia.org/wiki/Travis_Scott"
                target="blank"
              >
                <AiFillGoogleCircle />
                <p>Google</p>
              </a>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.amazon.com/Jordan-Mens-CD4487-Travis-Scott/dp/B07RN27FFN/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rGmCjRmjoz8Zu_7F2IHrDguHgjKFHJd5LRMmjAGNAgJMwKGtUXNRzIEYw0aaV_Qm5Eu-9h3UF5LVL5FqC1IAytkcc4ARoWZU6VGEoEvP1PrRDAt9rC6WxoNWbNcmJVTbsW2rh1EW9M5yYQyoh6bJIgQYgfYrI80pe8jmw-_7T28z8tYaebdperxk8iQ7NerO5EF0bUkwt61Nluh2FOm09WUf21xk6un3uHzHCHxwkzK4ZxpvR7NzHT6_0mYf8duytGuF5M_7FfyqsVnBc-bhr84Fh-QOAmMW4T6gVJJCS9c.PTBFF6wrxayybfmD4PkppEfYEoahm6j9DmMPkbKwDz4&dib_tag=se&keywords=nike+travis+scott&qid=1723707019&sr=8-1"
                target="blank"
              >
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </a>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <a
                href="https://www.youtube.com/channel/UCtxdfwb9wfkoGocVUAJ-Bmg"
                target="blank"
              >
                <AiFillYoutube />
                <p>Youtube</p>
              </a>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <a
                href="https://www.instagram.com/travisscott/?hl=en"
                target="blank"
              >
                <AiFillInstagram />
                <p>Instagram</p>
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
