import Skeleton from "react-loading-skeleton";
import {ButtonFilters} from "../../ui/buttons/filters/ButtonFilters";
import {Checkbox} from "../../ui/checkboxes/Checkbox";
import React from "react";
import balance from "../../../../assets/balance.png";
import 'react-loading-skeleton/dist/skeleton.css';
import "./SkeletonEcoMarketPage.sass"

export const SkeletonEcoMarketPage = () =>{
    return(
        <div className="skeleton-wrapper">
            <div className="header-and-button-filter">
                <h1>
                    <Skeleton width={171} height={36} duration={1} />
                </h1>

                <div className="skeleton-filters">
                    <Skeleton width={111} height={40} duration={1} />
                    <Skeleton width={111} height={40} duration={1} />
                    <Skeleton width={111} height={40} duration={1} />
                </div>
            </div>
            <div className="filter-and-table">
                <aside className="filter-wrapper">
                    <div className="block-of-filter">
                        <h5>
                            <Skeleton width={50} height={21} duration={1}/>
                        </h5>

                        <Skeleton width={100} height={25} duration={1}/>
                        <Skeleton width={100} height={25} duration={1}/>
                    </div>

                    <div className="block-of-filter">
                        <h5>
                            <Skeleton width={50} height={21} duration={1}/>
                        </h5>

                        <Skeleton width={100} height={25} duration={1}/>
                        <Skeleton width={100} height={25} duration={1}/>

                    </div>

                    <div className="block-of-filter">
                        <h5>
                            <Skeleton width={50} height={21} duration={1}/>
                        </h5>

                        <Skeleton width={100} height={25} duration={1}/>
                        <Skeleton width={100} height={25} duration={1}/>
                    </div>
                </aside>
                <div className="table-products-skeleton">
                    <div className="product">

                        <div className="img-product">
                            <Skeleton width={254} height={270}/>
                        </div>

                        <h4>
                            <Skeleton width={150} height={22}/>
                        </h4>
                        <p className="description">
                            <Skeleton width={130} height={15}/>
                        </p>

                        <div className="balance">
                            <Skeleton circle={true} width={24} height={24}/>
                            <p className="count">
                                <Skeleton width={35} height={24}/>
                            </p>
                        </div>

                    </div>
                    <div className="product">

                        <div className="img-product">
                            <Skeleton width={254} height={270}/>
                        </div>

                        <h4>
                            <Skeleton width={150} height={22}/>
                        </h4>
                        <p className="description">
                            <Skeleton width={130} height={15}/>
                        </p>

                        <div className="balance">
                            <Skeleton circle={true} width={24} height={24}/>
                            <p className="count">
                                <Skeleton width={35} height={24}/>
                            </p>
                        </div>

                    </div>
                    <div className="product">

                        <div className="img-product">
                            <Skeleton width={254} height={270}/>
                        </div>

                        <h4>
                            <Skeleton width={150} height={22}/>
                        </h4>
                        <p className="description">
                            <Skeleton width={130} height={15}/>
                        </p>

                        <div className="balance">
                            <Skeleton circle={true} width={24} height={24}/>
                            <p className="count">
                                <Skeleton width={35} height={24}/>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}