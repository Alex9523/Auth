import React from "react";

import { default as Logo } from "assets/images/logo.png";
import { Typography } from "components/common";

// eslint-disable-next-line
import s from "./Static.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    // @ts-ignore
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <div className={s.boundaryLayout}>
            {/* eslint-disable-next-line */}
            <img src={Logo} alt={"Logo"} />
            <div className={s.boundaryLayout__content}>
              <Typography
                variant={"large"}
                tagName={"span"}
                color={"green-primary"}
                children={"Woops!"}
                className={"display-block"}
                stylesObject={s}
              />
              <Typography
                variant={"h2"}
                tagName={"span"}
                color={"white"}
                className={"display-block"}
                children={"Something went wrong :("}
                stylesObject={s}
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <Typography
                variant={"h6"}
                tagName={"span"}
                color={"white"}
                className={"display-block"}
                stylesObject={s}
                style={{ marginBottom: 44 }}
                children={
                  "Sorry, we had some technical problems during your last operation."
                }
              />
              <div
                className={s.arrow_link_up_container}
                onClick={this.handleRetry}
              >
                <Typography
                  variant={"h4"}
                  stylesObject={s}
                  tagName={"span"}
                  color={"green-primary"}
                  children={"Try again"}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
