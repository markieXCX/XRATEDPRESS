/*! For license information please see ../../../../../../../../../../../../../../../../../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        525: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o.default
            }));
            var o = r(17);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function l(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var i = 0, e = new Array(t.length); i < t.length; i++) e[i] = t[i];
                        return e
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function c() {
                return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
            }

            function m(t, e) {
                h(t, e), Object.getOwnPropertyNames(e.prototype).forEach((function(r) {
                    h(t.prototype, e.prototype, r)
                })), Object.getOwnPropertyNames(e).forEach((function(r) {
                    h(t, e, r)
                }))
            }

            function h(t, e, r) {
                (r ? Reflect.getOwnMetadataKeys(e, r) : Reflect.getOwnMetadataKeys(e)).forEach((function(o) {
                    var n = r ? Reflect.getOwnMetadata(o, e, r) : Reflect.getOwnMetadata(o, e);
                    r ? Reflect.defineMetadata(o, n, t, r) : Reflect.defineMetadata(o, n, t)
                }))
            }
            var f = {
                __proto__: []
            }
            instanceof Array;

            function w(t, e) {
                var r = e.prototype._init;
                e.prototype._init = function() {
                    var e = this,
                        r = Object.getOwnPropertyNames(t);
                    if (t.$options.props)
                        for (var o in t.$options.props) t.hasOwnProperty(o) || r.push(o);
                    r.forEach((function(r) {
                        Object.defineProperty(e, r, {
                            get: function() {
                                return t[r]
                            },
                            set: function(e) {
                                t[r] = e
                            },
                            configurable: !0
                        })
                    }))
                };
                var data = new e;
                e.prototype._init = r;
                var o = {};
                return Object.keys(data).forEach((function(t) {
                    void 0 !== data[t] && (o[t] = data[t])
                })), o
            }
            var k = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

            function y(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.name = e.name || t._componentTag || t.name;
                var r = t.prototype;
                Object.getOwnPropertyNames(r).forEach((function(t) {
                    if ("constructor" !== t)
                        if (k.indexOf(t) > -1) e[t] = r[t];
                        else {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            void 0 !== o.value ? "function" == typeof o.value ? (e.methods || (e.methods = {}))[t] = o.value : (e.mixins || (e.mixins = [])).push({
                                data: function() {
                                    return l({}, t, o.value)
                                }
                            }) : (o.get || o.set) && ((e.computed || (e.computed = {}))[t] = {
                                get: o.get,
                                set: o.set
                            })
                        }
                })), (e.mixins || (e.mixins = [])).push({
                    data: function() {
                        return w(this, t)
                    }
                });
                var n = t.__decorators__;
                n && (n.forEach((function(t) {
                    return t(e)
                })), delete t.__decorators__);
                var d = Object.getPrototypeOf(t.prototype),
                    h = d instanceof o.default ? d.constructor : o.default,
                    f = h.extend(e);
                return O(f, t, h), c() && m(f, t), f
            }
            var v = {
                prototype: !0,
                arguments: !0,
                callee: !0,
                caller: !0
            };

            function O(t, e, r) {
                Object.getOwnPropertyNames(e).forEach((function(o) {
                    if (!v[o]) {
                        var l = Object.getOwnPropertyDescriptor(t, o);
                        if (!l || l.configurable) {
                            var d, c, m = Object.getOwnPropertyDescriptor(e, o);
                            if (!f) {
                                if ("cid" === o) return;
                                var h = Object.getOwnPropertyDescriptor(r, o);
                                if (d = m.value, c = n(d), null != d && ("object" === c || "function" === c) && h && h.value === m.value) return
                            }
                            0, Object.defineProperty(t, o, m)
                        }
                    }
                }))
            }

            function j(t) {
                return "function" == typeof t ? y(t) : function(e) {
                    return y(e, t)
                }
            }
            j.registerHooks = function(t) {
                k.push.apply(k, d(t))
            };
            "undefined" != typeof Reflect && Reflect.getMetadata
        },
        541: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return l
            }));
            var o = r(5),
                n = [Object(o.ab)("id"), Object(o.ab)("name"), Object(o.ab)("nameHtml"), Object(o.ab)("slug"), Object(o.ab)("coverImage"), Object(o.ab)("publishStatus"), Object(o.ab)("publishDate"), Object(o.ab)("expectedReadMinutes"), Object(o.ab)("shortDescription"), Object(o.ab)("button"), Object(o.ab)("likedCount"), Object(o.ab)("viewedCount"), Object(o.ab)("siteId"), Object(o.ab)("pageTemplateType")],
                l = [Object(o.ab)("id"), Object(o.ab)("name"), Object(o.ab)("nameHtml"), Object(o.ab)("slug"), Object(o.ab)("mainImage"), Object(o.ab)("rollOverPictureImage"), Object(o.ab)("isEnabledRollOverPicture"), Object(o.ab)("inventoryStockType"), Object(o.ab)("isAutomaticallyTrackInventory"), Object(o.ab)("availableQuantity"), Object(o.ab)("rating"), Object(o.ab)("defaultInventorySkuId"), Object(o.ab)("isUsePrice"), Object(o.ab)("isUseSalePrice"), Object(o.ab)("isEnabledSku"), Object(o.ab)("isEnabledOptionGroups"), Object(o.ab)("optionGroups"), Object(o.ab)("activeInventorySku"), Object(o.ab)("skus"), Object(o.ab)("publishStatus"), Object(o.ab)("publishDate"), Object(o.ab)("siteId"), Object(o.ab)("pageTemplateType")]
        },
        548: function(t, e, r) {
            "use strict";
            r(27), r(28), r(30), r(31);
            var o = r(7),
                n = r(16),
                l = (r(22), r(18), r(34), r(13)),
                d = r(10),
                c = r.n(d),
                m = r(14),
                h = r.n(m),
                f = r(71),
                w = r(23),
                k = r(541),
                y = r(19),
                v = r(5),
                O = r(2),
                j = r(139),
                S = r(568);

            function T(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function P(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? T(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : T(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var x = function() {
                    return r.e(59).then(r.bind(null, 581))
                },
                I = l.componentFactory.mixin(y.F).create({
                    name: "WebSiteBlogCategoryTemplate",
                    props: {
                        page: c.a.ofType().required,
                        authorId: c.a.ofType().optional,
                        archiveDate: c.a.ofType().optional,
                        postIds: c.a.ofType().default((function() {
                            return []
                        })),
                        isSubTemplate: c.a.ofType().default(!1)
                    },
                    fetch: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.fetchSliderPosts();
                                    case 2:
                                        return e.next = 4, t.fetchPosts();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    computed: {
                        filter: function() {
                            var filter = new f.a({
                                queryParameters: new O.zb(P(P(P(P({
                                    siteId: this.siteId,
                                    includeOnlyPublished: !0,
                                    includeAuthor: !0,
                                    includeMainCategoryDetails: !0
                                }, this.authorId && new O.zb({
                                    authorId: this.authorId
                                })), this.archiveDate && new O.zb({
                                    archiveDate: this.archiveDate
                                })), this.isSubTemplate && new O.zb({
                                    ids: this.postIds.length ? this.postIds : [0]
                                })), {}, {
                                    fields: k.a.join(",")
                                })),
                                include: "total",
                                orderBy: this.orderBy[this.page.sortType] || "-id",
                                take: this.take || 10,
                                skip: 0
                            });
                            return Object(v.eb)(filter, this.$route.query)
                        }
                    },
                    methods: {
                        fetchPosts: function(filter, t) {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function r() {
                                var o, n, l, d, c, m, h, f;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, e.isLoading = !0, o = filter || e.filter, n = o.include, l = o.orderBy, d = o.take, c = o.skip, m = new O.zb(P(P({}, e.filter.queryParameters), {}, {
                                                include: n,
                                                orderBy: l,
                                                take: d,
                                                skip: c
                                            })), r.next = 6, e.$api.get(new O.zb(m));
                                        case 6:
                                            h = r.sent, e.queryResponse = h, r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), console.log(r.t0);
                                        case 13:
                                            return r.prev = 13, e.isLoading = !1, t && (f = e.$el.querySelector("#kmb-paginated-data")) && f.scrollIntoView({
                                                behavior: "smooth"
                                            }), r.finish(13);
                                        case 17:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 10, 13, 17]
                                ])
                            })))()
                        },
                        fetchSliderPosts: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var r, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !t.blogCategoryTemplateUiSettings.hasSlider || Object(v.M)(t.page.sliderPostIds)) {
                                                e.next = 8;
                                                break
                                            }
                                            return r = t.page.sliderPostIds, t.isLoading = !0, e.next = 6, t.$api.get(new O.zb({
                                                siteId: t.siteId,
                                                ids: r,
                                                includeOnlyPublished: !0,
                                                includeAuthor: !0,
                                                includeMainCategoryDetails: !0,
                                                take: 12,
                                                fields: k.a.join(",")
                                            }));
                                        case 6:
                                            o = e.sent, t.sliderPosts = Object(v.Z)(o.results || [], r, Object(v.ab)("id"));
                                        case 8:
                                            e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                        case 13:
                                            return e.prev = 13, t.isLoading = !1, e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10, 13, 16]
                                ])
                            })))()
                        },
                        renderPostListSlider: function(t) {
                            var e = this;
                            if (this.blogCategoryTemplateUiSettings.hasSlider || Object(v.M)(this.page.sliderPostIds)) return this.isLoading ? t("div", {
                                class: "w-full kmb-site-loading-wrapper text-center"
                            }, [t(j.z, {
                                class: "kmb-simple-loading kmb-blue-loading",
                                attrs: {
                                    isLoading: this.isLoading
                                }
                            })]) : Object(v.M)(this.sliderPosts) ? void 0 : t(j.P, {
                                attrs: {
                                    settings: {
                                        itemsToShow: 1
                                    },
                                    indicators: !0,
                                    nav: !0
                                },
                                class: "kmb-blog-category-template-slider"
                            }, [this.sliderPosts.map((function(r, o) {
                                return t(j.Q, {
                                    attrs: {
                                        index: o,
                                        "data-post-id": r.id
                                    },
                                    key: r.id
                                }, [t(j.c, {
                                    attrs: {
                                        image: r.coverImage,
                                        imageResize: e.blogCategoryTemplateUiSettings.imageResizeDifferentFirstItem
                                    }
                                }, [t("div", {
                                    class: "kmb-blog-category-template-overlay"
                                }, [t(S.a, {
                                    attrs: {
                                        index: o,
                                        post: r,
                                        settings: e.blogCategoryTemplateUiSettings,
                                        itemShowSettings: e.sliderPostIemShowSettins,
                                        isEnabledSideBar: e.isEnabedlSidebar,
                                        bgImage: e.blogCategoryTemplateUiSettings.bgImage
                                    }
                                })])])])
                            }))])
                        },
                        renderPostList: function(t) {
                            var e = this;
                            return this.isLoading ? t("div", {
                                class: "w-full kmb-site-loading-wrapper text-center"
                            }, [t(j.z, {
                                class: "kmb-simple-loading kmb-blue-loading",
                                attrs: {
                                    isLoading: this.isLoading
                                }
                            })]) : Object(v.M)(this.posts) ? t("div", {
                                class: "kmb-site-not-found-message"
                            }, ["Posts not found"]) : this.blogCategoryTemplateUiSettings ? t("div", {
                                class: "kmb-widget-row kmb-site-blog-post-row"
                            }, [this.posts.map((function(r, o) {
                                return t(S.a, {
                                    key: r.id,
                                    attrs: {
                                        index: o,
                                        post: r,
                                        settings: e.blogCategoryTemplateUiSettings,
                                        itemShowSettings: e.blogPostIemShowSettins,
                                        isEnabledSideBar: e.isEnabedlSidebar
                                    }
                                })
                            }))]) : void 0
                        }
                    },
                    render: function(t) {
                        var e = this;
                        if (!Object(v.O)(this.page)) return t("div", {
                            class: "kmb-blog-template-nuxt-content"
                        }, [t("div", {
                            class: h()("kmb-blog-category-template-content", Object(w.i)(this.page), this.structureTypestructureType, this.structureTypeVariationTypeClassName, this.sidebarTypeClassName, {
                                "kmb-site-blog-category-template-structure-sidebar-enabled": this.isEnabedlSidebar
                            }),
                            attrs: {
                                id: "kmb-paginated-data"
                            }
                        }, [this.renderPostListSlider(t), t("div", {
                            class: "kmb-site-blog-category-main-contnent kmd-site-default-page-spaces"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: h()("kmb-widget-row")
                        }, [this.isEnabedlSidebar && t("div", {
                            class: h()("kmb-site-blog-post-list-sidebar-col lg-w-1-4 w-full kmb-widget-col", {
                                "order-last": this.sidebarType === O.q.Right
                            })
                        }, [t(x, {
                            props: {
                                widgets: this.page.sidebarWidgets
                            }
                        })]), t("div", {
                            class: h()("kmb-site-blog-post-list-content w-full kmb-widget-col", {
                                "lg-w-3-4": this.isEnabedlSidebar
                            })
                        }, [t("div", {
                            class: "kmb-site-blog-post-content"
                        }, [this.renderPostList(t), t(j.F, {
                            attrs: {
                                query: this.filter,
                                queryResponse: this.queryResponse
                            },
                            on: {
                                paginate: function() {
                                    return e.fetchPosts(null, !0)
                                }
                            },
                            class: "kmb-pagination-list-center"
                        })])])])])])])]);
                        console.warn("Page or theme is unvailable!")
                    }
                });
            e.a = I
        },
        550: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o.a
            })), r.d(e, "b", (function() {
                return w
            })), r.d(e, "c", (function() {
                return v
            }));
            var o = r(248),
                n = (r(18), r(13)),
                l = r(10),
                d = r.n(l),
                c = r(14),
                m = r.n(c),
                h = r(8),
                f = r(5),
                w = n.componentFactoryOf().create({
                    name: "PageGridLayoutButtonGroup",
                    props: {
                        gridViewLayoutType: d.a.ofType().default(h.g.Two),
                        isEnabledSidebar: d.a.ofType().default(!1)
                    },
                    computed: {
                        items: function() {
                            return Object(f.w)(h.g).map((function(g) {
                                return g
                            }))
                        }
                    },
                    methods: {
                        onGrid: function(t) {
                            try {
                                Object(f.db)(this, "grid_display", t), this.$emit("change", t)
                            } catch (t) {
                                console.log(t)
                            }
                        }
                    },
                    render: function(t) {
                        var e = this;
                        return t("div", {
                            class: "kmb-page-grid-layout"
                        }, [t("div", {
                            class: "kmb-page-grid-layout-btn-group"
                        }, [this.items.map((function(r) {
                            return t("button", {
                                class: m()("kmb-page-grid-layout-btn", {
                                    "kmb-page-active-grid-layout-btn": e.gridViewLayoutType == r
                                }),
                                attrs: {
                                    "data-type": r
                                },
                                on: {
                                    click: function() {
                                        return e.onGrid(r)
                                    }
                                }
                            }, [Array.apply(null, Array(r == h.g.One ? 3 : r * r)).map((function(e) {
                                return t("i", {
                                    class: "kmb-page-grid-layout-btn-icon"
                                })
                            }))])
                        }))])])
                    }
                }),
                k = r(2),
                y = r(139),
                v = n.componentFactoryOf().create({
                    name: "SidebarSubscribeForm",
                    props: {
                        widget: d.a.ofType().required
                    },
                    render: function(t) {
                        var e, r, o, n = (null === (e = this.widget) || void 0 === e ? void 0 : e.subscribe) || new k.Jc;
                        return t("div", {
                            class: "kmb-page-sidebar-subscribe-form-widget-content"
                        }, [t(y.p, {
                            attrs: {
                                value: this.widget.labelOverride,
                                tag: "h4"
                            },
                            class: "kmb-page-sidebar-widget-title kmb-page-sidebar-subscribe-form-widget-title kmb-widget-title-h4 kmb-widget-el-group"
                        }), t(y.p, {
                            attrs: {
                                value: null === (r = n.description) || void 0 === r || null === (o = r.lczText) || void 0 === o ? void 0 : o.lczValue,
                                tag: "div",
                                maxChars: 1e3
                            },
                            class: "kmb-live-edit-rich-text kmb-site-widget-component kmb-page-sidebar-subscribe-form-widget-description kmb-widget-text-body2 kmb-widget-el-group"
                        }), t(y.A, {
                            attrs: {
                                form: n.formSettings,
                                formGroupClassNames: "kmb-page-sidebar-subscribe-form-widget-group"
                            },
                            class: "kmb-page-sidebar-subscribe-form-widget"
                        })])
                    }
                })
        },
        568: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return y
            })), r.d(e, "b", (function() {
                return S
            }));
            r(15);
            var o = r(13),
                n = r(10),
                l = r.n(n),
                d = r(14),
                c = r.n(d),
                m = r(5),
                h = r(23),
                f = r(1),
                w = r(2),
                k = r(139),
                y = o.componentFactory.create({
                    name: "PostItem",
                    props: {
                        post: l.a.ofType().required,
                        index: l.a.ofType().required,
                        settings: l.a.ofType().required,
                        itemShowSettings: l.a.ofType().required,
                        bgImage: l.a.ofType().default(!1),
                        isEnabledSideBar: l.a.ofType().default(!1)
                    },
                    computed: {
                        imageResize: function() {
                            return this.settings.differentFirstImage && 0 == this.index ? this.isEnabledSideBar ? this.settings.imageResizeDifferentFirstItemWithSideBar : this.settings.imageResizeDifferentFirstItem : this.isEnabledSideBar ? this.settings.imageResizeWithSideBar : this.settings.imageResize
                        },
                        columnSize: function() {
                            return this.settings.differentFirstImage && 0 == this.index ? this.settings.columnSizeDifferentFirstItem : this.isEnabledSideBar ? this.settings.columnSizeWithSideBar : this.settings.columnSize
                        },
                        postUrl: function() {
                            var t = this.post,
                                e = t.id,
                                r = t.slug;
                            return Object(h.s)(this, {
                                id: e,
                                slug: r
                            }, w.ec.Blog, this.$config.isEditor)
                        }
                    },
                    methods: {
                        isEnabledElement: function(t) {
                            var e;
                            return !this.itemShowSettings || this.itemShowSettings[t] && (null === (e = this.itemShowSettings[t]) || void 0 === e ? void 0 : e.isEnabled)
                        }
                    },
                    render: function(t) {
                        var e, r;
                        return t("div", {
                            class: c()("kmb-site-blog-post-item kmb-widget-col", this.columnSize),
                            attrs: {
                                "data-post-id": this.post.id
                            }
                        }, [!this.bgImage && !this.settings.hideImage && t("nuxt-link", {
                            attrs: {
                                to: this.postUrl
                            },
                            class: "kmb-site-blog-post-item-image block"
                        }, [this.settings.imageTitle && t("div", {
                            class: "kmb-site-blog-post-item-image-title"
                        }, [t(k.p, {
                            attrs: {
                                value: this.post.nameHtml,
                                tag: "h4",
                                maxChars: 1e3,
                                title: this.post.name,
                                "data-title": this.post.name
                            },
                            class: "kmb-widget-blog-post-name kmb-widget-title-h4 kmb-widget-default-style-text"
                        })]), t(k.w, {
                            attrs: {
                                value: this.post.coverImage,
                                resize: this.imageResize
                            },
                            class: "kmb-widget-col-group"
                        })]), t("div", {
                            class: "kmb-widget-titles-info kmb-widget-no-divider"
                        }, [this.post.mainCategory && (null === (e = this.post.mainCategory) || void 0 === e ? void 0 : e.name) && this.isEnabledElement(w.m.Category) && t("div", {
                            class: "kmb-widget-el-group kmb-widget-blog-post-item-main-category",
                            attrs: {
                                "data-main-category-id": this.post.mainCategory.id
                            }
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-main-category-name kmb-widget-post-text-overline1"
                        }, [this.post.mainCategory.name])]), t("nuxt-link", {
                            attrs: {
                                to: this.postUrl
                            },
                            class: "kmb-site-post-item-link kmb-site-post-item-name-link"
                        }, [t(k.p, {
                            attrs: {
                                value: this.post.nameHtml,
                                tag: "h4",
                                maxChars: 1e3,
                                title: this.post.name,
                                "data-title": this.post.name
                            },
                            class: "kmb-widget-blog-post-name kmb-widget-title-h4 kmb-widget-default-style-text kmb-widget-el-group"
                        })]), t("div", {
                            class: "kmb-widget-blog-info-item justify-between items-center"
                        }, [t("div", {
                            class: c()("w-full kmb-widget-col", {
                                "md-w-2-3 ": this.settings.showReadTime || (this.settings.differentFirstImage || this.settings.bgImage) && 0 == this.index
                            })
                        }, [t("div", {
                            class: "kmb-site-blog-post-item-info"
                        }, [this.post.publishDate && this.isEnabledElement(w.m.Date) && t("div", {
                            class: "kmb-widget-blog-post-item-publish-date-col flex-1"
                        }, [t("div", {
                            class: "kmb-widget-el-group"
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-publish-date kmb-widget-blog-post-date"
                        }, [Object(m.s)(this.post.publishDate, "DD.MM.YYYY")])])]), this.post.author && this.isEnabledElement(w.m.AuthorName) && t("div", {
                            class: "kmb-widget-blog-post-item-author-col"
                        }, [t("div", {
                            class: "kmb-widget-el-group"
                        }, [t("p", {
                            class: "kmb-widget-blog-author-name"
                        }, [this.post.author.firstName, " ", this.post.author.lastName])])])])]), (this.settings.showReadTime || (this.settings.differentFirstImage || this.settings.bgImage) && 0 == this.index) && t("div", {
                            class: "md-w-1-3 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-el-group text-right"
                        }, [t("p", {
                            class: "kmb-widget-blog-post-item-time-to-read kmb-widget-blog-post-read-minutes"
                        }, [this.post.expectedReadMinutes, " min read", " "])])])]), (!this.settings.hideDescirptionAndButton || this.settings.differentFirstImage && 0 == this.index) && t("div", {
                            class: "kmb-site-blog-post-item-info-description"
                        }, [this.post.shortDescription && this.isEnabledElement(w.m.PostSummary) && t("div", {
                            class: "kmb-blog-post-item-short-description kmb-widget-text-body3 kmb-widget-el-group",
                            domProps: {
                                innerHTML: this.post.shortDescription
                            }
                        }), t("div", {
                            class: "kmb-site-blog-post-item-bottom-info"
                        }, [t("div", {
                            class: "kmb-widget-row justify-between"
                        }, [t("div", {
                            class: "kmb-widget-col kmb-widget-el-group"
                        }, [t(k.g, {
                            attrs: {
                                value: new f.p({
                                    lczText: new f.L({
                                        lczValue: (null === (r = this.post.button.lczText) || void 0 === r ? void 0 : r.lczValue) || "read more"
                                    }),
                                    page: new f.r({
                                        id: this.post.id,
                                        slug: this.post.slug || null,
                                        linkType: w.ec.Blog
                                    })
                                })
                            },
                            class: "kmb-widget-btn-link"
                        })]), this.isEnabledElement(w.m.LikesAndViews) && t("div", {
                            class: "kmb-widget-col kmb-widget-el-group kmb-blog-post-likes-and-views-col"
                        }, [t("div", {
                            class: "kmb-widget-row justify-end"
                        }, [t("div", {
                            class: "kmb-widget-col kmb-blog-post-likes-col cursor-pointer"
                        }, [t(k.G, {
                            attrs: {
                                post: this.post,
                                isEnabled: !0
                            }
                        })]), t("div", {
                            class: "kmb-widget-col kmb-blog-post-views-col"
                        }, [t("span", {
                            class: "kmb-blog-post-views kmb-widget-text-body2"
                        }, [t("i", {
                            class: "kmb-site-icon-show mr-1"
                        }), this.post.viewedCount || 0])])])])])])])])])
                    }
                }),
                v = r(20),
                O = (r(35), r(18), r(59), r(190)),
                j = r(550),
                S = o.componentFactoryOf().create({
                    name: "SidebarWidget",
                    props: {
                        widget: l.a.ofType().required,
                        activeKey: l.a.ofType().default(0),
                        isEnabledEditor: l.a.ofType().default(!1)
                    },
                    computed: {
                        widgetItems: function() {
                            return Object(O.b)(this.widget).list || []
                        },
                        widgetTypeClassName: function() {
                            return "kmb-blog-sidebar-widget-type-".concat(this.widget.type)
                        }
                    },
                    methods: {
                        getListItemUrl: function(t, e) {
                            var r = "/blog";
                            if (e == w.p.TopPosts || e == w.p.RecentPosts) {
                                var o = t,
                                    n = o.id,
                                    l = o.slug,
                                    d = o.pageTemplateType;
                                r = Object(h.s)(this, {
                                    id: n,
                                    slug: l
                                }, d || w.ec.Blog, this.$config.isEditor)
                            } else {
                                var c = Object(h.w)(w.ec.Blog),
                                    f = Object(m.A)(w.p[e]).toLowerCase().replace(" ", "-"),
                                    k = e == w.p.Archives ? t : t.slug || t.id;
                                r = "".concat(c, "/").concat(f, "/").concat(k)
                            }
                            return r
                        },
                        renderListItem: function(t, e) {
                            if (!Object(m.O)(e)) {
                                var r = this.widget.type || w.p.Categories,
                                    o = this.getListItemUrl(e, r);
                                if (r == w.p.TopPosts) {
                                    var n = e;
                                    return t("li", {
                                        class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-post-item",
                                        key: n.id
                                    }, [t("nuxt-link", {
                                        attrs: {
                                            to: o
                                        },
                                        class: "kmb-blog-sidebar-widget-content-list-post-item-link block"
                                    }, [t("span", {
                                        class: "kmb-md-widget-row kmb-flex-nowrap"
                                    }, [t("span", {
                                        class: "kmb-md-widget-col kmb-blog-sidebar-post-thumbnail-col"
                                    }, [t("div", {
                                        class: "kmb-page-sidebar-item-thumbnail kmb-blog-sidebar-post-thumbnail"
                                    }, [t(k.w, {
                                        attrs: {
                                            value: n.coverImage,
                                            resize: {
                                                width: 90,
                                                height: 90
                                            }
                                        }
                                    })])]), t("span", {
                                        class: "kmb-md-widget-col"
                                    }, [n.mainCategory && t("span", {
                                        class: "kmb-blog-sidebar-post-main-category-name"
                                    }, [n.mainCategory.name]), t("h3", {
                                        attrs: {
                                            title: n.name
                                        },
                                        class: "kmb-blog-sidebar-post-name",
                                        domProps: {
                                            innerHTML: Object(m.lb)(n.name || Object(m.hb)(n.nameHtml), 50)
                                        }
                                    })])])])])
                                }
                                return r != w.p.Archives ? t("li", {
                                    class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item",
                                    key: e.id
                                }, [t("nuxt-link", {
                                    class: "kmb-blog-sidebar-widget-content-list-post-item-link kmb-blog-sidebar-widget-content-list-post-item-label",
                                    attrs: {
                                        to: o
                                    },
                                    domProps: {
                                        innerHTML: e.name ? e.name : "".concat(e.firstName, " ").concat(e.lastName)
                                    }
                                })]) : e ? t("li", {
                                    class: "kmb-page-sidebar-widget-content-list-item kmb-blog-sidebar-widget-content-list-item"
                                }, [t("nuxt-link", {
                                    class: "kmb-blog-sidebar-widget-content-list-post-item-link kmb-blog-sidebar-widget-content-list-post-item-label",
                                    attrs: {
                                        to: o
                                    }
                                }, [Object(m.s)(e, "MMMM YYYY")])]) : void 0
                            }
                        },
                        renderWidgetContent: function(t) {
                            var e, r, o = this;
                            if (this.widget.type == w.p.Subscribe) return t(j.c, {
                                attrs: {
                                    widget: this.widget
                                }
                            });
                            if (this.widget.type == w.p.AboutUs) return t("div", {
                                class: "kmb-blog-sidebar-about-us-widget-content"
                            }, [t("div", {
                                class: "kmb-blog-sidebar-about-us-widget-inner-content"
                            }, [t("div", {
                                class: "kmb-md-widget-row"
                            }, [t("div", {
                                class: "kmb-md-widget-col kmb-blog-sidebar-about-us-widget-image-col"
                            }, [t(k.w, {
                                attrs: {
                                    value: this.widget.aboutUs.image,
                                    resize: {
                                        width: 80,
                                        height: 80
                                    }
                                },
                                class: "kmb-widget-image-no-filter kmb-blog-sidebar-about-us-widget-image kmb-widget-el-group"
                            })])]), t("div", {
                                class: "kmb-md-widget-row"
                            }, [t("div", {
                                class: "kmb-md-widget-col"
                            }, [t("h4", {
                                class: "kmb-live-edit-rich-text kmb-site-widget-component kmb-blog-sidebar-about-us-widget-title kmb-widget-title-h4 kmb-widget-el-group",
                                domProps: {
                                    innerHTML: null === (e = this.widget.aboutUs.title.lczText) || void 0 === e ? void 0 : e.lczValue
                                }
                            })])]), t("div", {
                                class: "kmb-live-edit-rich-text kmb-site-widget-component kmb-blog-sidebar-about-us-widget-description kmb-widget-el-group kmb-site-secondary-font",
                                domProps: {
                                    innerHTML: null === (r = this.widget.aboutUs.description.lczText) || void 0 === r ? void 0 : r.lczValue
                                }
                            }), !Object(m.O)(this.widget.aboutUs.socialNetworks) && t("ul", {
                                class: "kmb-blog-sidebar-about-us-widget-social-network-list"
                            }, [Object.entries(this.widget.aboutUs.socialNetworks).map((function(e) {
                                var r = Object(v.a)(e, 2),
                                    o = r[0],
                                    n = r[1],
                                    l = w.Oc[o];
                                if (l) return t("li", [t("a", {
                                    attrs: {
                                        href: n || "/#",
                                        target: "_blank",
                                        title: Object(m.A)(l)
                                    },
                                    ref: "noreferrer"
                                }, [t("i", {
                                    class: c()(Object(h.n)(+o))
                                })])])
                            }))])])]);
                            var n = this.widget.key || this.widget.type;
                            return t(k.a, {
                                attrs: {
                                    activeKey: this.activeKey
                                },
                                on: {
                                    change: function() {
                                        return o.$emit("setActiveKey", n)
                                    }
                                }
                            }, [t(k.b, {
                                key: n,
                                attrs: {
                                    "data-item-key": n,
                                    "data-item-type": this.widget.type
                                },
                                class: "kmb-page-sidebar-widget-accordion-item kmb-blog-sidebar-widget-accordion-item"
                            }, [t("template", {
                                slot: "header"
                            }, [t(k.p, {
                                attrs: {
                                    value: this.widget.labelOverride,
                                    tag: "h3"
                                },
                                class: "kmb-widget-title-h3 kmb-blog-sidebar-widget-title"
                            })]), t("ul", {
                                class: "kmb-page-sidebar-widget-content-list kmb-blog-sidebar-widget-content-list"
                            }, [this.widgetItems && this.widgetItems.map((function(e) {
                                return o.renderListItem(t, e)
                            }))])])])
                        }
                    },
                    render: function(t) {
                        return t("div", {
                            class: c()("kmb-page-sidebar-widget kmb-blog-sidebar-widget", this.widgetTypeClassName),
                            attrs: {
                                "data-widget-type": this.widget.type
                            }
                        }, [this.renderWidgetContent(t)])
                    }
                })
        }
    }
]);