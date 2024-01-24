import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET(request, { params }){ 

   let results = {message: "No se encontro el catalogo"};
   if(!isNaN(params.id))
      results = await conn.query('SELECT * FROM C_COLONIES where id_city = ?', [params.id]);
   
 
   return NextResponse.json(JSON.stringify(results));
}