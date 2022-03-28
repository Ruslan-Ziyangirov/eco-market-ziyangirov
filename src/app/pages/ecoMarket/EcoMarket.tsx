
import "./EcoMarket.sass"
import {Footer} from "../../components/footer/Footer";

import {Product} from "../../components/productCard/Product";
import {Checkbox} from "../../components/ui/checkboxes/Checkbox";
import {ButtonFilter} from "../../components/ui/buttons/filter/ButtonFilter";
// @ts-ignore
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

const allSortings: Product[] = [
    { name: "По популярности", checked: false },
    { name: "По цене", checked: false },
    { name: "По новизне", checked: false },
]

export const EcoMarket = () =>{

    const [genders, setGenders] = useState(allGenders);
    const [types, setTypes] = useState(allTypes);
    const [brands, setBrands] = useState(allBrands);
    const [sortings, setSorting] = useState(allSortings)
    const [allProductsTypes, setAllProductsTypes] = useState(false);
    const [allProductsBrand, setAllProductsBrand] = useState(false);


    const checkStatusProducts = (index: number, setProducts: any, products: Product[]) => {
        setProducts(
            products.map((product: Product, currentIndex: number) =>
                currentIndex === index ? {...product, checked: !product.checked} : product
            )
        )
    }

    const handleClickSort = ( index: number ) => {
        setSorting(sortings.map((sorting: Product, currentIndex: number) => currentIndex === index ?
            {...sorting, checked: true}
            : {...sorting, checked: false}))

    }


    const checkStatucAllProducts = (isAllProducts: boolean, setAllProducts: any, setProducts:any, products:Product[]) => {
        setAllProducts(!isAllProducts)
        setProducts(
            products.map((product:Product) =>
                isAllProducts ? {...product, checked: false} :
                    {...product, checked: true}
            )
        )
    }


    return(
        <div className="ecomarket-page">
            <div className="body-for-ecomarket-page">

                <div className="header-and-button-filter">
                    <h1>ЭкоМаркет</h1>

                    <div>
                        {sortings.map((sorting,index)=>(
                                <ButtonFilter
                                    title={sorting.name}
                                    type={"button"}
                                    isActive={sorting.checked}
                                    onClick={() =>{
                                        handleClickSort(index)
                                        console.log("Кнопка жмякает и фильтрует")
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="filter-and-table">
                    <div className="filter-wrapper">
                        <div className="block-of-filter">
                            <h5>Пол</h5>
                            {genders.map((gender, index) =>(
                                <Checkbox
                                    isChecked={gender.checked}
                                    checkHandler={() => checkStatusProducts(index, setGenders, genders)}
                                    title={gender.name}
                                    index={index}
                                />
                                )
                            )}
                        </div>

                        <div className="block-of-filter">
                            <h5>Тип товара</h5>
                            <Checkbox
                                isChecked={allProductsTypes}
                                checkHandler={() => checkStatucAllProducts(allProductsTypes, setAllProductsTypes, setTypes, types)}
                                title={"Выбрать все"}
                            />
                            {types.map((type, index)=>
                                <Checkbox
                                    isChecked={type.checked}
                                    checkHandler={() => checkStatusProducts(index, setTypes, types)}
                                    title={type.name}
                                    index={index} />
                            )}
                        </div>

                        <div className="block-of-filter">
                            <h5>Бренд</h5>
                            <Checkbox
                                isChecked={allProductsBrand}
                                checkHandler={() => checkStatucAllProducts(allProductsBrand, setAllProductsBrand, setBrands, brands)}
                                title={"Выбрать все"}
                            />
                            {brands.map((brand, index)=>
                                <Checkbox
                                    isChecked={brand.checked}
                                    checkHandler={() => checkStatusProducts(index, setBrands, brands)}
                                    title={brand.name}
                                    index={index} />
                            )}
                        </div>
                    </div>
                    <div className="table-products">
                        <Product
                            title={"Nike Air Max 2021"}
                            description={"Мужская обувь"}
                            price={"1000"}
                            path={Nike}
                            producer={"NIKE"}></Product>
                        <Product
                            title={"Nike Air Max 2021"}
                            description={"Мужская обувь"}
                            price={"1000"}
                            path={Nike}
                            producer={"NIKE"}></Product>
                        <Product
                            title={"Nike Air Max 2021"}
                            description={"Мужская обувь"}
                            price={"1000"}
                            path={Nike}
                            producer={"NIKE"}></Product>
                        <Product
                            title={"Nike Air Max 2021"}
                            description={"Мужская обувь"}
                            price={"1000"}
                            path={Nike}
                            producer={"NIKE"}></Product>

                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}