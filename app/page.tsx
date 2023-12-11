"use client";

import { useCallback, useEffect, useState } from "react";
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
import { addProduct } from "./GlobalRedux/Features/cart/cartSlice";
import { useSession } from "next-auth/react";
import { UpdateOrder } from "@/app/components/UpdateOrder/UpdateOrder";

const HomePage = () => {
  const session = useSession();
  const [bgCount, setBgcount] = useState(0);
  const productCart = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [isArrowHidden, setIsarrowhidden] = useState(false);
  const [bgAnimationDetails, setBganimationDetails] = useState({
    direction: DIRECTIONS.UNKNOWN,
    isActive: false,
  });

  const [isRanimationStop, setIsRanimationStop] = useState(true);

  const changeBg = (direction: DIRECTIONS) => {
    setBganimationDetails({ direction, isActive: true });

    setTimeout(() => {
      setBganimationDetails({ direction, isActive: false });

      if (direction === DIRECTIONS.LEFT && bgCount <= 0) {
        setBgcount(bgImages.length - 1);
        return;
      }
      if (direction === DIRECTIONS.RIGHT && bgCount >= bgImages.length - 1) {
        setBgcount(0);
        return;
      }
      if (direction === DIRECTIONS.LEFT) {
        setBgcount((count) => count - 1);
      }
      if (direction === DIRECTIONS.RIGHT) {
        setBgcount((count) => count + 1);
      }
    }, 500);
  };

  // const updateOrder = useCallback(async () => {
  //   try {
  //     const user: any = session?.data;
  //     const cart = localStorage.getItem("cart");
  //     const res = await fetch("/api/updateOrder", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         data: { cart, userId: user.id },
  //       }),
  //     });
  //     console.log(res);
  //     if (!res.ok) {
  //       toast({
  //         description: "cannot upload cart on db",
  //         variant: "destructive",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [session]);

  useEffect(() => {
    const savedCart: ProductType[] = JSON.parse(
      localStorage.getItem("cart") || "{}"
    );
    if (savedCart.length > 0 && productCart.length === 0) {
      for (const key of savedCart) {
        dispatch(addProduct(key));
      }
    }
  }, [dispatch, productCart, session]);

  // useEffect(() => {
  //   if (session?.data?.user) {
  //     updateOrder();
  //   }
  // }, [session, updateOrder, productCart]);

  return (
    <main
      className="min-h-screen overflow-auto"
      onMouseLeave={() => setIsRanimationStop(true)}
      onMouseEnter={() => setIsRanimationStop(false)}
    >
      <UpdateOrder />
      <DeliveryInfo />
      <header
        className={cn(
          "header",
          "relative",
          "w-full",
          "bg-cover",
          "bg-center",
          "overflow-x-hidden"
        )}
      >
        <Menu
          className={ExtraClassNames.TRANSPARENT}
          setIsarrowhidden={setIsarrowhidden}
        />
        <Backgrounds
          bgCount={bgCount}
          bgAnimationDetails={bgAnimationDetails}
          isArrowHidden={isArrowHidden}
        />

        <div className="pt-[calc(50%-40px)] px-16">
          <Arrow
            direction={DIRECTIONS.LEFT}
            handleArrowClick={changeBg}
            isLoading={bgAnimationDetails.isActive}
            isArrowhidden={isArrowHidden}
          >
            &lt;
          </Arrow>

          <Arrow
            direction={DIRECTIONS.RIGHT}
            handleArrowClick={changeBg}
            isLoading={bgAnimationDetails.isActive}
            isArrowhidden={isArrowHidden}
          >
            &gt;
          </Arrow>
        </div>
      </header>
      <section className="flex flex-col mx-4 lg:mx-[5%] lg:px-10">
        <article>
          <h1 className="text-4xl font-semibold py-20">
            PaperConcept to sklep plastyczny pełen produktów
            <br />
            najlepszych marek.
          </h1>
        </article>
        <article
          onMouseEnter={() => setIsRanimationStop(true)}
          onMouseLeave={() => setIsRanimationStop(false)}
        >
          <h3 className="font-semibold py-10">Polecane produkty:</h3>
          <Recommended
            isArrowhidden={isArrowHidden}
            isRanimationStop={isRanimationStop}
          />
        </article>
      </section>
    </main>
  );
};

export default HomePage;
