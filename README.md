# Finnish Company Search App

This application fetches and displays company information from the PRH (Finnish Patent and Registration Office) open data API. The app allows users to search for companies based on the number of results, the number of results to be skipped, and the postal code address.

## Features

- Fetches company information from the PRH open data API
- Filters results based on the number of results, the number of results to be skipped, and the postal code address
- Displays detailed company information, such as company names, addresses, and registration details

## Installation

1. Clone this repository: `git clone https://github.com/your-username/finnish-company-search.git`
2. Change to the project directory: `cd finnish-company-search`
3. Install dependencies: `npm install` or `yarn install`

## Usage

1. Open the `index.ts` file and update the parameters of the `fetchCompanies` function call with your desired values.
2. Run the application: `npm run start` or `yarn start`
3. The application will fetch the companies based on your input parameters and display the results in the console.

## Dependencies

- axios: Used to make HTTP requests to the PRH open data API
- typescript: Provides type checking and enables the usage of TypeScript language features

## API Reference

The application uses the PRH open data API to fetch company information. More information about the API can be found at the following links:

- [PRH Documentation (EN)](http://avoindata.prh.fi/ytj_en.html)
- [PRH Endpoint for fetching company information](http://avoindata.prh.fi/bis/v1)