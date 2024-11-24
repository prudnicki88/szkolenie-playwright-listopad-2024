// http://localhost:3000/examples/

export default function Page() {
  return (
    <div>
      <h1>Witaj w Next</h1>

      <p>Test is Komunikat matching Header </p>
      <p>Expect 'Header 1' to match 'Komunikat 1'</p>

      <div className="parent">
        <h1>Header 1 </h1>

        <div className="child">
          <p>Komunikat 1</p>
        </div>
      </div>

      <div className="parent">
        <h1>Header 2 </h1>

        <div className="child">
          <p>Komunikat 2</p>
        </div>
      </div>

      <a href="/examples/podstrona/">Podstrona</a>
    </div>
  );
}


