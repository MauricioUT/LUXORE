'use client'

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import { NumericFormat } from 'react-number-format';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
      {/* images */}

     
       <Carousel>
            {property?.imgList?.map((val) => (
                <div>
                    <img src={val.imagePath} alt={val.imagePath}/>
                </div>
            ))}
        </Carousel>
        {/* End .row */}
      </Gallery>
    </div>
  </section>
  )
}
