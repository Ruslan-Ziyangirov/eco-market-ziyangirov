import {Header} from "../../components/header/Header";
import "./EcoMarket.sass"
import {Footer} from "../../components/footer/Footer";
import {Product} from "../../components/productCard/Product";
import {Checkbox} from "../../components/ui/checkboxes/Checkbox";
import {ButtonFilter} from "../../components/ui/buttons/filter/ButtonFilter";
import Nike from "../../../assets/nike crocs.png";
import Nike_Crocs from "../../../assets/nike_crocs.png";
import Adidas_Crocs from "../../../assets/adidas_crocs.png";
import hudi from "../../../assets/nike_hudi.png";
import React, {useEffect, useState} from "react";
import {SkeletonEcoMarketPage} from "../../components/animation/skeletonEcoMarketPage/SkeletonEcoMarketPage";
import axios from "axios";

interface Props{
    producer:string;
    title:string;
    gender:string;
    price: string;
    img:string;
}

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

    const getProducts = () => {
        axios.get("market", {
            params: {
                page_number: 1,
                page_size: 20,
                sexes: ["MAN", "WOMAN"],
                item_categories: ["SHOES", "ACCESSORIZE"],
                shop_ids: ["ec4e2c1d-a495-4010-bbf9-67fc99c8be28"]
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const onButtonClick = () => {
        getProducts();
    };

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

    const products: Array<Props> = [
        {
            producer: "NIKE",
            title: "Nike Air Max 2022",
            gender: "Мужская обувь",
            price: "1000",
            img: Nike,
        },
        {
            producer: "Adidas",
            title: "Adidas Alphabounce RC",
            gender: "Мужская обувь",
            price: "1200",
            img: Nike_Crocs,
        },{
            producer: "H&M",
            title: "Nike Air Max 2021",
            gender: "Мужское худи",
            price: "1000",
            img: Adidas_Crocs,
        },{
            producer: "NIKE",
            title: "Nike Air Force 1 Low",
            gender: "Мужская обувь",
            price: "2100",
            img: hudi,
        },
    ];

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timing);
    }, []);

    return(
        <div className="ecomarket-page">
            {loading ? <SkeletonEcoMarketPage/> :
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
                        <aside className="filter-wrapper">
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
                        </aside>
                        <div className="table-products">
                            {products.map(item => (
                                <Product
                                    key={item.title}
                                    title={item.title}
                                    gender={item.gender}
                                    price={item.price}
                                    path={item.img}
                                    producer={item.producer}></Product>
                            ))}
                        </div>

                    </div>

                </div>
            }

            <Footer/>
        </div>
    )
}