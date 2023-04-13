import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import styles from './plan.module.css';
import Image from 'next/image';
import PlanItem from './plan-item';
import Summary from './summary';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import TableItem from './table-item';
import Modal from './modal';

const schema = z.object({
  coffee: z.enum(['capsule', 'filter', 'espresso']),
  bean: z.enum(['single origin', 'decaf', 'blended']),
  grams: z.enum(['250g', '500g', '1000g']),
  grind: z.enum(['wholebean', 'filterd', 'cafetiére', 'none']),
  deliver: z.enum(['every week', 'every 2 weeks', 'every month']),
});

export function calculatedPrice(weight) {
  if (weight === '250g') {
    return ['7,20', '9,60', '12,00'];
  }

  if (weight === '500g') {
    return ['13,00', '17,50', '22,00'];
  }

  if (weight === '1000g') {
    return ['22,00', '32,00', '42,00'];
  }

  return ['', '', ''];
}

export default function Plan() {
  const [isActive, setIsActive] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      coffee: '____',
      bean: '____',
      grams: '____',
      grind: '____',
      deliver: '____',
    },
  });
  const formErrors = Object.keys(form.errors).length !== 0;

  useEffect(() => {
    form.validate();
    if (form.values.coffee === 'capsule') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [form.values]);

  return (
    <div className={styles.container}>
      <ul className={styles.table}>
        <TableItem
          className={isActive === 'coffee' ? styles.active : ''}
          title='Preference'
          num='01'
        />
        <TableItem
          className={isActive === 'bean' ? styles.active : ''}
          title='Bean type'
          num='02'
        />
        <TableItem
          className={isActive === 'quantity' ? styles.active : ''}
          title='Quantity'
          num='03'
        />
        <TableItem
          className={isActive === 'grind' ? styles.active : ''}
          title='Grind option'
          num='04'
        />
        <TableItem
          className={isActive === 'deliver' ? styles.active : ''}
          title='Deliveries'
          num='05'
        />
      </ul>
      <form onSubmit={form.onSubmit()} className={`${styles.plan} spacing`}>
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  onClick={() => setIsActive('coffee')}
                  className={styles.button}
                >
                  <h4>How do you drink your coffee</h4>
                  <Image
                    className={open ? styles.open : ''}
                    alt='arrow'
                    width={19}
                    height={14}
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={styles.panel}>
                  <PlanItem
                    radioName='coffee'
                    title='Capsule'
                    text='Compatible with Nespresso systems and similar brewers'
                    form={form}
                    formValue={form.values.coffee}
                  />
                  <PlanItem
                    radioName='coffee'
                    title='Filter'
                    text='For pour over or drip methods like Aeropress, Chemex, and V60'
                    form={form}
                    formValue={form.values.coffee}
                  />
                  <PlanItem
                    title='Espresso'
                    text='Dense and finely ground beans for an intense, flavorful experience'
                    radioName='coffee'
                    form={form}
                    formValue={form.values.coffee}
                  />
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  onClick={() => setIsActive('bean')}
                  className={styles.button}
                >
                  <h4>What type of coffee?</h4>
                  <Image
                    className={open ? styles.open : ''}
                    alt='arrow'
                    width={19}
                    height={14}
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={styles.panel}>
                  <PlanItem
                    title='Single origin'
                    text='Distinct, high quality coffee from a specific family-owned farm'
                    form={form}
                    formValue={form.values.bean}
                    radioName='bean'
                  />
                  <PlanItem
                    title='Decaf'
                    text='Just like regular coffee, except the caffeine has been removed'
                    form={form}
                    formValue={form.values.bean}
                    radioName='bean'
                  />
                  <PlanItem
                    title='Blended'
                    text='Combination of two or three dark roasted beans of organic coffees'
                    form={form}
                    formValue={form.values.bean}
                    radioName='bean'
                  />
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  onClick={() => setIsActive('quantity')}
                  className={styles.button}
                >
                  <h4>How much would you like?</h4>
                  <Image
                    className={open ? styles.open : ''}
                    alt='arrow'
                    width={19}
                    height={14}
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={styles.panel}>
                  <PlanItem
                    title='250g'
                    text='Perfect for the solo drinker. Yields about 12 delicious cups.'
                    form={form}
                    formValue={form.values.grams}
                    radioName='grams'
                  />
                  <PlanItem
                    title='500g'
                    text='Perfect option for a couple. Yields about 40 delectable cups.'
                    form={form}
                    formValue={form.values.grams}
                    radioName='grams'
                  />
                  <PlanItem
                    title='1000g'
                    text='Perfect for offices and events. Yields about 90 delightful cups.'
                    form={form}
                    formValue={form.values.grams}
                    radioName='grams'
                  />
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  onClick={() => setIsActive('grind')}
                  className={styles.button}
                  disabled={isDisabled}
                >
                  <h4>Want us to grind them?</h4>
                  <Image
                    className={open ? styles.open : ''}
                    alt='arrow'
                    width={19}
                    height={14}
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={styles.panel}>
                  <PlanItem
                    title='Wholebean'
                    text='Best choice if you cherish the full sensory experience.'
                    form={form}
                    formValue={form.values.grind}
                    radioName='grind'
                  />
                  <PlanItem
                    title='Filterd'
                    text='For drip or pour-over coffee methods such as V60 or Aeropress.'
                    form={form}
                    formValue={form.values.grind}
                    radioName='grind'
                  />
                  <PlanItem
                    title='Cafetiére'
                    text='Course ground beans specially suited for french press coffee.'
                    form={form}
                    formValue={form.values.grind}
                    radioName='grind'
                  />
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  onClick={() => setIsActive('deliver')}
                  className={styles.button}
                >
                  <h4>How often should we deliver?</h4>
                  <Image
                    className={open ? styles.open : ''}
                    alt='arrow'
                    width={19}
                    height={14}
                    src='/assets/plan/desktop/icon-arrow.svg'
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={styles.panel}>
                  <PlanItem
                    title='Every week'
                    text={`$${
                      calculatedPrice(form.values.grams)[0]
                    } per shipment. Includes free first-class shipping.`}
                    form={form}
                    formValue={form.values.deliver}
                    radioName='deliver'
                  />
                  <PlanItem
                    title='Every 2 weeks'
                    text={`$${
                      calculatedPrice(form.values.grams)[1]
                    } per shipment. Includes free first-class shipping.`}
                    form={form}
                    formValue={form.values.deliver}
                    radioName='deliver'
                  />
                  <PlanItem
                    title='Every month'
                    text={`$${
                      calculatedPrice(form.values.grams)[2]
                    } per shipment. Includes free first-class shipping.`}
                    form={form}
                    formValue={form.values.deliver}
                    radioName='deliver'
                  />
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>

        <Summary
          coffee={form.values.coffee}
          bean={form.values.bean}
          grams={form.values.grams}
          deliver={form.values.deliver}
          grind={form.values.grind}
          title='ORDER SUMMARY'
        />
        <button
          type='button'
          onClick={() => setShowModal(true)}
          disabled={formErrors}
          className='btn'
        >
          Create my Plan!
        </button>
        {showModal && <Modal form={form} setShowModal={setShowModal} />}
      </form>
    </div>
  );
}
