/*
 * react-panels
 * https://github.com/Theadd/react-panels
 *
 * Copyright (c) 2015 R.Beltran https://github.com/Theadd
 * Licensed under the MIT license.
 */

var React = require('react/addons');


var flexbox2Skin = function (skin) {
  switch (skin || "") {
    default:
      return {
        tabColor: "#b0b0b0",
        tabIconColor: "#b0b0b0",
        activeTabColor: "#daaf64",
        tabTextShadow: "#000000",
        activeTabTextShadow: "#000000",
        titleTextShadow: "#a6a6a6",
        iconTextShadow: "#000000",
        iconColor: "#daaf64",
        titleColor: "#daaf64",
        buttonBackgroundColor: "rgba(104, 226, 207, 0.15)",
        hoverButtonBackgroundColor: "rgba(104, 226, 207, 0.3)",
        activeButtonBackgroundColor: "rgba(131, 247, 220, 0.33)",
        buttonColor: "#eaeaea",
        hoverButtonColor: "#ffffff",
        activeButtonColor: "#daaf64",
        buttonTextShadow: "#7F7F7F",
        highlightedButtonBoxShadow: "rgba(255, 255, 255, 0.6)",
        tabBackgroundColor: "rgba(104, 226, 207, 0.15)",
        activeTabBackgroundColor: "rgba(131, 247, 220, 0.33)",
        hoverTabBackgroundColor: "rgba(104, 226, 207, 0.3)",
        toolbarBackgroundColor: "rgba(171, 255, 220, 0.2)",
        contentBackgroundColor: "rgba(171, 255, 220, 0.34)",
        footerBackgroundColor: "rgba(171, 255, 220, 0.2)",
        borderColor: "#000000"
      };
  }
}

var flexbox2Style = function (_opts, skin) {
  var colors,
    opts = React.addons.update({
      skin: "default",
      renderPanelBorder: true,
      activeTabHeaderBorder: true
    }, {$merge: _opts}),
    isSafari = /Safari/.test(window.navigator.userAgent) && /Apple Computer/.test(window.navigator.vendor);

  skin = skin || opts.skin;

  if (typeof skin === "object") {
    colors = React.addons.update(flexbox2Skin(), {$merge: skin});
  } else {
    colors = flexbox2Skin(skin);
  }

  return {
    PanelWrapper: {
      config: {
        autocompact: false
      }
    },
    Panel: {
      style: {
        borderTop: (opts.renderPanelBorder) ? "1px solid " + colors.borderColor : "0 none",
        borderRight: (opts.renderPanelBorder) ? "1px solid " + colors.borderColor : "0 none"
      },
      header: {
        style: {
          backgroundColor: "transparent",
          display: isSafari ? "-webkit-flex" : "flex",
          minWidth: "100%",
          marginBottom: "-2px"
        }
      },
      tabsStart: {
        style: {
          width: 0
        }
      },
      tabsEnd: {
        style: {
          width: 0
        }
      },
      tabs: {
        style: {
          float: "none",
          WebkitFlex: "1",
          flex: 1,
          display: isSafari ? "-webkit-flex" : "flex",
          overflow: "hidden"
        }
      },
      icon: {
        style: {
          color: colors.iconColor,
          textShadow: "2px 2px 2px " + colors.iconTextShadow,
          float: "left"
        }
      },
      box: {
        style: {
          float: "left"
        }
      },
      title: {
        style: {
          color: colors.titleColor,
          textShadow: "1px 1px 1px " + colors.titleTextShadow
        }
      },
      group: {
        style: {
          padding: 0,
          display: "inline-block",
          height: "100%",
          margin: 0
        }
      },
      body: {
        style: {
          borderLeft: (opts.renderPanelBorder) ? "1px solid " + colors.borderColor : "0 none",
          height: "calc(100% - " + Utils.pixelsOf(opts.headerHeight - 2) + ")"
        }
      }
    },
    TabButton: {
      style: {
        borderBottom: "1px solid " +  colors.borderColor,
        borderRight: "1px solid " + colors.borderColor,
        backgroundColor: colors.tabBackgroundColor,
        height: opts.headerHeight - 1,
        margin: "0",
        position: "inherit",
        float: "none",
        overflow: "hidden",
        WebkitFlex: "1",
        flex: "1 0 0px",
        opacity: 1
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverTabBackgroundColor
          }
        }
      },
      mods: {
        active: {
          style: {
            borderBottom: "1px solid " + (opts.activeTabHeaderBorder ? colors.borderColor : colors.activeTabBackgroundColor),
            backgroundColor: colors.activeTabBackgroundColor
          },
          state: {
            hover: {
              style: {
                borderBottom: "1px solid " + (opts.activeTabHeaderBorder ? colors.borderColor : colors.activeTabBackgroundColor),
                backgroundColor: colors.activeTabBackgroundColor
              },
              icon: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.tabTextShadow
                }
              },
              title: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.activeTabTextShadow
                }
              }
            }
          },
          icon: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.tabTextShadow
            }
          },
          title: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.activeTabTextShadow
            }
          }
        },
        last: {
          style: {
            borderRight: "0 none"
          }
        }
      },
      icon: {
        style: {
          color: colors.tabIconColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow,
          opacity: 1
        }
      },
      title: {
        style: {
          color: colors.tabColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow
        }
      },
      box: {
        style: {
          marginRight: 0,
          maxWidth: "calc(100% - " + Utils.pixelsOf(opts.headerHeight) + ")",
          opacity: 1
        }
      }
    },
    Tab: {
      toolbar: {
        style: {
          minHeight: 0,
          lineHeight: "inherit",
          padding: "0",
          display: "block",
          position: "relative",
          marginTop: "1px"
        },
        children: {
          style: {
            padding: "10px",
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            position: "relative",
            backgroundColor: colors.toolbarBackgroundColor
          }
        }
      },
      content: {
        style: {
          backgroundColor: colors.contentBackgroundColor,
          boxShadow: "0px 0px 29px rgba(0, 0, 0, 0.7) inset",
          borderTop: "1px solid " +  colors.borderColor,
          position: "relative"
        },
        children: {
          style: {
            position: "relative"
          }
        }
      },
      footer: {
        style: {
          backgroundColor: colors.footerBackgroundColor,
          borderTop: "1px solid " +  colors.borderColor,
          position: "relative"
        },
        children: {
          style: {
            position: "relative"
          }
        }
      }
    },
    Button: {
      style: {
        height: Utils.pixelsOf(opts.headerHeight - 1),
        backgroundColor: colors.buttonBackgroundColor,
        borderBottom: "1px solid " +  colors.borderColor,
        borderLeft: "1px solid " +  colors.borderColor
      },
      children: {
        style: {
          color: colors.buttonColor,
          textShadow: "1px 1px 1px " + colors.buttonTextShadow
        }
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverButtonBackgroundColor
          },
          children: {
            style: {
              color: colors.hoverButtonColor
            }
          }
        }
      },
      mods: {
        active: {
          style: {
            backgroundColor: colors.activeButtonBackgroundColor
          },
          children: {
            style: {
              color: colors.activeButtonColor
            }
          }
        },
        highlighted: {
          style: {
            boxShadow: "0 0 9px " + colors.highlightedButtonBoxShadow + " inset"
          }
        },
        disabled: {
          style: {
            pointerEvents: "none",
            opacity: 0.5
          }
        }
      }
    }
  };
};


var flexboxStyle = function (opts, skin) {
  var colors,
    isSafari = /Safari/.test(window.navigator.userAgent) && /Apple Computer/.test(window.navigator.vendor);
  skin = skin || opts.skin;

  switch (skin) {
    case "fiery":
      colors = {
        tabColor: "#b0b0b0",
        tabIconColor: "#616161",
        activeTabColor: "#f72121",
        tabTextShadow: "#000000",
        activeTabTextShadow: "#000000",
        titleTextShadow: "#a6a6a6",
        iconTextShadow: "#000000",
        iconColor: "#ffffff",
        titleColor: "#ffffff",
        buttonBackgroundColor: "#202020",
        hoverButtonBackgroundColor: "#342828",
        activeButtonBackgroundColor: "#4d2c2c",
        buttonColor: "#eaeaea",
        hoverButtonColor: "#ffffff",
        activeButtonColor: "#f72121",
        buttonTextShadow: "#7F7F7F",
        tabBackgroundColor: "#202020",
        activeTabBackgroundColor: "#2e2e2e",
        hoverTabBackgroundColor: "#342828",
        toolbarBackgroundColor: "#4d2c2c",
        contentBackgroundColor: "#3e3e3e",
        footerBackgroundColor: "#4e4e4e"
      };
      break;

    default:
      colors = {
        tabColor: "#b0b0b0",
        tabIconColor: "#616161",
        activeTabColor: "#ffffff",
        tabTextShadow: "#000000",
        activeTabTextShadow: "#7F7F7F",
        titleTextShadow: "#a6a6a6",
        iconTextShadow: "#a6a6a6",
        iconColor: "#ffffff",
        titleColor: "#ffffff",
        buttonBackgroundColor: "#202020",
        hoverButtonBackgroundColor: "#2a2a2a",
        activeButtonBackgroundColor: "#4e4e4e",
        buttonColor: "#eaeaea",
        hoverButtonColor: "#ffffff",
        activeButtonColor: "#ffffff",
        buttonTextShadow: "#7F7F7F",
        tabBackgroundColor: "#202020",
        activeTabBackgroundColor: "#2e2e2e",
        hoverTabBackgroundColor: "#2a2a2a",
        toolbarBackgroundColor: "#4e4e4e",
        contentBackgroundColor: "#3e3e3e",
        footerBackgroundColor: "#4e4e4e"
      };
      break;
  }

  return {
    PanelWrapper: {
      config: {
        autocompact: false
      }
    },
    Panel: {
      style: {
        backgroundColor: "black",
        padding: "1px 1px 0 0"
      },
      header: {
        style: {
          backgroundColor: "transparent",
          display: isSafari ? "-webkit-flex" : "flex",
          minWidth: "100%"
        }
      },
      tabsStart: {
        style: {
          width: 0
        }
      },
      tabsEnd: {
        style: {
          width: 0
        }
      },
      tabs: {
        style: {
          float: "none",
          WebkitFlex: "1",
          flex: 1,
          display: isSafari ? "-webkit-flex" : "flex",
          overflow: "hidden"
        }
      },
      icon: {
        style: {
          color: colors.iconColor,
          textShadow: "2px 2px 2px " + colors.iconTextShadow,
          float: "left"
        }
      },
      box: {
        style: {
          float: "left"
        }
      },
      title: {
        style: {
          color: colors.titleColor,
          textShadow: "1px 1px 1px " + colors.titleTextShadow
        }
      },
      group: {
        style: {
          padding: 0,
          display: "inline-block",
          height: "100%",
          margin: 0
        }
      },
      body: {
        style: {
          marginLeft: "1px"
        }
      }
    },
    TabButton: {
      style: {
        backgroundColor: colors.tabBackgroundColor,
        height: opts.headerHeight - 1,
        margin: "0 0 1px 1px",
        position: "inherit",
        float: "none",
        overflow: "hidden",
        WebkitFlex: "1",
        flex: "1 0 0px"
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverTabBackgroundColor
          }
        }
      },
      mods: {
        active: {
          style: {
            backgroundColor: colors.activeTabBackgroundColor
          },
          state: {
            hover: {
              style: {
                backgroundColor: colors.activeTabBackgroundColor
              },
              icon: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.tabTextShadow
                }
              },
              title: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.activeTabTextShadow
                }
              }
            }
          },
          icon: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.tabTextShadow
            }
          },
          title: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.activeTabTextShadow
            }
          }
        }
      },
      icon: {
        style: {
          color: colors.tabIconColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow
        }
      },
      title: {
        style: {
          color: colors.tabColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow
        }
      },
      box: {
        style: {
          marginRight: 0,
          maxWidth: "calc(100% - " + Utils.pixelsOf(opts.headerHeight) + ")"
        }
      }
    },
    Tab: {
      toolbar: {
        style: {
          minHeight: 0,
          lineHeight: "inherit",
          padding: "0",
          display: "block",
          position: "relative",
          top: "-1px"
        },
        children: {
          style: {
            padding: "10px",
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            position: "relative",
            marginTop: "1px",
            backgroundColor: colors.toolbarBackgroundColor
          }
        }
      },
      content: {
        style: {
          backgroundColor: colors.contentBackgroundColor,
          marginBottom: "1px"
        }
      },
      footer: {
        style: {
          backgroundColor: colors.footerBackgroundColor,
          marginBottom: "1px"
        }
      }
    },
    Button: {
      style: {
        height: Utils.pixelsOf(opts.headerHeight - 1),
        backgroundColor: colors.buttonBackgroundColor,
        marginLeft: "1px"
      },
      children: {
        style: {
          color: colors.buttonColor,
          textShadow: "1px 1px 1px " + colors.buttonTextShadow
        }
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverButtonBackgroundColor
          },
          children: {
            style: {
              color: colors.hoverButtonColor
            }
          }
        }
      },
      mods: {
        active: {
          style: {
            backgroundColor: colors.activeButtonBackgroundColor
          },
          children: {
            style: {
              color: colors.activeButtonColor
            }
          }
        }
      }
    }
  };
};


var chemicalStyle = function (opts, skin) {
  var colors;
  skin = skin || opts.skin;

  switch (skin) {
    case "blueish":
      colors = {
        tabColor: "rgba(0, 0, 0, 0.8)",
        activeTabColor: "rgba(0, 0, 0, 0.9)",
        tabTextShadow: "#bbbbbb",
        activeTabTextShadow: "#999999",
        activeTabBackgroundColor: "rgba(102, 143, 182, 0.25)",
        activeTabBorderColor: "rgba(0, 0, 0, 0.5)",
        titleTextShadow: "#a6a6a6",
        iconTextShadow: "rgba(0, 0, 0, 0.9)",
        iconColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "rgba(0, 0, 0, 0.8)",
        toolbarBoxShadow: "rgba(0, 0, 0, 0.1)",
        contentBackgroundColorWithToolbar: "rgba(102, 143, 182, 0.25)",
        footerBackgroundColor: "rgba(165, 165, 165, 0.32)",
        hoverTabBackgroundColor: "rgba(224, 230, 240, 0.65)",
        buttonBackgroundColor: "rgba(224, 230, 240, 0.65)",
        hoverButtonBackgroundColor: "rgba(102, 143, 182, 0.25)",
        activeButtonBackgroundColor: "rgba(102, 143, 182, 0.25)"
      };

      break;
    default:
      colors = {
        tabColor: "#ffffff",
        activeTabColor: "rgba(0, 0, 0, 0.9)",
        tabTextShadow: "#bbbbbb",
        activeTabTextShadow: "#999999",
        activeTabBackgroundColor: "rgba(255, 255, 255, 0.9)",
        activeTabBorderColor: "rgba(0, 0, 0, 0.5)",
        titleTextShadow: "#a6a6a6",
        iconTextShadow: "rgba(0, 0, 0, 0.9)",
        iconColor: "#ffffff",
        titleColor: "#ffffff",
        toolbarBoxShadow: "rgba(0, 0, 0, 0.1)",
        contentBackgroundColorWithToolbar: "rgba(255, 255, 255, 0.85)",
        footerBackgroundColor: "rgba(224, 230, 240, 0.8)",
        hoverTabBackgroundColor: "rgba(224, 230, 240, 0.65)",
        buttonBackgroundColor: "rgba(255, 255, 255, 0.2)",
        hoverButtonBackgroundColor: "rgba(255, 255, 255, 0.9)",
        activeButtonBackgroundColor: "rgba(255, 255, 255, 0.9)"
      };
      break;
  }

  return {
    Panel: {
      header: {
        style: {
          backgroundColor: "transparent",
          paddingRight: Utils.pixelsOf(opts.headerHeight)
        }
      },
      tabsStart: {
        style: {
          width: 50,
          float: "left"
        }
      },
      tabsEnd: {
        style: {
          width: 10,
          float: "right"
        }
      },
      tabs: {
        style: {
          float: "left"
        }
      },
      icon: {
        style: {
          color: colors.iconColor,
          textShadow: "2px 2px 2px " + colors.iconTextShadow,
          float: "left"
        }
      },
      box: {
        style: {
          float: "left"
        }
      },
      title: {
        style: {
          color: colors.titleColor,
          textShadow: "1px 1px 1px " + colors.titleTextShadow
        }
      },
      body: {
        style: {
          backgroundColor: "transparent",
          borderColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    },
    TabButton: {
      style: {
        borderRadius: "2px 2px 0 0",
        marginLeft: 1
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverTabBackgroundColor
          },
          icon: {
            style: {
              color: "rgba(0, 0, 0, 0.9)",
              textShadow: "1px 1px 1px #999999"
            }
          },
          title: {
            style: {
              color: "rgba(0, 0, 0, 0.9)",
              textShadow: "1px 1px 1px #999999"
            }
          }
        }
      },
      mods: {
        active: {
          style: {
            borderColor: colors.activeTabBorderColor,
            backgroundColor: colors.activeTabBackgroundColor
          },
          state: {
            hover: {
              style: {
                backgroundColor: colors.activeTabBackgroundColor
              },
              icon: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.activeTabTextShadow
                }
              },
              title: {
                style: {
                  color: colors.activeTabColor,
                  textShadow: "1px 1px 1px " + colors.activeTabTextShadow
                }
              }
            }
          },
          icon: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.activeTabTextShadow
            }
          },
          title: {
            style: {
              color: colors.activeTabColor,
              textShadow: "1px 1px 1px " + colors.activeTabTextShadow
            }
          }
        }
      },
      icon: {
        style: {
          color: colors.tabColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow
        }
      },
      title: {
        style: {
          color: colors.tabColor,
          textShadow: "1px 1px 1px " + colors.tabTextShadow
        }
      }
    },
    Tab: {
      mods: {
        withToolbar: {
          content: {
            style: {
              backgroundColor: colors.contentBackgroundColorWithToolbar
            }
          }
        }
      },
      toolbar: {
        style: {
          backgroundColor: colors.activeTabBackgroundColor,
          borderBottom: "0 none",
          marginBottom: "1px",
          borderRadius: "2px",
          boxShadow: "0 -2px 0 " + colors.toolbarBoxShadow + " inset"
        }
      },
      content: {
        style: {
          backgroundColor: colors.activeTabBackgroundColor,
          borderBottom: "0 none",
          marginBottom: "1px",
          borderRadius: "2px"
        }
      },
      footer: {
        style: {
          backgroundColor: colors.footerBackgroundColor,
          borderRadius: "2px"
        }
      }
    },
    Button: {
      style: {
        borderRadius: "2px 2px 0 0",
        backgroundColor: colors.buttonBackgroundColor,
        marginLeft: "1px"
      },
      state: {
        hover: {
          style: {
            backgroundColor: colors.hoverButtonBackgroundColor
          },
          children: {
            style: {
              color: "rgba(0, 0, 0, 0.9)",
              textShadow: "1px 1px 1px #ffffff"
            }
          }
        }
      },
      mods: {
        active: {
          style: {
            backgroundColor: colors.activeButtonBackgroundColor
          }
        }
      },
      children: {
        style: {
          color: "#ffffff",
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.9)"
        }
      }
    }
  };
};


var buildStyle = function (opts) {
  opts = opts || {};
  opts = {
    theme: opts.theme || "base",
    skin: opts.skin || "default",
    headerHeight: opts.headerHeight || 32,
    headerFontSize: opts.headerFontSize || 14,
    borderRadius: opts.borderRadius || 3,
    maxTitleWidth: opts.maxTitleWidth || 130,
    useAvailableHeight: opts.useAvailableHeight || false,
    renderPanelBorder: (typeof opts.renderPanelBorder === "boolean") ? opts.renderPanelBorder : true,
    activeTabHeaderBorder: (typeof opts.activeTabHeaderBorder === "boolean") ? opts.activeTabHeaderBorder : true
  };
  var isSafari = /Safari/.test(window.navigator.userAgent) && /Apple Computer/.test(window.navigator.vendor);

  var styles = {
    base: {
      PanelWrapper: {
        style: {},
        config: {
          autocompact: true
        }
      },
      Panel: {
        style: {
          height: (opts.useAvailableHeight) ? "100%" : "inherit"
        },
        header: {
          style: {
            display: "block",
            fontSize: Utils.pixelsOf(opts.headerFontSize),
            height: opts.headerHeight
          }
        },
        tabsStart: {
          style: {
            width: 20,
            height: "100%"
          }
        },
        tabsEnd: {
          style: {
            width: 20,
            height: "100%"
          }
        },
        tabs: {
          style: {
            height: opts.headerHeight,
            float: "right",
            display: "inline-block",
            margin: 0,
            minWidth: Utils.pixelsOf(opts.headerHeight),
            padding: 0
          }
        },
        icon: {
          style: {
            display: "block",
            float: "left",
            fontSize: "125%",
            height: opts.headerHeight,
            lineHeight: Utils.pixelsOf(opts.headerHeight - 4),
            marginRight: -6,
            textAlign: "center",
            width: opts.headerHeight - 2
          }
        },
        box: {
          style: {
            marginLeft: 10,
            height: "100%",
            display: "inline-block",
            position: "relative",
            maxWidth: Utils.pixelsOf(opts.maxTitleWidth)
          }
        },
        title: {
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            letterSpacing: 0,
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            width: "auto"
          }
        },
        group: {
          style: {
            padding: "0 5px",
            backgroundColor: "transparent"
          }
        },
        body: {
          style: {
            height: (opts.useAvailableHeight) ? "calc(100% - " + opts.headerHeight + "px)" : "inherit"
          }
        }
      },
      TabButton: {
        style: {
          position: "relative",
          float: "left",
          display: "block",
          listStyle: "none",
          padding: "0 5px",
          height: opts.headerHeight,
          fontSize: "0.95em",
          cursor: "pointer"
        },
        mods: {
          untitled: {
            box: {
              style: {
                marginLeft: 0
              }
            }
          },
          active: {
            style: {
              cursor: "default"
            }
          }
        },
        icon: {
          style: {
            display: "block",
            float: "left",
            fontSize: "125%",
            height: opts.headerHeight,
            textAlign: "center",
            width: opts.headerHeight - 2,
            lineHeight: Utils.pixelsOf(opts.headerHeight - 2),
            marginRight: -9,
            marginLeft: -3,
            opacity: 0.85
          }
        },
        box: {
          style: {
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            marginRight: 6,
            opacity: 0.85,
            marginLeft: 10,
            height: "100%",
            display: "inline-block",
            position: "relative",
            maxWidth: Utils.pixelsOf(opts.maxTitleWidth)
          }
        },
        title: {
          style: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            letterSpacing: 0,
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            width: "auto"
          }
        }
      },
      Tab: {
        style: {
          display: "none"
        },
        mods: {
          active: {
            style: {
              display: (opts.useAvailableHeight) ? (isSafari ? "-webkit-flex" : "flex") : "block",
              minHeight: (opts.useAvailableHeight) ? "100%" : "inherit",
              WebkitFlexDirection: (opts.useAvailableHeight) ? "column" : "inherit",
              flexDirection: (opts.useAvailableHeight) ? "column" : "inherit",
              height: "100%"
            },
            content: {
              style: (opts.useAvailableHeight) ? {
                WebkitFlex: 1,
                flex: 1,
                position: "relative"
              } : {},
              children: {
                style: (opts.useAvailableHeight) ? {
                  padding: "10px",
                  position: "absolute",
                  height: "100%",
                  width: "100%"
                } : { }
              }
            }
          },
          withToolbar: {
            toolbar: {
              style: { }
            }
          }
        },
        toolbar: {
          style: {
            minHeight: Utils.pixelsOf(opts.headerHeight),
            lineHeight: Utils.pixelsOf(opts.headerHeight)
          },
          children: {
            style: {
              padding: "10px"
            }
          }
        },
        content: {
          style: { },
          children: {
            style: {
              padding: "10px"
            }
          }
        },
        footer: {
          style: {
            minHeight: Utils.pixelsOf(opts.headerHeight),
            lineHeight: Utils.pixelsOf(opts.headerHeight),
            padding: "10px"
          },
          children: {
            style: {}
          }
        }
      },
      Button: {
        style: {
          float: "right",
          height: Utils.pixelsOf(opts.headerHeight),
          minWidth: Utils.pixelsOf(opts.headerHeight),
          display: "inline-block",
          lineHeight: Utils.pixelsOf(opts.headerHeight),
          margin: 0,
          padding: 0,
          textAlign: "center",
          cursor: "pointer",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none"
        },
        mods: {
          disabled: {
            style: {
              cursor: "default",
              pointerEvents: "none",
              opacity: 0.5
            }
          },
          hidden: {
            style: {
              display: "none"
            }
          },
          highlighted: {
            style: {}
          }
        },
        children: {
          style: {}
        }
      }
    },
    /* THEME: Chemical */
    chemical: chemicalStyle,
    flexbox: flexboxStyle,
    flexbox2: flexbox2Style
  };

  var theme = (opts.theme != "base") ? styles[opts.theme](opts) : {};

  return Utils.merge(styles.base, theme);
};

var createSheet = (function (opts) {
  var _sheet = buildStyle(opts),
    _skin = {};

  return function (target, mods, alter) {
    var using = _sheet;

    mods = mods || [];
    alter = alter || {}
    if (alter.skin || false) {
      if (!(_skin[alter.skin] || false)) {
        _skin[alter.skin] = buildStyle(React.addons.update(opts, {$merge: {skin: alter.skin}}));
      }
      using = _skin[alter.skin];
    }
    if (!mods.length) return using[target];
    var sheet = React.addons.update(using[target], {$merge: {}}),
      i;
    for (i = 0; i < mods.length; ++i) {
      if ((sheet.mods || false) && (sheet.mods[mods[i]] || false)) {
        sheet = Utils.merge(sheet, sheet.mods[mods[i]]);
      }
    }
    return sheet;
  }
});


var Utils = {
  pixelsOf: function (value) {
    var val = parseInt(value) || 0
    return (val) ? String(val) + "px" : "0";
  },
  /* Copyright (c) 2012 Nicholas Fisher (MIT License) https://github.com/KyleAMathews/deepmerge */
  merge: function (target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};

    if (array) {
      target = target || [];
      dst = dst.concat(target);
      src.forEach(function(e, i) {
        if (typeof dst[i] === 'undefined') {
          dst[i] = e;
        } else if (typeof e === 'object') {
          dst[i] = Utils.merge(target[i], e);
        } else {
          if (target.indexOf(e) === -1) {
            dst.push(e);
          }
        }
      });
    } else {
      if (target && typeof target === 'object') {
        Object.keys(target).forEach(function (key) {
          dst[key] = target[key];
        })
      }
      Object.keys(src).forEach(function (key) {
        if (typeof src[key] !== 'object' || !src[key]) {
          dst[key] = src[key];
        }
        else {
          if (!target[key]) {
            dst[key] = src[key];
          } else {
            dst[key] = Utils.merge(target[key], src[key]);
          }
        }
      });
    }

    return dst;
  }
};


var DragAndDropHandler = function (opts, callback) {
  var self = this;
  if (!(self instanceof DragAndDropHandler)) return new DragAndDropHandler(opts, callback);

  /** Not yet implemented. */
  this.opt = Utils.merge({
    detachOnLeave: true,
    /** If true, the tab button being dragged will be rendered by
     *  cloning an existing tab of the target panel. */
    cloakInGroup: false,
    onDragStart: false,
    onDragEnd: false
  }, opts || {});

  this.ctx = {
    sortable: true,
    dragging: false,
    parentId: false
  };

  this._member = [];
  this._callback = callback || function () {};
};

DragAndDropHandler.prototype.trigger = function (event, data) {
  switch (event) {
    case 'onDragEnd':
      return this._callback(data);
    default:
      throw new Error("Not implemented");
  }
};

DragAndDropHandler.prototype.addMember = function (component) {
  return this._member.push(component) - 1;
};

DragAndDropHandler.prototype.setParentOfToken = function (memberId) {
  if (this.ctx.parentId !== false) {
    this._member[this.ctx.parentId].releaseToken();
  }

  this.ctx.parentId = memberId;
};


var Mixins = {
  Styleable: {
    getInitialState: function () {
      this.__ssv = {};
      this.__ssvh = false;
      this.__ssa = {target: '', mods: [], alter: {}};
      return {};
    },
    contextTypes: {
      sheet: React.PropTypes.func
    },
    getSheet: function (target, mods, alter) {
      var rebuild = false, i;

      mods = (typeof this['getSheetMods'] === "function") ? this['getSheetMods'](mods || []) : mods || [];
      alter = alter || {}
      if (target != this.__ssa.target) rebuild = true;
      else {
        if (mods.length != this.__ssa.mods.length) rebuild = true;
        else if (mods.length != 0) {
          for (i = mods.length; --i >= 0;) {
            if (this.__ssa.mods.indexOf(mods[i]) == -1) {
              rebuild = true;
              break;
            }
          }
        }
        // TODO: check if alter has changed
      }

      if (rebuild) {
        this.__ssv = this.context.sheet(target, mods, alter);
        this.__ssvh = false;
        this.__ssa = {
          target: target,
          mods: Utils.merge(mods, []),
          alter: Utils.merge(alter, {})
        };
      }
      if ((typeof this.state._hover === "boolean")) {
        if (this.state._hover) {
          if (this.__ssvh || false) {
            return this.__ssvh;
          }
          if ((this.__ssv.state || false) && (this.__ssv.state.hover || false)) {
            this.__ssvh = Utils.merge(this.__ssv, this.__ssv.state.hover);
            return this.__ssvh;
          }
        }
      }

      return this.__ssv;
    }
  },
  Transitions: {
    propTypes: {
      transitionName: React.PropTypes.string,
      transitionEnter: React.PropTypes.bool,
      transitionLeave: React.PropTypes.bool,
      transitionAppear: React.PropTypes.bool,
      /** React.addons.CSSTransitionGroup might not work well in some scenarios,
       * use this to specify another component.
       *
       * @see https://github.com/Khan/react-components/blob/master/js/timeout-transition-group.jsx
       * */
      transitionComponent: React.PropTypes.any,
      /** Additional props specific to transitionComponent. */
      transitionCustomProps: React.PropTypes.object
    },
    getTransitionProps: function (pcType) {
      pcType = pcType || this.props.panelComponentType;

      var props = {},
        globals = (this.context && this.context.globals && this.context.globals[pcType]) ?
          this.context.globals[pcType] : {},
        transitionName = (typeof this.props.transitionName === "string") ?
          this.props.transitionName : globals.transitionName || "";
      if (transitionName.length) {
        props = {
          transitionName: transitionName,
          transitionEnter: (typeof this.props.transitionEnter === "boolean") ?
            this.props.transitionEnter : globals.transitionEnter || false,
          transitionLeave: (typeof this.props.transitionLeave === "boolean") ?
            this.props.transitionLeave : globals.transitionLeave || false,
          transitionAppear: (typeof this.props.transitionAppear === "boolean") ?
            this.props.transitionAppear : globals.transitionAppear || false,
          transitionComponent: (typeof this.props.transitionComponent !== "undefined") ?
            this.props.transitionComponent : globals.transitionComponent || React.addons.CSSTransitionGroup,
          transitionCustomProps: this.props.transitionCustomProps || globals.transitionCustomProps || {}
        };
      } else {
        props = {
          transitionName: "none",
          transitionEnter: false,
          transitionLeave: false,
          transitionAppear: false,
          transitionComponent: React.addons.CSSTransitionGroup,
          transitionCustomProps: {}
        };
      }
      return props;
    }
  },
  Toolbar: {
    getDefaultProps: function () {
      return {
        panelComponentType: "Toolbar"
      };
    }
  },
  Content: {
    getDefaultProps: function () {
      return {
        panelComponentType: "Content"
      };
    }
  },
  Footer: {
    getDefaultProps: function () {
      return {
        panelComponentType: "Footer"
      };
    }
  }
};

Mixins.StyleableWithEvents = {
  mixins: [Mixins.Styleable],

  getDefaultProps: function () {
    return {
      onMouseEnter: false,
      onMouseLeave: false
    };
  },

  getInitialState: function () {
    this.listeners = {
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    };
    return {
      _hover: false,
      _focus: false
    };
  },

  handleMouseEnter: function (ev) {
    if (typeof this.props['onMouseEnter'] === "function") this.props['onMouseEnter'](ev);

    this.setState({
      _hover: true
    });
  },

  handleMouseLeave: function (ev) {
    if (typeof this.props['onMouseLeave'] === "function") this.props['onMouseLeave'](ev);

    this.setState({
      _hover: false
    });
  }

};

Mixins.PanelWrapper = {

  propTypes: {
    transitionName: React.PropTypes.string,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool,
    transitionAppear: React.PropTypes.bool,
    globals: React.PropTypes.object,
    /** React.addons.CSSTransitionGroup might not work well in some scenarios,
     * use this to specify another component.
     *
     * @see https://github.com/Khan/react-components/blob/master/js/timeout-transition-group.jsx
     * */
    transitionComponent: React.PropTypes.any,
    /** Additional props specific to transitionComponent. */
    transitionCustomProps: React.PropTypes.object,
    dragAndDropHandler: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool
    ])
  },

  getDefaultProps: function () {
    return {
      "icon": false,
      "title": "",
      "selectedIndex": 0,
      /** Triggered before a change tab event propagated from within the Panel (e.g., user's click).
       *  Optionally, return false to stop it.
       */
      "onTabChange": null,
      "buttons": [],
      "globals": {}
    };
  },

  getInitialState: function () {
    var opts = {
      theme: this.props.theme,
      skin: this.props.skin,
      headerHeight: this.props.headerHeight,
      headerFontSize: this.props.headerFontSize,
      borderRadius: this.props.borderRadius,
      maxTitleWidth: this.props.maxTitleWidth,
      useAvailableHeight: this.props.useAvailableHeight,
      renderPanelBorder: this.props.renderPanelBorder,
      activeTabHeaderBorder: this.props.activeTabHeaderBorder
    };
    this._sheet = createSheet(opts);
    this.config = this._sheet("PanelWrapper").config;

    return {
      selectedIndex: parseInt(this.props.selectedIndex)
    };
  },

  childContextTypes: {
    selectedIndex: React.PropTypes.number,
    sheet: React.PropTypes.func,
    onTabChange: React.PropTypes.func,
    globals: React.PropTypes.object,
    numTabs: React.PropTypes.number
  },

  getChildContext: function () {
    return {
      selectedIndex: this.state.selectedIndex,
      sheet: this._sheet,
      onTabChange: this.handleTabChange,
      globals: this.props.globals,
      numTabs: React.Children.count(this.props.children)
    };
  },

  handleTabChange: function (index) {
    if (typeof this.props.onTabChange === "function") {
      if (this.props.onTabChange(index, this) !== false) {
        this.setSelectedIndex(index);
      }
    } else {
      this.setSelectedIndex(index);
    }
  },

  getSelectedIndex: function () {
    return this.state.selectedIndex;
  },

  setSelectedIndex: function (index, callback) {
    this.setState({selectedIndex: parseInt(index)});
    this.forceUpdate(function () {
      if (typeof callback === "function") {
        callback();
      }
    });
  },

  componentWillReceiveProps: function (nextProps) {
    var sIndex = this.state.selectedIndex,
      resetIndex = false,
      numTabs = React.Children.count(nextProps.children);

    if (nextProps.selectedIndex != this.props.selectedIndex) {
      sIndex = nextProps.selectedIndex;
      resetIndex = true;
    }
    if (sIndex >= numTabs) {
      sIndex = Math.max(numTabs - 1, 0);
      resetIndex = true;
    }
    if (resetIndex) {
      this.setState({selectedIndex: parseInt(sIndex)});
    }
  }

};

Mixins.TabWrapper = {
  observedProps: ['selectedIndex', 'index'],

  propTypes: {
    tabKey: React.PropTypes.any
  },

  getDefaultProps: function () {
    return {
      panelComponentType: "TabWrapper",
      icon: "",
      title: "",
      pinned: false,
      showToolbar: true,
      showFooter: true
    };
  },

  childContextTypes: {
    index: React.PropTypes.number,
    tabKey: React.PropTypes.any
  },

  getChildContext: function () {
    return {
      index: this.props.index,
      tabKey: this.props.tabKey
    };
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number
  }

};

Mixins.Button = {
  mixins: [Mixins.StyleableWithEvents],

  getDefaultProps: function () {
    return {
      name: "default",
      title: "",
      visible: true,
      enabled: true,
      active: false,
      highlighted: false,
      onClick: false,
      onDoubleClick: false,
      onContextMenu: false,
      onChange: false
    };
  },

  getInitialState: function () {
    this.listeners.onClick = this._handleClick;
    this.listeners.onDoubleClick = this._handleDoubleClick;
    this.listeners.onContextMenu = this._handleContextMenu;
    return {
      visible: this.props.visible,
      enabled: this.props.enabled,
      active: this.props.active,
      highlighted: this.props.highlighted
    };
  },

  childContextTypes: {
    btnTitle: React.PropTypes.string,
    btnVisible: React.PropTypes.bool,
    btnEnabled: React.PropTypes.bool,
    btnActive: React.PropTypes.bool
  },

  getChildContext: function () {
    return {
      btnTitle: this.props.title,
      btnVisible: this.state.visible,
      btnEnabled: this.state.enabled,
      btnActive: this.state.active
    };
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number
  },

  getSheetMods: function (otherMods) {
    var mods = otherMods || [];   //np
    if (this.state.active && mods.indexOf('active') == -1) mods.push('active');
    if (!this.state.visible && mods.indexOf('hidden') == -1) mods.push('hidden');
    if (!this.state.enabled && mods.indexOf('disabled') == -1) mods.push('disabled');
    if (this.state.highlighted && mods.indexOf('highlighted') == -1) mods.push('highlighted');

    return mods;
  },

  _handleDoubleClick: function (ev) {
    if (typeof this.props.onDoubleClick === "function" && this.props.onDoubleClick(ev, this) === false) return;

    if (typeof this['handleDoubleClick'] === "function") {
      return this['handleDoubleClick'](ev);
    }
  },

  _handleClick: function (ev) {
    if (typeof this.props.onClick === "function" && this.props.onClick(ev, this) === false) return;

    if (typeof this['handleClick'] === "function") {
      return this['handleClick'](ev);
    }
  },

  _handleContextMenu: function (ev) {
    if (typeof this.props.onContextMenu === "function" && this.props.onContextMenu(ev, this) === false) return;

    if (typeof this['handleContextMenu'] === "function") {
      return this['handleContextMenu'](ev);
    }
  }

};


var FloatingPanel = React.createClass({
  displayName: 'FloatingPanel',
  mixins: [Mixins.PanelWrapper],
  propTypes: {
    left:React.PropTypes.number,
    top:React.PropTypes.number,
    width:React.PropTypes.number,
    style:React.PropTypes.object,
    onClick:React.PropTypes.func,
  },
  
  getDefaultProps: function () {
    return {
      "left": 0,
      "top": 0,
      "width": 420,
      "style": {}
    };
  },

  getInitialState: function () {
    this.skipUpdate = false;
    return {
      left: parseInt(this.props.left),
      top: parseInt(this.props.top),
      width: parseInt(this.props.width)
    };
  },

  componentWillReceiveProps:function(nextProps) {
    this.setState({width:nextProps.width});
  },
  
  dragStart: function (e) {
    this.panelBounds = {
      startLeft: this.state.left,
      startTop: this.state.top,
      startPageX: e.pageX,
      startPageY: e.pageY
    };

    try {
      var img = document.createElement("img");
      img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQI12NgYGBgAAAABQABXvMqOgAAAABJRU5ErkJggg==";
      img.width = 1;
      e.dataTransfer.setData('text/plain', "Panel");
      e.dataTransfer.setDragImage(img, -1000, -1000);
    } catch (err) { /* Fix for IE */ }

    window.addEventListener('dragover', this.dragOver);
  },

  dragEnd: function() {
    delete this.panelBounds;
    window.removeEventListener('dragover', this.dragOver);
    if (this.props.onBoundsChange) {
      var height=this.getDOMNode().offsetHeight;
      this.props.onBoundsChange({left:this.state.left, top:this.state.top, width:this.state.width, height:height});
    }
  },

  dragOver: function(e) {
    if (this.panelBounds || false) {
      var left = this.panelBounds.startLeft + (e.pageX - this.panelBounds.startPageX),
        top = this.panelBounds.startTop + (e.pageY - this.panelBounds.startPageY);
      this.skipUpdate = true;
      this.setState({ left: left, top: top });
    }
  },
  
  handleMouseClick: function (e) {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  },  

  render: function() {
    var transform = "translate3d(" + Utils.pixelsOf(this.state.left) + ", " + Utils.pixelsOf(this.state.top) + ", 0)",
      wrapperStyle = React.addons.update({
        WebkitTransform: transform,
        MozTransform: transform,
        msTransform: transform,
        transform: transform,
        width: Utils.pixelsOf(this.state.width),
        position: "absolute"
      }, {$merge: this.props.style});

    if (!this.skipUpdate) {
      var props = React.addons.update({
          onDragStart: this.dragStart,
          onDragEnd: this.dragEnd,
          floating: true
        }, {$merge: this.config}),
        keys = Object.keys(this.props);

      for (var i = keys.length; --i >= 0;) {
        if (["children", "left", "top", "width", "style"].indexOf(keys[i]) != -1) continue;
        props[keys[i]] = this.props[keys[i]];
      }
      this.inner = (
        React.createElement(ReactPanel, props,
          this.props.children
        )
      );
    } else {
      this.skipUpdate = false;
    }

    return React.createElement("div", {style:wrapperStyle, onClick:this.handleMouseClick}, this.inner);
  }

});

var Panel = React.createClass({
  displayName: 'Panel',
  mixins: [Mixins.PanelWrapper],

  render: function() {
    var props = React.addons.update({}, {$merge: this.config}),
      keys = Object.keys(this.props);

    for (var i = keys.length; --i >= 0;) {
      if (["children"].indexOf(keys[i]) != -1) continue;
      props[keys[i]] = this.props[keys[i]];
    }
    return React.createElement(ReactPanel, props,
        this.props.children
    );
  }

});

var ReactPanel = React.createClass({
  displayName: 'ReactPanel',
  mixins: [Mixins.Styleable, Mixins.Transitions],

  getDefaultProps: function () {
    return {
      "icon": false,
      "title": "",
      "autocompact": true,
      "floating": false,
      "onDragStart": null,
      "onDragEnd": null,
      "maxTitleWidth": 130,
      "buttons": []
    };
  },

  propTypes: {
    dragAndDropHandler: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool
    ])
  },

  getInitialState: function () {
    return {
      compacted: (this.props.autocompact)
    };
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number,
    sheet: React.PropTypes.func,
    onTabChange: React.PropTypes.func,
    globals: React.PropTypes.object
  },

  getSelectedIndex: function () {
    return this.context.selectedIndex;
  },

  handleClick: function (event, index) {
    this.context.onTabChange(parseInt(index));
  },

  componentDidMount: function () {
    if (this.props.autocompact) {
      var tabsStart = this.refs['tabs-start'].getDOMNode(),
        tabsEnd = this.refs['tabs-end'].getDOMNode(),
        using = this.refs.tabs.getDOMNode().offsetWidth,
        total = tabsEnd.offsetLeft - (tabsStart.offsetLeft + tabsStart.offsetWidth);

      if (using * 2 <= total) {   // TODO: ... * 2 is obviously not what it should be
        this.setState({compacted: false});
      }
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.autocompact) {
      var childs = React.Children.count(this.props.children),
        next_childs = React.Children.count(nextProps.children);

      if (next_childs > childs && this.props.autocompact && !this.state.compacted) {
        var tabsStart = this.refs['tabs-start'].getDOMNode(),
          tabsEnd = this.refs['tabs-end'].getDOMNode(),
          using = this.refs.tabs.getDOMNode().offsetWidth,
          total = tabsEnd.offsetLeft - (tabsStart.offsetLeft + tabsStart.offsetWidth),
          maxTabWidth = this.props.maxTitleWidth + 35;

        if (using + maxTabWidth >= total) {
          this.setState({compacted: true});
        }
      } else {
        // TODO
      }
    }
  },

  handleDragStart: function (e) {
    if (typeof this.props.onDragStart === "function") {
      this.props.onDragStart(e);
    }
  },

  handleDragEnd: function () {
    if (typeof this.props.onDragEnd === "function") {
      this.props.onDragEnd();
    }
  },

  _getGroupedButtons: function () {
    var len = this.props.buttons.length,
      i, j, item, group = [], groups = [];

    for (i = 0; i < len; ++i) {
      item = this.props.buttons[i];

      if (typeof item === "object" && item instanceof Array) {
        if (group.length) {
          groups.push(group);
          group = [];
        }
        for (j = 0; j < item.length; ++j) {
          group.push(React.addons.cloneWithProps(item[j], {key: j}));
        }
        if (group.length) {
          groups.push(group);
          group = [];
        }
      } else {
        group.push(React.addons.cloneWithProps(item, {key: i}));
      }
    }
    if (group.length) {
      groups.push(group);
    }

    return groups;
  },

  render: function() {
    var self = this,
      draggable = (this.props.floating) ? "true" : "false",
      sheet = this.getSheet("Panel"),
      transitionProps = this.getTransitionProps("Panel");

    var icon = (this.props.icon) ? (
        React.createElement("span", {style:sheet.icon.style},
          React.createElement("i", {className:this.props.icon})
        )
      ) : null,
      title = (this.props.title.length) ? (
        React.createElement("div", {style:sheet.box.style},
          React.createElement("div", {style:sheet.title.style},
            this.props.title
          )
        )
      ) : null;

    var tabIndex = 0,
      selectedIndex = this.getSelectedIndex(),
      tabButtons = [],
      tabs = [],
      groupIndex = 0;

    React.Children.forEach(self.props.children, function(child) {
      var ref = "tabb-" + tabIndex,
        tabKey = (typeof child.key !== "undefined" && child.key != null) ? child.key : ref,
        showTitle = true,
        props = {
          "icon": child.props.icon,
          "title": child.props.title,
          "pinned": child.props.pinned
        };

      if (self.state.compacted) {
        if (!(props.pinned || selectedIndex == tabIndex)) {
          showTitle = false;
        }
      }

      tabButtons.push({
        key: tabKey, title: props.title, icon: props.icon, index: tabIndex, ref: ref, showTitle: showTitle,
        onClick: self.handleClick, "data-index": tabIndex, "data-key": tabKey
      });

      tabs.push(
        React.addons.cloneWithProps(child, {
          key: tabKey,
          tabKey: tabKey,
          selectedIndex: selectedIndex,
          index: tabIndex
        })
      );
      ++tabIndex;
    });

    return (
      React.createElement("div", {style: sheet.style},
        React.createElement("header", {draggable: draggable, onDragEnd: self.handleDragEnd,
            onDragStart: self.handleDragStart, ref: "header", style: sheet.header.style},
          icon, title,
          React.createElement("div", {style: sheet.tabsStart.style, ref: "tabs-start"}),
          React.createElement(TabGroup, {
            style: sheet.tabs.style, ref: "tabs", data: tabButtons,
            dragAndDropHandler: this.props.dragAndDropHandler || false,
            transitionProps: transitionProps
          }),
          React.createElement("div", {style: sheet.tabsEnd.style, ref: "tabs-end"}),
          this._getGroupedButtons().map(function (group) {
            return React.createElement("ul", {style: sheet.group.style, key: groupIndex++}, group );
          })
        ),
        React.createElement("div", {style: sheet.body.style}, tabs )
      )
    );
  }

});


var TabGroup = React.createClass({
  displayName: 'TabGroup',

  propTypes: {
    style: React.PropTypes.object.isRequired,
    data: React.PropTypes.array.isRequired,
    transitionProps: React.PropTypes.object.isRequired,
    dragAndDropHandler: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool
    ])
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number,
    sheet: React.PropTypes.func,
    onTabChange: React.PropTypes.func,
    globals: React.PropTypes.object
  },

  componentWillMount: function () {
    this.tabKeys = [];
    this._index = false;

    var globals = (this.context && this.context.globals) ? this.context.globals.Panel || {} : {};
    this.handler = this.props.dragAndDropHandler || globals.dragAndDropHandler || false;
    this.ctx = this.handler ? this.handler.ctx : {
      sortable: false,
      dragging: false
    };

    for (var i = 0; i < this.props.data.length; ++i) {
      this.tabKeys.push(this.props.data[i]["data-key"]);
    }
    this.keyMap = this.tabKeys.slice(0);
    this.constKeyMap = this.tabKeys.slice(0); //req. don't try to merge
  },

  componentDidMount: function () {
    if (this.ctx.sortable && this.handler) {
      this.memberId = this.handler.addMember(this);
    }
  },

  componentWillUpdate: function (nextProps) {
    if (!this.ctx.dragging) {
      this.tabKeys = [];

      for (var i = 0; i < nextProps.data.length; ++i) {
        this.tabKeys.push(nextProps.data[i]["data-key"]);
      }
      this.keyMap = this.tabKeys.slice(0);
      this.constKeyMap = this.tabKeys.slice(0);
    }
  },

  handleDragStartOnTab: function(e, clone, target) {
    this.ctx.draggedKey = target.dataset.key;
    this.ctx.keySequence = 0;
    this.ctx.dragging = false;  //
    this.ctx.draggedElement = clone;
    this.ctx.dragging = true;
    this._index = this.tabKeys.indexOf(this.ctx.draggedKey);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", target);
    e.dataTransfer.setDragImage(target, -15, -15);
  },

  handleDragStart: function(e) {
    if (this.ctx.sortable) {

      var node = this.getDOMNode(),
        tabWidth = node.offsetWidth / this.tabKeys.length,
        distance = e.pageX - node.getBoundingClientRect().left,
        index = parseInt(distance / tabWidth),
        targetKey = this.tabKeys[index] || false;

      if (targetKey !== false) {
        var tabComponent = this.refs[targetKey + "-tabbref"] || false;
        if (tabComponent !== false) {
          this.ctx.ownerId = this.ctx.parentId = this.memberId || false;
          var clone = React.cloneElement(tabComponent.render(), {
            key: "tabbph-clone",
            onMouseEnter: false,
            onMouseLeave: false
          });
          this.keyMap.splice(index, 1);
          this.acquireToken(e); //
          this.handleDragStartOnTab(e, clone, tabComponent.getDOMNode());
        }
      }
    }
  },

  handleDragOver: function(e) {
    if (this.ctx.dragging) {
      e.preventDefault();
      var nextIndex;

      if (this.ctx.parentId != this.memberId) {
        //tab not present in this panel
        nextIndex = this.acquireToken(e);
        this._index = false;
        this.handler.setParentOfToken(this.memberId);
      } else {
        var distance = e.pageX - this.getDOMNode().getBoundingClientRect().left;
        nextIndex = parseInt(distance / this.tabWidth);
      }

      if (this._index !== nextIndex) {
        this.ctx.keySequence++;
        if (this._index !== false) {
          this.tabKeys.splice(this._index, 1);
        }
        this.tabKeys.splice(nextIndex, 0, this.ctx.draggedKey);
        this._index = nextIndex;

        this.ctx.targetKey = this.keyMap[Math.min(this._index, this.keyMap.length - 1)] || false;
        this.ctx.placement = this._index >= this.keyMap.length ? "after" : "before";
        this.forceUpdate();
      }
    }
  },

  handleDragEnd: function(e) {
    if (this.ctx.dragging) {
      this.ctx.dragging = false;
      this._index = this._index || this.acquireToken(e);
      this.handler.trigger('onDragEnd', {
        element: this.ctx.draggedKey,
        target: this.ctx.targetKey,
        placement: this.ctx.placement
      });
    }
  },

  /* TODO: proper name. */
  acquireToken: function (e) {
    var node = this.getDOMNode(),
      numTabsMod = this.ctx.ownerId == this.memberId ? 0 : 1,
      tabWidth = node.offsetWidth / (this.tabKeys.length + numTabsMod),
      distance = e.pageX - node.getBoundingClientRect().left,
      index = parseInt(distance / tabWidth);

    this.tabWidth = tabWidth;
    return index;
  },

  releaseToken: function () {
    this._index = false;
    //TODO: Something is missing here.
  },

  /* Should be used by opts.cloakInGroup once implemented. */
  cloneTabComponent: function (e) {
    var tabComponent = this.refs[(this.tabKeys[index] || false) + "-tabbref"] || false;
    if (tabComponent !== false) {
      this.ctx.draggedElement = React.cloneElement(tabComponent.render(), {
        key: "tabbph-clone",
        onMouseEnter: false,
        onMouseLeave: false
      });
    }
  },

  createTabElement: function (tabKey) {
    if (this.ctx.dragging) {
      if (this.ctx.draggedKey === tabKey) {
        return React.cloneElement(this.ctx.draggedElement, {
          key: tabKey + "-tabbph" + this.ctx.keySequence,
          draggable: false
        });
      }
    }
    var tabProps = this.props.data[this.constKeyMap.indexOf(tabKey)] || false;

    return (tabProps === false) ? null : React.createElement(
      TabButton, React.__spread(tabProps, {ref: tabKey + "-tabbref"})
    );
  },

  render: function () {
    var tp = this.props.transitionProps,
      sp = (this.ctx.sortable || false) ? {
        draggable: true,
        onDragEnd: this.handleDragEnd,
        onDragStart: this.handleDragStart,
        onDragOver: this.handleDragOver,
        "data-key": "get-target-stop"
      } : {};

    if (!this.ctx.dragging) {
      this.tabKeys = [];

      for (var i = 0; i < this.props.data.length; ++i) {
        this.tabKeys.push(this.props.data[i]["data-key"]);
      }
    }

    var tabs = this.tabKeys.map(function (tabKey) {
      return this.createTabElement(tabKey);
    }.bind(this));

    return (
      React.createElement(tp.transitionComponent, React.__spread({component: "ul",
          style: this.props.style, transitionName: tp.transitionName,
          transitionAppear: tp.transitionAppear, transitionEnter: tp.transitionEnter,
          transitionLeave: tp.transitionLeave}, tp.transitionCustomProps, sp),
        tabs
      )
    );
  }

});

var TabButton = React.createClass({displayName: "TabButton",
  mixins: [Mixins.StyleableWithEvents],

  propTypes: {
    "data-index": React.PropTypes.number.isRequired,
    "data-key": React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      "icon": "",
      "title": "",
      "index": 0,
      "showTitle": true
    };
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number,
    numTabs: React.PropTypes.number
  },

  handleClick: function (event) {
    event.preventDefault();
    this.props.onClick(event, this.props.index);
  },

  render: function() {
    var icon = null,
      title = "",
      mods = (this.context.selectedIndex == this.props.index) ? ['active'] : [];

    if (!(this.props.showTitle && this.props.title.length)) mods.push('untitled');
    if (this.props.index == this.context.numTabs - 1) mods.push('last');
    var sheet = this.getSheet("TabButton", mods, {});

    if (this.props.showTitle && this.props.title.length) {
      title = React.createElement("div", {style:sheet.title.style},this.props.title);
    }

    if (this.props.icon) {
      icon = (
        React.createElement("div", {style:sheet.icon.style},
          React.createElement("i", {className:this.props.icon})
        )
      );
    }

    return (
      React.createElement("li", React.__spread({
            onClick: this.handleClick,
            style: sheet.style,
            "data-index": this.props["data-index"],
            "data-key": this.props["data-key"]
          },
          this.listeners),
        React.createElement("div", {title: this.props.title},
          icon, React.createElement("div", {style: sheet.box.style}, title)
        )
      )
    );
  }
});

var Tab = React.createClass({
  displayName: 'Tab',
  mixins: [Mixins.Styleable, Mixins.Transitions],

  propTypes: {
    onActiveChanged: React.PropTypes.func,
    maxContentHeight: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      "icon": "",
      "title": "",
      "pinned": false,
      "showToolbar": true,
      "showFooter": true,
      "panelComponentType": "Tab",
      "automount": false,
      "maxContentHeight": 0
    };
  },

  contextTypes: {
    selectedIndex: React.PropTypes.number,
    index: React.PropTypes.number,
    globals: React.PropTypes.object
  },

  componentDidMount: function () {
    this._doEvents();
  },

  componentDidUpdate: function () {
    this._doEvents();
  },

  _doEvents: function () {
    if (typeof this.props.onActiveChanged === "function") {
      this.wasActive = this.wasActive || false;
      var active = this.isActive();
      if (this.wasActive != active) {
        this.props.onActiveChanged(this, active);
        this.wasActive = active;
      }
    }
  },

  getValue: function (name) {
    switch (name) {
      case "index":
        return (typeof this.props.index !== "undefined") ? this.props.index : this.context.index;
      case "selectedIndex":
        return this.context.selectedIndex;
      case "showToolbar":
        return this.props.showToolbar;
      case "showFooter":
        return this.props.showFooter;
      case "active":
        return this.isActive();
      case "hasToolbar":
        return this.hasToolbar || false;
      case "hasFooter":
        return this.hasFooter || false;
      case "mounted":
        return this.mounted || false;
      case "automount":
        return this.props.automount;
      case "numChilds":
        return React.Children.count(this.props.children);
      case "tabKey":
        return (typeof this.props.tabKey !== "undefined") ? this.props.tabKey : this.context.tabKey;
    }
  },

  isActive: function () {
    if (typeof this.props.index !== "undefined") {
      return (this.props.index == this.context.selectedIndex);
    } else {
      return (this.context.index == this.context.selectedIndex);
    }
  },

  render: function() {
    var self = this,
      numChilds = React.Children.count(this.props.children),
      active = this.isActive(),
      tp = this.getTransitionProps(),
      mods = (active) ? ['active'] : [],
      sheet = {};

    this.mounted = (this.mounted || false) || this.props.automount || active;
    this.hasToolbar=this.hasFooter=false;
    
    var innerContent = (this.mounted) ? React.Children.map(self.props.children, function(child, i) {
      var type = (i == 0 && numChilds >= 2) ? 0 : 1;   // 0: Toolbar, 1: Content, 2: Footer
      if (React.isValidElement(child) && (typeof child.props.panelComponentType !== "undefined")) {
        switch (String(child.props.panelComponentType)) {
          case "Toolbar": type = 0; break;
          case "Content": type = 1; break;
          case "Footer": type = 2; break;
        }
      }
      if (i == 0) {
        if (type == 0) {
          this.hasToolbar = true;
          if (self.props.showToolbar) mods.push('withToolbar');
        }
        sheet = self.getSheet("Tab", mods);
      }
      if (i == self.props.children.length-1 && type == 2) {
        this.hasFooter = true;
        if (self.props.showFooter) {
          mods.push('withFooter');
          sheet = self.getSheet("Tab", mods);
        }
      }
      switch (type) {
        case 0:
          return (self.props.showToolbar) ? (
            React.createElement("div", {key: i, style: sheet.toolbar.style},
              React.createElement("div", {className: "tab-toolbar", style: sheet.toolbar.children.style},
                child
              )
            )
          ) : null;
        case 1:
          var contentStyle = React.addons.update({
            maxHeight : this.props.maxContentHeight || "none",
            overflowX :"hidden",
            overflowY : this.props.maxContentHeight?"auto":"hidden"
          }, {$merge: sheet.content.style});

          return (
            React.createElement("div", {key: i, style: contentStyle},
              React.createElement("div", {className: "tab-content", style: sheet.content.children.style},
                child
              )
            )
          );
        case 2:
          return (self.props.showFooter) ? (
            React.createElement("div", {key: i, style: sheet.footer.style},
              React.createElement("div", {className: "tab-footer", style: sheet.footer.children.style},
                child
              )
            )
          ) : null;
      }
    }.bind(this)) : null;

    return (
      React.createElement(tp.transitionComponent, React.__spread({component: "div", style: sheet.style,
            transitionName: tp.transitionName, transitionAppear: tp.transitionAppear && active,
            transitionEnter: tp.transitionEnter && active, transitionLeave: tp.transitionLeave && active},
          tp.transitionCustomProps),
        innerContent
      )
    );

  }

});


var ToggleButton = React.createClass({
  displayName: 'ToggleButton',
  mixins: [Mixins.Button],

  handleClick: function (ev) {
    var self = this;

    this.setState({active: !this.state.active});
    this.forceUpdate(function () {
      if (typeof self.props.onChange === "function") {
        self.props.onChange(this);
      }
    });
  },

  render: function () {
    var sheet = this.getSheet('Button');

    //JSX source: https://github.com/Theadd/react-panels/blob/v2/src/jsx/buttons.jsx#L21-L25
    return (
      React.createElement("li", React.__spread({style: sheet.style},  this.listeners, {title: this.props.title}),
        React.createElement("span", {style: sheet.children.style},
          this.props.children
        )
      )
    );
  }
});

var Button = React.createClass({
  displayName: 'Button',
  mixins: [Mixins.Button],

  propTypes: {
    onButtonClick: React.PropTypes.func
  },

  handleClick: function (ev) {
    if (typeof this.props.onButtonClick === "function") {
      this.props.onButtonClick(this, ev);
    }
  },

  render: function () {
    var sheet = this.getSheet('Button');

    return (
      React.createElement("li", React.__spread({style: sheet.style},  this.listeners, {title: this.props.title}),
        React.createElement("span", {style: sheet.children.style},
          this.props.children
        )
      )
    );
  }
});


var Toolbar = React.createClass({
  displayName: 'Toolbar',
  mixins: [Mixins.Toolbar],

  render: function () {
    return React.createElement("div", {}, this.props.children );
  }

});

var Content = React.createClass({
  displayName: 'Content',
  mixins: [Mixins.Content],

  render: function () {
    return React.createElement("div", {}, this.props.children );
  }

});

var Footer = React.createClass({
  displayName: 'Footer',
  mixins: [Mixins.Footer],

  render: function () {
    return React.createElement("div", {}, this.props.children );
  }

});

var PanelAddons = {};

var ReactPanels = {
  Panel: Panel,
  FloatingPanel: FloatingPanel,
  ReactPanel: ReactPanel,
  Tab: Tab,
  Mixins: Mixins,
  Toolbar: Toolbar,
  Content: Content,
  Footer: Footer,
  ToggleButton: ToggleButton,
  Button: Button,
  addons: PanelAddons,
  DragAndDropHandler: DragAndDropHandler
};


/**
 * Requires: jQuery + jQuery niceScroll plugin
 */
var ScrollableTabContent = React.createClass({
  displayName: 'ScrollableTabContent',
  mixins: [Mixins.Content],

  getDefaultProps: function () {
    return {
      "height": 250,
      "opts": {
        cursorcolor: "rgb(139, 128, 102)",
        cursoropacitymin: 0.25,
        cursoropacitymax: 0.5,
        cursorwidth: 9,
        cursorminheight: 60
      }
    };
  },

  componentDidMount: function () {
    $(this.refs.content.getDOMNode()).niceScroll(this.refs.wrapper.getDOMNode(), this.props.opts);
  },

  render: function() {
    var contentStyle = {
      height: Utils.pixelsOf(this.props.height),
      paddingRight: Utils.pixelsOf((this.props.opts.cursorwidth || 5) + 4),
      overflow: "scroll"
    };
    return (
      React.createElement("div", {ref:"content", style:contentStyle},
        React.createElement("div",{ref:"wrapper"},
          this.props.children
        )
      )
    );
  }

});

PanelAddons.ScrollableTabContent = ScrollableTabContent;


/* Based in react-component-resizable by Nicholas Rakoto
 The MIT License (MIT) https://github.com/nrako/react-component-resizable
 Copyright (c) 2014 Nicholas Rakoto
 */
var ResizableContent = React.createClass({
  displayName: 'ResizableContent',
  mixins: [Mixins.Content],

  lastDimensions: {
    width: null,
    height: null
  },

  propTypes: {
    triggersClass: React.PropTypes.string,
    expandClass: React.PropTypes.string,
    contractClass: React.PropTypes.string,
    onResize: React.PropTypes.func.isRequired
  },

  getDefaultProps: function () {
    return {
      triggersClass: 'resize-triggers',
      expandClass: 'expand-trigger',
      contractClass: 'contract-trigger'
    };
  },

  requestFrame: function (fn) {
    return (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn){ return window.setTimeout(fn, 20); })(fn);
  },

  cancelFrame: function (id) {
    return (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
  },

  componentDidMount: function () {
    this.resetTriggers();
    this.initialResetTriggersTimeout = setTimeout(this.resetTriggers, 1000);
  },

  componentWillUnmount: function () {
    clearTimeout(this.initialResetTriggersTimeout);
  },

  componentDidUpdate: function () {
    this.resetTriggers();
  },

  resetTriggers: function () {
    var contract = this.refs.contract.getDOMNode();
    var expandChild = this.refs.expandChild.getDOMNode();
    var expand = this.refs.expand.getDOMNode();

    contract.scrollLeft      = contract.scrollWidth;
    contract.scrollTop       = contract.scrollHeight;
    expandChild.style.width  = expand.offsetWidth + 1 + 'px';
    expandChild.style.height = expand.offsetHeight + 1 + 'px';
    expand.scrollLeft        = expand.scrollWidth;
    expand.scrollTop         = expand.scrollHeight;
  },

  onScroll: function () {
    if (this.r) this.cancelFrame(this.r);
    this.r = this.requestFrame(function () {
      var dimensions = this.getDimensions();

      if (this.haveDimensionsChanged(dimensions)) {
        this.lastDimensions = dimensions;
        this.props.onResize(dimensions);
      }
    }.bind(this));
  },

  getDimensions: function () {
    var el = {};
    if ((this.refs.resizable || false) && typeof this.refs.resizable.getDOMNode === "function") {
      el = this.refs.resizable.getDOMNode();
    }

    return {
      width: el.offsetWidth || 0,
      height: el.offsetHeight || 0
    };
  },

  haveDimensionsChanged: function (dimensions) {
    return dimensions.width != this.lastDimensions.width || dimensions.height != this.lastDimensions.height;
  },

  render: function() {
    var props = React.addons.update(this.props, {$merge: {
      onScroll: this.onScroll,
      ref: 'resizable'
    }});
    props.style = props.style || {};
    props.style.width = props.style.height = "100%";
    props.style.display = "block";

    return (
      React.createElement('div', props,
        [
          this.props.children,
          React.createElement('div', {className: this.props.triggersClass, key: 'trigger'},
            [
              React.createElement('div', {className: this.props.expandClass, ref: 'expand', key: 'expand'}, React.createElement('div', {ref: 'expandChild'})),
              React.createElement('div', {className: this.props.contractClass, ref: 'contract', key: 'contract'})
            ]
          )
        ]
      )
    );
  }

});

PanelAddons.ResizableContent = ResizableContent;


var StickyButton = React.createClass({
  displayName: 'StickyButton',
  mixins: [Mixins.Button],

  handleClick: function () {
    this.setState({active: !this.state.active});
    this._trigger();
  },

  handleDoubleClick: function () {
    this.setState({highlighted: !this.state.highlighted});
    this._trigger();
  },

  handleContextMenu: function () {
    this.setState({highlighted: !this.state.highlighted});
    this._trigger();
  },

  _trigger: function () {
    this.forceUpdate(function () {
      if (typeof this.props.onChange === "function") {
        this.props.onChange(this);
      }
    }.bind(this));
  },

  render: function () {
    var sheet = this.getSheet('Button');

    return (
      React.createElement("li", React.__spread({style: sheet.style},  this.listeners, {title: this.props.title}),
        React.createElement("span", {style: sheet.children.style},
          this.props.children
        )
      )
    );
  }
});

PanelAddons.StickyButton = StickyButton;


module.exports = ReactPanels;
