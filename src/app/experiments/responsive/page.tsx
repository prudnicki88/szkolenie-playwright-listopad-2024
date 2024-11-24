import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container text-justify grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>
          <div>Banana</div>

          <div>Banana</div>
        </div>

        <div className="my-5">
          RWD
          <div className="hidden md:block">Apple - only  big screen</div>
          <div className="block md:hidden">Orange - only small screen</div>
        </div>

        <a href="/">Homepage</a>

        <div className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ducimus mollitia cum atque sequi vitae minima, accusantium beatae
          eligendi qui earum autem? Quod deserunt maiores, inventore quo
          consequatur sunt harum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur ducimus mollitia cum atque sequi vitae
          minima, accusantium beatae eligendi qui earum autem? Quod deserunt
          maiores, inventore quo consequatur sunt harum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Tenetur ducimus mollitia cum atque
          sequi vitae minima, accusantium beatae eligendi qui earum autem? Quod
          deserunt maiores, inventore quo consequatur sunt harum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur ducimus mollitia
          cum atque sequi vitae minima, accusantium beatae eligendi qui earum
          autem? Quod deserunt maiores, inventore quo consequatur sunt harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ducimus mollitia cum atque sequi vitae minima, accusantium beatae
          eligendi qui earum autem? Quod deserunt maiores, inventore quo
          consequatur sunt harum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur ducimus mollitia cum atque sequi vitae
          minima, accusantium beatae eligendi qui earum autem? Quod deserunt
          maiores, inventore quo consequatur sunt harum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Tenetur ducimus mollitia cum atque
          sequi vitae minima, accusantium beatae eligendi qui earum autem? Quod
          deserunt maiores, inventore quo consequatur sunt harum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur ducimus mollitia
          cum atque sequi vitae minima, accusantium beatae eligendi qui earum
          autem? Quod deserunt maiores, inventore quo consequatur sunt harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          ducimus mollitia cum atque sequi vitae minima, accusantium beatae
          eligendi qui earum autem? Quod deserunt maiores, inventore quo
          consequatur sunt harum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur ducimus mollitia cum atque sequi vitae
          minima, accusantium beatae eligendi qui earum autem? Quod deserunt
          maiores, inventore quo consequatur sunt harum.
        </div>
      </div>
    </div>
  );
}
