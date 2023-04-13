import Card from '@/components/card';
import CreatePlan from '@/components/create-plan';
import Modal from '@/components/modal';
import Plan from '@/components/plan';
import Works2 from '@/components/works2';
import React from 'react';

export default function PlanPage() {
  return (
    <>
      <CreatePlan />
      <Works2 />
      <Plan />
    </>
  );
}
