import SkeletonElement from "./SkeletonElement";
import Shimmer from './Shimmer'

const SkeletonHome= () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-4">
        <SkeletonElement type="skeletonTitle"/>
        <SkeletonElement type="skeletonSpan"/>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonHome;
