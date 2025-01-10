declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const sendDataToGA = async () => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbwAhSLvtD2NS7tOi2wqhkl5YRn4sTS4qVOgrUTrFaOlERMWN8osYjRL1G-R4NwYqkUZvg/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          variant: "ghk_4114_1",
          plan_name: "Стоимость 399 ₽/мес.",
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
