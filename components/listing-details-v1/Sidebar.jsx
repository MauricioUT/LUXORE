
import ListingCreator from "../common/listing/ListingCreator";
import Form from "@/components/contact/Form";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <div className="sl_creator">

            <ListingCreator />
          </div>
          <div className="form_grid">
                <h4 className="mb5">Agenda una cita</h4>
                <p>
                Evita riesgos innecesarios,
                elige invertir en Bienes Raíces en México con una empresa confiable y transparente, 
                respaldada por asesores con más de 12 años de experiencia en el sector.
                </p>
                <Form />
              </div>
        </div>
      </div>
      {/* End .sidebar_listing_list */}
    

    </>
  );
};

export default Sidebar;
