'use client';

import CommonTitle from "@/components/ui/CommonTitle"
import Loading from "@/components/ui/Loading"
import Modal from "@/components/ui/Modal"
import { useGetVehicleQuery } from "@/redux/api/vehicles-api"
import { useState } from "react"

import { format } from 'date-fns'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import 'react-clock/dist/Clock.css'
import { DayPicker } from 'react-day-picker'
import 'react-time-picker/dist/TimePicker.css'
import moment from 'moment';
import { useCreateBookingMutation } from "@/redux/api/booking.api"
import { useRouter } from "next/navigation"

type IDParams = {
    id: string
}
const VehicleDetails = ({id}:IDParams ) => {
    
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [time, setTime] = useState('12:00 am');

  const [booking] = useCreateBookingMutation()
  const router = useRouter()
    const {data: resData, isLoading} = useGetVehicleQuery(id)
    if(isLoading || !resData) return <Loading/>
    const {data} = resData
 
  const timeFormat = 'hh:mm a';

  const now = moment().hour(0).minute(0);
  
  function onChange(value: any) {
    setTime(value && value.format(timeFormat));
  }
  const submit = async (e: any) =>{
    e.preventDefault()
    try{
      const inputData = {
        startTime: startDate ?? new Date(),
        endTime: endDate ?? new Date(),
        vehicleId: id,
      }
      if(time){
        const selectedTime = time as string
        const meridiem = selectedTime.slice(6)
        inputData.startTime?.setHours(meridiem === 'am'? +(selectedTime.slice(0,2)) : 12 + (+(selectedTime.slice(0,2))))
        inputData.startTime?.setMinutes(+(selectedTime.slice(3,2)))
      }
      
      const res: any = await booking(inputData)
      if(res?.data?.success){
         router.push(`/booking/${res?.data?.data?.id}`)
      }
       setOpen(false)
    } catch(e ) {
      console.log(e)
      setOpen(false)
    }
}
  
    return (
        <div className='container mx-auto py-4 lg:px-10 '>
            <CommonTitle title="Vehicle Details" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>

                </div>
                <div className="p-10 flex flex-col w-full justify-between gap-4">
                    <div className="text-center lg:text-left">
                        <h3 className="text-primary font-bold text-2xl">{data?.model}</h3>
                        <h3 className="text-secondary text-lg">{data?.category?.title}</h3>
                    </div>
                    <div className="">
                        
                    <div className="font-semibold text-secondary">
                    Type: <span className=" font-bold text-sm"> {data?.type}</span>
                    </div>
                    <div className="font-semibold text-secondary">
                    Status: <span className="text-accent font-bold text-lg"> {data?.status}</span>
                    </div>
                    <div  className="font-semibold text-secondary">
                    Price: <span className="text-accent font-bold text-lg"> {data?.price}</span> <span className="text-xs text-secondary">(per day)</span>
                    </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="py-2 px-6 w-full rounded-full bg-primary border border-accent text-light" onClick={() => setOpen(true)}>Book Now</button>
                    </div>
                </div>
            </div>
            <Modal open={open} setOpen={setOpen} title='Pick Time and Date'>
            <form onSubmit={submit}>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full">
              
            <p className="text-lg font-semibold mb-2">Select Pick Date</p>
            <DayPicker
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Select Drop Date</p>
              <DayPicker
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Select Pick Time</p>
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="w-full"
              onChange={onChange}
              format={timeFormat}
              use12Hours
              inputReadOnly
            />
            </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div> 
            </form>
            </Modal>
        </div>
    );
};

export default VehicleDetails;