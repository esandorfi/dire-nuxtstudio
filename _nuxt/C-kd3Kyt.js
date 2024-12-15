import{c as m,e as d,f as y,L as c,am as N,aN as F,as as v,aO as C,aE as V,aP as p,aQ as H,an as P,au as w,aR as U,aS as E,ao as q,ad as M,ap as Z,F as K,X as W,Y as x,h,i as O,aT as Q,aU as X,n as S,aq as Y,U as g,ar as L,t as _,al as J}from"./DKaQhpxG.js";import{s as A}from"./B7TlFx5b.js";import{s as B}from"./BSi5E1ws.js";var T={name:"BarsIcon",extends:A};function $(n,e,t,i,o,r){return m(),d("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[y("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"},null,-1)]),16)}T.render=$;var ee=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: `).concat(t("menubar.submenu.mobile.indent"),`;
    padding-inline-end: 0;
}
`)},te={submenu:function(e){var t=e.instance,i=e.processedItem;return{display:t.isItemActive(i)?"flex":"none"}}},ne={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,i=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(i),"p-focus":t.isItemFocused(i),"p-disabled":t.isItemDisabled(i)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ie=N.extend({name:"menubar",theme:ee,classes:ne,inlineStyles:te}),R={name:"AngleDownIcon",extends:A};function re(n,e,t,i,o,r){return m(),d("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[y("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1)]),16)}R.render=re;var j={name:"AngleRightIcon",extends:A};function ae(n,e,t,i,o,r){return m(),d("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[y("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1)]),16)}j.render=ae;var oe={name:"BaseMenubar",extends:B,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ie,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},G={name:"MenubarSub",hostName:"Menubar",extends:B,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,i){return e&&e.item?V(e.item[t],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,i){return this.ptm(i,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return v(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,t){return{action:c({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,t,"itemLink")),icon:c({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:c({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&e.getItemProp(t,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length}},components:{AngleRightIcon:j,AngleDownIcon:R},directives:{ripple:q}},se=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ue=["onClick","onMouseenter","onMousemove"],me=["href","target"],ce=["id"],le=["id"];function de(n,e,t,i,o,r){var u=M("MenubarSub",!0),b=Z("ripple");return m(),d("ul",c({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(m(!0),d(K,null,W(t.items,function(a,s){return m(),d(K,{key:r.getItemKey(a)},[r.isItemVisible(a)&&!r.getItemProp(a,"separator")?(m(),d("li",c({key:0,id:r.getItemId(a),style:r.getItemProp(a,"style"),class:[n.cx("item",{processedItem:a}),r.getItemProp(a,"class")],role:"menuitem","aria-label":r.getItemLabel(a),"aria-disabled":r.isItemDisabled(a)||void 0,"aria-expanded":r.isItemGroup(a)?r.isItemActive(a):void 0,"aria-haspopup":r.isItemGroup(a)&&!r.getItemProp(a,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":r.getAriaSetSize,"aria-posinset":r.getAriaPosInset(s),ref_for:!0},r.getPTOptions(a,s,"item"),{"data-p-active":r.isItemActive(a),"data-p-focused":r.isItemFocused(a),"data-p-disabled":r.isItemDisabled(a)}),[y("div",c({class:n.cx("itemContent"),onClick:function(f){return r.onItemClick(f,a)},onMouseenter:function(f){return r.onItemMouseEnter(f,a)},onMousemove:function(f){return r.onItemMouseMove(f,a)},ref_for:!0},r.getPTOptions(a,s,"itemContent")),[t.templates.item?(m(),g(L(t.templates.item),{key:1,item:a.item,root:t.root,hasSubmenu:r.getItemProp(a,"items"),label:r.getItemLabel(a),props:r.getMenuItemProps(a,s)},null,8,["item","root","hasSubmenu","label","props"])):Y((m(),d("a",c({key:0,href:r.getItemProp(a,"url"),class:n.cx("itemLink"),target:r.getItemProp(a,"target"),tabindex:"-1",ref_for:!0},r.getPTOptions(a,s,"itemLink")),[t.templates.itemicon?(m(),g(L(t.templates.itemicon),{key:0,item:a.item,class:S(n.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(a,"icon")?(m(),d("span",c({key:1,class:[n.cx("itemIcon"),r.getItemProp(a,"icon")],ref_for:!0},r.getPTOptions(a,s,"itemIcon")),null,16)):h("",!0),y("span",c({id:r.getItemLabelId(a),class:n.cx("itemLabel"),ref_for:!0},r.getPTOptions(a,s,"itemLabel")),_(r.getItemLabel(a)),17,ce),r.getItemProp(a,"items")?(m(),d(K,{key:2},[t.templates.submenuicon?(m(),g(L(t.templates.submenuicon),{key:0,root:t.root,active:r.isItemActive(a),class:S(n.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),g(L(t.root?"AngleDownIcon":"AngleRightIcon"),c({key:1,class:n.cx("submenuIcon"),ref_for:!0},r.getPTOptions(a,s,"submenuIcon")),null,16,["class"]))],64)):h("",!0)],16,me)),[[b]])],16,ue),r.isItemVisible(a)&&r.isItemGroup(a)?(m(),g(u,{key:0,id:r.getItemId(a)+"_list",menuId:t.menuId,role:"menu",style:J(n.sx("submenu",!0,{processedItem:a})),focusedItemId:t.focusedItemId,items:a.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":r.getItemLabelId(a),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(l){return n.$emit("item-click",l)}),onItemMouseenter:e[1]||(e[1]=function(l){return n.$emit("item-mouseenter",l)}),onItemMousemove:e[2]||(e[2]=function(l){return n.$emit("item-mousemove",l)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):h("",!0)],16,se)):h("",!0),r.isItemVisible(a)&&r.getItemProp(a,"separator")?(m(),d("li",c({key:1,id:r.getItemId(a),class:[n.cx("separator"),r.getItemProp(a,"class")],style:r.getItemProp(a,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,le)):h("",!0)],64)}),128))],16)}G.render=de;var be={name:"Menubar",extends:oe,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItemPath:function(e){v(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&C.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?V(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return v(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&v(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,C.clear(this.menubar),this.hide()):(this.mobileActive=!0,C.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){p(this.menubar)},hide:function(e,t){var i=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){p(i.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&p(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&H(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var i=e.processedItem,o=e.isFocus;if(!P(i)){var r=i.index,u=i.key,b=i.level,a=i.parentKey,s=i.items,l=v(s),f=this.activeItemPath.filter(function(I){return I.parentKey!==a&&I.parentKey!==u});l&&f.push(i),this.focusedItemInfo={index:r,level:b,parentKey:a},l&&(this.dirty=!0),o&&p(this.menubar),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=f)}},onItemClick:function(e){var t=e.originalEvent,i=e.processedItem,o=this.isProccessedItemGroup(i),r=P(i.parent),u=this.isSelected(i);if(u){var b=i.index,a=i.key,s=i.level,l=i.parentKey;this.activeItemPath=this.activeItemPath.filter(function(I){return a!==I.key&&a.startsWith(I.key)}),this.focusedItemInfo={index:b,level:s,parentKey:l},this.dirty=!r,p(this.menubar)}else if(o)this.onItemChange(e);else{var f=r?i:this.activeItemPath.find(function(I){return I.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,f?f.index:-1),this.mobileActive=!1,p(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],i=t?P(t.parent):null;if(i){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r)}e.preventDefault()},onArrowUpKey:function(e){var t=this,i=this.visibleItems[this.focusedItemInfo.index],o=P(i.parent);if(o){var r=this.isProccessedItemGroup(i);if(r){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var b=this.activeItemPath.find(function(s){return s.key===i.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:b?b.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,i=this.visibleItems[this.focusedItemInfo.index],o=i?this.activeItemPath.find(function(u){return u.key===i.parentKey}):null;if(o)this.onItemChange({originalEvent:e,processedItem:o}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],i=t?this.activeItemPath.find(function(u){return u.key===t.parentKey}):null;if(i){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=w(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=t&&w(t,'a[data-pc-section="itemlink"]');i?i.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(o);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(t);!i&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var i=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));i&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){U()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return E(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return i>-1?i+e+1:e},findPrevItemIndex:function(e){var t=this,i=e>0?E(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return i>-1?i:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var i=this;this.searchValue=(this.searchValue||"")+t;var o=-1,r=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(u){return i.isItemMatched(u)}),o!==-1&&(r=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,i=w(this.menubar,'li[id="'.concat(t,'"]'));i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(b,a){var s=(r!==""?r+"_":"")+a,l={item:b,index:a,level:i,key:s,parent:o,parentKey:r};l.items=t.createProcessedItems(b.items,i+1,l,s),u.push(l)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(i){return i.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(v(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:G,BarsIcon:T}};function k(n){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(n)}function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(i){fe(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function fe(n,e,t){return(e=he(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function he(n){var e=Ie(n,"string");return k(e)=="symbol"?e:e+""}function Ie(n,e){if(k(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(k(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var pe=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function ve(n,e,t,i,o,r){var u=M("BarsIcon"),b=M("MenubarSub");return m(),d("div",c({ref:r.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(m(),d("div",c({key:0,class:n.cx("start")},n.ptm("start")),[x(n.$slots,"start")],16)):h("",!0),x(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:S(n.cx("button")),toggleCallback:function(s){return r.menuButtonClick(s)}},function(){var a;return[n.model&&n.model.length>0?(m(),d("a",c({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(a=n.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(s){return r.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return r.menuButtonKeydown(s)})},z(z({},n.buttonProps),n.ptm("button"))),[x(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[O(u,Q(X(n.ptm("buttonicon"))),null,16)]})],16,pe)):h("",!0)]}),O(b,{ref:r.menubarRef,id:o.id+"_list",role:"menubar",items:r.processedItems,templates:n.$slots,root:!0,mobileActive:o.mobileActive,tabindex:"0","aria-activedescendant":o.focused?r.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?r.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(m(),d("div",c({key:1,class:n.cx("end")},n.ptm("end")),[x(n.$slots,"end")],16)):h("",!0)],16)}be.render=ve;export{be as default};
