import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET(request, { params }){ 
   const cat = ["C_CATEGORIES", "C_AMENITIES", "C_STATES", "C_PROPERTY_TYPES"];
   let results = {message: "No se encontro el catalogo"};
   if(cat.includes(params.name))
      results = await conn.query(`SELECT * FROM ${params.name}`);

   return NextResponse.json(JSON.stringify(results));
}