import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MagazineData from '../../data/magazine/MagazineData.json';

const allMagazineData = MagazineData;

const Blogs = () => {
  const [magazines] = useState(allMagazineData);

  return (
    <section id="blog-1" className="wide-60 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Phase Magazine: Latest Issues</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* BLOG POSTS */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {magazines.map((magazine) => (
            <div className="col">
              <div id="bp-1-1" className="blog-1-post mb-40 wow fadeInUp">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + magazine.thumb}
                      alt="blog-post-image"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Tag */}
                  <p className="p-md post-tag">{`${magazine.category} | ${magazine.post_date}`}</p>
                  {/* Post Link */}
                  <h5 className="h5-md">
                    <Link to={process.env.PUBLIC_URL + "/blog-grid/" + magazine.id}>
                      <a>{magazine.title}</a>
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    {magazine.subtitle}
                  </p>
                </div>
                {/* END BLOG POST TEXT */}
              </div>
            </div>
          ))}
        </div>
        {/* END BLOG POSTS */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Blogs;
