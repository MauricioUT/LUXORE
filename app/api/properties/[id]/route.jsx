import { NextResponse } from "next/server";

export async function GET(request, { params }){ 

   let results = {message: "No se encontro el catalogo"};
   if(!isNaN(params.id))
      results = await conn.query('SELECT * FROM T_PROPERTIES id = ?', [params.id]);
   
 
   return NextResponse.json(JSON.stringify(results));
}