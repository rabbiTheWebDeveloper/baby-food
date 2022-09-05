import React from 'react';

const Footer = () => {
    return (
        <section id="footer_part">
        <div className="container">
          <div className="footer_content">
            <div className="row d_flex">
              <div className="col-lg-6">
                <div className="botol_img">
                  <img src="frontend_asset/images/botol.png" alt="" />
                </div>           
              </div>
              <div className="col-lg-6 mb-auto mt-5">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="footer_coltent">
                      <h3>প্রয়োজনে কল করুন</h3>
                      <ul>
                        <li><a href>
                            <i className="fas fa-phone-alt"> </i>00 0392 96 32</a>
                        </li>
                      </ul>
                      <div className="social_media_item">
                        <ul> 
                          <li>
                            <a href><img src="frontend_asset/images/social/facebook.png" alt="" /></a>
                          </li>
                          <li>
                            <a href><img src="frontend_asset/images/social/instagram.png" alt="" /></a>
                          </li>
                          <li>
                            <a href><img src="frontend_asset/images/social/twitter.png" alt="" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footer_coltent">
                      <h3>Important Links</h3>
                      <ul>
                        <li><a href>Privacy Policy</a></li>
                        <li><a href>Terms &amp; Conditions</a></li>
                        <li><a href>Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footer_coltent">
                      <h3>Email us</h3>
                      <ul>
                        <li><i className="fas fa-envelope" /><a href>oder@freshen.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer_text text-center ml-5">
                    <div className="container">
                      <img className="w-100" src="frontend_asset/images/Line 17 (1).png" alt="" />
                      <footer>2022 All Rights Reserved | Designed by Soft IT Care Development Team</footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;