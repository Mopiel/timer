import React, { useEffect, useState } from "react";

interface Props {
  lastSeen: number;
}

export const Timer: React.FC<Props> = ({ lastSeen }) => {
  const [refreashInterwal, setRefreashInterval] = useState(1000);
  const [secFromLastSeen, setSecFromLastSeen] = useState(0);

  useEffect(() => {
    setSecFromLastSeen(Math.floor((Date.now() - lastSeen) / 1000));
    const interval = setInterval(() => {
      setSecFromLastSeen(Math.floor((Date.now() - lastSeen) / 1000));
    }, refreashInterwal);
    return () => {
      clearInterval(interval);
    };
  }, [refreashInterwal, lastSeen]);

  useEffect(() => {
    if (secFromLastSeen > 60 && refreashInterwal !== 60000)
      setRefreashInterval(60000);
    else if (secFromLastSeen < 60 && refreashInterwal !== 1000)
      setRefreashInterval(1000);
  }, [secFromLastSeen]);

  return (
    <div>
      {secFromLastSeen / 60 < 1
        ? `${secFromLastSeen} seconds ago`
        : `${Math.floor(secFromLastSeen / 60)} minutes ago`}
    </div>
  );
};
