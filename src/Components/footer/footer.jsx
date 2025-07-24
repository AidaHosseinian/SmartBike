import React from "react";
import  "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col col-info-contact">
        <h3 className="info-contact-title">راه های ارتباطی</h3>
        <div className="info-contact-tel">
          <div className="info-text">0912 450 45010</div>
          <i class="fa fa-phone"></i>
        </div>
        <div className="info-contact-email">
          <div className="info-text">smartbike@gmail.com</div>
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div className="info-contact-map">
          <div className="info-text">تهران ، سعادت آباد</div>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
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
      <div className="footer-col col-info-links">
        <h3 className="info-links-title">دسترسی سریع</h3>
        <div>
          <div className="info-links-text">محصولات</div>
          <div className="info-links-text">تماس با ما</div>
          <div className="info-links-text">درباره ما</div>
        </div>
        
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