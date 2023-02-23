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

export const stackingContextFiles = {
  '/App.js': `import '/main.css';

export default function App() {
  return (
    <div className="app">
    <div className="navigation">Vink</div>
    <div className="greeting">
      <div className="greet">Greet 1</div>
      <div className="greet">Greet 2</div>
      <div className="greet">Greet 3</div>
    </div>
    <div className="ad-container">
      <div className="ad">
        <img
          src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-cog-wheel-icon-png-image_925961.jpg"
          alt="cogwheel"
          className="cogwheel"
        />
        <img
          src="https://images.unsplash.com/photo-1665330767390-c0bb83e618dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="spitz"
          className="netboard_1"
        />
      </div>
    </div>
    <div className="greeting">
    <div className="greet">Greet 1</div>
    <div className="greet">Greet 2</div>
    <div className="greet">Greet 3</div>
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
.greeting {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  z-index: 1;
}
.greet {
  width: 150px;
  height: 200px;
  margin: 30px 0;
  border: 1px solid tomato;
  border-radius: 4px;
  text-align: center;
  line-height: 150px;
  z-index: 2;
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
  z-index: 2000;
}
.netboard_1 {
  width: 100%;
  height: 100%;
}
`,
};
