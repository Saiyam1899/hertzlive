import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { _2FAuthenticationModal } from "./_2FAuthenticationModal";

export const HertzModal = (props) => {
  return (
    <>
      <div
        class="modal fade"
        id="HertzModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="HertzModalCenter"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div
            class="modal-content"
            style={{
              background: "#032b5b",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
              margin: "0 auto",

              borderRadius: "23px",
              width: "400px",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            <div>
              {props.is2FAvisable ? (
                <_2FAuthenticationModal
                  is2FAvisableChanged={props.is2FAvisableChanged}
                  CodeChange={props.CodeChange}
                  code={props.code}
                  TwoFactorAuthentication={props.TwoFactorAuthentication}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        margin: "0 auto",
                        marginLeft: "120px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src="https://hertz-network.com/wp-content/uploads/elementor/thumbs/HTZ-logo-only-blue-white-p4p2ldidtq3ndb8678kf2snlwefybhkycazbj9e3gk.png"
                        style={{ paddingBottom: "10px" }}
                      />
                      <h2
                        style={{
                          color: "white",
                          fontSize: "26px",
                          fontWeight: "500",
                        }}
                      >
                        Login
                      </h2>
                    </div>
                    <div>
                      <MdOutlineCancel
                        data-dismiss="modal"
                        aria-label="Close"
                        size={30}
                        color={"#26c5eb"}
                      >
                        <span aria-hidden="true">&times;</span>
                      </MdOutlineCancel>
                    </div>
                  </div>

                  <input
                    placeholder="Username"
                    onChange={(e) => props.usernameChanged(e)}
                    style={{
                      borderRadius: " 6px",
                      border: "1px solid #26c5ebc9",
                      width: "280px",
                      height: " 30px",
                      marginBottom: "15px",
                      padding: "0px 0px 0px 10px",
                      color: "#000",
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => props.passwordChanged(e)}
                    style={{
                      borderRadius: " 6px",
                      border: "1px solid #26c5ebc9",
                      width: "280px",
                      height: " 30px",
                      marginBottom: "15px",
                      padding: "0px 0px 0px 10px",
                      color: "#000",
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  ></input>
                  <div
                    style={{
                      display: "flex",
                      margin: "10px 0px 0px",
                      width: "280px",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      onClick={props.login}
                      style={{
                        backgroundColor: "#26c5eb",
                        border: "none",
                        borderRadius: "6px",
                        width: "45%",
                        color: "white",
                        height: "30px",
                        margin: " 0px 0px",
                        fontFamily: "'Rubik', sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </button>
                    <button
                      style={{
                        backgroundColor: "#26c5eb",
                        border: "none",
                        borderRadius: "6px",
                        width: "45%",
                        color: "white",
                        height: "30px",
                        margin: " 0px 0px",
                        fontFamily: "'Rubik', sans-serif",
                        cursor: "pointer",
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <div style={{ color: "white", margin: "15px 0px 0px" }}>
                    &nbsp;
                  </div>
                  <div id="usernotfound"></div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "white",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Forgot your password?
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
