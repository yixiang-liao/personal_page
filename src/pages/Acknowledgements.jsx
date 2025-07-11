import React, { useState } from "react";
import AcknowledgementsBox from "../components/AcknowledgementsBox";
import acknowledgements_file from "../data/acknowledgements.json";
import AcknowledgementModal from "../components/AcknowledgementModal";

const Acknowledgements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="acknowledgements">
      <h1>Acknowledgements</h1>
      <div className="acknowledgements-wrapper">
        <div className="acknowledgements-container">
          {acknowledgements_file.map((ack, index) => (
            <AcknowledgementsBox
              key={index}
              image={ack.image}
              name={ack.name}
              tags={ack.tags}
              description={ack.description}
              onClick={() => setSelected(ack)}
            />
          ))}
        </div>
      </div>

      {/* 彈出視窗 */}
      <AcknowledgementModal
        open={Boolean(selected)}
        acknowledgement={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Acknowledgements;
