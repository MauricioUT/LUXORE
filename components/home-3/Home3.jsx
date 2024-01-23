import MobileMenu from "../common/header/MobileMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Hero from "./Hero";
import FilterTopBar from "../common/listing/FilterTopBar";
import FeaturedItem from "./FeaturedItem";
import Map from "../common/map/Map"

const Home3 = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <Hero />

    {/* <!-- Listing Grid View --> */}
     <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          <div className="row">
           

            <div className="col-md-12 col-lg-12">
              <div className="grid_list_search_result ">
                <div className="row align-items-center">
                  <FilterTopBar />
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <FeaturedItem />
              </div>
              {/* End .row */}

              <div className="row">
                <Map />
              </div>
            
              {/* End .row */}
            </div>
            {/* End  page conent */}
          </div>
          {/* End .row */}
        </div>
      </section>
 

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* whatsApp section */}
      <a href="https://api.whatsapp.com/send?phone=5573610578&text=Hola!%20Quiero%20contratar%20sus%20servicios!" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>

    </>
  );
};

export default Home3;
