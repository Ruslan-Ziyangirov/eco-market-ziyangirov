import {Header} from "../../components/header/Header";
import "./EcoMarket.sass"
import {Footer} from "../../components/footer/Footer";
import {Product} from "../../components/productCard/Product";
import Nike from "../../../assets/nike crocs.png";
import React, {useState} from "react";

interface Product{
    name: string;
    checked: boolean;
}

const allGenders: Product[] = [
    {name: "Мужской", checked: false},
    {name: "Женский", checked:false}
]


const allTypes: Product[] = [
    {name: "Одежда", checked: false},
    {name: "Обувь", checked: false},
    {name: "Аксессуары", checked: false}
]

const allBrands: Product[] = [
    {name: "H&M", checked: false},
    {name: "P&B", checked: false},
    {name: "Adidas", checked: false},
    {name: "Nike", checked: false},
    {name: "Rebook", checked: false}
]

export const EcoMarket = () =>{

    const [gengers, setGenders] = useState(allGenders);
    const [types, setTypes] = useState(allTypes);
    const [brands, setBrands] = useState(allBrands);

    const handleProducts = (index: number, setProducts: any, products: Product[]) => {
        setProducts(
            products.map((product: Product, currentIndex: number) =>
                currentIndex === index ? !product.checked : product
            )
        )
    }

    // const handleAllProducts = (products: Product[], setProducts: any, isAllProducts: boolean) => {
    //     setProducts(
    //         products.map((product: Product) =>
    //             product.checked = isAllProducts;
    //         )
    //     )
    // }

    return(
        <div className="ecomarket-page">
            <div className="body-for-ecomarket-page">

                <div className="header-and-button-filter">
                    <h1>ЭкоМаркет</h1>

                    <div className="btns-for-filtering">
                        <button>По популярности</button>
                        <button>По цене</button>
                        <button>По новизне</button>
                    </div>
                </div>

                <div className="table-products">
                    <Product producer={"NIKE"} title={"Nike Air Max 2021"}
                             description={"Мужская обувь"}
                             price={"1000"} path={Nike}/>
                    <Product producer={"NIKE"} title={"Nike Air Max 2021"}
                             description={"Мужская обувь"}
                             price={"1000"} path={Nike}/>
                    <Product producer={"NIKE"} title={"Nike Air Max 2021"}
                             description={"Мужская обувь"}
                             price={"1000"} path={Nike}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}