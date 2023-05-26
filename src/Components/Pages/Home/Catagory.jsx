
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCatagory from './SubCatagory';

const Catagory = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1200,
          })
      },[])
    
    return (
        <div className='md:w-9/12 md:mx-auto mx-0 '  data-aos="zoom-in">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-44 mb-10 from-blue-600 via-green-500  text-center pb-5">Category</h1>

            <Tabs>
                <TabList className=" text-fuchsia-950 font-bold grid grid-cols-3 border-1">
                    <Tab >Princess</Tab>
                    <Tab>Soft Toys</Tab>
                    <Tab>Action</Tab>
                </TabList>

                <TabPanel className=" text-fuchsia-950 font-bold">
                    
                      <SubCatagory
                       
                        passCatagory = 'Princess'
                        ></SubCatagory> 
                    
                </TabPanel>
                <TabPanel className=" text-fuchsia-950 font-bold">
                <SubCatagory
                       
                       passCatagory = 'Soft Toy'
                       ></SubCatagory> 
                   
                </TabPanel>
                <TabPanel className=" text-fuchsia-950 font-bold">
                <SubCatagory
                       
                        passCatagory = 'Action'
                        ></SubCatagory> 
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Catagory;