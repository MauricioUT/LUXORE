import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = ({ urlCategory = "" }) => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Hola como estas</h2>
                <p className="fz18 color-white">
                    From as low as $10 per day with limited time offer
                    discounts.
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter urlCategory= {urlCategory} />
        </div>
    );
};

export default HeroFilter;
