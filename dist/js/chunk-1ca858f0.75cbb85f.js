(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca858f0"],{"01a8":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-submenu",{attrs:{index:e.menu.path||e.uniqueId}},[n("template",{slot:"title"},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):n("i",{staticClass:"fa fa-folder-o"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])],1),e._l(e.menu.children,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2)},i=[],s=n("2ef0"),u=n("73eb"),l={name:"d2-layout-header-aside-menu-sub",components:{"d2-layout-header-aside-menu-item":u["a"]},props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(s["uniqueId"])("d2-menu-empty-")}}},o=l,d=n("2877"),c=Object(d["a"])(o,a,i,!1,null,null,null);c.options.__file="index.vue";t["a"]=c.exports},"73eb":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu-item",{attrs:{index:e.menu.path||e.uniqueId}},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):n("i",{staticClass:"fa fa-file-o"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title||"未命名菜单"))])],1)},i=[],s=n("2ef0"),u={name:"d2-layout-header-aside-menu-item",props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(s["uniqueId"])("d2-menu-empty-")}}},l=u,o=n("2877"),d=Object(o["a"])(l,a,i,!1,null,null,null);d.options.__file="index.vue";t["a"]=d.exports},b55f:function(e,t,n){"use strict";var a=n("c276");t["a"]={methods:{handleMenuSelect:function(e,t){/^d2-menu-empty-\d+$/.test(e)||void 0===e?this.$message.warning("临时菜单"):/^https:\/\/|http:\/\//.test(e)?a["a"].open(e):this.$router.push({path:e})}}}},f6d6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d2-layout-header-aside-menu-side"},[n("el-menu",{ref:"menu",attrs:{collapse:e.asideCollapse,"unique-opened":!0,"default-active":e.active},on:{select:e.handleMenuSelect}},[e._l(e.aside,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2),0!==e.aside.length||e.asideCollapse?e._e():n("div",{staticClass:"d2-layout-header-aside-menu-empty",attrs:{flex:"dir:top main:center cross:center"}},[n("d2-icon",{attrs:{name:"inbox"}}),n("span",[e._v("没有侧栏菜单")])],1)],1)},i=[],s=n("c93e"),u=n("2f62"),l=n("b55f"),o=n("73eb"),d=n("01a8"),c=n("1fba"),r={name:"d2-layout-header-aside-menu-side",mixins:[l["a"]],components:{"d2-layout-header-aside-menu-item":o["a"],"d2-layout-header-aside-menu-sub":d["a"]},data:function(){return{active:"",asideHeight:300,BS:null}},computed:Object(s["a"])({},Object(u["e"])("d2admin/menu",["aside","asideCollapse"])),watch:{asideCollapse:function(e){var t=this;this.scrollDestroy(),setTimeout(function(){t.scrollInit()},500)},"$route.matched":{handler:function(e){var t=this;this.active=e[e.length-1].path,this.$nextTick(function(){t.aside.length>0&&(t.$refs.menu.activeIndex=t.active)})},immediate:!0}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{scrollInit:function(){this.BS=new c["a"](this.$el,{mouseWheel:!0})},scrollDestroy:function(){try{this.BS.destroy()}catch(e){delete this.BS,this.BS=null}}}},m=r,f=n("2877"),h=Object(f["a"])(m,a,i,!1,null,null,null);h.options.__file="index.vue";t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-1ca858f0.75cbb85f.js.map