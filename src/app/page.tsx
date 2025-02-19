
'use client';

import { useState } from 'react';

import Navbar from "@/components/navbar";
import Link from 'next/link';
import Footer from '@/components/footer';
import HomeWrapper from '@/components/wrapper/Home';
import HomeBanner from '@/components/home/banner';
import PromoSection from '@/components/home/card';



export default function HomeComp() {


  return (

    <>
      <HomeWrapper>
        <HomeBanner />
        <PromoSection />


      </HomeWrapper>
    </>

  );
}











