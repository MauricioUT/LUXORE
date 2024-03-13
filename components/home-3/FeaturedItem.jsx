
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength, addSkip, addCurrentPage } from "../../features/properties/propertiesSlice";
import Image from "next/image";
import ReactPaginate from 'react-paginate';
import { NumericFormat } from 'react-number-format';

const FeaturedItem = () => {
  const {
    lstProperties,
    count,
    currentPage,
    skip
  } = useSelector((state) => state.properties);


  const { isGridOrList } = useSelector(
    (state) => state.filter
  );



  //paginator constants
  const [getSkip, setSkip] = useState(skip);
  const pageCount = Math.ceil(count / 9);


  const dispatch = useDispatch();

  // status handler
  let content = lstProperties
    .map((item) => (

      <div
        className={`${isGridOrList ? "col-12 feature-list" : "col-md-4 col-lg-4"
          } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${isGridOrList ? "d-flex align-items-center" : undefined
            }`}
        >
          <Link href={`/detalle/${item.id}`}>

            <div className="thumb">

              <Image
                width={342}
                height={220}
                className="img-whp w-100 h-100 cover"
                src={item.mainImage}
                alt="fp1.jpg"
              />
              <div className="thmb_cntnt">
                <ul className="tag mb0">
                  {item.featuredProperty == 1 && <li className="list-inline-item">
                    <a href="#">Propiedad destacada</a>
                  </li>}
                  <li className="list-inline-item">
                    <a href="#" className="text-capitalize">
                      {item.category}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.propertyType}</p>
              { item?.comercialValue > 0 ? <Link
                  href={`/detalle/${item.id}`}
                  className="fp_price"
                >
                      <div>
                          <strong>
                            {'Precio Comercial: '} 
                        <NumericFormat  value={item?.comercialValue} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                          <small>/mx</small>
                          </strong> 
                      </div>
                    <div> 
                      <strong className="text-thm">
                          { item?.idCategory == 1  ? 'Precio oferta: ' : 'Precio remate: ' }
                          <NumericFormat  value={item?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            <small>/mx</small>
                      </strong> 

                    </div> 
               
                
                  
                </Link>:
                <Link
                href={`/detalle/${item.id}`}
                className="fp_price"
              >
                  <div> 
                    <strong className="text-thm">
                    {'Precio Comercial: '} 
                        <NumericFormat  value={item?.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                          <small>/mx</small>
                    </strong> 

                  </div> 
              </Link>
                         }
              <h4>
                <Link href={`/detalle/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.pageAddress}
              </p>

              <div className="row">
                <div className="col-3">
                  <p>Recamaras:{item.bedrooms} </p>
                </div>
                <div className="col-3">
                  <p>Baños:{item.bathrooms} </p>
                </div>
                <div className="col-3">
                  <p>Metros:{item.metersSurface}m2 </p>
                </div>
              </div>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <div className="fp_pdate float-end">{item.postedYear}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </div>

      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, content]);


  //paginador 

  useEffect(() => {
    dispatch(addSkip(getSkip))
  }, [getSkip]);

  useEffect(() => {
    setSkip(skip)
  }, [skip]);

  const handlePageClick = (event) => {
    const itemsPerPage = 9;
    const length = count;
    let _take = 9;
    let _skipt = 0;
    let _CurrenPage = 0;
    _take = (event.selected * itemsPerPage) % length;
    _take = _take + itemsPerPage;
    _skipt = _take - itemsPerPage;
    _CurrenPage = _skipt / itemsPerPage;
    console.log(
      `Skipt ${_skipt}, take ${_take}  currentPage ${_CurrenPage}  `
    );

    dispatch(addCurrentPage(_CurrenPage));
    console.log(skip);
    console.log(getSkip);
    setSkip(_skipt);
  };



  let paginador =
    <div className="row">
      <div className="col-lg-6 mt20">
        <div className="mbp_pagination">
          <ReactPaginate
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            breakLabel="..."
            nextLabel="Siguiente >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< Anterior"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
          />
        </div>
      </div>
    </div>


  return <>{content}  {paginador}

  </>;
};

export default FeaturedItem;
