import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <section className="information-section light">
        <img
          className="information-img"
          src="/images/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"
          alt=""
        />
        <div className="content-info">
          <h1 className="info-title">Hi!</h1>
          <p className="info-description">
            Our team is a collective of passionate and creative professionals
            united by a common goal - to create the most modern and functional
            websites using the best technologies. Our mission is to provide you
            with web spaces that not only look impressive but also work
            seamlessly. With significant experience in web design and
            development, we blend elegant design with the latest innovations in
            web technologies to deliver websites that exceed our clients
            expectations. With us, you ll find a partnership that helps you rise
            above the competition and achieve success in the online world.
          </p>
        </div>
      </section>
      <section className="team-section light">
        <div className="content-team">
          <h1 className="team-title light">Meet Our Team</h1>
          <p className="team-description">
            Learn more about the talented individuals behind our projects.
          </p>
          <Link className="team-link light" to="/about-us">Meet the Team</Link>
   
        </div>
        <img src="/images/pngwing.com.png" alt="" />
      </section>

      <section className="contacts-info light">
        <h1></h1>
        <div className="content-contacts light">
          <ul role="list" className="contacts-list">
            <li className="contact">
              <a href="">
                <img
                  src="/images/pngwing.com (1).png"
                  alt=""
                />
                <p>***@gmail.com</p>
              </a>
            </li>
            <li className="contact">
              <a href="">
                <img
                  src="/images/pngwing.com (3).png"
                  alt=""
                />
                <p>Team</p>
              </a>
            </li>
          </ul>
          <ul role="list" className="contacts-list">
            <li className="contact">
              <a href="">
                <img
                  src="/images/pngwing.com (4).png"
                  alt=""
                />
                <p>Team</p>
              </a>
            </li>
            <li className="contact">
              <a href="">
                <img
                  src="/images/pngwing.com (2).png"
                  alt=""
                />
                <p>0812345678</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
