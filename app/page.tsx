'use client'

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { DIRECTIONS, ExtraClassNames, ProductType } from "./types/types";
import { bgImages } from "./components/Backgrounds/bgImages";
import { Menu } from "./components/Menu/Menu";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { Arrow } from "./components/Arrow/Arrow";
import { Recommended } from "./components/Recommended/Recommended";
import { DeliveryInfo } from "./components/DeliveryInfo/DeliveryInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { addProduct } from "./GlobalRedux/Features/counter/counterSlice";

const Main = () => {
  const [bgCount, setBgcount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const productCart = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const [animationsDetails, setAnimationsDetails] = useState(
    { direction: DIRECTIONS.UNKNOWN, isActive: false }
  );

  const mainELement = useRef<HTMLElement>(null)

  const changeBg = (direction: DIRECTIONS) => {
    setIsLoading(true);
    setAnimationsDetails({ direction, isActive: true })

    setTimeout(() => {
      setIsLoading(false)
      setAnimationsDetails({ direction, isActive: false })

      if (direction === DIRECTIONS.LEFT && bgCount <= 0) {
        setBgcount(bgImages.length - 1);
        return;
      }
      if (direction === DIRECTIONS.RIGHT && bgCount >= bgImages.length - 1) {
        setBgcount(0);
        return;
      }
      if (direction === DIRECTIONS.LEFT) {
        setBgcount(count => count - 1);
      }
      if (direction === DIRECTIONS.RIGHT) {
        setBgcount(count => count + 1);
      }
    }, 500)
  }

  useEffect(() => {
    const savedCart: ProductType[] = JSON.parse(localStorage.getItem('cart') || '{}');
    if (savedCart.length > 0 && productCart.length === 0) {
      for (const key of savedCart) {
        dispatch(addProduct(key));
      }
    }
  }, [dispatch, productCart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productCart))
  }, [productCart])

  return (
    <main
      ref={mainELement}
      className="h-screen overflow-scroll"
    >
      <DeliveryInfo />
      <header className={cn(
        'header',
        'relative',
        'w-full',
        'bg-cover',
        'bg-center',
        'overflow-x-hidden',
      )}
      >
        <Menu className={ExtraClassNames.TRANSPARENT} />
        <Backgrounds bgCount={bgCount} animationsDetails={animationsDetails} />

        <div className="mx-5 relative h-full">
          <Arrow
            direction={DIRECTIONS.LEFT}
            handleArrowClick={changeBg}
            isLoading={isLoading}
          >&lt;</Arrow>

          <Arrow
            direction={DIRECTIONS.RIGHT}
            handleArrowClick={changeBg}
            isLoading={isLoading}
          >&gt;</Arrow>
        </div>
      </header>
      <section className="flex flex-col overflow-hidden mx-4 lg:mx-[5%] lg:px-10">
        <article>
          <h1 className="text-4xl font-semibold py-20">PaperConcept to sklep plastyczny pełen produktów<br />najlepszych marek.</h1>
        </article>
        <article>
          <h3 className="font-semibold py-10">Polecane produkty:</h3>
          <Recommended />
        </article>
      </section>
    </main>
  )
}

export default Main;
