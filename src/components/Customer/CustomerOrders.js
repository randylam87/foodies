import React from 'react';

const CustomerOrders = (props) => {

    const {items, sellerFirstName, sellerLastName} = props.item;

    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            <h4>Restaurant: {sellerFirstName+ ' ' +sellerLastName}</h4>
            {items.map(data => (
                <p key={data.id}>Item: {data.item}</p>
            ))}
        </li>
    );
};


export default CustomerOrders;