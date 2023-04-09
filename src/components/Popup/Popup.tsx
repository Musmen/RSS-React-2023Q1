import './Popup.css';

import React, { MouseEvent } from 'react';

interface PopupProps {
  closePopup: () => void;
  children: JSX.Element;
}

function Popup({ closePopup, children }: PopupProps) {
  return (
    <div data-testid="overlay" className="Popup-overlay" onClick={closePopup}>
      <div
        data-testid="popup"
        className="Popup"
        onClick={(event: MouseEvent) => event.stopPropagation()}
      >
        <button
          className="Popup-button button_close"
          type="button"
          onClick={closePopup}
          title="Close Popup"
        />
        {children}
      </div>
    </div>
  );
}

export default Popup;
