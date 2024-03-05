import React, { useEffect, useState } from 'react';
import { getReporting } from './api/index';
export default function Dashboard() {
  const [iFrameUrl, setIframeUrl] = useState([]);
  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = () => {
    getReporting((err, data) => {
      if (!err) {
        console.log('REPORTING URL:', data.data);
        setIframeUrl(data.data);
      }
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          {/* <div>
            <iframe src={iFrameUrl.toString()} frameborder="0" width="100%" height="600" allowtransparency />
          </div> */}
          {iFrameUrl.map(dta => {
            return <iframe src={dta.toString()} frameborder="0" width="100%" height="600" allowtransparency />;
          })}
        </div>
      </div>
    </>
  );
}
