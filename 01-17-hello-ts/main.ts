/*
GET https://ip.api.hcloudcs.com/139.224.248.235
{
  "data": {
    "as_domain": "alibabagroup.com",
    "as_name": "Hangzhou Alibaba Advertising Co.,Ltd.",
    "asn": "AS37963",
    "continent": "AS",
    "continent_name": "Asia",
    "country": "CN",
    "country_name": "China"
  }
}
 */

interface GeoIp {
  as_domain: string;
  as_name: string;
  asn: string;
  continent: string;
  continent_name: string;
  country: string;
  country_name: string;
}

const getGeoIp = async (ip: string) => {
  const res = await fetch(`https://ip.api.hcloudcs.com/${ip}`);
  const data = await res.json();
  return data.data as GeoIp;
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const ip = form.ip.value;
  console.log({ ip });
  getGeoIp(ip).then((geoIp) => {
    console.log({ geoIp });
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(geoIp, null, 2);
    document.body.appendChild(pre);
  });
});
