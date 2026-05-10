let trollFace =
  "https://tse4.mm.bing.net/th/id/OIP.ybP6gdrhyfHQauPrimYwwgHaGK?pid=Api&P=0&h=220";

export default function Header() {
  return (
    <main className="parent">
      <header className="header">
          <img src={trollFace} />
          <h1 className="title">Memes generator</h1>
        <div className="Unlimited">Unlimited</div>
      </header>
    </main>
  );
}
