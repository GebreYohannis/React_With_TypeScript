import { useEffect, useRef } from "react";

function EffectHook() {
  const ref = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    //Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My app";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default EffectHook;
