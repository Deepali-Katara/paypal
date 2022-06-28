

import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();
  var rendered = false;
  useEffect(() => {
      if(!rendered){
        window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value:  695.00,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
      rendered = true;
      }
    
  }, []);

  return (
      <><div ref={paypal}>
       
      
    </div></>
 
  );
}