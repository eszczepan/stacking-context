export const flowLayoutFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="container">
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
    </div>
  );
}`,
  'main.css': `.box {
  width: 100px;
  height: 100px;
  border: 2px solid;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}
.box-1 {
  background-color: gray;
}
.box-2 {
  background-color: gold;
  margin: -60px 0 0 40px;
}
.box-3 {
  background-color: hotpink;
  margin: -60px 0 0 80px;
}
`,
};

export const positionedLayoutFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="container">
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
    </div>
  );
}`,
  'main.css': `.box {
  width: 100px;
  height: 100px;
  border: 2px solid;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}
.box-1 {
  background-color: gray;
}
.box-2 {
  position: relative;
  background-color: gold;
  margin: -60px 0 0 40px;
}
.box-3 {
  background-color: hotpink;
  margin: -60px 0 0 80px;
}
`,
};

export const zIndexFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="container">
      <div className="box box-1">1</div>
      <div className="box box-2">2</div>
      <div className="box box-3">3</div>
    </div>
  );
}`,
  'main.css': `.box {
  width: 100px;
  height: 100px;
  border: 2px solid;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}
.box-1 {
  background-color: gray;
  z-index: 3;
}
.box-2 {
  background-color: gold;
  margin: -60px 0 0 40px;
  z-index: 2;
}
.box-3 {
  background-color: hotpink;
  margin: -60px 0 0 80px;
  z-index: 1;
}
`,
};

export const flexboxZIndexFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="container">
      <div className="box box-1">1</div>
      <div className="box box-2">2</div>
      <div className="box box-3">3</div>
    </div>
  );
}`,
  'main.css': `.container {
  display: flex;
}
.box {
  width: 100px;
  height: 100px;
  border: 2px solid;
  line-height: 100px;
  text-align: center;
  font-size: 50px;
}
.box-1 {
  background-color: gray;
  z-index: 1;
}
.box-2 {
  background-color: gold;
  margin-top: 55px;
  margin-left: -55px;
  z-index: 2;
}
.box-3 {
  background-color: hotpink;
  margin-top: 110px;
  margin-left: -55px;
  z-index: 3;
}
`,
};

export const AftonbladetFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <>
      <header>Aftonbladet</header>

      <main>
        <div class="modal">
          Aftonbladet är en del av Schibsted-familjen
          <img
            src="https://cdn.aftonbladet.se/logotypes/logo-aftonbladet.svg"
            alt="AB"
          />
          Annonsens ID-nummer: 417614025
        </div>
      </main>
    </>
  );
}`,
  'main.css': `body {
  margin: 0;
}
header {
  position: relative;
  z-index: 2;

  height: 60px;
  line-height: 60px;
  background: #061a57;
  color: white;
  text-align: center;
}
main {
  position: relative;
  z-index: 1;

  padding: 32px;
  text-align: center;
}
.modal {
  position: absolute;
  z-index: 999999;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  top: -20px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  text-align: center;
  padding: 8px;
  width: 300px;
  height: 200px;
  background: chocolate;
  box-shadow: 1px 2px 8px hsl(0deg 0% 0% / 0.25);
  border-radius: 6px;
}
.modal img {
  width: 100%;
}
`,
};

export const stackingContextFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <>
      <header>Inventory team</header>

      <section class="jobs">
        <article class="card">
          <h2>Backend</h2>
          <div class="salary">$200</div>
          <p>For backend devs</p>
          <ul>
            <li>3 projects</li>
          </ul>
          <button>Apply Now</button>
        </article>

        <article class="card full-stack">
          <h2>Full-stack</h2>
          <div class="salary">$300</div>
          <p>For full-stack devs</p>
          <ul>
            <li>8 projects</li>
          </ul>
          <button>Apply Now</button>
        </article>

        <article class="card">
          <h2>Frontend</h2>
          <div class="salary">$250</div>
          <p>For frontend devs</p>
          <ul>
            <li>5 projects</li>
          </ul>
          <button>Apply Now</button>
        </article>
      </section>
    </>
  );
}`,
  'main.css': `body {
  margin: 0;
  padding: 128px 16px;
  min-height: 150vh;
}
header {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  background: #061a57;
  color: white;
}
.jobs {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.card {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 16px 32px;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 2px 16px #c7d5f9;
}

.card h2 {
  font-size: 1rem;
  font-weight: 500;
  color: hsl(0deg 0% 40%);
}
.card button {
  width: 100%;
  height: 3rem;
  background-color: #f5f7fe;
  border-radius: 8px;
  margin-top: 10px;
}
.card.full-stack {
  z-index: 2;
  margin: 12px -16px;
  flex: 1.25;
}

.salary {
  font-size: 2rem;
  font-weight: 700;
}
`,
};

export const stackingContextVinkFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="app">
    <div className="navigation">Vink</div>
    <div className="doggos">
      <div className="card">
        <img src="https://rikoland.pl/data/include/img/news/1610375896.jpg" alt="jackie" />
        <h2>Der fortalte</h2>
        <p>hovedpersonen Mona (Eili). har akkurat flyttet inn samboeren</p>
      </div>
      <div className="card">
        <img src="https://www.zooplus.pl/magazyn/wp-content/uploads/2017/12/buldog-francuski-768x512.jpg" alt="buldog"
        />
        <h2>Eili Harboe og</h2>
        <p>Helt vanlige folk. der ikke alle brikkene faller på plass</p>
      </div>
      <div className="card">
        <img src="https://www.zoo-mar.pl/wp-content/uploads/2015/09/jamnik.jpg" alt="jamnik" />
        <h2>Tenk at så fine</h2>
        <p>USøvnløshet og voldsomme mareritt plager nemlig</p>
      </div>
    </div>

    <div className="ad-container">
      <div className="ad">
        <img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-cog-wheel-icon-png-image_925961.jpg" alt="cogwheel" className="cogwheel" />
        <img src="https://images.unsplash.com/photo-1665330767390-c0bb83e618dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="spitz" className="netboard_1" />
      </div>
    </div>

    <div className="doggos">
      <div className="card">
        <img src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/09/Elo-Dog-Breed.jpg" alt="elo" />
        <h2>Der fortalte</h2>
        <p>hovedpersonen Mona (Eili). har akkurat flyttet inn samboeren</p>
      </div>
      <div className="card">
        <img src="https://www.zooplus.pl/magazyn/wp-content/uploads/2018/04/owczarek-niemiecki.jpg" alt="owczarek" />
        <h2>Eili Harboe og</h2>
        <p>Helt vanlige folk. der ikke alle brikkene faller på plass</p>
      </div>
      <div className="card">
        <img src="https://www.zooplus.pl/magazyn/wp-content/uploads/2018/10/Golden-Retriever.jpg" alt="golden-retriever" />
        <h2>Tenk at så fine</h2>
        <p>USøvnløshet og voldsomme mareritt plager nemlig</p>
      </div>
    </div>
  </div>
  );
}`,
  'main.css': `body {
  margin: 0;
}
.app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-top: 80px;
}
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgray;
  line-height: 80px;
  text-align: center;
  font-size: 50px;
  z-index: 3;
  background-color: white;
}
.doggos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 1;
  padding: 16px;
  margin: 40px 0;
}
.card {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 2px 16px #c7d5f9;
}
.card img {
  width: 100%;
}
.card h2 {
  font-size: 1rem;
  font-weight: 500;
  color: hsl(0deg 0% 40%);
}
.card button {
  width: 100%;
  height: 3rem;
  background-color: #f5f7fe;
  border-radius: 8px;
  margin-top: 10px;
}
.ad-container {
  padding: 32px 0;
  background-color: #f6f6f6;
}
.ad {
  position: relative;
  width: 490px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid;
}
.cogwheel {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 0px;
  top: -24px;
  z-index: 1000;
}
.netboard_1 {
  width: 100%;
  height: 100%;
}
`,
};
