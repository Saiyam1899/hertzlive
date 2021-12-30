import React, { Component } from "react";

export default class FramsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var _script = document.createElement("script");
    _script.type = "text/javascript";
    _script.src = "https://ramlogics.com/allFunctions.js";
    document.body.appendChild(_script);
  }
  componentDidUpdate() {
    var _script = document.createElement("script");
    _script.type = "text/javascript";
    _script.src = "https://ramlogics.com/allFunctions.js";
    document.body.appendChild(_script);
  }
  render() {
    return (
      <>
        <main class="all_section_main_div">
          <section class="farms_main_div">
            <div class="container">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="farm_heading py-lg-3 py-md-3 py-sm-3 py-3">
                    <div class="index_logo">
                      <a
                        class="navbar-brand"
                        href="https://defi.hertz-network.com"
                      >
                        <img
                          src="https://defi.hertz-network.com/wp-content/themes/twentytwenty/assets/images/logo-with-rubik-text-2.png"
                          class="w-25"
                          alt=""
                        ></img>
                      </a>
                    </div>
                    <h2 class="font-weight-normal">Farms</h2>
                    <div id="qrcode"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="frams_tab_le">
            <div class="container-fluid px-md-5 px-3">
              <div class="row">
                <div class="col-md-12" id="allAvailableFarms"></div>
              </div>
            </div>
          </section>
        </main>

        {/* <!--LIQUIDITY FIRST MODEL SYMBOL--> */}
        <div
          class="modal fade"
          id="exampleModalCenter3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content WSUM_value_02">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                  Select a token
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fal fa-times-circle text-white"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="sid_ebar mx-2">
                  <div class="sc-bEjcJn jLJzwT">
                    <input
                      type="text"
                      id="filterLiq2"
                      placeholder="search token name"
                      class="form-control address_search"
                    />
                  </div>

                  {/* <!--Token Select options div start--> */}
                  <div
                    id="liquiditySymbol2"
                    class="token_list_all scrollbar_width scrollbar_width"
                    style={{ display: "flex", flexDirection: "column" }}
                  ></div>
                  {/* <!--Token Select options div end--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
