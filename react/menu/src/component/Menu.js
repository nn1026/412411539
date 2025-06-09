import React from "react";
export default function Menulist({ item }) {
    return (
        <div className="section-center">
            {
                item.map((value, index, array) => {
                    return (
                        <article class="menu-item">
                            <img src={value.img} alt={value.title} class="photo" />
                            <div class="item-info">
                                <header>
                                    <h4>{value.title}</h4>
                                    <h4 class="price">{value.price}</h4>
                                </header>
                                <p class="item-text">
                                    {value.desc}
                                </p>
                            </div>
                        </article>
                    )
                })
            }

        </div>
    )
}