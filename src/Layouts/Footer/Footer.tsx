const Footer = () => {
  return (
    <div className="is-w-full has-background-judicial is-h-200 is-flex is-align-center is-justify-center  ">
      <a
        className="is-wm-25 is-h-100 is-flex is-justify-center"
        href="https://www.pjn.gov.ar/"
      >
        <img className="is-wm-40" src="/logos/pj_nacional.png" alt="logo" />
      </a>
      <a
        className="is-wm-25 is-h-100 is-flex is-justify-center"
        href="https://www.cij.gov.ar/inicio.html"
      >
        <img src="/logos/cij.png" className="is-wm-50" alt="logo" />
      </a>
      <a
        className="is-wm-25 is-h-100 is-flex is-justify-center"
        href="https://juscaba.gob.ar/"
      >
        <img className="is-wm-70" src="/logos/pj_ciudad.png" alt="logo" />
      </a>
      <a
        className="is-wm-25 is-h-100 is-flex is-justify-center"
        href="http://www.scba.gov.ar/portada/default2014.asp"
      >
        <img className="is-wm-80" src="/logos/pj_bsas.jpg" alt="logo" />
      </a>
    </div>
  );
};

export default Footer;
