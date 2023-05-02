import axios, { AxiosError } from "axios";
import { DetailCompany, BigCompany } from "./types";

const companydata = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  const result = await axios(
    `https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}&companyRegistrationFrom=2014-02-28`
  );

  let response: BigCompany[] = result.data.results;

  for (let item of response) {
    const res = await axios(item.detailsUri);
    const data: DetailCompany = res.data; // Access the data property of the response object
    console.log(data); // Log the detailed company data
  }
};

companydata(10, 2, "65100");