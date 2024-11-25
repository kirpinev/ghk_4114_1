import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { sendDataToGA } from "./utils/events.ts";

interface Product {
  title: string;
  text?: string;
  image: string;
  name: string;
  value: number;
}

const products: Array<Product> = [
  {
    title: "Бесплатные переводы",
    image: transfer,
    name: "free_transfer",
    value: 0,
  },
  {
    title: "Бесплатные уведомления",
    text: "дебетовые карты",
    image: free,
    name: "free_pushes",
    value: 0,
  },
  {
    title: "Секретная подборка партнёров с кэшбэком",
    image: gift,
    name: "secret_cashback",
    value: 0,
  },
  {
    title: "+1 топовая категория кэшбэка",
    text: "5%",
    image: smileArrow,
    name: "one_cashback",
    value: 0,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    image: drums,
    name: "one_baraban",
    value: 0,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7 000 ₽/мес.",
    image: cashback,
    name: "limit_cashback",
    value: 0,
  },
  {
    title: "+1% годовых по накопительному счёту",
    image: percent,
    name: "alfa_schet",
    value: 0,
  },

  {
    title: "Бесплатное снятие наличных",
    text: "до 200 000 ₽",
    image: cash,
    name: "free_cash",
    value: 0,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    image: discount,
    name: "",
    value: 0,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);
    sendDataToGA().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
        </div>

        <div style={{ textAlign: "center" }}>
          <Typography.Text
            view="primary-medium"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Выберите план
          </Typography.Text>

          <ButtonMobile
            block
            view="primary"
            size="xs"
            style={{
              padding: "0.5rem",
              position: "sticky",
              top: "1rem",
              zIndex: 100,
              width: "fit-content",
              margin: "1rem auto",
            }}
          >
            <span style={{ marginBottom: "1rem", display: "block" }}>
              Стоимость
            </span>
            <b>399 ₽/мес.</b>
          </ButtonMobile>
        </div>

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="small"
            className={appSt.productsTitle}
          >
            Входит в подписку
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  {product.title}
                </Typography.TitleResponsive>

                {product.text && (
                  <Typography.Text
                    view="primary-medium"
                    tag="p"
                    className={appSt.productText}
                  >
                    {product.text}
                  </Typography.Text>
                )}
              </div>
              <img
                src={product.image}
                alt=""
                width={50}
                height={50}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
