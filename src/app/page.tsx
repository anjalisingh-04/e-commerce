
'use client';

import { useState } from 'react';

import Navbar from "@/components/navbar";
import Link from 'next/link';
import Footer from '@/components/footer';
import HomeWrapper from '@/components/wrapper/Home';
import HomeBanner from '@/components/home/banner';
import PromoSection from '@/components/home/card';
import BestSeller from '@/components/home/productcard';


export default function HomeComp() {


  return (

    <>
      <HomeWrapper>
        <HomeBanner />
        <PromoSection />
        <BestSeller />
      </HomeWrapper>


    </>

  );
}


















