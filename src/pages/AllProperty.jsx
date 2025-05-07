/* eslint-disable react/no-unescaped-entities */

import { useContext } from 'react';
import PropertiesItem from "../components/PropertiesItem";
import { AppContext } from "../components/RealEstateContext"

const AllProperty = () => {
    const { propertydata } = useContext(AppContext); // ✅ Use raw data now

    return (
        <>
            <section className="text-gray-600 body-font max-w-7xl m-auto min-h-[76vh]">
                <div className="text-xl my-10 text-center font-bold">
                    All Available Properties
                </div>

                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap justify-center">
                        {propertydata.length === 0 ? (
                            <p className="text-center text-gray-500 text-lg py-12">
                                Sorry! No properties available at the moment.
                            </p>
                        ) : (
                            propertydata.map((property) => (
                                <PropertiesItem
                                    key={property.id}
                                    id={property.id}
                                    propertyName={property.propertyName}
                                    priceInUSD={property.priceInUSD}
                                    price={property.price}
                                    bedrooms={property.bedrooms}
                                    bathrooms={property.bathrooms}
                                    location={property.location}
                                    imageURL={property.imageURL}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProperty;
