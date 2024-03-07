const HOST_PROD = 'https://luxore.mx';
const weekly = 'weekly';

export default async function Sitemap() {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${HOST_PROD}/api/properties/map/`);
  const allPosts = await request.json();
  const posts = allPosts.map((post) => ({
    url: `${HOST_PROD}/${post.id}`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }));

  let allPages = [{
    url: HOST_PROD,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 1.0
  }, {
    url: `${HOST_PROD}/quienes-somos`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/agencia-inmobiliaria`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/invierte-en-remates-hipotecarios`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/que-son-los-bienes-raices`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/como-funcionan`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/que-tan-seguros-son`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/preguntas-frecuentes`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/contacto`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }, {
    url: `${HOST_PROD}/agradecimientos`,
    lastModified: new Date(),
    changefreq: weekly,
    priority: 0.8
  }];
  allPages = allPages.concat(posts);
  return allPages;
}





