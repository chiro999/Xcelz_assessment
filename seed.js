import db from './db.js'

const properties = [
    {
        id: 1,
        propertyName: "Cozy Apartment in Surrey",
        price: "75,00,000",
        priceInUSD: 7500, 
        bedrooms: 3,
        bathrooms: 2,
        location: "Canada",
        imageURL: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        propertyName: "Modern Flat in Mumbai",
        price: "95,00,000",
        priceInUSD: 95, 
        bedrooms: 6,
        bathrooms: 3,
        location: "Accra",
        imageURL: "https://images.unsplash.com/photo-1493606371202-6275828f90f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
        id: 3,
        propertyName: "Spacious House",
        price: "85,00,000",
        priceInUSD: 85, 
        bedrooms: 4,
        bathrooms: 2,
        location: "Lagos",
        imageURL: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: 4,
        propertyName: "Modern Apartment in Tema",
        price: "70,00,000",
        priceInUSD: 70,
        bedrooms: 3,
        bathrooms: 2,
        location: "Tema",
        imageURL: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        propertyName: "Modern House",
        price: "50,00,000",
        priceInUSD: 50, 
        bedrooms: 2,
        bathrooms: 2,
        location: "Hyderabad",
        imageURL: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 6,
        propertyName: "Seaside House",
        price: "75,00,000",
        priceInUSD: 75, 
        bedrooms: 3,
        bathrooms: 2,
        location: "Mumbai",
        imageURL: "https://images.adsttc.com/media/images/5ef2/4340/b357/6529/f500/03e9/newsletter/Architecture-BRIO-Alibaug_Artists_Retreat-House_A-_Entrance_Steps.jpg?1592935222"
    },
    {
        id: 7,
        propertyName: "Modern House in Andheri",
        price: "80,00,000",
        priceInUSD: 80, 
        bedrooms: 4,
        bathrooms: 3,
        location: "Mumbai",
        imageURL: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    {
        id: 8,
        propertyName: "Modern Flat",
        price: "55,000,000",
        priceInUSD: 60000, 
        bedrooms: 4,
        bathrooms: 2,
        location: "Kumasi",
        imageURL: "https://mygate.com/wp-content/uploads/2023/03/51.jpg"
    },
    {
        id: 9,
        propertyName: "3 bedroom Apartment",
        price: "65,00,000",
        priceInUSD: 65, 
        bedrooms: 3,
        bathrooms: 2,
        location: "London",
        imageURL: "https://images.unsplash.com/photo-1602082550187-3f954840a0f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 10,
        propertyName: "Luxary House",
        price: "80,00,000",
        priceInUSD: 80, 
        bedrooms: 5,
        bathrooms: 3,
        location: "Delhi",
        imageURL: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    },
    {
        id: 11,
        propertyName: "Flat in Shalimar",
        price: "40,00,000",
        priceInUSD: 40, 
        bedrooms: 2,
        bathrooms: 1,
        location: "Lucknow",
        imageURL: "https://is1-3.housingcdn.com/4f2250e8/35e149c1f863048041450eafaeeb6420/v5/fs/shalimar_grand-butler_colony-lucknow-shalimar_corp_limited.jpg"
    },
    {
        id: 12,
        propertyName: "Flat in Sahara State",
        price: "45,00,000",
        priceInUSD: 45, 
        bedrooms: 2,
        bathrooms: 1,
        location: "Lucknow",
        imageURL: "https://images.timesproperty.com/properties/photos/6739/mini/at_dreams_t_rose_tower_jankipuram_lucknow_at_dreams_infra_buildcon.png"
    }
];

properties.forEach((item) => {
  const sql = `
    INSERT INTO properties (propertyName, price, priceInUSD, bedrooms, bathrooms, location, imageURL)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [item.propertyName, item.price, item.priceInUSD, item.bedrooms, item.bathrooms, item.location, item.imageURL];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting item:", err.message);
    } else {
      console.log("Inserted:", item.propertyName);
    }
  });
});
