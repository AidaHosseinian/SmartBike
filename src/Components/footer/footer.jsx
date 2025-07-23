import React from "react";
import  "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col col-info-contact">راه های ارتباطی
        <div className="info-contact-tel">
        <i class="fa fa-phone"></i>
          <div>0912 450 45010</div>
        </div>
        <div></div>
        <div></div>
        <div className="col-social-icons">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      <div className="footer-col col-info-links">دسترسی سریع
        <div>محصولات</div>
        <div>تماس با ما</div>
        <div>درباره ما</div>
      </div>
      <div className="footer-col col-info-about"> 
        <h3>ETI TECH</h3>
        <p>  
          ما در اتی تک عرضه با کیفیت‌ترین و جدیدترین تجهیزات حمل و نقل برقی و پاک و ارائه اطلاعات دقیق صحیح
          .و مطمئن درباره این محصولات می‌باشد تا شما عزیزان بتوانید در کوتاه‌ترین زمان برای خرید وسیله متناسب با نیازتان اقدام نمایید
        </p>      
      </div>
      <div className="footer-col col-copy">کلیه حقوق برای اتی تک محفوظ است.</div>
    </footer>
  );
};

export default Footer;