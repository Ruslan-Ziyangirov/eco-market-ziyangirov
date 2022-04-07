import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./SkeletonMainPage.sass"
import {SkeletonThemeContext} from "react-loading-skeleton/dist/SkeletonThemeContext";

export const SkeletonMainPage = () =>{
    return(

        <div className="skeleton-wrapper">
                <div className="skeleton-swapper">
                    <div className="offer">
                        <Skeleton className="head"  duration={1} width={600} height={64}/>
                        <Skeleton className="desc" duration={1} width={500} height={48}/>
                        <Skeleton className="btn"  duration={1} width={130} height={20}/>
                    </div>

                </div>

                <div className="skeleton-main-card-button">
                    <div className="card-skeleton">
                        <div className="card-offer">
                            <Skeleton className="head"  duration={1} width={300} height={42}/>
                            <Skeleton className="desc" duration={1} width={250} height={35}/>
                            <Skeleton className="btn"  duration={1} width={48} height={48}/>
                        </div>
                    </div>

                    <div className="card-skeleton">
                        <div className="card-offer">
                            <Skeleton className="head"  duration={1} width={300} height={42}/>
                            <Skeleton className="desc" duration={1} width={250} height={35}/>
                            <Skeleton className="btn"  duration={1} width={48} height={48}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}