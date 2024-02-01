
'use client'

import Link from "next/link";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength,addSkip,addCurrentPage } from "../../features/properties/propertiesSlice";
import Image from "next/image";
import ReactPaginate from 'react-paginate';

const FeaturedItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
    state,
    city,
    neighborhood,
    featuredId,
    lstProperties,
    count,
    currentPage,
    skip
  } = useSelector((state) => state.properties);

  
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
 

  
  //paginator constants
  
  const [take, setTake] = useState(9);
  const [getSkip, setSkip] = useState(skip);
  const [getCurrenPage, setCurrenPage] =  useState(0);
  const pageCount = Math.ceil(count /9);


  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location.toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };



    // State handler
    const stateHandler = (item) => {
      if (parseInt(state) !== 0) {
        return item.state == state;
      }
      return true;
    };


       // City handler
       const cityHandler = (item) => {
        if (parseInt(city) !== 0) {
          return item.city == city;
        }
        return true;
      };

      // City handler
      const neighborhoodHandler = (item) => {
      if (parseInt(neighborhood) !== 0) {
        return item.neighborhood == neighborhood;
      }
      return true;
    };


    //featuredId

    const featuredIdHandler = (item) => {
        if (featuredId !== "" && parseInt(featuredId) !== 0) {
          return item.featuredId == featuredId;
        }
        return true;
      };
  


  // status handler
  let content = lstProperties
    .map((item) => (

      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-4 col-lg-4"
        } `}
        key={item.id}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >  
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
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.category}
                  </a>
                </li>
              </ul>
              <Link
                href={`/listing-details-v1/${item.id}`}
                className="fp_price"
              >
                ${item.price}
                <small>/MX</small>
              </Link>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.propertyType}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id}`}>
                  {item.title}
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.addres}
              </p>

              <div className="row">
                <div className="col-4">
                <p>Habitaciones:{item.rooms} </p>
                </div>
                <div className="col-3">
                <p>Cuartos:{item.bedrooms} </p>
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
  },[getSkip]);

  useEffect(() => {
    setSkip(skip)
  },[skip]);

  const handlePageClick = (event) => {
    const itemsPerPage =  9;
     const length = count;
     let _take= 9;
     let _skipt = 0;
     let _CurrenPage= 0;
    _take = (event.selected * itemsPerPage) % length;
    _take =  _take + itemsPerPage;
    _skipt =  _take - itemsPerPage;
    _CurrenPage =  _skipt/itemsPerPage;
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
