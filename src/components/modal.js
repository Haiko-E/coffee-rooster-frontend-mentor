import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './modal.module.css';
import { Dialog } from '@headlessui/react';
import { fraunces, barlow } from '@/pages/_app';
import Summary from './summary';
import { calculatedPrice } from './plan';

export default function Modal({ form, setShowModal }) {
  let [isOpen, setIsOpen] = useState(true);
  const [price, setPrice] = useState('');
  const [delivery, setDelivery] = useState('');
  const [sending, setSending] = useState(false);

  function checkoutHandler(formData) {
    if (formData.isValid()) {
      const data = {
        ...formData.values,
        subscription: `${price}/${formData.values.deliver}`,
      };
      console.log(data);
      form.reset();
      setSending(true);

      setTimeout(() => {
        setShowModal(false);
        setIsOpen(false);
        setSending(false);
      }, 4000);
    }
  }

  useEffect(() => {
    const calcPrice = calculatedPrice(form.values.grams);
    if (form.values.deliver === 'every week') {
      setDelivery('week');
      setPrice(calcPrice[0]);
    }
    if (form.values.deliver === 'every 2 weeks') {
      setDelivery('2 weeks');
      setPrice(calcPrice[1]);
    }
    if (form.values.deliver === 'every month') {
      setDelivery('month');
      setPrice(calcPrice[2]);
    }
  }, []);

  function onCloseHandler() {
    setIsOpen(false);
    setShowModal(false);
  }

  return (
    <Dialog open={isOpen} onClose={onCloseHandler}>
      <div className={styles.backdrop} aria-hidden='true' />
      <div className={styles.container}>
        <Dialog.Panel className={styles.panel}>
          <Dialog.Title className={fraunces.className}>Order Summary</Dialog.Title>
          {sending && (
            <>
              <div className={`${styles.description} ${fraunces.className}`}>
                Sending, open your console to view the data that has been send
              </div>
            </>
          )}
          {!sending && (
            <Dialog.Description as='div' className={styles.description}>
              <Summary
                coffee={form.values.coffee}
                bean={form.values.bean}
                grams={form.values.grams}
                deliver={form.values.deliver}
                grind={form.values.grind}
                className={`${fraunces.className} ${styles.summary}`}
              />
              <p className={barlow.className}>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can also
                be redeemed at the checkout.
              </p>
              <div className={`${fraunces.className} ${styles.checkout}`}>
                <p>{`${price}/${delivery}`}</p>
                <button
                  onClick={() => checkoutHandler(form)}
                  type='submit'
                  className={`btn`}
                >
                  Checkout!
                </button>
              </div>
            </Dialog.Description>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
