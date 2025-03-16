import PicturePageText from "../components/PicturePageText";
import Gallery from "../components/Gallery";

const images = [
  [
    "/large-picture/lyusei17.png",
    "/normal-picture/yusei1.jpg",
    "/normal-picture/yusei4.jpg",
    "/normal-picture/yusei5.jpg",
    "/normal-picture/yusei6.jpg",
    "/large-picture/lyusei1.jpg",
    "/normal-picture/yusei3.jpg",
    "/normal-picture/yusei7.png",
    "/normal-picture/yusei9.jpg",
    "/large-picture/lyusei7.jpg",
    "/normal-picture/yusei10.jpg",
    "/normal-picture/yusei11.jpg",
  ],
  [
    "/large-picture/lyusei4.jpg",
    "/normal-picture/yusei12.jpg",
    "/normal-picture/yusei13.jpg",
    "/normal-picture/yusei14.jpg",
    "/normal-picture/yusei15.jpg",
    "/large-picture/lyusei3.jpg",
    "/large-picture/lyusei15.jpg",
    "/normal-picture/yusei17.jpg",
    "/normal-picture/yusei18.jpg",
    "/large-picture/lyusei6.jpg",
    "/normal-picture/yusei19.jpg",
    "/normal-picture/yusei20.jpg",
  ],
  [
    "/large-picture/lyusei9.jpg",
    "/normal-picture/yusei21.jpg",
    "/normal-picture/yusei22.jpg",
    "/normal-picture/yusei23.jpg",
    "/normal-picture/yusei24.jpg",
    "/normal-picture/yusei25.jpg",
    "/large-picture/lyusei16.jpg",
    "/normal-picture/yusei41.png",
    "/normal-picture/yusei27.jpg",
    "/normal-picture/yusei28.jpg",
    "/normal-picture/yusei29.jpg",
    "/normal-picture/yusei30.jpg",
  ],
  [
    "/normal-picture/yusei2.jpg",
    "/normal-picture/yusei31.jpg",
    "/normal-picture/yusei32.jpg",
    "/normal-picture/yusei33.jpg",
    "/normal-picture/yusei34.jpg",
    "/large-picture/lyusei18.png",
    "/normal-picture/yusei35.jpg",
    "/normal-picture/yusei36.jpg",
    "/normal-picture/yusei37.jpg",
    "/normal-picture/yusei38.jpg",
    "/normal-picture/yusei39.jpg",
    "/normal-picture/yusei40.jpg",
  ],
  [
    "/large-picture/lyusei19.jpg",
    "/normal-picture/yusei42.jpg",
    "/normal-picture/yusei43.jpg",
    "/normal-picture/yusei44.jpg",
    "/normal-picture/yusei45.jpg",
    "/normal-picture/yusei46.jpg",
    "/large-picture/lyusei20.jpg",
    "/normal-picture/yusei47.jpg",
    "/normal-picture/yusei48.jpg",
    "/large-picture/lyusei21.jpg",
    "/normal-picture/yusei49.jpg",
    "/normal-picture/yusei50.jpg",
  ],
];

const Page = () => {
  return (
    <div>
      <PicturePageText />

      {/* ギャラリーを動的に表示 */}
      {images.map((group, index) => (
        <div key={index}>
          {/* id にユニークな値（target-gallery-${index}）を設定 */}
          <Gallery images={[group]} id={`target-gallery-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Page;
