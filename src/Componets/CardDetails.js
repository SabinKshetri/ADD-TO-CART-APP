import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, ADD, REMOVE } from '../redux/action/action'
const CardDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()
    const dispatch = useDispatch()

    const history = useNavigate()

    const getdata = useSelector((state) => state.cartreducer.carts);
    //console.log(getdata);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        });
        // console.log(compare)
        setData(comparedata)
    }

    const send = (e) => {
        dispatch(ADD(e));
    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    useEffect(() => {
        compare()
    }, [id])

    const dlt = (id) => {
        dispatch(DLT(id))
        history("/");
    }

    return (
        <div className='container mt-2'>
            <h2 className='text-center'>Items Details </h2>
            <section className='container mt-3'>
                <div className='iteamsdetails'>
                    {
                        data.map((element) => {
                            return (
                                <>
                                    <div className='items_img'>
                                        <img src={element.imgdata} alt='' />
                                    </div>
                                    <div className='details'>
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong>: {element.rname}</p>
                                                    <p><strong>Price</strong>: {element.price}</p>
                                                    <p><strong>Dishes</strong>:{element.address}</p>
                                                    <p><strong>Total</strong>: Rs 300 </p>
                                                    <div className='mt-5 d-flex justify-content-between align-item-center ' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                        <span style={{ fontSize: 24 }} onClick={() => remove(element)}>-</span>
                                                        <span style={{ fontSize: 22 }}>{element.qnty}</span>
                                                        <span style={{ fontSize: 24 }} onClick={() => send(element)}>+</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p><strong>Rating:</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{element.rating}★</span></p>
                                                    <p><strong>Order Review:</strong> <span >{element.somedata}</span></p>
                                                    <p><strong>Remove:</strong> <span><i className='fas fa-trash' style={{ color: "red", fontSize: "20", cursor: "pointer" }} onClick={() => dlt(element.id)}></i></span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>



                                </>
                            )
                        })
                    }
                </div >
            </section>
        </div>
    )
}

export default CardDetails