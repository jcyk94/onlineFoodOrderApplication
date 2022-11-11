import React from "react";
import coupon from "../assets/coupon.png";

function Coupon() {
  return (
    <div
      class="modal fade"
      id="modal"
      tabIndex="-1"
      aria-labelledby="modalLabel"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">
              Coupon
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <img class="coupon-img" src={coupon} alt="Coupon"></img>
            </div>
            <div class="modal-dialog">Scan to Redeem</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Coupon);
