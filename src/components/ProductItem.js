import React from "react";

const ProductItem = () => {
  return (
    <section id="product-items">
      <div className="container">
        <div className="product_variation ">
          <div className="row">
            <div className="col-lg-3">
              <img src="frontend_asset/images/product/Group 11.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img src="frontend_asset/images/product/Group 11.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img src="frontend_asset/images/product/Group 11.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img src="frontend_asset/images/product/Group 11.png" alt="" />
            </div>
          </div>
        </div>
        <div className="product_variation_item mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="text ">
                <h1>মুল্য-১২০০ টাকা</h1>
                <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>
              </div>
              <div className="order">
                <button>
                  <a href>অর্ডার করতে এখানে ক্লিক করুন</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
