import {Header} from "../../components/header/Header";
import "./EcoMarket.sass"
import {Footer} from "../../components/footer/Footer";
import {Product} from "../../components/productCard/Product";
import Nike from "../../../assets/nike crocs.png";

export const EcoMarket = () =>{


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