import ColorOptionsImg from "../public/FAQ Images/Color Palette.png";

export default function ColorOptions() {
  return (
    <div>
      <h2>Color Options</h2>
      <img src={ColorOptionsImg.src} alt="Color Options" />
      <style jsx>{`
        div {
          width: 100%;
        }
        img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
