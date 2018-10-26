import * as React from "react";

import { Portal } from "./Portal";

export class Modal extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { opened: false };
  }

  open = () => {
    this.setState({ opened: true });
  };

  close = () => {
    this.setState({ opened: false });
  };

  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={this.open}>
          Open Portal
        </button>
        {this.state.opened && (
          <Portal selector="#toast">
            <div>
              <p>here we are now!</p>
              <button type="button" onClick={this.close}>
                Close Portal
              </button>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}
