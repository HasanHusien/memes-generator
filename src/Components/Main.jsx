import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const defaultMeme = {
  topText: "does not simply",
  bottomText: "Walk into Mordor",
  imageUrl: "https://i.imgflip.com/54d9lj.png",
};

export default function Main() {
  const [memesApi, setMemesApi] = useState([]);
  const [memes, setMemes] = useState(defaultMeme);

  function getRandomMeme() {
    let randomIndex = Math.floor(Math.random() * memesApi.length);
    let randomImg = memesApi[randomIndex].url;
    setMemes((prev) => ({
      ...prev,
      imageUrl: randomImg,
    }));
  }

  function handelChange(event) {
    const { value, name } = event.currentTarget;
    setMemes((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleDownload() {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.src = memes.imageUrl;

    img.onload = () => {
      // USING CANVA
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = "40px Impact";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";

      // shadow blur
      ctx.shadowColor = "black";
      ctx.shadowBlur = 5;

      // outline like CSS text-shadow
      ctx.lineWidth = 4;
      ctx.strokeStyle = "black";

      // TOP TEXT
      ctx.strokeText(memes.topText, canvas.width / 2, 50);
      ctx.fillText(memes.topText, canvas.width / 2, 50);

      // BOTTOM TEXT
      ctx.strokeText(memes.bottomText, canvas.width / 2, canvas.height - 20);
      ctx.fillText(memes.bottomText, canvas.width / 2, canvas.height - 20);

      const url = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = url;
      a.download = "meme.png";
      a.click();
    };
  }
  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesApi(data.data.memes));
  }, []);

  console.log(memes.imageUrl);
  return (
    <main>
      <div className="form">
        <label>
          Top text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handelChange}
            value={memes.topText}
          />
        </label>

        <label>
          Bottom text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handelChange}
            value={memes.bottomText}
          />
        </label>
        <button onClick={getRandomMeme}>get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memes.imageUrl} />
        <span className="top">{memes.topText}</span>
        <span className="bottom">{memes.bottomText}</span>
      </div>
      <button className="download" onClick={handleDownload}>
        download meme  <MdOutlineFileDownload className="down"/>
      </button>
    </main>
  );
}
