(window.webpackJsonp = window.webpackJsonp || []).push([
    [75], {
        524: function(t, e, n) {
            "use strict";
            var r = n(13),
                c = n(10),
                o = n.n(c),
                l = n(139),
                d = r.componentFactory.create({
                    name: "BannerItem",
                    props: {
                        settings: o.a.ofAny().required,
                        isEnabledEditor: o.a.ofType().default(!1),
                        isSecondaryButton: o.a.ofType().default(!0),
                        isEnabledDescription: o.a.ofType().default(!0),
                        isSimplyTitle: o.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, n, r, c;
                        return t("div", {
                            class: "kmb-widget-banner-content kmb-widget-banner-content-bg py-6 md-py-10 md-px-6 w-full"
                        }, [this.isSimplyTitle ? t(l.O, {
                            attrs: {
                                value: this.settings.title
                            },
                            class: "kmb-banner-simply-title"
                        }) : t(l.Z, {
                            attrs: {
                                value: this.settings.title,
                                isEnabledDivider: !1
                            },
                            class: "kmb-banner-title"
                        }), this.isEnabledDescription && t(l.n, {
                            attrs: {
                                value: this.settings.description
                            },
                            class: "kmb-banner-description"
                        }), t(l.h, {
                            attrs: {
                                isEnabled: (null === (e = this.settings.primaryButton) || void 0 === e ? void 0 : e.isEnabled) || (null === (n = this.settings.secondaryButton) || void 0 === n ? void 0 : n.isEnabled)
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(l.g, {
                            attrs: {
                                value: this.settings.primaryButton,
                                isEnabled: null === (r = this.settings.primaryButton) || void 0 === r ? void 0 : r.isEnabled
                            }
                        }), this.isSecondaryButton && t(l.g, {
                            attrs: {
                                value: this.settings.secondaryButton,
                                isEnabled: null === (c = this.settings.secondaryButton) || void 0 === c ? void 0 : c.isEnabled,
                                classNames: "kmb-widget-secondary-btn"
                            }
                        })])])
                    }
                });
            e.a = d
        },
        703: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V1", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.b),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-text-center"
                        }, [t(v.d, {
                            attrs: {
                                image: s.image,
                                imageResize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation,
                                classNames: "kmb-widget-banner-item kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur bg-center w-full"
                            },
                            class: "kmb-widget-bg-image-group-with-bg-overlay"
                        }, [t("div", {
                            class: "kmb-widget-container kmb-banner-widget-item-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])])])
                    }
                });
            e.default = R
        },
        705: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V3", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.i),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v3 w-full",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-banner-main-bg"
                        }, [t(v.c, {
                            attrs: {
                                image: s.image,
                                imageResize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-item banner-no-radius kmb-widget-bg-image-flex-content kmb-widget-image-item-default-rounded-right flex items-center banner-bg h-full bg-w-full bg-center"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "lg-w-3-4 w-full ml-auto"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-widget-banner-box text-center"
                        })])])])])])])])
                    }
                });
            e.default = R
        },
        706: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V4", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.j),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v4",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-banner-main-bg"
                        }, [t(v.c, {
                            attrs: {
                                image: s.image,
                                imageResize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-item banner-no-radius kmb-widget-bg-image-flex-content kmb-widget-bg-image-flex-content kmb-widget-image-item-default-rounded-left flex items-center banner-bg h-full bg-center"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "lg-w-3-4 w-full mr-auto"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-widget-banner-box text-center"
                        })])])])])])])])
                    }
                });
            e.default = R
        },
        707: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V5", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.k),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v5",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-banner-main-bg"
                        }, [t(v.c, {
                            attrs: {
                                image: s.image,
                                imageResize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation,
                                parallaxSpeed: .2
                            },
                            class: "kmb-widget-banner-item banner-bg kmb-widget-bg-image-flex-content bg-center z-1 relative"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-widget-banner-box text-center w-3-5"
                        })])])])])])])
                    }
                });
            e.default = R
        },
        709: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V7", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.m),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v7 kmb-banner-white-space",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-row"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col flex items-center"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center w-full kmb-widget-banner-info my-6"
                        })])]), t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col self-stretch"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-image kmb-widget-image-item-default-rounded-left kmb-lg-widget-full-h-image"
                        })])])])])
                    }
                });
            e.default = R
        },
        711: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V9", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.o),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v9 kmb-banner-white-space",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-row"
                        }, [t("div", {
                            class: "lg-w-1-2 kmb-widget-col kmb-widget-banner-image w-full self-stretch"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-image kmb-widget-image-item-default-rounded-right kmb-lg-widget-full-h-image"
                        })]), t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col flex items-center"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center w-full kmb-widget-banner-info"
                        })])])])])])
                    }
                });
            e.default = R
        },
        714: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V12", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.e),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v12",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-text-center"
                        }, [t(v.d, {
                            attrs: {
                                image: s.image,
                                imageResize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation,
                                classNames: "kmb-widget-banner-item kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur bg-center w-full"
                            },
                            class: "kmb-widget-bg-image-group-with-bg-overlay"
                        }, [t("div", {
                            class: "kmb-widget-container kmb-banner-widget-item-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])])])
                    }
                });
            e.default = R
        },
        715: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V13", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.f),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v13",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row py-20"
                        }, [t("div", {
                            class: "lg-w-1-2-1 w-full kmb-widget-col flex items-center"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })])]), t("div", {
                            class: "lg-w-1-2-2 w-full kmb-widget-col self-stretch"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-image kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-lg-widget-full-h-image"
                        })])])])])])
                    }
                });
            e.default = R
        },
        716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBannerSettingsT1V14", (function() {
                return k
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(110),
                v = n(139),
                h = n(524);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var k = function(t) {
                    Object(c.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.g),
                R = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "banner banner-type-t1 banner-t1-v14",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row py-20"
                        }, [t("div", {
                            class: "lg-w-1-2-2 w-full kmb-widget-col self-stretch"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-banner-image kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded kmb-lg-widget-full-h-image"
                        })]), t("div", {
                            class: "lg-w-1-2-1 w-full kmb-widget-col flex items-center"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })])])])])])])
                    }
                });
            e.default = R
        }
    }
]);