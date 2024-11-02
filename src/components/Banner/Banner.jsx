import bannerImg from "../../assets/book.png";
const Banner = () => {
  return (
    <div className="bg-[#131313] bg-opacity-5 lg:h-[554px] py-20 px-[120px] rounded-3xl flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:mb-[100px]">
      
        <img src={bannerImg} className="w-[318px] lg:-m-8" />
        <div className="lg:w-[526px] space-y-12">
          <h1 className="playfair-font text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h1>
          
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      
    </div>
  );
};

export default Banner;
