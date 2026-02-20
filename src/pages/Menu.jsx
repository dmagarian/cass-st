import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuData = [
        {
            category: "Legendary Baguettes",
            description: "Crispy on the outside, hollowed out, and packed with flavor.",
            items: [
                { name: "Steak Baguette", price: "$16", desc: "Tender steak with grilled onions, provolone, and our signature sauce." },
                { name: "Chicken Baguette", price: "$15", desc: "Surprisingly juicy grilled chicken, seasoned to perfection." },
                { name: "Surf and Turf", price: "$18", desc: "The best of both worlds. Steak and shrimp loaded up." }
            ]
        },
        {
            category: "Burgers & Sandwiches",
            description: "Served with our perfectly seasoned, crispy fries.",
            items: [
                { name: "1/2 lb. Cheeseburger", price: "$14", desc: "Classic pub style. American cheese, lettuce, tomato, onion." },
                { name: "Grilled Chicken Sandwich", price: "$14", desc: "Grilled breast, swiss cheese, avocado, on a toasted bun." },
                { name: "B.L.T.", price: "$12", desc: "Crispy bacon, fresh lettuce, and tomato on sourdough." }
            ]
        },
        {
            category: "From the Bar",
            description: "Coldest drinks on Cass Street.",
            items: [
                { name: "Local Craft Drafts", price: "$8", desc: "Rotating selection of San Diego's finest IPA's, Blondes, and Stouts." },
                { name: "Sunset Margarita", price: "$10", desc: "Tequila, fresh lime, splash of orange juice, tajin rim." },
                { name: "Well Drinks", price: "$7", desc: "Your favorite spirits mixed right." }
            ]
        }
    ];

    return (
        <div className="menu-page">
            <div className="menu-header">
                <h1 className="glow-cyan text-center">THE MENU</h1>
                <p className="text-center text-muted">Good Eat. Cold Drinks. Great Times.</p>
            </div>

            <div className="container menu-container">
                {menuData.map((section, index) => (
                    <div key={index} className="menu-section glass-card">
                        <h2 className="section-title text-pink glow-pink">{section.category}</h2>
                        {section.description && <p className="section-desc text-muted">{section.description}</p>}

                        <div className="menu-items">
                            {section.items.map((item, i) => (
                                <div key={i} className="menu-item">
                                    <div className="item-header">
                                        <h3 className="item-name text-cyan">{item.name}</h3>
                                        <span className="item-price text-sunset">{item.price}</span>
                                    </div>
                                    <div className="item-dots"></div>
                                    <div className="item-desc">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="menu-footer container text-center">
                <p className="text-pink">Food served till 10pm daily. Late night bites on Friday & Saturday.</p>
            </div>
        </div>
    );
};

export default Menu;
