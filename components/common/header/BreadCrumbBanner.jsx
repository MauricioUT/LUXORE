
export default function BreadCrumbBanner({clase, headerMsg, subHeaderMsg}) {
  return (
    <section className={`home-three ${clase} md-mt0 bg-anime`}> 
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="home3_home_content">
            <h1>{headerMsg}</h1>
            <h2>{subHeaderMsg}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

