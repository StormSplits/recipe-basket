import './Input.css'

export const InputLoader = (props) => {
  return (
    <div className="loader">
    {props.progress>=1 && <span className='loaderBackArrow' onClick={()=>{props.setProgress(props.progress-1)}}><i className="fa-solid fa-angle-left"></i></span>}
    <div className={`${props.progress>=0?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=1?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=2?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=3?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=4?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=5?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=6?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=7?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=8?'doneStage':'pending'} loadValue`}></div>
    <div className={`${props.progress>=9?'doneStage':'pending'} loadValue`}></div>
    </div>
  )
}
