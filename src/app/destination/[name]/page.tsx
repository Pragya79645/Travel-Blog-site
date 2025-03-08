"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import { IconLoader2 } from '@tabler/icons-react';

const page = () => {
    const { name } = useParams();
    const [response, setResponse] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            console.log(name)
            try {
                const res = await axios.post("/api/get-info", { destination: name })
                const formattedResponse = res.data.info.replace(/\*/g, ''); // Remove asterisks
                setResponse(formattedResponse)
                console.log(formattedResponse)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [name])

    return (
        <>
            {
                !response && (
                    <IconLoader2 className="animate-spin h-10 w-10" />
                )
            }
            {response && (
                <div className=''>{response}</div>
            )}
        </>
    )
}

export default page