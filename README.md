<h1>Fake paperconcept store</h1>

<h2>table of context:</h2>
<ul>
  <li><a href="#tech">technologies</a></li>
  <li><a href="#useful">useful commands</a></li>
  <li><a href="#description">description</a></li>
</ul>

<h2 id="tech">Used technologies:</h2>
<ul>
  <li>next</li>
  <li>react</li>
  <li>typescript</li>
  <li>monogdb</li>
  <li>prisma</li>
  <li>tailwindcss</li>
  <li>shadcn/ui</li>
  <li>redux</li>
  <li>nextauth</li>
  <li>stripe</li>
</ul>

<h2>live:</h2>
<h3>https://paperconcept-store.vercel.app/</h3>


<h2 id="useful">useful lines:</h2>

<h3>install packages:</h3>
<h4>npm i</h4>

<h3>run project:</h3>
<h4>npm run dev</h4>

<h3>compile sass to css:</h3>
<h4>sass --watch ./app/globals.scss:./app/globals.css</h4>


<h2 id="description">app description:</h2>
<h3>Page inspired by: https://paperconcept.pl/pl/</h3>

<ul>
  <li><Backgrounds/> - home backgrounds on click smooth animation</li>
  <li><Arrow/> - component for white and left arrow - changing backgrounds on click for homepage and Recommended products</li>
  <li><DeliveryInfo/> - black stripe on top page</li>
  <li><GlobalRedux/> - add products to cart / increase quantity / remove product</li>
  <li><Menu> - main inside Menu.tsx, wheather it is Desktop or mobile go to related file</li>
  <li><Logo/> - force refresh on click and go to homepage</li>
  <li><Recommended/> - auto changing group of products on hover stop animations</li>
  <li><SearchForm/> - find products related to searched input, on submit show these products on `/submit-search/${searchInput}`</li>
  <li><Cart/> - after click on cart located at top right corner we can see added cart component </CartProduct> contains single product</li>
  <li>other routes located in folder app/(routes)</li>
  <li>handle fake checkout: app/api/checkout/</li>
  <li>handle login: app/api/auth/[...nextauth]</li>
  <li>check if email already existed if no register: app/api/register</li>
</ul>
