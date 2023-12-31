import React, { useState } from 'react'
import { Tabs, TabsTrigger, TabsContent, TabsList } from './ui/tabs'
import { Card, CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { currencyFormat } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'

import * as z from 'zod'

const formSchema = z.object({
  amount: z.number().min(0, {
    message: "Amount must not be empty"
  }),
  category: z.string().min(1, {
    message: "Category must be selected"
  }),
  description: z.string().min(0)
})

const QuickAdd = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

    } catch(err) {
      
    }
  }
  // Income states
  const [inAmount, setInAmount] = useState<number | string>()
  const [inDesc, setInDesc] = useState<string>('');
  const [inCategory, setInCategory] = useState<string>('');
  const [inType, setInType] = useState<string>('')
  
  const handleIncomeSubmit = (event: any) => {
    event.preventDefault();
    alert(`
      INCOME
      amount: ${inAmount}
      desc: ${inDesc}
      category: ${inCategory}
      typeL ${inType}
    `)
  };

  return (
    <div className='w-2/5 m-1 mr-4 lg:mr-0 mb-4 rounded-lg bg-neutral-50'>
      <Tabs className='w-full h-full pt-4 rounded-lg px-2' defaultValue='Expense'>
        <TabsList className='grid grid-cols-2 w-full bg-gray-500 text-white'>
          <TabsTrigger value='Expense'>Expense</TabsTrigger>
          <TabsTrigger value='Income'>Income</TabsTrigger>
        </TabsList>
        <TabsContent value='Expense'>
          <Card className='border-0 shadow-none bg-transparent'>
            <CardContent>

            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )


  // expense states
  // const [exAmount, setExAmount] = useState<string | number>()
  // const [exDesc, setExDesc] = useState<string>('')
  // const [exCategory, setExCategory] = useState()
  // const [exType, setExType] = useState()

  // const handleExpenseSubmit = (event: any) => {
  //   event.preventDefault();

  //   try {
  //     if (!exAmount) {
  //       alert("Amount cannot be empty");
  //     } else {
  //       alert(`${exAmount}, ${exCategory}`)
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // return (
  //   // FIXME: change to shadcn form
  //   // TODO: remove input field outline on focus
  //   <div className='w-2/5 m-1 mr-4 lg:mr-0 mb-4 rounded-lg bg-neutral-50'>
  //     <Tabs defaultValue='Expense' className='w-full h-full pt-4 rounded-lg px-2'>
  //       <TabsList className='grid grid-cols-2 w-full bg-gray-500 text-white'>
  //         <TabsTrigger value='Expense'>Expense</TabsTrigger>
  //         <TabsTrigger value='Income'>Income</TabsTrigger>
  //       </TabsList>
  //       <TabsContent value='Expense'>
  //         <Card className='border-0 shadow-none bg-transparent'>
  //           <CardContent>
  //             <div className='space-y-1'>
  //               <Label>Amount</Label>
  //               <Input id='expense' placeholder={currencyFormat(1200)} type='number' onChange={e => setExAmount(e.target.value)} value={exAmount} />
  //             </div>
  //             <div className='py-1 2xl:py-2'>
  //               <Select>
  //                 <SelectTrigger className='w-full'>
  //                   <SelectValue placeholder="Select Category" />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectGroup>
  //                     <SelectItem value='Food'>Food</SelectItem>
  //                     <SelectItem value='Rent'>Rent</SelectItem>
  //                     <SelectItem value='Groceries'>Groceries</SelectItem>
  //                     <SelectItem value='Bills'>Bills</SelectItem>
  //                   </SelectGroup>
  //                 </SelectContent>
  //               </Select>
  //             </div>
  //             <Textarea placeholder='Description' />
  //             <div className='grid grid-cols-1 place-items-end my-2 2xl:py-5'>
  //               <Button className='grid w-1/4' type='submit' onClick={handleExpenseSubmit}>Submit</Button>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </TabsContent>


  //       <TabsContent value='Income'>
  //         <Card className='bg-transparent border-0 shadow-none'>
  //           <CardContent>
  //             <div className='space-y-1'>
  //               <Label>Amount</Label>
  //               <Input id='income' placeholder={currencyFormat(1200)} type='number'  value={inAmount} onChange={e => setInAmount(e.target.value)} />
  //             </div>
  //             <div className='py-1 2xl:py-2 grid grid-cols-1'>
  //               <Select required>
  //                 <SelectTrigger className='w-full'>
  //                   <SelectValue placeholder="Select Category" />
  //                 </SelectTrigger>
  //                 <SelectContent>
  //                   <SelectGroup>
  //                     <SelectItem value='Food'>Food</SelectItem>
  //                     <SelectItem value='Rent'>Rent</SelectItem>
  //                     <SelectItem value='Groceries'>Groceries</SelectItem>
  //                     <SelectItem value='Bills'>Bills</SelectItem>
  //                   </SelectGroup>
  //                 </SelectContent>
  //               </Select>
  //             </div>
  //             <Textarea placeholder='Description' maxLength={100} onChange={e => setInDesc(e.target.value)} value={inDesc} />
  //             <div className='grid grid-cols-1 place-items-end my-2 2xl:my-5'>
  //               <Button className='grid w-1/4' type='submit' onClick={handleIncomeSubmit}>Submit</Button>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </TabsContent>
  //     </Tabs>
  // </div>
  // )
}

export default QuickAdd