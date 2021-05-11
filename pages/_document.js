import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="js/vendor/modernizr-3.5.0.min.js"></script>

          <script src="js/vendor/jquery-1.12.4.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>

          <script src="js/jquery.slicknav.min.js"></script>

          <script src="js/owl.carousel.min.js"></script>
          <script src="js/slick.min.js"></script>

          <script src="js/gijgo.min.js"></script>

          <script src="js/wow.min.js"></script>
          <script src="js/animated.headline.js"></script>
          <script src="js/jquery.magnific-popup.js"></script>

          <script src="js/jquery.scrollUp.min.js"></script>
          <script src="js/jquery.nice-select.min.js"></script>
          <script src="js/jquery.sticky.js"></script>

          <script src="js/contact.js"></script>
          <script src="js/jquery.form.js"></script>
          <script src="js/jquery.validate.min.js"></script>
          <script src="js/mail-script.js"></script>
          <script src="js/jquery.ajaxchimp.min.js"></script>

          <script src="js/plugins.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
