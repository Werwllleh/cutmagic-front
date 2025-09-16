const SvgIcon = ({name,...props}:{name:string}) => {
  return (
    <svg className="icon" {...props}>
      <use href={`/images/sprites.svg#${name}`}/>
    </svg>
  );
};

export default SvgIcon;