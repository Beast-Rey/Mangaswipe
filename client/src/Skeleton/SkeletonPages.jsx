import SkeletonElement from "./SkeletonElement";


const SkeletonPages = () => {
  return (
    <div className="container mx-auto">
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
      <div className="space-x-10 flex justify-center my-10 mb-4 font-bold">
        <SkeletonElement type="skelebtn" />
        <SkeletonElement type="skelebtn" />
      </div>
    </div>
  );
};

export default SkeletonPages;