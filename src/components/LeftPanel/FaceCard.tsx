import meImage from "../../assets/me.png";

const FaceCard = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={meImage} className="rounded-[50%] w-50 border-2" />
      <p className="text-xl mt-5">Keiran Bunyan</p>
      <p className="text-xl">Software Developer</p>
    </div>
  );
};

export default FaceCard;
