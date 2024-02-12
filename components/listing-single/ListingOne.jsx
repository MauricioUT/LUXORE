'use client'

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import { NumericFormat } from 'react-number-format';

export default function ListingOne({property}) {

  var base_url = window.location.origin;
  const urlDetail =  base_url+"/detalle/"+property.id
  console.log(urlDetail)
 const face = "https://www.facebook.com/sharer.php?u="+urlDetail;
 const wasap = "https://api.whatsapp.com/send?text="+urlDetail;


 //Print
 let onclickPrint = () => {
  
  debugger
  let buttons = document.getElementById('btnBack');
  buttons.classList.add('displayPrint');
  let div1Detail = document.getElementById('div1Detail');
  div1Detail.classList.add('mt100');
  let div2Detail = document.getElementById('div2Detail');
  div2Detail.classList.add('mt300');
  let footeDetail = document.getElementById('footeDetail');
  footeDetail.classList.add('displayPrint');

  
  

  window.onafterprint = () => {
    console.log("cerrado")
    div1Detail.classList.remove('mt100');
     buttons.classList.remove('displayPrint');
     div2Detail.classList.remove('mt300');
     footeDetail.classList.remove('displayPrint');
  };


    window.print();
  }
  return (
    
    <section className="listing-title-area mt85 md-mt0">
    <div className="container">
      <a href="/" id="btnBack">
        <button className="btn btn-thm" >Regresar a inicio</button>
      </a> 
      <Gallery>
        <div className="row mb30">
          <div className="col-lg-7 col-xl-8">
            <div className="single_property_title mt30-767">
              <h2>{property?.title}</h2>
              <p>{property?.pageAddress}</p>
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="single_property_social_share position-static transform-none">
              <div className="price float-start fn-400">
                <h2>
                  <NumericFormat value={property?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />       
                  <small>/mx</small>
                </h2>
              </div>

              <div className=" style2 mt20 text-end tal-400">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <span href="#"
                     data-bs-toggle="dropdown"
                     data-bs-auto-close="outside"
                    >
                      <span className="flaticon-share"></span>
                    </span>
                    <div className="dropdown-menu">
                      <ul className="mb0">
                          <li>
                            <a    href={face} target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-facebook share"> FaceBoook</i>
                              
                            </a>
                          </li>
                          <li>
                              <a   href={wasap} target="_blank" rel="noopener noreferrer">
                                <i className={`fa fa-whatsapp whatsapp-icon share`}> WhatsApp</i>
                              </a>
                          </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" onClick={onclickPrint}>
                      <span className="flaticon-printer"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End activity and social sharing */}
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-7 col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="spls_style_two mb30-520">
                  <Item
                    original={property?.imgList[0].imagePath}
                    thumbnail={property?.imgList[0].imagePath}
                    width={752}
                    height={450}
                  >
                    {({ ref, open }) => (
                      <div role="button" ref={ref} onClick={open}>
                        <Image
                          width={752}
                          height={450}
                          className="img-fluid w100 cover lds-1"
                          src={property?.imgList[0].imagePath}
                          alt="1.jpg"
                        />
                      </div>
                    )}
                  </Item>
                </div>
              </div>
            </div>
          </div>
          {/* End .col-sm-7 .col-lg-8 */}

          <div className="col-sm-5 col-lg-4">
            <div className="row">
              {property?.imgList?.map((val, i) => (
                <div className="col-6" key={i}>
                  <div className="spls_style_two img-gallery-box mb24">
                    <Item
                      original={val.imagePath}
                      thumbnail={val.imagePath}
                      width={752}
                      height={450}
                    >
                      {({ ref, open }) => (
                        <div role="button" ref={ref} onClick={open}>
                          <Image
                            width={170}
                            height={133}
                            className="img-fluid w100 cover"
                            src={val.imagePath}
                            alt="2.jpg"
                          />
                        </div>
                      )}
                    </Item>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End  col-sm-5 col-lg-4 */}
        </div>
        {/* End .row */}
      </Gallery>
    </div>
  </section>
  )
}
