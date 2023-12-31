MR Property Listings
This is a real estate listings application built with React. The main aim of the app is to provide users with property listings that can be viewed in two formats: as a data table and as cards. Each listing displays crucial information about the property, and users can click on individual listings to see more detailed information.

Features:
Two View Modes: Users can toggle between:

A detailed Data Table view.
A visually appealing Card view.
Search and Sort: In the Data Table view, users can:

Search for listings based on the title.
Sort listings based on price in ascending or descending order.
Listing Details: Clicking on a property listing provides more detailed information such as:

Property Title
Address
Price
Covered Area
Property Type
Number of Beds and Baths (if available)
Responsive Design: The app is designed to be responsive and looks good on both desktops and mobile devices.

Project Structure:
API Simulation: The app simulates fetching data from an API using the fetchListings and fetchListingDetails functions which introduce a slight delay to mimic real-world data fetching.

Components:

TableData: Represents the Data Table view of the listings.
CardView: Represents the Card view of the listings.
Pages:

HomePage: This is the main page of the app where users can toggle between the two views.
DetailPage: This page displays detailed information about a single property listing.
Routing: The app uses React Router to handle navigation between the main page and the detailed listing page.

Setup:
Clone the repository:
bash
Copy code
git clone [repository_url]
Navigate to the project directory and install dependencies:
bash
Copy code
cd mr-property-listings
npm install
Run the app in development mode:
bash
Copy code
npm start
The app should now be running on http://localhost:3000/ by default.

Contribution:
Contributions are welcome! Please fork the repository and open a pull request with your changes or open an issue if you come across any bugs or have feature requests.

License:
This project is open-source and available under the MIT License.
#   M r . P r o p e r t y  
 