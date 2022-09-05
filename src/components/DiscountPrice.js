import React from "react";

const DiscountPrice = () => {
  return (
    <section id="descount_price">
      <div className="container text-center">
        <div className="row">
          <div className="col-log-6">
            <div className="text">
              <h2>ডিস্কাউন্ট মূল্যঃ ১৬৯০ টাকা</h2>
              <p>অর্ডার করতে নিচের বাটনে ক্লিক করুন</p>
              <button>
                <a href>অর্ডার করুন</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="form4"
        src="frontend_asset/images/discount_banner.png"
        alt=""
      />
    </section>
  );
};

export default DiscountPrice;
