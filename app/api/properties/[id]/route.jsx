import { NextResponse } from "next/server";

export async function GET(request, { params }) {

   let results = { message: "No se encontró propiedad" };
   if (!isNaN(params.id))
      results = await conn.query('SELECT * FROM T_PROPERTIES where id = ?', [params.id]);

   return NextResponse.json(results);
}