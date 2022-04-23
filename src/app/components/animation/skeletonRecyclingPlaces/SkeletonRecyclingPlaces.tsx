import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletonRecyclingPlaces.sass'
import {SkeletonThemeContext} from "react-loading-skeleton/dist/SkeletonThemeContext";

export const SkeletonRecyclingPlaces = () => {

    return(
        <div className="skeleton-wrapper">
           <div className="skeleton-input-filters">
               <Skeleton className="h"  duration={1} width={600} height={48}/>
               <Skeleton className="h"  duration={1} width={280} height={48}/>
               <Skeleton className="h"  duration={1} width={280} height={48}/>
           </div>
            <div className="skeleton-cards-on-map">
                <Skeleton className="h"  duration={1} width={384} height={110} borderRadius={16}/>
                <Skeleton className="h"  duration={1} width={384} height={110} borderRadius={16}/>
                <Skeleton className="h"  duration={1} width={384} height={110} borderRadius={16}/>
                <Skeleton className="h"  duration={1} width={384} height={110} borderRadius={16}/>
            </div>
        </div>
    )
}