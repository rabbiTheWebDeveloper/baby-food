import React from "react";

const OrderCall = () => {
  return (
    <section id="order_call">
      <div className="container">
        <div className="row mr-0">
          <div className="col-lg-6 m-auto d-flex">
            <div className="order_call_img">
              <img src="frontend_asset/images/contract_banner.png" alt="" />
              <div className="overly">
                <button>
                  <a href>অর্ডার করুন</a>
                </button>
                <h1>+8801799733234</h1>
                <p>অর্ডার পেতে কল করুন এই নাম্বারে</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderCall;
