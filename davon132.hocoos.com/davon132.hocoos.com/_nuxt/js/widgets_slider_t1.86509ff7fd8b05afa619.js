(window.webpackJsonp = window.webpackJsonp || []).push([
    [178], {
        1082: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V1", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.b),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        isEnabledLiveEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s.items && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-slider-inside-navigation kmb-slider-inside-navigation-opacity-circle kmb-widget-slider-inside-space-row"
                        }, [s.items.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-slider-item-h-auto"
                            }, [t(v.c, {
                                attrs: {
                                    image: e.image,
                                    imageResize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-full-bg-item kmb-widget-item-content kmb-widget-bg-image-with-overlay h-full"
                            }, [t("div", {
                                class: "kmb-widget-overlay"
                            }, [t("div", {
                                class: "kmb-widget-overlay-content flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container lg-py-18"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        1083: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V2", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.i),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v2",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s.items && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-widget-slider-inside-space-row kmb-slider-inside-navigation-opacity-circle py-10 kmb-widget-bg"
                        }, [s.items.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "kmb-widget-height-container"
                            }, [t("div", {
                                class: "flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        1085: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V4", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.k),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v4",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s.items && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-widget-slider-inside-space-row kmb-widget-bg py-10"
                        }, [s.items.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "kmb-widget-height-container"
                            }, [t("div", {
                                class: "flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        1094: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V13", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.f),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v13",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-slider-inside-navigation kmb-widget-slider-inside-space-row"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-slider-item-h-auto"
                            }, [t(v.c, {
                                attrs: {
                                    image: e.image,
                                    imageResize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-full-bg-item kmb-widget-item-content kmb-widget-bg-image-with-overlay h-full"
                            }, [t("div", {
                                class: "kmb-widget-overlay"
                            }, [t("div", {
                                class: "kmb-widget-overlay-content flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container py-10"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        1095: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V14", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.g),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v14",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s.items && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-widget-slider-inside-space-row kmb-slider-inside-navigation-opacity-circle kmb-widget-bg py-10"
                        }, [s.items.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-slider-item-h-auto kmb-flex-centered-position"
                            }, [t("div", {
                                class: "kmb-widget-md-height-container"
                            }, [t("div", {
                                class: "flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        1096: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetSliderSettingsT1V15", (function() {
                return w
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                d = n(6),
                l = (n(18), n(13)),
                f = n(10),
                m = n.n(f),
                y = n(241),
                v = n(139),
                h = n(529);

            function k(t) {
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
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var w = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(y.h),
                T = l.componentFactory.create({
                    props: {
                        widget: m.a.ofType().required,
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1),
                        sliderIndicatorsType: m.a.ofType().optional
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.db, {
                            class: "slider slider-t1 slider-t1-v15",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info kmb-widget-slider-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [s.items && t(v.P, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                navigationType: s.sliderNavigationType,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-widget-slider-inside-space-row py-10 kmb-widget-bg"
                        }, [s.items.map((function(e, n) {
                            return t(v.Q, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "kmb-slider-item-h-auto kmb-flex-centered-position"
                            }, [t("div", {
                                class: "kmb-widget-md-height-container"
                            }, [t("div", {
                                class: "flex items-center justify-center"
                            }, [t("div", {
                                class: "kmb-widget-container"
                            }, [t(h.a, {
                                attrs: {
                                    blockType: "clear",
                                    item: e
                                }
                            })])])])])
                        }))])])])])])
                    }
                });
            e.default = T
        },
        529: function(t, e, n) {
            "use strict";
            var r = n(13),
                o = n(10),
                c = n.n(o),
                d = n(14),
                l = n.n(d),
                f = n(139),
                m = r.componentFactory.create({
                    name: "BlockItem",
                    props: {
                        item: c.a.ofAny().required,
                        theme: c.a.ofType().optional,
                        blockType: c.a.ofType().default("right"),
                        isEnabledButtons: c.a.ofType().default(!0),
                        isEnabledDivider: c.a.ofType().default(!1),
                        isEnabledSecondaryButton: c.a.ofType().default(!0)
                    },
                    methods: {
                        renderContent: function(t, e) {
                            return t("div", {
                                class: l()(e)
                            }, [t(f.Z, {
                                attrs: {
                                    value: this.item.title,
                                    isEnabledDivider: this.isEnabledDivider
                                },
                                class: "kmb-slider-title"
                            }), t(f.n, {
                                attrs: {
                                    value: this.item.description
                                },
                                class: "kmb-slider-description"
                            }), t(f.h, {
                                class: "kmb-widget-btn-group-center flex justify-center"
                            }, [t(f.g, {
                                attrs: {
                                    value: this.item.primaryButton
                                },
                                class: "kmb-widget-primary-btn"
                            }), this.isEnabledSecondaryButton && t(f.g, {
                                attrs: {
                                    value: this.item.secondaryButton,
                                    classNames: "kmb-widget-secondary-btn"
                                }
                            })])])
                        }
                    },
                    render: function(t) {
                        return "right" === this.blockType ? t("div", {
                            class: "kmb-widget-slider-right-title-main-block z-10"
                        }, [t("div", {
                            class: "container"
                        }, [this.renderContent(t, "kmb-slide-content-box lg-w-1-2 md-w-3-5 w-3-4 px-8 lg-py-24 py-16 shadow-md")])]) : "left" === this.blockType ? t("div", {
                            class: "kmb-widget-slider-left-title-main-block z-10"
                        }, [t("div", {
                            class: "container"
                        }, [this.renderContent(t, "kmb-slide-content-box lg-w-1-2 md-w-3-5 w-4-5 px-8 lg-py-24 py-16 shadow-md")])]) : "center" === this.blockType ? t("div", {
                            class: "kmb-widget-slider-center-title-main-block relative z-10"
                        }, [t("div", {
                            class: "container mx-auto"
                        }, [this.renderContent(t, "kmb-slide-content-box mx-auto md-p-16 p-12")])]) : "clear" === this.blockType ? t("div", {
                            class: "w-full kmb-slide-content kmb-text-center z-10"
                        }, [t("div", {
                            class: "kmb-widget-default-info"
                        }, [this.renderContent(t, "kmb-widget-titles-info")])]) : void 0
                    }
                });
            e.a = m
        }
    }
]);