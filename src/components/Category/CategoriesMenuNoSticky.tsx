import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const CategoriesMenuNoSticky = (props: Props) => {
  return (
    <section className="category sticky nosticky">
      <div className="category_wrapper">
        <div className="category_container container">
          <div className="category__menu">
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Graphics & Design
              </NavLink>
              <div className="category__jobdetail">
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Marketing Design</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social Media Marketing
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Influencer Marketing
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Brand Style Guides
                  </NavLink>
                </div>
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Design Mobile APP</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social Media Marketing
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Digital Marketing
              </NavLink>
              <div className="category__jobdetail">
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Social</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social Media Marketing
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Influencer Marketing
                  </NavLink>
                </div>
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Advertising</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social Media Advertising
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Search Engine Marketing (SEM)
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Writing & Translation
              </NavLink>
              <div className="category__jobdetail">
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">
                    Content Writing & Editing
                  </p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Articles & Blog Posts
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Proofreading & Editing
                  </NavLink>
                </div>
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Business Copy</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Brand Voice & Tone
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Business Names & Slogans
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Video & Animation
              </NavLink>
              <div className="category__jobdetail">
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">
                    Social & Marketing Videos
                  </p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Short Video Ads
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social Media Videos
                  </NavLink>
                </div>
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">
                    Video Editing & Post-Production
                  </p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Video Editing
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Visual Effects
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Music & Audio
              </NavLink>
              <div className="category__jobdetail">
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">
                    Music Production & Writing
                  </p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Producers & Composers
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Songwriters
                  </NavLink>
                </div>
                <div className="container-fluid d-flex flex-column">
                  <p className="category__jobdetail_p">Beat Productions</p>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Articles & Blog Posts
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Business Copy
                  </NavLink>
                  <NavLink to={"#"} className="category__jobdetail_a">
                    Social
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Life Style
              </NavLink>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Project Management
              </NavLink>
            </div>
            <div className="categoriesmenu_item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-link activedd" : "category-link"
                }
                to={"/"}
              >
                Trending
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesMenuNoSticky;
