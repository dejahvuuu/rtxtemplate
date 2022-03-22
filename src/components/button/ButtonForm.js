export default function ButtonForm(props) {
  const { enabled, text, className, type } = props;
  return (
    <>
      {enabled ? (
        <button className={`${className}`} type={`${type}`}>
          {text}
        </button>
      ) : (
        <button className={`${className}`} type={`${type}`} disabled>
          {text}
        </button>
      )}
    </>
  );
}
