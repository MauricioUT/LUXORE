import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function POST(request) {

   const { idCategory, idPropertyType, idState, idCity, idColony, bedrooms, bathrooms, price, amenities, limit, offset } = await request.json();

   let results = { message: "No se encontro el catalogo" };

   let query = 'SELECT a.id, mainImage, price, title,pageAddress, featuredProperty, rooms, bedrooms, bathrooms,metersSurface, b.propertyType, c.category, comercialValue, a.idCategory FROM T_PROPERTIES as a ';
   query = query.concat(` inner join C_PROPERTY_TYPES as b on a.idPropertyType = b.id `);
   query = query.concat(` inner join C_CATEGORIES as c on a.idCategory =  c.id `);

   
   console.log(price)

   if (idCategory && !isNaN(idCategory) && idCategory > 0)
      query += ` AND idCategory = ${idCategory}`

   if (idPropertyType && !isNaN(idPropertyType) && idPropertyType > 0)
      query += ` AND idPropertyType = ${idPropertyType}`

   if (idState && !isNaN(idState) && idState > 0)
      query += ` AND idState = ${idState}`

   if (idCity && !isNaN(idCity) && idCity > 0)
      query += ` AND idCity = ${idCity}`

   if (idColony && !isNaN(idColony) && idColony > 0)
      query += ` AND idColony = ${idColony}`

   if (bedrooms && !isNaN(bedrooms) && bedrooms > 0)
      query += ` AND bedrooms = ${bedrooms}`

   if (bathrooms && !isNaN(bathrooms) && bathrooms > 0)
      query += ` AND bathrooms = ${bathrooms}`

   if (price && !isNaN(price.value.min) && !isNaN(price.value.max) && price.value.min >= 0 && price.value.max > 0)
      query += ` AND price BETWEEN ${price.value.min} AND ${price.value.max}`

   if(amenities && amenities.length > 0)
      query  +=  ` AND a.id in ( select idProperty from T_AMENITIES_PROPERTIES where idAmenity in (${amenities}) ) `
         
      //CONTADOR
      let query2 =  query.replace('SELECT a.id, mainImage, price, title,pageAddress, featuredProperty, rooms, bedrooms, bathrooms,metersSurface, b.propertyType, c.category, comercialValue, a.idCategory ', 'SELECT COUNT(1) as count ')
      query2 = query2.concat(` AND enable =  1`);

      //BUSQUEDA PRINCIPAL
   query = query.concat(` AND enable =  1 ORDER BY featuredProperty DESC, updateOn DESC LIMIT  ${limit} OFFSET  ${offset}`);

   let reultCount =  await conn.query(query2);
   let  lstHomsResponse = await conn.query(query);

    let result = {count:0, lstHoms:[]};
    console.log(query2)
    console.log(reultCount[0].count)
    result.count =  reultCount[0].count;
    result.lstHoms = [];
    result.lstHoms= lstHomsResponse;

   return NextResponse.json(result);

}