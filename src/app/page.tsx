import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-5">
      <h1>Witaj w Next</h1>
      <h3>i Playwright </h3>

      <ul>
        <li>
          <a href="/examples">Examples</a>
        </li>
        <li>
          <a href="/todos">Todos</a>
        </li>
      </ul>
    </div>
  );
}
