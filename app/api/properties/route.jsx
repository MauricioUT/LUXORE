import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function POST(request) {

   const { idCategory, idPropertyType, idState, idCity, idColony, bedrooms, bathrooms, price, amenities, limit, offset } = await request.json();

   let results = { message: "No se encontro el catalogo" };

   let query = 'SELECT id, mainImage, price, title, idPropertyType,  idCategory, featuredProperty, rooms, bedrooms, bathrooms, FROM T_PROPERTIES WHERE 1=1';

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

   if (price && !isNaN(price.min) && !isNaN(price.max) && price.min >= 0 && price.max > 0)
      query += ` AND price BETWEEN ${price.min} AND ${price.max}`

   query.concat(` AND enable ORDER BY featuredProperty, updateOn desc LIMIT = ${limit} OFFSET = ${offset}`);

   results = await conn.query('SELECT * FROM T_PROPERTIES id = ?', [params.id]);

   return NextResponse.json(results);

}