import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET(request, { params }) {

   let results = { message: "No se encontró propiedad" };
   let imgList = [];
   let lstAmenities = [];
   let query ="";
   if (!isNaN(params.id))
       query = "select a.id, mainImage, price, title,description,pageAddress,  rooms, bedrooms, bathrooms,metersSurface,metersBuilded, b.propertyType,carsNumber, c.category, floors, latitude,longitude, features from T_PROPERTIES a "+
               " inner join C_PROPERTY_TYPES b on a.idPropertyType = b.id "+
               " inner join C_CATEGORIES as c on a.idCategory =  c.id " +
               " where a.id = ?"

      results = await conn.query(query, [params.id]);

      if(results.length > 0){
          results =  results[0];
          imgList = await conn.query('SELECT * FROM T_IMAGES where idPrperties = ?', [params.id]);
          results.imgList= imgList;

        let queryAmenities ="select b.id,b.amenity from T_AMENITIES_PROPERTIES as a inner join C_AMENITIES as b on a.idAmenity = b.id where a.idproperty = ?"
        let lstAmenities = await conn.query(queryAmenities, [params.id]);
        results.lstAmenities= lstAmenities;
        console.log(lstAmenities);
      }

   return NextResponse.json(results);
}