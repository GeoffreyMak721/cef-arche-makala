import React from "react";
import { imageBuilder } from "../../lib/sanity";

function Main({ allPosts, gallery }) {
  let annonces;
  let evenements;
  let citations;
  let programmes;

  allPosts?.forEach((post) => {
    switch (post.type) {
      case "annonce": {
        annonces = post.articles;
        break;
      }
      case "evenement": {
        evenements = post.articles;
        break;
      }
      case "citation": {
        citations = post.articles;
        break;
      }
      case "programme": {
        programmes = post.articles;
        break;
      }
      default:
        break;
    }
  });

  return (
    <main>
      <div className="trending-area fix pt-25 gray-bg">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-8">
                <div className="slider-active">
                  {citations?.map((citation) => (
                    <div key={citation._id} className="single-slider">
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={imageBuilder(citation.img).url()} alt="" />
                          <div className="trend-top-cap">
                            <span
                              className="bgg"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {citation.badge}
                            </span>
                            <h2>
                              <a
                                href="latest_news.html"
                                data-animation="fadeInUp"
                                data-delay=".4s"
                                data-duration="1000ms"
                              >
                                {citation.title}
                              </a>
                            </h2>
                            <p
                              data-animation="fadeInUp"
                              data-delay=".6s"
                              data-duration="1000ms"
                            >
                              {citation.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="slider-active">
                  {programmes?.map((programme) => (
                    <div key={programme._id} className="single-slider">
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={imageBuilder(programme.img).url()} alt="" />
                          <div className="trend-top-cap">
                            <span
                              className="bgb"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {programme.badge}
                            </span>
                            <h2>
                              <a
                                href="latest_news.html"
                                data-animation="fadeInUp"
                                data-delay=".4s"
                                data-duration="1000ms"
                              >
                                {programme.title}
                              </a>
                            </h2>
                            <p
                              data-animation="fadeInUp"
                              data-delay=".6s"
                              data-duration="1000ms"
                            >
                              {programme.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="slider-active">
                  {annonces?.map((annonce) => (
                    <div key={annonce._id} className="single-slider">
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={imageBuilder(annonce.img).url()} alt="" />
                          <div className="trend-top-cap">
                            <span
                              className="bgr"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {annonce.badge}
                            </span>
                            <h2>
                              <a
                                href="latest_news.html"
                                data-animation="fadeInUp"
                                data-delay=".4s"
                                data-duration="1000ms"
                              >
                                {annonce.title}
                              </a>
                            </h2>
                            <p
                              data-animation="fadeInUp"
                              data-delay=".6s"
                              data-duration="1000ms"
                            >
                              {annonce.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trending-area fix pt-25">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-8">
                <div className="small-tittle mb-20">
                  <h4>Evenements</h4>
                </div>
                <div className="slider-active">
                  {evenements?.map((evenement) => (
                    <div key={evenement._id} className="single-slider">
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={imageBuilder(evenement.img).url()} alt="" />
                          <div className="trend-top-cap">
                            <span
                              className="bgr"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {evenement.badge}
                            </span>
                            <h2>
                              <a
                                href="latest_news.html"
                                data-animation="fadeInUp"
                                data-delay=".4s"
                                data-duration="1000ms"
                              >
                                {evenement.title}
                              </a>
                            </h2>
                            <p
                              data-animation="fadeInUp"
                              data-delay=".6s"
                              data-duration="1000ms"
                            >
                              {evenement.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weekly3-news-area pt-10 pb-130">
        <div className="container">
          <div className="weekly3-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5>Revivez nos cultes</h5>
                      <div className="weekly3-news-active dot-style d-flex">
                        {gallery?.map((gallerie) => (
                          <div key={gallerie._id} className="weekly3-single">
                            <div className="weekly3-img">
                              <img
                                src={imageBuilder(gallerie.img).url()}
                                alt=""
                              />
                            </div>
                            <div className="weekly3-caption">
                              <h5>{gallerie.title}</h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
