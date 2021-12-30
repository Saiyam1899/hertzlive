import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer
          style={{
            backgroundColor: "#002853",
            padding: "9px 0 0 0",
            marginTop: "20px",
          }}
        >
          <div className="container-fluid px-md-5 px-3 py-md-4 py-3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                align: "center",
              }}
            >
              <div className="footer_logo">
                <a href="https://hertz-network.com/">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/hertznetwork.png"
                    }
                    className="rubik_logo"
                    alt=""
                  ></img>
                </a>
              </div>

              <div>
                <div className="copy_area text-center text-white">
                  <h6 className="font-weight-normal ">
                    Copyright 2021 © All rights Reserved.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
