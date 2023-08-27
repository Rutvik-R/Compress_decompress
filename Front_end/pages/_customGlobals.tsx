import React, { useState } from 'react'

export default function choice_compress() {
    const [choice, setChoice] = useState(true);

    const get = () => {
        return choice;
    }

    const change = () => {
        setChoice(!choice);
    }
    return{
        get: get,
        change: change
    }
}