<h1>Fake paperconcept store</h1>

<h2>table of context:</h2>
<ul>
  <li><a href="#tech">technologies</a></li>
  <li><a href="#useful">useful commands</a></li>
  <li><a href="#components">components</a></li>
  <li><a href="#routes">routes</a></li>
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
<h3>https://paperconcept-store.vercel.app</h3>
<h3>Page inspired by: https://paperconcept.pl</h3>

<h2>To run this project locally You need environment variables for mongodb, nextAuth</h2>

<h2 id="components">components:</h2>
<ul>
  <li><b>AuthProvider</b> gives info about logged user</li>
  <li><b>ProductsProvider</b> get products from mongodb and pass down to components</li>
  <li><b>DeliveryInfo</b> - black stripe on top page</li>
  <li><b>Backgrounds</b> - home categories with full screen background</li>
  <li><b>Arrow</b> - component for white and left arrow - changing backgrounds / recommended products</li>
  <li><b>GlobalRedux</b> - add products to cart / change quantity / remove product / clear products</li>
  <li><b>Menu</b> - main inside Menu.tsx, wheather it is Desktop or mobile go to related file</li>
  <li><b>Logo</b> - force refresh on click and go to homepage</li>
  <li><b>Recommended</b> - auto changing group of products on hover stop animations</li>
  <li><b>SearchForm</b> - find products related to searched input, on submit show these products on `/submit-search/${searchInput}`</li>
  <li><b>Cart</b> - after click on cart located at top right corner we can see added cart component <b>CartProduct</b> if user is signed in add these products to database so products would be added after login from different device</li>
</ul>

<h2 id="routes">routes</h2>
<ul>
  <li>home page contains five main categories, recommended products (In that database there is not much products so there are every recommended product)</li>
  <li>other routes located in folder app/(routes)</li>
  <li>handle fake checkout: app/api/checkout/</li>
  <li>handle login: app/api/auth/[...nextauth]</li>
  <li>check if email already existed if no then register that user: app/api/register then redirect to login page</li> 
  <li>product-page/[slug] every product has following directory
   /{id}-{slug} 
   slug is category name but without special characters and polish letters
  </li>
  <li>sign-up - registration page</li>
  <li>sign-in - login page</li>
</ul>
