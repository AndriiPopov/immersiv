(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[2],{101:function(e,t,n){"use strict";var a=n(30),r=n(12),c=n(13),i=n(15),o=n.n(i),s=n(31),l=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(){var e=Object(a.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/auth/login",{email:t,password:n});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"googleLogin",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/auth/google",{token:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){localStorage.removeItem("user"),localStorage.removeItem("token"),localStorage.removeItem("expiresAt")}},{key:"forgotPassword",value:function(e){return s.a.post("/auth/forgot-password",{email:e})}},{key:"checkToken",value:function(e,t){return s.a.post("auth/check-token",{token:e,email:t})}},{key:"resetPassword",value:function(e,t,n,a){return s.a.post("auth/reset-password",{token:e,email:t,password:n,password2:a})}},{key:"register",value:function(e,t,n){return s.a.post("auth/signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){return s.a.get("/users/profile")}}]),e}();t.a=new l},183:function(e,t,n){"use strict";var a=n(12),r=n(13),c=n(31),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,[{key:"getConstant",value:function(){return c.a.get("/constant")}},{key:"saveConstant",value:function(e){return c.a.put("/constant",e)}}]),e}();t.a=new i},31:function(e,t,n){"use strict";var a=n(228),r=n.n(a).a.create({baseURL:"https://tour.immersiv.com.au/api",withCredentials:!0});r.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("token"));return t&&(e.headers["auth-token"]=t),e}),(function(e){return Promise.reject(e)})),t.a=r},411:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(4),c=n(30),i=n(15),o=n.n(i),s=n(0),l=n(31),u=n(238),d=Object(u.a)(),j=function(e){var t=e.children,n=O(),a=n.setIsLoggedIn,r=n.setUserData,i=n.setAuthData,u=n.isLoggedIn;return Object(s.useMemo)((function(){u&&l.a.interceptors.response.use((function(e){return e}),function(){var e=Object(c.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,401!==t.response.status||"/auth/refresh-token"!==n.url){e.next=3;break}return e.abrupt("return",new Promise((function(e,n){a(!1),i(null),r(null),d.push("/login"),n(t)})));case 3:if(401!==t.response.status||n._retry){e.next=20;break}return e.prev=4,n._retry=!0,e.next=8,l.a.post("/auth/refresh-token");case 8:return c=e.sent,localStorage.setItem("token",JSON.stringify(c.data.token)),e.abrupt("return",Object(l.a)(n));case 13:e.prev=13,e.t0=e.catch(4),localStorage.removeItem("token"),a(!1),i(null),r(null),d.push("/login");case 20:return e.abrupt("return",Promise.reject(t));case 21:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}())}),[u,i,a,r]),t},p=n(101),b=n(229),x=n(6),f=Object(s.createContext)(),h=function(e){var t=e.children,n=Object(s.useState)({token:""}),c=Object(r.a)(n,2),i=c[0],o=c[1],l=Object(s.useState)(!1),u=Object(r.a)(l,2),d=u[0],h=u[1];Object(s.useEffect)((function(){localStorage.getItem("token")&&(h(!0),o((function(){return O(JSON.parse(localStorage.getItem("token")).token)})))}),[]);var O=function(e){if(e){var t=Object(b.a)(e);return Object(a.a)(Object(a.a)({},t),{},{token:e})}return{token:""}};return Object(x.jsx)(f.Provider,{value:{setUserState:function(e){return function(e){var t=e.token;h(!0),o((function(){return O(t)})),localStorage.setItem("token",JSON.stringify(t))}(e)},logout:function(){o(null),h(!1),p.a.logout()},isLoggedIn:d,setIsLoggedIn:h,authData:i,setAuthData:o},children:Object(x.jsx)(j,{children:t})})},O=function(){var e=Object(s.useContext)(f);if(void 0===e)throw new Error("useUser must be used within UserProvider");return e},m=n(43),v=n.n(m),g=n(143),y=n(42),k=n(413),I=n(417),w=n(55),S=n(419),P=n(418),C=n(237),E=n(421),A=n(158),N=n(80),D=n(414),F=n(53),L=n(422),B=n(27),W=n(47),T=n(12),M=n(13),R=new(function(){function e(){Object(T.a)(this,e)}return Object(M.a)(e,[{key:"getAdmin",value:function(){return l.a.get("/admins")}},{key:"createAdmin",value:function(e){return l.a.post("/admins",e)}},{key:"deleteAdmin",value:function(e){return l.a.delete("/admins/".concat(e))}}]),e}()),_=function(e){var t=Object(s.useRef)(null),n=Object(s.useState)(null),a=Object(r.a)(n,2),i=a[0],l=a[1],u=Object(s.useState)(null),d=Object(r.a)(u,2),j=d[0],p=d[1],b=O(),f=b.isLoggedIn,h=b.authData,m=b.logout,v=Object(B.f)();Object(s.useEffect)((function(){R.getAdmin().then((function(e){l(e.data)}))}),[]),Object(s.useEffect)((function(){return f?null!==h&&void 0!==h&&h.super?void 0:null!==h&&void 0!==h&&h.projectId?(v("/p-admin/".concat(h.projectId)),null):(m(),v("/login"),null):(m(),v("/login"),null)}),[f,null===h||void 0===h?void 0:h.super,null===h||void 0===h?void 0:h.projectId]);var g=function(){var e=Object(c.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.createAdmin(n);case 2:(a=e.sent).data&&(W.b.success("Saved"),l(a.data),p(null),t.current&&t.current.resetFields());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.deleteAdmin(t);case 2:(n=e.sent).data&&l(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(y.a,{loading:!i,children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return v("/admin")},title:"Admins",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsxs)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:[Object(x.jsx)(w.a,{onClick:function(){return p({})},style:{margin:"16px"},children:"Add admin"}),Object(x.jsx)(S.a,{visible:!!j,onCancel:function(){return p(null)},footer:null,children:Object(x.jsxs)(P.a,{name:"normal_login",onFinish:g,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},ref:t,children:[Object(x.jsx)(P.a.Item,{name:"email",rules:[{required:!0,message:"Please add name!",type:"email"}],children:Object(x.jsx)(C.a,{placeholder:"Email"})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})}),i&&Object(x.jsx)(E.b,{itemLayout:"horizontal",dataSource:i.sort((function(e,t){return e.name>t.name?1:-1})),renderItem:function(e){return Object(x.jsx)(E.b.Item,{actions:[Object(x.jsx)(A.a,{overlay:Object(x.jsx)(N.a,{children:Object(x.jsx)(D.a,{title:"Are you sure to delete this admin?",onConfirm:function(){return T(e.email)},okText:"Yes",cancelText:"No",children:Object(x.jsx)(N.a.Item,{danger:!0,children:"Delete"},"3")})}),trigger:["click"],children:Object(x.jsx)(L.a,{style:{fontSize:"30px"}})})],style:{borderBottom:"3px solid #ccc",paddingLeft:"16px"},children:Object(x.jsx)(E.b.Item.Meta,{title:e.email,description:e.locked?"Locked":"Not locked"})})}})]})]})})},q=n(234),U=new(function(){function e(){Object(T.a)(this,e)}return Object(M.a)(e,[{key:"getGA",value:function(e,t){return l.a.post("/ga/".concat(e),t)}}]),e}()),z=function(e){var t=Object(B.g)().id,n=O(),a=n.logout,c=n.isLoggedIn,i=n.authData,o=Object(B.f)(),l=Object(s.useState)(null),u=Object(r.a)(l,2),d=u[0],j=u[1];return Object(s.useEffect)((function(){if(!c||(null===i||void 0===i||!i.super)&&t.toString()!==(null===i||void 0===i?void 0:i.projectId.toString()))return a(),o("/login"),null}),[c,null===i||void 0===i?void 0:i.super,null===i||void 0===i?void 0:i.projectId]),Object(s.useEffect)((function(){U.getGA(t,{dateRanges:[{startDate:"2020-03-31",endDate:"today"}],dimensions:[{name:"city"}],metrics:[{name:"activeUsers"}]}).then((function(e){console.log(e.data),j(e.data)}))}),[]),Object(x.jsx)(y.a,{children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return o("/p-admin/".concat(t))},title:"Analytics",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:d&&Object(x.jsx)(q.a,{chartType:"LineChart",data:d})})]})})},V=n(183),J=function(e){var t=O(),n=t.isLoggedIn,a=t.authData,i=t.logout,l=Object(s.useState)(null),u=Object(r.a)(l,2),d=u[0],j=u[1],p=Object(s.useRef)(null),b=Object(B.f)();Object(s.useEffect)((function(){V.a.getConstant().then((function(e){e.data?(j(e.data),p.current&&p.current.setFieldsValue(e.data)):j({})})).catch((function(){j({})}))}),[]),Object(s.useEffect)((function(){return n?null!==a&&void 0!==a&&a.super?void 0:null!==a&&void 0!==a&&a.projectId?(b("/p-admin/".concat(a.projectId)),null):(i(),b("/login"),null):(i(),b("/login"),null)}),[n,null===a||void 0===a?void 0:a.super,null===a||void 0===a?void 0:a.projectId]);var f=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.saveConstant(t);case 2:(n=e.sent).data&&(j(n.data),W.b.success("Saved"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(y.a,{children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return b("/admin")},title:"Constants",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:Object(x.jsxs)(P.a,{ref:p,name:"normal_login",onFinish:f,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},initialValues:d,children:[Object(x.jsx)(P.a.Item,{name:"email",children:Object(x.jsx)(C.a,{placeholder:"Email"})}),Object(x.jsx)(P.a.Item,{name:"phone",children:Object(x.jsx)(C.a,{placeholder:"Phone"})}),Object(x.jsx)(P.a.Item,{name:"call",children:Object(x.jsx)(C.a,{placeholder:"Phone in international format"})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)(w.a,{onClick:function(){p.current&&p.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})})]})})},K=n(57),G=n(114),Y=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please set name!"}],children:Object(x.jsx)(C.a,{placeholder:"Name"})}),Object(x.jsx)(P.a.Item,{name:"url",label:"Url",rules:[{required:!0,message:"Please add url!"}],children:Object(x.jsx)(C.a,{placeholder:"Url"})}),Object(x.jsx)(P.a.Item,{name:"projectId",label:"Project id",rules:[{required:!0,message:"Please add project id!"}],children:Object(x.jsx)(C.a,{placeholder:"Project id"})}),Object(x.jsx)(P.a.Item,{name:"modelId",label:"Model id",rules:[{required:!0,message:"Please add model id!"}],children:Object(x.jsx)(C.a,{placeholder:"Model id"})}),Object(x.jsx)(P.a.Item,{name:"adminEmail",label:"Client login",children:Object(x.jsx)(C.a,{placeholder:"Admin email"})}),Object(x.jsx)(P.a.Item,{name:"adminPassword",label:"Client password",rules:[{min:6,message:"Must have length at least 6!"}],children:Object(x.jsx)(C.a,{placeholder:"Admin password"})}),Object(x.jsx)(P.a.Item,{name:"analytic",label:"Analytics property",children:Object(x.jsx)(C.a,{placeholder:"Google analytics property id"})}),Object(x.jsx)(P.a.Item,{name:"published",valuePropName:"checked",children:Object(x.jsx)(G.a,{children:"Published"})}),Object(x.jsx)(P.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})},H=function(e){var t=O(),n=t.isLoggedIn,a=t.authData,r=t.logout,i=Object(s.useRef)(null),l=Object(B.f)();Object(s.useEffect)((function(){return n?null!==a&&void 0!==a&&a.super?void 0:null!==a&&void 0!==a&&a.projectId?(l("/p-admin/".concat(a.projectId)),null):(r(),l("/login"),null):(r(),l("/login"),null)}),[n,null===a||void 0===a?void 0:a.super,null===a||void 0===a?void 0:a.projectId]);var u=function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.createProject(t);case 2:e.sent.data&&(W.b.success("Saved"),l("/admin"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(y.a,{children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return l("/admin")},title:"Create project",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:Object(x.jsxs)(P.a,{ref:i,name:"normal_login",onFinish:u,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},labelCol:{span:8},wrapperCol:{span:16},children:[Object(x.jsx)(Y,{}),Object(x.jsx)(P.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(w.a,{onClick:function(){i.current&&i.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})})]})})},Q=n(235),X=n.n(Q),Z=n(423),$=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(x.jsx)("div",{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{onClick:function(){return a(!n)},children:"Forgot password?"}),Object(x.jsx)(X.a,{title:"Forgot Password",visible:n,footer:[],onCancel:function(){return a(!1)},children:Object(x.jsxs)(P.a,{name:"normal_login",onFinish:function(e){p.a.forgotPassword(e.email).then((function(e){"OK"===e.data.status&&(W.b.success("Email has been sent successfully."),a(!1))})).catch((function(e){}))},style:{padding:"100px 16px",maxWidth:"500px",margin:"auto"},children:[Object(x.jsx)(P.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(x.jsx)(C.a,{prefix:Object(x.jsx)(Z.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Reset password"})})]})})]})})},ee=n(416),te=n(424),ne=function(){var e=O(),t=e.isLoggedIn,n=e.setUserState,a=e.authData,i=Object(s.useState)(!1),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(s.useState)(!1),b=Object(r.a)(j,2),f=b[0],h=b[1],m=Object(B.f)(),v=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,r=t.password,e.prev=1,d(!0),e.next=5,p.a.login(a,r);case 5:c=e.sent,W.b.success("Login successful \ud83d\udd13"),setTimeout((function(){n(c),h(!0),d(!1)}),1500),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),d(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return(t||f)&&(null!==a&&void 0!==a&&a.super||null!==a&&void 0!==a&&a.projectId)&&m("/admin"),Object(x.jsx)(y.a,{title:"Login",loading:u,children:Object(x.jsxs)(P.a,{name:"normal_login",onFinish:v,style:{padding:"100px 16px",maxWidth:"500px",margin:"auto"},children:[Object(x.jsx)(ee.a.Title,{style:{textAlign:"center",marginBottom:"50px"},children:"Manage IMMERSIVE"}),Object(x.jsx)(P.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(x.jsx)(C.a,{prefix:Object(x.jsx)(Z.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(x.jsx)(P.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(x.jsx)(C.a.Password,{prefix:Object(x.jsx)(te.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)("a",{children:Object(x.jsx)($,{})})}),Object(x.jsx)(P.a.Item,{children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Log in"})})]})})},ae=function(e){var t=Object(s.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],l=O(),u=l.isLoggedIn,d=l.authData,j=l.logout,p=Object(s.useRef)(null),b=Object(B.g)().id;Object(s.useEffect)((function(){K.a.getProject(b).then((function(e){i(e.data)}))}),[b]);var f=Object(B.f)();Object(s.useEffect)((function(){return u?null!==d&&void 0!==d&&d.super?void 0:null!==d&&void 0!==d&&d.projectId?(f("/p-admin/".concat(d.projectId)),null):(j(),f("/login"),null):(j(),f("/login"),null)}),[u,null===d||void 0===d?void 0:d.super,null===d||void 0===d?void 0:d.projectId]);var h=function(){var e=Object(c.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.saveProject(a.id,t);case 2:e.sent.data&&W.b.success("Saved");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(y.a,{loading:!a,children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return f("/admin")},title:"Project - ".concat(null===a||void 0===a?void 0:a.name),style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:a&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(ee.a.Title,{children:["Project id: ",a.id]}),Object(x.jsx)(w.a,{onClick:function(){return f("/p-admin/".concat(b))},style:{margin:"16px"},children:"See client admin panel"}),Object(x.jsx)(w.a,{onClick:function(){return f("/admin/projects/".concat(a.id,"/properties"))},style:{margin:"16px"},children:"Manage properties"}),Object(x.jsxs)(P.a,{ref:p,name:"normal_login",onFinish:h,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},initialValues:a,labelCol:{span:8},wrapperCol:{span:16},children:[Object(x.jsx)(Y,{}),Object(x.jsx)(P.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(w.a,{onClick:function(){p.current&&p.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})]})})]})})},re=n(420),ce=n(425),ie=n(426),oe=n(427),se=n(428),le=function(e){var t=Object(s.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],l=O(),u=l.logout,d=l.isLoggedIn,j=l.authData,p=Object(B.f)(),b=Object(s.useState)(!1),f=Object(r.a)(b,2),h=f[0],m=f[1];Object(s.useEffect)((function(){K.a.getProject().then((function(e){i(e.data)}))}),[]),Object(s.useEffect)((function(){return d?null!==j&&void 0!==j&&j.super?void 0:null!==j&&void 0!==j&&j.projectId?(p("/p-admin/".concat(j.projectId)),null):(u(),p("/login"),null):(u(),p("/login"),null)}),[d,null===j||void 0===j?void 0:j.super,null===j||void 0===j?void 0:j.projectId]);var v=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.deleteProject(t);case 2:(n=e.sent).data&&i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.saveProject(t,{featured:!0});case 2:(n=e.sent).data&&i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(y.a,{loading:!a,children:[Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return m(!0)},backIcon:Object(x.jsx)(ce.a,{}),title:"Projects",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsxs)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:[Object(x.jsx)(w.a,{onClick:function(){return p("/admin/projects/create")},style:{margin:"16px"},children:"Add project"}),a&&Object(x.jsx)(E.b,{itemLayout:"horizontal",dataSource:a.sort((function(e,t){return e.url>t.url?1:-1})),renderItem:function(e){return Object(x.jsx)(E.b.Item,{actions:[Object(x.jsx)(A.a,{overlay:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(N.a.Item,{onClick:function(){return g(e.id)},children:"Set as featured"},"1"),Object(x.jsx)(N.a.Divider,{}),Object(x.jsx)(D.a,{title:"Are you sure to delete this project?",onConfirm:function(){return v(e.id)},okText:"Yes",cancelText:"No",children:Object(x.jsx)(N.a.Item,{danger:!0,children:"Delete"},"3")})]}),trigger:["click"],children:Object(x.jsx)(L.a,{style:{fontSize:"30px"}})})],children:Object(x.jsx)(E.b.Item.Meta,{avatar:e.featured?Object(x.jsx)(ie.a,{style:{fontSize:"24px"}}):e.published?Object(x.jsx)(oe.a,{style:{fontSize:"24px"}}):Object(x.jsx)(se.a,{style:{fontSize:"24px"}}),title:e.name,description:e.url,onClick:function(){p("/admin/projects/".concat(e.id))}})})}})]})]}),Object(x.jsx)(re.a,{title:"Menu",placement:"left",onClose:function(){return m(!1)},visible:h,children:Object(x.jsxs)(N.a,{mode:"inline",style:{width:"100%"},onClick:function(e){e.item;var t=e.key;switch(m(!1),t){case"logout":u();break;case"info":p("/admin/contant");break;case"admins":p("/admin/admins");break;default:return}},activeKey:"projects",selectedKeys:["projects"],children:[Object(x.jsx)(N.a.Item,{children:"Projects"},"projects"),Object(x.jsx)(N.a.Item,{children:"Constant"},"info"),Object(x.jsx)(N.a.Item,{children:"Admins"},"admins"),Object(x.jsx)(N.a.Item,{children:"Logout"},"logout")]})})]})},ue=n(126),de=new(function(){function e(){Object(T.a)(this,e)}return Object(M.a)(e,[{key:"getProperty",value:function(e,t){return l.a.get("/properties/".concat(e,"/").concat(t?"/"+t:""))}},{key:"saveProperty",value:function(e,t,n){return l.a.put("/properties/".concat(e,"/").concat(t),n)}},{key:"createProperty",value:function(e,t){return l.a.post("/properties/".concat(e),t)}},{key:"deleteProperty",value:function(e,t){return l.a.delete("/properties/".concat(e,"/").concat(t))}},{key:"saveStatus",value:function(e,t,n){return l.a.put("/properties/".concat(e,"/status/").concat(t),n)}}]),e}()),je=n(415),pe=function(e){var t=e.properties,n=e.project,a=e.setProperties,r=e.admin,i=e.setEditModalOpen,s=e.transferOrientationToString,l=ue.a.Option,u=function(){var e=Object(c.a)(o.a.mark((function e(t,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.saveStatus(n.id,r,{Availability:t});case 2:(c=e.sent).data&&(W.b.success("Saved"),a(c.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.deleteProperty(n.id,t);case 2:(r=e.sent).data&&a(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=[{title:"Name",dataIndex:"Name",key:"name",sorter:function(e,t){return e.Name>t.Name?1:-1},sortDirections:["descend","ascend"]},{title:"Availability",dataIndex:"Availability",key:"availability",render:function(e,t){return Object(x.jsxs)(ue.a,{value:e,onChange:function(e){return u(e,t.id)},style:{width:"100%"},children:[Object(x.jsx)(l,{value:"available",children:"Available"}),Object(x.jsx)(l,{value:"reserved",children:"Reserved"}),Object(x.jsx)(l,{value:"sold",children:"Sold"})]})},sorter:function(e,t){return e.Availability>t.Availability?1:-1},sortDirections:["descend","ascend"],onFilter:function(e,t){return 0===t.Availability.indexOf(e)}},{title:"Surface",dataIndex:"Surface",key:"surface",sorter:function(e,t){return e.Surface-t.Surface},sortDirections:["descend","ascend"]},{title:"Price",dataIndex:"Price",key:"price",sorter:function(e,t){return e.Price-t.Price},sortDirections:["descend","ascend"]},{title:"Bedrooms",dataIndex:"BedroomsCount",key:"bedrooms",sorter:function(e,t){return e.BedroomsCount-t.BedroomsCount},sortDirections:["descend","ascend"]},{title:"Bathrooms",dataIndex:"BathroomsCount",key:"bathrooms",sorter:function(e,t){return e.BathroomsCount-t.BathroomsCount},sortDirections:["descend","ascend"]},{title:"Orientation",dataIndex:"Orientation",key:"orientation",render:function(e,t){return s(t).Orientation},sorter:function(e,t){return s(e).Orientation>s(t).Orientation?1:-1},sortDirections:["descend","ascend"]},{title:"",render:function(e,t){return Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(x.jsx)(w.a,{type:"link",onClick:function(){return i(t)},children:"Edit"}),r&&Object(x.jsx)(D.a,{title:"Are you sure to delete this property?",onConfirm:function(){return d(t.id)},okText:"Yes",cancelText:"No",children:Object(x.jsx)(w.a,{type:"text",danger:!0,children:"Delete"})})]})}}];return Object(x.jsx)(je.a,{dataSource:t.sort((function(e,t){return e.Name>t.Name?1:-1})),columns:j})},be=function(e){var t=e.admin,n=e.id,i=e.project,l=e.properties,u=e.setProject,d=e.setProperties,j=Object(s.useRef)(null),p=Object(s.useState)(null),b=Object(r.a)(p,2),f=b[0],h=b[1],m=O(),v=m.isLoggedIn,g=m.authData,y=m.logout,k=Object(B.f)();Object(s.useEffect)((function(){de.getProperty(n).then((function(e){d(e.data)})),K.a.getProject(n).then((function(e){u(e.data)}))}),[]),Object(s.useEffect)((function(){return v?null!==g&&void 0!==g&&g.super?void 0:null!==g&&void 0!==g&&g.projectId?(k("/p-admin/".concat(g.projectId)),null):(y(),k("/login"),null):(y(),k("/login"),null)}),[v,null===g||void 0===g?void 0:g.super,null===g||void 0===g?void 0:g.projectId]),Object(s.useEffect)((function(){j.current&&f&&j.current.setFieldsValue(f.id?A(f):f)}),[null===f||void 0===f?void 0:f.id]);var I=function(){var e=Object(c.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===f||void 0===f||!f.id){e.next=6;break}return e.next=3,de.saveProperty(n,f.id,E(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,de.createProperty(n,E(t));case 8:e.t0=e.sent;case 9:(a=e.t0).data&&(W.b.success("Saved"),d(a.data),h(null),j.current&&j.current.resetFields());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t={};return-1!==e.Orientation.indexOf("N")?t.N=!0:-1!==e.Orientation.indexOf("S")&&(t.S=!0),-1!==e.Orientation.indexOf("E")?t.E=!0:-1!==e.Orientation.indexOf("W")&&(t.W=!0),Object(a.a)(Object(a.a)({},e),{},{Orientation:t})},A=function(e){var t="";return e.Orientation.N?t+="N":e.Orientation.S&&(t+="S"),e.Orientation.E?t+="E":e.Orientation.W&&(t+="W"),Object(a.a)(Object(a.a)({},e),{},{Orientation:t})},N=ue.a.Option;return Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)(w.a,{onClick:function(){return h({})},style:{margin:"16px"},children:"Add property"}),Object(x.jsx)(S.a,{visible:!!f,onCancel:function(){return h(null)},footer:null,children:Object(x.jsxs)(P.a,{name:"normal_login",onFinish:I,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},ref:j,labelCol:{span:8},wrapperCol:{span:16},children:[Object(x.jsx)(P.a.Item,{name:"Name",label:"Name",rules:[{required:!0,message:"Please add name!"}],children:Object(x.jsx)(C.a,{placeholder:"Name",readOnly:!t})}),Object(x.jsx)(P.a.Item,{name:"Surface",label:"Surface",children:Object(x.jsx)(C.a,{placeholder:"Surface",type:"number"})}),Object(x.jsx)(P.a.Item,{name:"Price",label:"Price",children:Object(x.jsx)(C.a,{placeholder:"Price",type:"number"})}),Object(x.jsx)(P.a.Item,{name:"BedroomsCount",label:"Bedrooms",children:Object(x.jsx)(C.a,{placeholder:"Bedrooms",type:"number"})}),Object(x.jsx)(P.a.Item,{name:"BathroomsCount",label:"Bathrooms",children:Object(x.jsx)(C.a,{placeholder:"Bathrooms",type:"number"})}),Object(x.jsx)(P.a.Item,{name:"Orientation",label:"Orientation",children:Object(x.jsxs)(ue.a,{children:[Object(x.jsx)(N,{value:"N",children:"North"}),Object(x.jsx)(N,{value:"NE",children:"North-East"}),Object(x.jsx)(N,{value:"E",children:"East"}),Object(x.jsx)(N,{value:"SE",children:"South-East"}),Object(x.jsx)(N,{value:"S",children:"South"}),Object(x.jsx)(N,{value:"SW",children:"South-West"}),Object(x.jsx)(N,{value:"W",children:"West"}),Object(x.jsx)(N,{value:"NW",children:"North-West"})]})}),Object(x.jsx)(P.a.Item,{name:"Availability",label:"Availability",rules:[{required:!0,message:"Please set the status!"}],children:Object(x.jsxs)(ue.a,{children:[Object(x.jsx)(N,{value:"available",children:"Available"}),Object(x.jsx)(N,{value:"reserved",children:"Reserved"}),Object(x.jsx)(N,{value:"sold",children:"Sold"})]})}),Object(x.jsx)(P.a.Item,{wrapperCol:{offset:8,span:16},children:Object(x.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})}),l&&i&&Object(x.jsx)(pe,{properties:l,setProperties:d,project:i,admin:t,setEditModalOpen:h,transferOrientationToString:A})]})},xe=function(e){var t=Object(B.g)().id,n=O(),a=n.isLoggedIn,c=n.authData,i=n.logout,o=Object(B.f)(),l=Object(s.useState)(null),u=Object(r.a)(l,2),d=u[0],j=u[1],p=Object(s.useState)(null),b=Object(r.a)(p,2),f=b[0],h=b[1];return Object(s.useEffect)((function(){return a?null!==c&&void 0!==c&&c.super?void 0:null!==c&&void 0!==c&&c.projectId?(o("/p-admin/".concat(c.projectId)),null):(i(),o("/login"),null):(i(),o("/login"),null)}),[a,null===c||void 0===c?void 0:c.super,null===c||void 0===c?void 0:c.projectId]),Object(s.useEffect)((function(){de.getProperty(t).then((function(e){h(e.data)})),K.a.getProject(t).then((function(e){j(e.data)}))}),[]),Object(x.jsx)(y.a,{children:Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return o("/admin/projects/".concat(t))},title:"Properties of project id: ".concat(t),style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"1200px",width:"100%",margin:"auto"},children:Object(x.jsx)(be,{admin:!0,id:t,setProject:j,setProperties:h,project:d,properties:f})})]})})},fe=function(e){var t=Object(B.g)().id,n=O(),a=n.logout,c=n.isLoggedIn,i=n.authData,o=Object(B.f)(),l=Object(s.useState)(null),u=Object(r.a)(l,2),d=u[0],j=u[1],p=Object(s.useState)(null),b=Object(r.a)(p,2),f=b[0],h=b[1],m=Object(s.useState)(!1),v=Object(r.a)(m,2),g=v[0],w=v[1];return Object(s.useEffect)((function(){de.getProperty(t).then((function(e){h(e.data)})),K.a.getProject(t).then((function(e){j(e.data)}))}),[]),Object(s.useEffect)((function(){if(!c||(null===i||void 0===i||!i.super)&&t.toString()!==(null===i||void 0===i?void 0:i.projectId.toString()))return a(),o("/login"),null}),[c,null===i||void 0===i?void 0:i.super,null===i||void 0===i?void 0:i.projectId]),Object(x.jsxs)(y.a,{loading:!f||!d,children:[Object(x.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(x.jsx)(I.a,{onBack:function(){return w(!0)},backIcon:Object(x.jsx)(ce.a,{}),title:"Appartments",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(x.jsx)(F.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"1200px",width:"100%",margin:"auto"},children:Object(x.jsx)(be,{id:t,setProject:j,setProperties:h,project:d,properties:f})})]}),Object(x.jsx)(re.a,{title:"Menu",placement:"left",onClose:function(){return w(!1)},visible:g,children:Object(x.jsxs)(N.a,{mode:"inline",style:{width:"100%"},onClick:function(e){e.item;var t=e.key;switch(w(!1),t){case"logout":a();break;case"visit":o("/p/".concat(d.url));break;case"analytics":o("/p-admin/".concat(d.id,"/analytics"));break;default:return}},activeKey:"properties",selectedKeys:["properties"],children:[Object(x.jsx)(N.a.Item,{children:"Properties"},"properties"),Object(x.jsx)(N.a.Item,{children:"Analytics"},"analytics"),Object(x.jsx)(N.a.Item,{children:"Visit project"},"visit"),Object(x.jsx)(N.a.Item,{children:"Logout"},"logout")]})})]})},he=n(63),Oe=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,1191))})),me=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1181))})),ve=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,1196))}));var ge=function(){return Object(x.jsx)(he.a,{history:d,children:Object(x.jsx)(s.Suspense,{fallback:Object(x.jsx)(y.a,{}),children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(W.a,{position:"top-right"}),Object(x.jsxs)(B.c,{children:[Object(x.jsx)(B.a,{exact:!0,path:"/",element:Object(x.jsx)(Oe,{})}),Object(x.jsx)(B.a,{path:"/login",element:Object(x.jsx)(ne,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin",element:Object(x.jsx)(le,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin/projects/:id",element:Object(x.jsx)(ae,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin/projects/create",element:Object(x.jsx)(H,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin/projects/:id/properties",element:Object(x.jsx)(xe,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin/contant",element:Object(x.jsx)(J,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/admin/admins",element:Object(x.jsx)(_,{})}),Object(x.jsx)(B.a,{path:"/reset-password",element:Object(x.jsx)(ve,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/p/:id",element:Object(x.jsx)(me,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/p-admin/:id",element:Object(x.jsx)(fe,{})}),Object(x.jsx)(B.a,{exact:!0,path:"/p-admin/:id/analytics",element:Object(x.jsx)(z,{})}),Object(x.jsx)(B.a,{path:"*",element:Object(x.jsx)("h1",{children:"404 Error Found"})})]})]})})})},ye=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,1194)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(410);v.a.render(Object(x.jsx)(g.b,{children:Object(x.jsx)(h,{children:Object(x.jsx)(ge,{})})}),document.getElementById("root")),ye()},42:function(e,t,n){"use strict";n(0);var a=n(143),r=n(6);t.a=function(e){var t=e.children,n=e.title,c=e.loading,i=e.description,o=e.isProject;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsxs)("title",{children:[n||"Home"," | IMMERSIV "]}),Object(r.jsx)("meta",{name:"description",content:i||"IMMERSIV is a digital interactive sales experience for unbuilt environments"})]}),c?null:Object(r.jsx)("div",{style:{flex:1,display:o?"flex":"block"},children:t})]})}},57:function(e,t,n){"use strict";var a=n(12),r=n(13),c=n(31),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,[{key:"getProject",value:function(e){return c.a.get("/projects".concat(e?"/"+e:""))}},{key:"getProjectByUrl",value:function(e){return c.a.get("/projects/url/".concat(e))}},{key:"getFeaturedProject",value:function(){return c.a.get("/projects/url/__featured__")}},{key:"saveProject",value:function(e,t){return c.a.put("/projects/".concat(e),t)}},{key:"createProject",value:function(e){return c.a.post("/projects",e)}},{key:"deleteProject",value:function(e){return c.a.delete("/projects/".concat(e))}}]),e}();t.a=new i}},[[411,3,4]]]);
//# sourceMappingURL=main.a47bbdda.chunk.js.map