import useBillboard from '@/hooks/useBillboard';
import React from 'react';

const Billboard = ()=>{
    const { data } = useBillboard();
    return(
        <div className="relative h-[56.25vw] w-[20.vw]">
            <video  src=""></video>
        </div>
    )
}
export default Billboard;