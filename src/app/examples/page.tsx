// http://localhost:3000/examples/

export default function Page() {
  return (
    <div className="grid gap-5">
      <h1>Witaj w Next</h1>

      <p>Test is Komunikat matching Header </p>
      <p>Expect 'Header 1' to match 'Komunikat 1'</p>
      <p>Expect 'Header 2' to match 'Komunikat 2'</p>
      {/* <p>Expect 'Header ..' to match 'Komunikat ...'</p> */}

      <div className="parent">
        <h1>Header 2 </h1>

        <div className="child">
          <p>Komunikat 2</p>
          {/* <p>Komunikat 1</p> - blad! */}
        </div>
      </div>

      <div className="parent">
        <h1>Header 1 </h1>

        <div className="child">
          <p>Komunikat 1</p>  
          {/* <p>Komunikat 3</p> -- blad!   */}
        </div>
      </div>

      <a href="/examples/podstrona/">Podstrona</a>
    </div>
  );
}


