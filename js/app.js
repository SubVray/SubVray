!(function (e, t) {
    var s = "slimBeforeAfter";
    "function" == typeof define && define.amd
      ? define([], t(s))
      : "object" == typeof exports
      ? (module.exports = t(s))
      : (e[s] = t(s));
  })(this, function (e) {
    "use strict";
    function r(e, t) {
      var s,
        i = {};
      for (s in v) Object.prototype.hasOwnProperty.call(v, s) && (i[s] = v[s]);
      for (s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
      return i;
    }
    function n(e, t) {
      var s;
      for (s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
      return e;
    }
    function a() {
      var e = document.createElement("div");
      (e.className = "slim-comparison-loader"),
        (e.style.backgroundColor = this.options.loaderOverlayColor);
      var t = document.createElement("div");
      t.className = "slim-lds-ellipsis";
      var s = document.createElement("div");
      s.style.backgroundColor = this.options.loaderColor;
      var i = document.createElement("div");
      i.style.backgroundColor = this.options.loaderColor;
      var o = document.createElement("div");
      o.style.backgroundColor = this.options.loaderColor;
      var r = document.createElement("div");
      return (
        (r.style.backgroundColor = this.options.loaderColor),
        t.appendChild(s),
        t.appendChild(i),
        t.appendChild(o),
        t.appendChild(r),
        e.appendChild(t),
        e
      );
    }
    function l() {
      var e = document.createElement("div");
      (e.className = "slim-separator"),
        (e.style.cssText = "border-color:" + this.options.separatorColor + ";");
      var t = document.createElement("div");
      (t.className = "slim-before-line"),
        (t.style.cssText =
          "background-color:" + this.options.separatorColor + ";");
      var s = document.createElement("div");
      (s.className = "slim-after-line"),
        (s.style.cssText =
          "background-color:" + this.options.separatorColor + ";");
      var i = document.createElement("span");
      i.className = "slim-before-arrow";
      var o = document.createElement("span");
      return (
        (o.className = "slim-after-arrow"),
        e.appendChild(t),
        e.appendChild(s),
        e.appendChild(i),
        e.appendChild(o),
        e
      );
    }
    function i(t) {
      var s = t.getElementsByClassName("slim-comparison-loader")[0];
      setTimeout(function (e) {
        (s.style.opacity = 0),
          setTimeout(function (e) {
            t.getElementsByClassName("slim-comparison-wrapper")[0].removeChild(s);
          }, 400);
      }, 200);
    }
    function c(e) {
      var t = e.getElementsByClassName("slim-before-wrapper")[0],
        s = e.getElementsByClassName("slim-separator")[0];
      "vertical" == this.options.position
        ? ((t.style.height = this.options.startPosition + "%"),
          (s.style.top = this.options.startPosition + "%"))
        : ((t.style.width = this.options.startPosition + "%"),
          (s.style.left = this.options.startPosition + "%"));
    }
    function h(e) {
      var t = this,
        s = e
          .getElementsByClassName("slim-after-wrapper")[0]
          .getElementsByTagName("img")[0];
      s.complete
        ? ((t.options.containerWidth = s.naturalWidth),
          (t.options.containerHeight = s.naturalHeight),
          o.call(t, e),
          i(e))
        : s.addEventListener("load", function () {
            (t.options.containerWidth = this.naturalWidth),
              (t.options.containerHeight = this.naturalHeight),
              o.call(t, e),
              i(e);
          });
    }
    function m() {
      for (var e = 0; e < this.selectors.length; e++) {
        var t = this.selectors[e],
          s = t.clientWidth,
          i =
            (t.clientHeight,
            t
              .getElementsByClassName("slim-before-wrapper")[0]
              .getElementsByTagName("img")[0]),
          o = t
            .getElementsByClassName("slim-after-wrapper")[0]
            .getElementsByTagName("img")[0];
        (o.style.width = s + "px"),
          (i.style.width = s + "px"),
          (i.style.height = o.clientHeight + "px"),
          (t.style.height = o.clientHeight + "px");
      }
    }
    function d(e) {
      e.addEventListener("touchstart", this.touchstart, !1),
        e.addEventListener("touchend", this.touchend, !1),
        e.addEventListener("touchmove", this.touchmove, !1),
        "click" == this.options.dragHandler
          ? (e.addEventListener("mousedown", this.mousedown, !1),
            document.addEventListener("mouseup", this.mouseup, !1))
          : (e.addEventListener("mouseenter", this.mouseenter, !1),
            e.addEventListener("mouseleave", this.mouseleave, !1)),
        e.addEventListener("mousemove", this.mousemove, !1);
    }
    function p(e) {
      e.preventDefault(),
        (this.currentDragElement = e.target),
        "touchstart" === e.type
          ? (this.dragCursorType = "touch")
          : (this.dragCursorType = "mouse"),
        this.currentDragElement.parentNode.parentNode.classList.contains(
          "slim-vertical"
        )
          ? (this.currentDragPosition = "vertical")
          : (this.currentDragPosition = "horizontal"),
        (this.dragActive = !0);
    }
    function u(e) {
      e.preventDefault();
      var t = 0,
        s = 0;
      this.dragActive &&
        ((s =
          "touchmove" === e.type
            ? ((t = e.touches[0].clientX), e.touches[0].clientY)
            : ((t = e.pageX), e.pageY)),
        y.call(this, t, s));
    }
    function g(e) {
      e.preventDefault(),
        this.currentDragElement &&
          (this.currentDragElement.parentNode.parentNode.classList.contains(
            "slim-drag-hover"
          ) ||
            (this.dragActive = !1));
    }
    var v = {
        position: "horizontal",
        labelPosition: "center",
        dragHandler: "click",
        startPosition: 50,
        labelShowHover: !1,
        loaderColor: "rgba(88,179,104,1)",
        loaderOverlayColor: "rgba(255,255,255,1)",
        separatorColor: "rgba(255,255,255,1)",
        separatorShow: !0,
        containerWidth: 0,
        containerHeight: 0,
      },
      o = function (t) {
        var e = t.clientWidth,
          s =
            (t.clientHeight,
            t
              .getElementsByClassName("slim-before-wrapper")[0]
              .getElementsByTagName("img")[0]),
          i = t
            .getElementsByClassName("slim-after-wrapper")[0]
            .getElementsByTagName("img")[0];
        (s.style.width = e + "px"),
          (i.style.width = e + "px"),
          (s.style.height = i.clientHeight + "px"),
          (t.style.height =
            (e * this.options.containerHeight) / this.options.containerWidth +
            "px"),
          setTimeout(function (e) {
            t.style.transition = "height 0s";
          }, 200);
      },
      y = function (e, t) {
        if (!this.currentDragElement.classList.contains("slim-separator"))
          return !1;
        var s =
          this.currentDragElement.parentNode.parentNode.getBoundingClientRect();
        if ("vertical" == this.currentDragPosition) {
          "mouse" === this.dragCursorType &&
            (t -= document.documentElement.scrollTop);
          var i =
            ((t - s.top) / this.currentDragElement.parentNode.clientHeight) * 100;
          100 < i && (i = 100),
            i < 0 && (i = 0),
            (this.currentDragElement.style.top = i + "%"),
            (this.currentDragElement.parentNode.getElementsByClassName(
              "slim-before-wrapper"
            )[0].style.height = i + "%");
        } else {
          var o =
            ((e - s.left) /
              this.currentDragElement.parentNode.parentNode.clientWidth) *
            100;
          100 < o && (o = 100),
            o < 0 && (o = 0),
            (this.currentDragElement.style.left = o + "%"),
            (this.currentDragElement.parentNode.getElementsByClassName(
              "slim-before-wrapper"
            )[0].style.width = o + "%");
        }
      };
    function t(e) {
      this.init(e);
    }
    return (
      (t.prototype = {
        init: function (e) {
          (this.selectors = document.querySelectorAll(
            ".slim-comparison-container"
          )),
            (this.dragActive = !1),
            (this.currentDragElement = null),
            (this.currentDragPosition = "horizontal"),
            (this.currentDragHandler = "click"),
            (this.dragCursorType = "mouse"),
            (this.touchstart = p.bind(this)),
            (this.touchend = g.bind(this)),
            (this.touchmove = u.bind(this)),
            (this.mousedown = p.bind(this)),
            (this.mouseup = g.bind(this)),
            (this.mousemove = u.bind(this)),
            (this.mouseenter = function (e) {
              e.preventDefault(),
                (this.currentDragElement =
                  e.target.getElementsByClassName("slim-separator")[0]),
                (this.dragCursorType = "mouse"),
                e.target.parentNode.classList.contains("slim-vertical")
                  ? (this.currentDragPosition = "vertical")
                  : (this.currentDragPosition = "horizontal"),
                (this.dragActive = !0);
            }.bind(this)),
            (this.mouseleave = function (e) {
              e.preventDefault(), (this.dragActive = !1);
            }.bind(this));
          for (var t = 0; t < this.selectors.length; t++) {
            var s = this.selectors[t],
              i = s.getElementsByClassName("slim-comparison-wrapper")[0];
            (this.options = v),
              (this.options = r(0, e)),
              (this.options = n(
                this.options,
                JSON.parse(s.getAttribute("data-slim-params"))
              )),
              0 != this.options.containerHeight &&
                0 != this.options.containerWidth &&
                (s.style.height =
                  (s.clientWidth * this.options.containerHeight) /
                    this.options.containerWidth +
                  "px"),
              i.appendChild(l.call(this)),
              i.appendChild(a.call(this)),
              "vertical" === this.options.position &&
                s.classList.add("slim-vertical"),
              "hover" === this.options.dragHandler &&
                s.classList.add("slim-drag-hover"),
              !0 === this.options.labelShowHover &&
                s.classList.add("slim-caption-hover"),
              0 == this.options.separatorShow &&
                s.classList.add("slim-hide-separator"),
              s.classList.add(
                "slim-caption-position-" + this.options.labelPosition
              ),
              c.call(this, s),
              h.call(this, s),
              d.call(this, i);
            var o = this;
            window.addEventListener("resize", function (e) {
              m.call(o);
            });
          }
        },
        destroy: function () {
          this.selectors = document.querySelectorAll(
            ".slim-comparison-container"
          );
          for (var e = 0; e < this.selectors.length; e++) {
            var t = this.selectors[e],
              s = t.getElementsByClassName("slim-comparison-wrapper")[0];
            if (null == t.getElementsByClassName("slim-separator")[0]) return !1;
            s.removeChild(t.getElementsByClassName("slim-separator")[0]),
              s.removeEventListener("touchstart", this.touchstart, !1),
              s.removeEventListener("touchend", this.touchend, !1),
              s.removeEventListener("touchmove", this.touchmove, !1),
              s.removeEventListener("mousedown", this.mousedown, !1),
              document.removeEventListener("mouseup", this.mouseup, !1),
              s.removeEventListener("mousemove", this.mousemove, !1),
              s.removeEventListener("mouseenter", this.mouseenter, !1),
              s.removeEventListener("mouseleave", this.mouseleave, !1),
              (t.style.cssText = ""),
              (t.className = "slim-comparison-container"),
              (t.getElementsByClassName("slim-before-wrapper")[0].style.cssText =
                "width:100%; height:100%;");
            for (var i = t.getElementsByTagName("img"), o = 0; o < i.length; o++)
              i[o].style.cssText = "";
          }
        },
        refresh: function () {
          var e = this;
          try {
            e.destroy();
          } catch (e) {
            console.log("Already Destroyed.");
          }
          setTimeout(function () {
            e.init();
          }, 100);
        },
      }),
      t
    );
  });
  