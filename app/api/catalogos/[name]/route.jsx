import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET(request, { params }){ 
   try{
   const cat = ["C_CATEGORIES", "C_AMENITIES", "C_STATES", "C_PROPERTY_TYPES"];
   let results = {message: "No se encontro el catalogo"};
   if(cat.includes(params.name)){

      var query =  params.name ===  "C_CATEGORIES" ?  `SELECT * FROM ${params.name} order by ordering` : `SELECT * FROM ${params.name}`
      console.log(query)
      results = await conn.query(query);
      conn.end(); // Cerrar la conexión después de la consulta

      return NextResponse.json(results);
   }
     } catch (error) {
      console.log(error)
   return { message: 'Database Error: Failed to Delete Invoice' };
   }


}