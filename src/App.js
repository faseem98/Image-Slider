import { useState } from "react";
import "./styles.css";

const images = [
  "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
  "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
  "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
  "https://fastly.picsum.photos/id/147/2448/2448.jpg?hmac=Xk6y7EeyG6VQTac1N9IhDAwLVNVeCn_KBN4nO5SRxPw",
  "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
  "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o",
  "https://fastly.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc",
  "https://fastly.picsum.photos/id/348/3872/2592.jpg?hmac=I51bqSjuTk6zKHgtJDpMLY3kSSfAXdB8AHGmWf-Eq1Q",
  "https://fastly.picsum.photos/id/363/4802/3202.jpg?hmac=JGswzT_8L2IXa3nz4ljN90IbYlZr_VMwWDmSccD0Vnw",
  "https://fastly.picsum.photos/id/407/4272/2848.jpg?hmac=X9zJsSzzIRQmVA6T4YJvbl6gbQtzZdJU2CLl8F9SE4U"
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h1 className="image-slider">IMAGE SLIDER</h1>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}

