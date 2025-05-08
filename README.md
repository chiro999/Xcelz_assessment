# Real Estate Project

**PillowSpot** is a modern web application built with React.js, Vite, and Tailwind CSS, designed to provide an intuitive and seamless experience for browsing real estate listings. 

- **Check Live:** https://xcelz-assessment.vercel.app/

## Features

- **User-Friendly Interface**
- **Responsive Design**
- **Add Property**
- **Property Details**

## Tools Used

- **React.js**
- **Vite**
- **Tailwind CSS**
- **Express**
- **MySQL**

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/chiro999/Xcelz_assessment

2. Navigate to the project directory:

   ```bash
   cd Xcelz_assessment
   
3. Install the dependencies:

   ```bash
   npm install

4. Install the MySQL:

   - Download and Install MySQL Community Server.

5. Create the database:

   ```sql
   CREATE DATABASE itemdb;
   USE itemdb;
   CREATE TABLE properties (
   id INT AUTO_INCREMENT PRIMARY KEY,
   propertyName VARCHAR(255),
   price VARCHAR(50),
   priceInUSD DECIMAL(10, 2),
   bedrooms INT,
   bathrooms INT,
   location VARCHAR(100),
   imageURL TEXT
);

6. Run the seed.js file to populated the database:

   ```bash
   node seed.js

7. Start the backend server:

   ```bash
   node server.js


7. Start the development server:

   ```bash
   npm run dev

Note: This will launch the application locally. Open your browser and visit localhost to view the Real Estate website.

## Usage

- **Add Properties:** Users can add their property to the listings.
- **View Property Details:** Click on individual listings to see detailed information.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License.
