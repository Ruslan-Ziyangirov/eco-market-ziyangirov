import {Header} from "../../components/header/Header";
import "./EcoMarket.sass"
import {Footer} from "../../components/footer/Footer";
import {Product} from "../../components/cards/productCard/Product";
import {Checkbox} from "../../components/ui/checkboxes/Checkbox";
import {ButtonFilters} from "../../components/ui/buttons/filters/ButtonFilters";
import Nike from "../../../assets/nike crocs.png";
import Nike_Crocs from "../../../assets/nike_crocs.png";
import Adidas_Crocs from "../../../assets/adidas_crocs.png";
import hudi from "../../../assets/nike_hudi.png";
import React, {useEffect, useState} from "react";
import {SkeletonEcoMarketPage} from "../../components/animation/skeletonEcoMarketPage/SkeletonEcoMarketPage";
import axios from "axios";
import {ButtonMedium} from "../../components/ui/buttons/medium/ButtonMedium";
import {MarketBottomSheet} from "../../components/bottomSheet/marketBottomSheet/MarketBottomSheet";
import {FilterCheckboxes} from "../../components/filterCheckboxes/FilterCheckboxes";

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


export const EcoMarket = () =>{

    const [isOpen, setIsOpen] = useState<boolean>(false);

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

    const onFilterClick = () => {
        setIsOpen(!isOpen);
    };

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
                        <ButtonMedium title={"Фильтры"}
                                      color={"rgba(0, 11, 38, 0.8)"}
                                      background={"rgba(62, 80, 114, 0.08)"}
                                      onClick={onFilterClick}/>

                        <div className="button-filters">
                            <ButtonFilters type={"button"}/>
                        </div>
                    </div>
                    <div className="filter-and-table">
                        <div className="filter-wrapper">
                            <FilterCheckboxes/>
                        </div>
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
            <MarketBottomSheet isOpen={isOpen}/>
            <Footer/>
        </div>
    )
}