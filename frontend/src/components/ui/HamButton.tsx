
type HamButtonProps = {
    classes?: string
    onClick: ()=>void
}



function HamButton(props:HamButtonProps) {
    const {classes,...rest} = props
  return (
    <button
    {...rest}
          className={` p-1 w-24 h-10 group relative  border-black/70
                 hover:border-white/50 border-2 rounded
                hover:bg-accent-3-300 duration-200
                before:absolute before:h-1 before:top-2 before:-translate-x-[50%]
              hover:before:bg-white before:bg-black/70 before:w-8 before:rounded-full
              after:absolute after:h-1 after:bottom-2 after:-translate-x-[50%] hover:after:bg-white
            after:bg-black/70 after:w-8 after:rounded-full ${classes}`}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1
                  rounded-full   w-8 
                   bg-black/70 group-hover:bg-white "
          >
            <p className="opacity-0"> w</p>
          </div>
        </button>
  )
}

export default HamButton