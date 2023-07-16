import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-width'>
        <div className='footer-header'>
          <img
            src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around'
            alt='Zomato'
          />
          <div className='footer-location'>
            <button className='country'>country</button>
            <button className='language'>language</button>
          </div>
        </div>
        <div className='footer-main'>
          <div className='footer-card'>
            <h2>ABOUT ZOMATO</h2>
            <a href='/'>Who We Are</a>
            <a href='/'>Blog</a>
            <a href='/'>Work With Us</a>
            <a href='/'>Investor Relations</a>
            <a href='/'>Report Fraud</a>
            <a href='/'>Contact Us</a>
          </div>
          <div className='footer-social-links'>
            <h2>Social Links</h2>
            <a href='/'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='/'>
              <i className='fa-brands fa-square-instagram'></i>
            </a>
            <a href='/'>
              <i className='fa-brands fa-square-twitter'></i>
            </a>
            <a href='/'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href=''>
              <i className='fa-brands fa-youtube'></i>
            </a>
            <h2>About</h2>
            <p>
              This website create by <strong>@Adarsh Verma</strong>
            </p>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-border'></div>
          <div className='footer-disc'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            ex! Ducimus repellat voluptas consequatur aut consectetur nostrum
            eius saepe. Explicabo culpa dolore doloribus excepturi nisi! Unde
            dignissimos sapiente dolorem vero.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
