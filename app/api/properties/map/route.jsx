import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql'

export async function GET() {

   let query = 'SELECT a.id FROM T_PROPERTIES as a ';
   query = query.concat(` WHERE a.enable =  1`);

   let  lstHomsResponse = await conn.query(query);
   console.log(query);
   return NextResponse.json(lstHomsResponse);

}