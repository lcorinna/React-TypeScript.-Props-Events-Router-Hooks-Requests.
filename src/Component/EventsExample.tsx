import React, { FC, useRef, useState } from "react";

const EventExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	setValue(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
	console.log(value);
	console.log(inputRef.current?.value);
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => { 
	e.preventDefault();
	setIsDrag(false);
	console.log('DRAG');
}
  
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
	e.preventDefault();
	setIsDrag(true);
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
	e.preventDefault();
	setIsDrag(false);
  }

  return (
    <div>
		<input value={value} onChange={changeHandler} type="text" placeholder="управляемый"/>
		<input ref={inputRef} type="text" placeholder="неуправляемый"/>
		<button onClick={clickHandler}>HERE</button>
		<div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
		<div 
			onDrop={dragHandler} 
			onDragLeave={leaveHandler} 
			onDragOver={dragWithPreventHandler}
			style={{width: 200, height: 200, background: isDrag ? 'red' : 'green', marginTop: 15}}></div>
	</div>
  )
};

export default EventExample;