import React from 'react';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Footer() {
   return (
      <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
         <Logo />
         <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button variant={'ghost'} size={'sm'}>
               Privacy Policy
            </Button>
            <Button variant={'ghost'} size={'sm'}>
               Terms Condition
            </Button>
         </div>
      </div>
   );
}
