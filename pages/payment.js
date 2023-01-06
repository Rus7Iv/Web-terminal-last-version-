import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import MainContainer from "../components/MainContainer";

const Payment = () => {
  const [payment, setPayment] = useState([
    { id: 1, name: "МТС" },
    { id: 2, name: "Мегафон" },
    { id: 3, name: "Билайн" },
  ]);
  return (
    <MainContainer keywords={"payment next.js"}>
      <h1>Оплата</h1>
      <ul>
        {payment.map((payment) => (
          <li key={payment.id}>
            <Link legacyBehavior href={`/payment/${payment.id}`}>
              <a>{payment.name}</a>
            </Link>,
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Payment;
