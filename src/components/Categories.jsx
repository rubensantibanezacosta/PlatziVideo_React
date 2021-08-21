import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Categories.scss"
import "../assets/styles/Media.scss"





const Categories = ({ children, title, isEmpty }) => {
    const categoriesClass = classNames("categories", {
        isEmpty
    });
    return (

        <div className={categoriesClass}>
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    )
}

export default Categories;