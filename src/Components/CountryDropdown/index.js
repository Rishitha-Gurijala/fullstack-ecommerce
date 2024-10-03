import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState, useContext } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition( props, ref ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);

    const context = useContext(MyContext);

    return (
        <>
            <Button className="countryDrop" onClick={()=> setisOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>




            <Dialog open={isOpenModal} onClose={()=> setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={()=> setisOpenModal(false)}><IoMdClose/></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." />
                    <Button className="but"><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    {
                        context.countryList?.length!==0 && context.countryList?.map((item)=> {
                            return(
                                <li><Button onClick={()=> setisOpenModal(false)}>India</Button></li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown