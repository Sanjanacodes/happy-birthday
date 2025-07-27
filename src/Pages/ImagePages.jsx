import "./Gallery.css";
import { useState } from "react";

const ImagePages = () => {
  const images = [
    {
      src: "/images/pic1.jpeg",
      alt: "Pic1",
      message:
        "It was my 25th birthday, my first birthday since we started going out. Loved how you and the gang came over, and you drew me a portait. How cute was that! ❤️ Anyway, I lovvveee this pic, we look so cool na?",
    },
    {
      src: "/images/pic2.jpeg",
      alt: "Pic2",
      message:
        "Remember, the frozen Sissu Lake? We look so effing dope here!😎",
    },
    {
      src: "/images/pic3.jpeg",
      alt: "pic3",
      message:
        "10k for a night! Our hexadome! Hell of an experience. Living near the stars, in the arms of snow. Ahaha! Soon, okay?",
    },
    {
      src: "/images/pic4.jpeg",
      alt: "pic4",
      message:
        "Our first international, baby! 😎 And how awesome we look here, with the prettiest blue behind us!",
    },
    {
      src: "/images/pic5.jpeg",
      alt: "pic5",
      message:
        "Marine Drive! Discovering the 'Swopner Shohor', by our own terms!",
    },
    {
      src: "/images/pic6.jpeg",
      alt: "pic6",
      message:
        "I craved for a stay with a pool + view and YOU FREAKING ARRANGED IT! 🥹 Am I the luckiest or what?",
    },
    {
      src: "/images/pic7.jpeg",
      alt: "pic7",
      message: "Sometimes you also deserve the Princess treatment, na? 😘",
    },
    {
      src: "/images/pic8.jpeg",
      alt: "pic8",
      message: "Our first Pujo together. 🙏❤️🧿",
    },
    {
      src: "/images/pic9.jpeg",
      alt: "pic9",
      message:
        "My first Bombay visit. Excited to see Mannat for the first time (next baar er kotha ar bollam na 😎). I remember being sick that day and how you took care of me! 🥹",
    },
    {
      src: "/images/pic10.jpeg",
      alt: "pic10",
      message:
        "GOAAA! Idk why you don't like the place much. Anyway, love this pic. We totally look like 'friends turned lovers'! 😍",
    },
    {
      src: "/images/pic11.jpeg",
      alt: "pic11",
      message:
        "Last Pujo! What a pretty picture! We look so much in love and so damn 'shaabeki'!🥰",
    },
    {
      src: "/images/pic12.jpeg",
      alt: "pic12",
      message:
        "Such a sexy snap. Love my dress, tho! And you look so CUUUUTEEEE!",
    },
    {
      src: "/images/pic13.jpeg",
      alt: "pic13",
      message:
        "Gokarna was a little overrated I felt. Anyway, this is one of my favourites!😘😘😘😘",
    },
    {
      src: "/images/pic14.jpeg",
      alt: "pic14",
      message:
        "In this trip I realised how much I love forests! And we look like an old married couple here, LOL!",
    },
    {
      src: "/images/pic15.jpeg",
      alt: "pic15",
      message:
        "Our first match in the stadium!!! Thank you for buying overpriced 3000 wala tickets with me, just to see Dhoni!🥹",
    },
    {
      src: "/images/pic16.jpeg",
      alt: "pic16",
      message:
        "My 26th. And we look PICTURE PERFECT, MADE FOR EACH OTHER, man!!!",
    },
    {
      src: "/images/pic17.jpeg",
      alt: "pic17",
      message: "Postcard. Period.",
    },
    {
      src: "/images/pic18.jpeg",
      alt: "pic18",
      message: "Snap from a movie it seems.😎",
    },
    {
      src: "/images/pic19.jpeg",
      alt: "pic19",
      message:
        "Luxury babyyyyy! Taj, just beside Mannat. I mean, woaahh!😎❤️🧿🧿🧿🧿",
    },
    {
      src: "/images/pic20.jpeg",
      alt: "pic20",
      message:
        "Our Bollywood moment! And we didn't even have to fake this! AAAAHHH! 😍😍",
    },
    {
      src: "/images/pic21.jpeg",
      alt: "pic21",
      message:
        "With the tiger. But we all know that asli sher toh hum hai!😎 Jokes apart, this was a verryyy special moment for me, since I'm oh-so-in-love with all sorts of animals. And touching a tiger is a major bucket list item for me. Needless to say, it wouldn't have been possible without YOU!🧿❤️",
    },
    {
      src: "/images/pic22.jpeg",
      alt: "pic22",
      message: "Just a snap which looks like a typical Gen-Z couple pic.",
    },
    {
      src: "/images/pic23.jpeg",
      alt: "pic23",
      message:
        "Last Christmas! Don't know why, this particular mirror selfie looks very appealing to me. You look so HAWT! 🥵",
    },
    {
      src: "/images/pic24.jpeg",
      alt: "pic24",
      message: "We loom Royal. 😎",
    },
    {
      src: "/images/pic25.jpeg",
      alt: "pic25",
      message: "A very 'theke...jabo...tomaye amaye mile' pic!❤️",
    },
    {
      src: "/images/pic26.jpeg",
      alt: "pic26",
      message:
        "Our first concert. That too COLDPLAY! You know why I bought my ticket? Because you said 'chol na, ekshathe tor gola joriye Yellow shunbo' In the post I wrote 'haath dhore' because this is very intimate. Very private to me. To hear this. To be wanted like this. And to want you like this!🧿❤️",
    },
    {
      src: "/images/pic27.jpeg",
      alt: "pic27",
      message:
        "Our Westin stay. Jekhane pakami mere pool ey neme I caught a fever and you took care of me like a baby. 🥹",
    },
    {
      src: "/images/pic28.jpeg",
      alt: "pic28",
      message: "Our Darshan. Very precious!🙏🧿❤️",
    },
  ];
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(index);
  };

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-inner">
              {/* Front Side */}
              <div className="flip-front">
                <img
                  src={img.src}
                  alt={`pic-${index}`}
                  className="gallery-image"
                />
              </div>

              {/* Back Side */}
              <div className="flip-back">
                <p className="flip-message">{img.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ✅ Back to Message Link */}
      <div className="nav-link-container">
        <a href="/message">← Back to Message</a>
      </div>
    </>
  );
};

export default ImagePages;
