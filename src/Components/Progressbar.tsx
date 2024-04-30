

import '../App.css'

type ProgressBarProps = {
    width: number
    errorMsg: string
 }

 const test =()=>{
    return 100;
 }
const ProgressBar =(props: ProgressBarProps) =>{
    return (
        <>
        <div className='container'>
            {props.width && (
                <div className='innerContainer' style={{width : `${props.width}`}}>
                    {props.width}%
                    </div>
            )
        }



        </div>
        </>
    )
}

export default ProgressBar;