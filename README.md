useful lines:
compile sass to scss:
sass --watch ./app/globals.scss:./app/globals.css
run project:
npm run dev

app description:
Page inspired by: https://paperconcept.pl/pl/

app/page.tsx contains homepage

most components located
app/components

<Arrow/> - component for white and left arrow - changing backgrounds on click for homepage and Recommended products
<DeliveryInfo/> - black stripe on top page
<GlobalRedux/> - add products to cart / increase quantity / remove product

<Menu> - main inside Menu.tsx, wheather it is Desktop or mobile go to related file
<Logo> - force refresh on click and go to homepage
