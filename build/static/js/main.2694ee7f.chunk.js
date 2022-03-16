(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[2],{102:function(e,t,n){"use strict";var a=n(26),r=n.n(a),c=n(35),i=n(75),s=n(76),o=n(32),l=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"login",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/auth/login",{email:t,password:n});case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"googleLogin",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/auth/google",{token:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){localStorage.removeItem("user"),localStorage.removeItem("token"),localStorage.removeItem("expiresAt")}},{key:"forgotPassword",value:function(e){return o.a.post("/auth/forgot-password",{email:e})}},{key:"checkToken",value:function(e,t){return o.a.post("auth/check-token",{token:e,email:t})}},{key:"resetPassword",value:function(e,t,n,a){return o.a.post("auth/reset-password",{token:e,email:t,password:n,password2:a})}},{key:"register",value:function(e,t,n){return o.a.post("auth/signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){return o.a.get("/users/profile")}}]),e}();t.a=new l},186:function(e,t,n){"use strict";var a=n(75),r=n(76),c=n(32),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,[{key:"getConstant",value:function(){return c.a.get("/constant")}},{key:"saveConstant",value:function(e){return c.a.put("/constant",e)}}]),e}();t.a=new i},32:function(e,t,n){"use strict";var a=n(233),r=n.n(a).a.create({baseURL:"https://tour.immersiv.com.au/api",withCredentials:!0});r.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("token"));return t&&(e.headers["auth-token"]=t),e}),(function(e){return Promise.reject(e)})),t.a=r},415:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(188),c=n(31),i=n(26),s=n.n(i),o=n(35),l=n(0),u=n(32),d=n(241),j=Object(d.a)(),p=function(e){var t=e.children,n=f(),a=n.setIsLoggedIn,r=n.setUserData,c=n.setAuthData,i=n.isLoggedIn;return Object(l.useMemo)((function(){i&&u.a.interceptors.response.use((function(e){return e}),function(){var e=Object(o.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,401!==t.response.status||"/auth/refresh-token"!==n.url){e.next=3;break}return e.abrupt("return",new Promise((function(e,n){a(!1),console.log("here"),c(null),r(null),j.push("/login"),n(t)})));case 3:if(401!==t.response.status||n._retry){e.next=21;break}return e.prev=4,n._retry=!0,e.next=8,u.a.post("/auth/refresh-token");case 8:return i=e.sent,localStorage.setItem("token",JSON.stringify(i.data.token)),e.abrupt("return",Object(u.a)(n));case 13:e.prev=13,e.t0=e.catch(4),localStorage.removeItem("token"),a(!1),console.log("here2"),c(null),r(null),j.push("/login");case 21:return e.abrupt("return",Promise.reject(t));case 22:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}())}),[i,c,a,r]),t},b=n(102),x=n(234),h=Object(l.createContext)(),m=function(e){var t=e.children,n=Object(l.useState)({token:""}),i=Object(c.a)(n,2),s=i[0],o=i[1],u=Object(l.useState)(!1),d=Object(c.a)(u,2),j=d[0],m=d[1];Object(l.useEffect)((function(){localStorage.getItem("token")&&(m(!0),o((function(){return f(JSON.parse(localStorage.getItem("token")).token)})))}),[]);var f=function(e){if(e){var t=Object(x.a)(e);return Object(r.a)(Object(r.a)({},t),{},{token:e})}return{token:""}};return Object(a.jsx)(h.Provider,{value:{setUserState:function(e){return function(e){var t=e.token;m(!0),o((function(){return f(t)})),localStorage.setItem("token",JSON.stringify(t))}(e)},logout:function(){console.log("logout"),o(null),m(!1),b.a.logout()},isLoggedIn:j,setIsLoggedIn:m,authData:s,setAuthData:o},children:Object(a.jsx)(p,{children:t})})},f=function(){var e=Object(l.useContext)(h);if(void 0===e)throw new Error("useUser must be used within UserProvider");return e},O=n(41),v=n.n(O),g=n(146),y=n(45),k=n(417),I=n(422),w=n(52),S=n(423),P=n(421),C=n(240),E=n(425),F=n(163),L=n(80),A=n(418),T=n(59),D=n(426),M=n(25),R=n(46),N=n(75),W=n(76),B=new(function(){function e(){Object(N.a)(this,e)}return Object(W.a)(e,[{key:"getAdmin",value:function(){return u.a.get("/admins")}},{key:"createAdmin",value:function(e){return u.a.post("/admins",e)}},{key:"deleteAdmin",value:function(e){return u.a.delete("/admins/".concat(e))}}]),e}()),_=function(e){var t=Object(l.useRef)(null),n=Object(l.useState)(null),r=Object(c.a)(n,2),i=r[0],u=r[1],d=Object(l.useState)(null),j=Object(c.a)(d,2),p=j[0],b=j[1],x=f(),h=x.isLoggedIn,m=x.authData,O=x.logout,v=Object(M.f)();Object(l.useEffect)((function(){B.getAdmin().then((function(e){u(e.data)}))}),[]),Object(l.useEffect)((function(){return h?(null===m||void 0===m?void 0:m.super)?void 0:(null===m||void 0===m?void 0:m.projectId)?(v("/p-admin/".concat(m.projectId)),null):(O(),v("/login"),null):(O(),v("/login"),null)}),[h,null===m||void 0===m?void 0:m.super,null===m||void 0===m?void 0:m.projectId]);var g=function(){var e=Object(o.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.createAdmin(n);case 2:(a=e.sent).data&&(R.b.success("Saved"),u(a.data),b(null),t.current&&t.current.resetFields());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.deleteAdmin(t);case 2:(n=e.sent).data&&u(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(y.a,{loading:!i,children:Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return v("/admin")},title:"Admins",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsxs)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:[Object(a.jsx)(w.a,{onClick:function(){return b({})},style:{margin:"16px"},children:"Add admin"}),Object(a.jsx)(S.a,{visible:!!p,onCancel:function(){return b(null)},footer:null,children:Object(a.jsxs)(P.a,{name:"normal_login",onFinish:g,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},ref:t,children:[Object(a.jsx)(P.a.Item,{name:"email",rules:[{required:!0,message:"Please add name!",type:"email"}],children:Object(a.jsx)(C.a,{placeholder:"Email"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})}),i&&Object(a.jsx)(E.b,{itemLayout:"horizontal",dataSource:i.sort((function(e,t){return e.name>t.name?1:-1})),renderItem:function(e){return Object(a.jsx)(E.b.Item,{actions:[Object(a.jsx)(F.a,{overlay:Object(a.jsx)(L.a,{children:Object(a.jsx)(A.a,{title:"Are you sure to delete this admin?",onConfirm:function(){return N(e.email)},okText:"Yes",cancelText:"No",children:Object(a.jsx)(L.a.Item,{danger:!0,children:"Delete"},"3")})}),trigger:["click"],children:Object(a.jsx)(D.a,{style:{fontSize:"30px"}})})],style:{borderBottom:"3px solid #ccc",paddingLeft:"16px"},children:Object(a.jsx)(E.b.Item.Meta,{title:e.email,description:e.locked?"Locked":"Not locked"})})}})]})]})})},q=n(186),z=function(e){var t=f(),n=t.isLoggedIn,r=t.authData,i=t.logout,u=Object(l.useState)(null),d=Object(c.a)(u,2),j=d[0],p=d[1],b=Object(l.useRef)(null),x=Object(M.f)();Object(l.useEffect)((function(){q.a.getConstant().then((function(e){e.data?(p(e.data),b.current&&b.current.setFieldsValue(e.data)):p({})})).catch((function(){p({})}))}),[]),Object(l.useEffect)((function(){return n?(null===r||void 0===r?void 0:r.super)?void 0:(null===r||void 0===r?void 0:r.projectId)?(x("/p-admin/".concat(r.projectId)),null):(i(),x("/login"),null):(i(),x("/login"),null)}),[n,null===r||void 0===r?void 0:r.super,null===r||void 0===r?void 0:r.projectId]);var h=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.saveConstant(t);case 2:(n=e.sent).data&&(p(n.data),R.b.success("Saved"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(y.a,{children:Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return x("/admin")},title:"Constants",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsx)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:Object(a.jsxs)(P.a,{ref:b,name:"normal_login",onFinish:h,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},initialValues:j,children:[Object(a.jsx)(P.a.Item,{name:"email",children:Object(a.jsx)(C.a,{placeholder:"Email"})}),Object(a.jsx)(P.a.Item,{name:"phone",children:Object(a.jsx)(C.a,{placeholder:"Phone"})}),Object(a.jsx)(P.a.Item,{name:"call",children:Object(a.jsx)(C.a,{placeholder:"Phone in international format"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{onClick:function(){b.current&&b.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})})]})})},U=n(69),V=n(117),J=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P.a.Item,{name:"name",rules:[{required:!0,message:"Please set name!"}],children:Object(a.jsx)(C.a,{placeholder:"Name"})}),Object(a.jsx)(P.a.Item,{name:"url",rules:[{required:!0,message:"Please add url!"}],children:Object(a.jsx)(C.a,{placeholder:"Url"})}),Object(a.jsx)(P.a.Item,{name:"projectId",rules:[{required:!0,message:"Please add project id!"}],children:Object(a.jsx)(C.a,{placeholder:"Project id"})}),Object(a.jsx)(P.a.Item,{name:"modelId",rules:[{required:!0,message:"Please add model id!"}],children:Object(a.jsx)(C.a,{placeholder:"Model id"})}),Object(a.jsx)(P.a.Item,{name:"adminEmail",children:Object(a.jsx)(C.a,{placeholder:"Admin email"})}),Object(a.jsx)(P.a.Item,{name:"adminPassword",rules:[{min:6,message:"Must have length at least 6!"}],children:Object(a.jsx)(C.a,{placeholder:"Admin password"})}),Object(a.jsx)(P.a.Item,{name:"analytic",children:Object(a.jsx)(C.a,{placeholder:"Google analytics property id"})}),Object(a.jsx)(P.a.Item,{name:"published",children:Object(a.jsx)(V.a,{children:"Published"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})},K=function(e){var t=f(),n=t.isLoggedIn,r=t.authData,c=t.logout,i=Object(l.useRef)(null),u=Object(M.f)();Object(l.useEffect)((function(){return n?(null===r||void 0===r?void 0:r.super)?void 0:(null===r||void 0===r?void 0:r.projectId)?(u("/p-admin/".concat(r.projectId)),null):(c(),u("/login"),null):(c(),u("/login"),null)}),[n,null===r||void 0===r?void 0:r.super,null===r||void 0===r?void 0:r.projectId]);var d=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.createProject(t);case 2:e.sent.data&&(R.b.success("Saved"),u("/admin"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(y.a,{children:Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return u("/admin")},title:"Create project",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsx)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:Object(a.jsxs)(P.a,{ref:i,name:"normal_login",onFinish:d,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},children:[Object(a.jsx)(J,{}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{onClick:function(){i.current&&i.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})})]})})},Y=n(238),G=n.n(Y),H=n(427),Q=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{onClick:function(){return r(!n)},children:"Forgot password?"}),Object(a.jsx)(G.a,{title:"Forgot Password",visible:n,footer:[],onCancel:function(){return r(!1)},children:Object(a.jsxs)(P.a,{name:"normal_login",onFinish:function(e){b.a.forgotPassword(e.email).then((function(e){"OK"===e.data.status&&(R.b.success("Email has been sent successfully."),r(!1))})).catch((function(e){}))},style:{padding:"100px 16px",maxWidth:"500px",margin:"auto"},children:[Object(a.jsx)(P.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(a.jsx)(C.a,{prefix:Object(a.jsx)(H.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Reset password"})})]})})]})})},X=n(420),Z=n(428),$=function(){var e=f(),t=e.isLoggedIn,n=e.setUserState,r=e.authData,i=Object(l.useState)(!1),u=Object(c.a)(i,2),d=u[0],j=u[1],p=Object(l.useState)(!1),x=Object(c.a)(p,2),h=x[0],m=x[1],O=Object(M.f)(),v=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,r=t.password,e.prev=1,j(!0),e.next=5,b.a.login(a,r);case 5:c=e.sent,R.b.success("Login successful \ud83d\udd13"),setTimeout((function(){n(c),m(!0),j(!1)}),1500),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return(t||h)&&((null===r||void 0===r?void 0:r.super)||(null===r||void 0===r?void 0:r.projectId))&&O("/admin"),Object(a.jsx)(y.a,{title:"Login",loading:d,children:Object(a.jsxs)(P.a,{name:"normal_login",onFinish:v,style:{padding:"100px 16px",maxWidth:"500px",margin:"auto"},children:[Object(a.jsx)(X.a.Title,{style:{textAlign:"center",marginBottom:"50px"},children:"Manage IMMERSIVE"}),Object(a.jsx)(P.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(a.jsx)(C.a,{prefix:Object(a.jsx)(H.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(a.jsx)(P.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(C.a.Password,{prefix:Object(a.jsx)(Z.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)("a",{children:Object(a.jsx)(Q,{})})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Log in"})})]})})},ee=function(e){var t=Object(l.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],u=f(),d=u.isLoggedIn,j=u.authData,p=u.logout,b=Object(l.useRef)(null),x=Object(M.g)().id;Object(l.useEffect)((function(){U.a.getProject(x).then((function(e){i(e.data)}))}),[x]);var h=Object(M.f)();Object(l.useEffect)((function(){return d?(null===j||void 0===j?void 0:j.super)?void 0:(null===j||void 0===j?void 0:j.projectId)?(h("/p-admin/".concat(j.projectId)),null):(p(),h("/login"),null):(p(),h("/login"),null)}),[d,null===j||void 0===j?void 0:j.super,null===j||void 0===j?void 0:j.projectId]);var m=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.saveProject(r.id,t);case 2:e.sent.data&&R.b.success("Saved");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(y.a,{loading:!r,children:Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return h("/admin")},title:"Project - ".concat(null===r||void 0===r?void 0:r.name),style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsx)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:r&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(X.a.Title,{children:["Project id: ",r.id]}),Object(a.jsx)(w.a,{onClick:function(){return h("/p-admin/".concat(x))},style:{margin:"16px"},children:"See client admin panel"}),Object(a.jsx)(w.a,{onClick:function(){return h("/admin/projects/".concat(r.id,"/properties"))},style:{margin:"16px"},children:"Manage properties"}),Object(a.jsxs)(P.a,{ref:b,name:"normal_login",onFinish:m,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},initialValues:r,children:[Object(a.jsx)(J,{}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{onClick:function(){b.current&&b.current.resetFields()},style:{width:"100%"},children:"Reset"})})]})]})})]})})},te=n(424),ne=n(429),ae=n(430),re=n(431),ce=n(432),ie=function(e){var t=Object(l.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],u=f(),d=u.logout,j=u.isLoggedIn,p=u.authData,b=Object(M.f)(),x=Object(l.useState)(!1),h=Object(c.a)(x,2),m=h[0],O=h[1];Object(l.useEffect)((function(){U.a.getProject().then((function(e){i(e.data)}))}),[]),Object(l.useEffect)((function(){return j?(null===p||void 0===p?void 0:p.super)?void 0:(null===p||void 0===p?void 0:p.projectId)?(b("/p-admin/".concat(p.projectId)),null):(d(),b("/login"),null):(d(),b("/login"),null)}),[j,null===p||void 0===p?void 0:p.super,null===p||void 0===p?void 0:p.projectId]);var v=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.deleteProject(t);case 2:(n=e.sent).data&&i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.saveProject(t,{featured:!0});case 2:(n=e.sent).data&&i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(y.a,{loading:!r,children:[Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return O(!0)},backIcon:Object(a.jsx)(ne.a,{}),title:"Projects",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsxs)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:[Object(a.jsx)(w.a,{onClick:function(){return b("/admin/projects/create")},style:{margin:"16px"},children:"Add project"}),r&&Object(a.jsx)(E.b,{itemLayout:"horizontal",dataSource:r.sort((function(e,t){return e.url>t.url?1:-1})),renderItem:function(e){return Object(a.jsx)(E.b.Item,{actions:[Object(a.jsx)(F.a,{overlay:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(L.a.Item,{onClick:function(){return g(e.id)},children:"Set as featured"},"1"),Object(a.jsx)(L.a.Divider,{}),Object(a.jsx)(A.a,{title:"Are you sure to delete this project?",onConfirm:function(){return v(e.id)},okText:"Yes",cancelText:"No",children:Object(a.jsx)(L.a.Item,{danger:!0,children:"Delete"},"3")})]}),trigger:["click"],children:Object(a.jsx)(D.a,{style:{fontSize:"30px"}})})],children:Object(a.jsx)(E.b.Item.Meta,{avatar:e.featured?Object(a.jsx)(ae.a,{style:{fontSize:"24px"}}):e.published?Object(a.jsx)(re.a,{style:{fontSize:"24px"}}):Object(a.jsx)(ce.a,{style:{fontSize:"24px"}}),title:e.name,description:e.url,onClick:function(){b("/admin/projects/".concat(e.id))}})})}})]})]}),Object(a.jsx)(te.a,{title:"Menu",placement:"left",onClose:function(){return O(!1)},visible:m,children:Object(a.jsxs)(L.a,{mode:"inline",style:{width:"100%"},onClick:function(e){e.item;var t=e.key;switch(O(!1),t){case"logout":d();break;case"info":b("/admin/contant");break;case"admins":b("/admin/admins");break;default:return}},activeKey:"projects",selectedKeys:["projects"],children:[Object(a.jsx)(L.a.Item,{children:"Projects"},"projects"),Object(a.jsx)(L.a.Item,{children:"Constant"},"info"),Object(a.jsx)(L.a.Item,{children:"Admins"},"admins"),Object(a.jsx)(L.a.Item,{children:"Logout"},"logout")]})})]})},se=n(131),oe=new(function(){function e(){Object(N.a)(this,e)}return Object(W.a)(e,[{key:"getProperty",value:function(e,t){return u.a.get("/properties/".concat(e,"/").concat(t?"/"+t:""))}},{key:"saveProperty",value:function(e,t,n){return u.a.put("/properties/".concat(e,"/").concat(t),n)}},{key:"createProperty",value:function(e,t){return u.a.post("/properties/".concat(e),t)}},{key:"deleteProperty",value:function(e,t){return u.a.delete("/properties/".concat(e,"/").concat(t))}},{key:"saveStatus",value:function(e,t,n){return u.a.put("/properties/".concat(e,"/status/").concat(t),n)}}]),e}()),le=function(e){var t=Object(l.useRef)(null),n=Object(M.g)().id,r=Object(l.useState)(null),i=Object(c.a)(r,2),u=i[0],d=i[1],j=Object(l.useState)(null),p=Object(c.a)(j,2),b=p[0],x=p[1],h=f(),m=h.isLoggedIn,O=h.authData,v=h.logout,g=Object(M.f)();Object(l.useEffect)((function(){oe.getProperty(n).then((function(e){d(e.data)}))}),[]),Object(l.useEffect)((function(){return m?(null===O||void 0===O?void 0:O.super)?void 0:(null===O||void 0===O?void 0:O.projectId)?(g("/p-admin/".concat(O.projectId)),null):(v(),g("/login"),null):(v(),g("/login"),null)}),[m,null===O||void 0===O?void 0:O.super,null===O||void 0===O?void 0:O.projectId]);var N=function(){var e=Object(o.a)(s.a.mark((function e(a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===b||void 0===b?void 0:b.id)){e.next=6;break}return e.next=3,oe.saveProperty(n,b.id,a);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,oe.createProperty(n,a);case 8:e.t0=e.sent;case 9:(r=e.t0).data&&(R.b.success("Saved"),d(r.data),x(null),t.current&&t.current.resetFields());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.deleteProperty(n,t);case 2:(a=e.sent).data&&d(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=se.a.Option;return Object(a.jsx)(y.a,{loading:!u,children:Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return g("/admin/projects/".concat(n))},title:"Properties of project id: ".concat(n),style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsxs)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:[Object(a.jsx)(w.a,{onClick:function(){return x({})},style:{margin:"16px"},children:"Add property"}),Object(a.jsx)(S.a,{visible:!!b,onCancel:function(){return x(null)},footer:null,children:Object(a.jsxs)(P.a,{name:"normal_login",onFinish:N,style:{padding:" 16px",maxWidth:"500px",margin:"auto"},ref:t,children:[Object(a.jsx)(P.a.Item,{name:"name",rules:[{required:!0,message:"Please add name!"}],children:Object(a.jsx)(C.a,{placeholder:"Name"})}),Object(a.jsx)(P.a.Item,{name:"propertyId",rules:[{required:!0,message:"Please add id!"}],children:Object(a.jsx)(C.a,{placeholder:"Property id"})}),Object(a.jsx)(P.a.Item,{name:"status",rules:[{required:!0,message:"Please set the status!"}],children:Object(a.jsxs)(se.a,{children:[Object(a.jsx)(B,{value:"available",children:"Available"}),Object(a.jsx)(B,{value:"reserved",children:"Reserved"}),Object(a.jsx)(B,{value:"sold",children:"Sold"})]})}),Object(a.jsx)(P.a.Item,{children:Object(a.jsx)(w.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Save"})})]})}),u&&Object(a.jsx)(E.b,{itemLayout:"horizontal",dataSource:u.sort((function(e,t){return e.name>t.name?1:-1})),renderItem:function(e){return Object(a.jsx)(E.b.Item,{actions:[Object(a.jsx)(F.a,{overlay:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(L.a.Item,{onClick:function(){x(e),t.current&&t.current.setFieldsValue(e)},children:"Edit"}),Object(a.jsx)(L.a.Divider,{}),Object(a.jsx)(A.a,{title:"Are you sure to delete this property?",onConfirm:function(){return W(e.id)},okText:"Yes",cancelText:"No",children:Object(a.jsx)(L.a.Item,{danger:!0,children:"Delete"},"3")})]}),trigger:["click"],children:Object(a.jsx)(D.a,{style:{fontSize:"30px"}})})],style:{borderBottom:"3px solid #ccc",paddingLeft:"16px"},children:Object(a.jsx)(E.b.Item.Meta,{title:"".concat(e.name," (").concat(e.status,")"),description:"Property id: ".concat(e.propertyId)})})}})]})]})})},ue=n(419),de=function(e){var t=e.properties,n=e.project,r=e.setProperties,c=se.a.Option,i=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.saveStatus(n.id,a,{status:t});case 2:(c=e.sent).data&&(R.b.success("Saved"),r(c.data));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=[{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"status",key:"status",render:function(e,t){return Object(a.jsxs)(se.a,{value:e,onChange:function(e){return i(e,t.id)},style:{width:"100%"},children:[Object(a.jsx)(c,{value:"available",children:"Available"}),Object(a.jsx)(c,{value:"reserved",children:"Reserved"}),Object(a.jsx)(c,{value:"sold",children:"Sold"})]})}}];return Object(a.jsx)(ue.a,{dataSource:t.sort((function(e,t){return e.name>t.name?1:-1})),columns:l})},je=function(e){var t=Object(M.g)().id,n=Object(l.useState)(null),r=Object(c.a)(n,2),i=r[0],s=r[1],o=Object(l.useState)(null),u=Object(c.a)(o,2),d=u[0],j=u[1],p=f(),b=p.logout,x=p.isLoggedIn,h=p.authData,m=Object(M.f)(),O=Object(l.useState)(!1),v=Object(c.a)(O,2),g=v[0],w=v[1];return Object(l.useEffect)((function(){U.a.getProject(t).then((function(e){s(e.data)})),oe.getProperty(t).then((function(e){j(e.data)}))}),[]),Object(l.useEffect)((function(){if(!x||!(null===h||void 0===h?void 0:h.super)&&t.toString()!==(null===h||void 0===h?void 0:h.projectId.toString()))return b(),m("/login"),null}),[x,null===h||void 0===h?void 0:h.super,null===h||void 0===h?void 0:h.projectId]),Object(a.jsxs)(y.a,{loading:!i||!d,children:[Object(a.jsxs)(k.a,{style:{height:"100%",display:"flex",flex:1,background:"white"},children:[Object(a.jsx)(I.a,{onBack:function(){return w(!0)},backIcon:Object(a.jsx)(ne.a,{}),title:(null===i||void 0===i?void 0:i.name)||"Project",style:{boxShadow:"1px 1px 10px 1px #ccc"}}),Object(a.jsx)(T.Content,{style:{flex:1,overflow:"auto",padding:"16px",maxWidth:"800px",width:"100%",margin:"auto"},children:d&&i&&Object(a.jsx)(de,{properties:d,setProperties:j,project:i})})]}),Object(a.jsx)(te.a,{title:"Menu",placement:"left",onClose:function(){return w(!1)},visible:g,children:Object(a.jsxs)(L.a,{mode:"inline",style:{width:"100%"},onClick:function(e){e.item;var t=e.key;switch(w(!1),t){case"logout":b();break;case"visit":m("/p/".concat(i.url));break;case"analytics":m("/p-admin/".concat(i.url,"/analytics"));break;default:return}},activeKey:"properties",selectedKeys:["properties"],children:[Object(a.jsx)(L.a.Item,{children:"Properties"},"properties"),Object(a.jsx)(L.a.Item,{children:"Analytics"},"analytics"),Object(a.jsx)(L.a.Item,{children:"Visit project"},"visit"),Object(a.jsx)(L.a.Item,{children:"Logout"},"logout")]})})]})},pe=n(67),be=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,1211))})),xe=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,1201))})),he=Object(l.lazy)((function(){return n.e(6).then(n.bind(null,1216))}));var me=function(){return Object(a.jsx)(pe.a,{history:j,children:Object(a.jsx)(l.Suspense,{fallback:Object(a.jsx)(y.a,{}),children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R.a,{position:"top-right"}),Object(a.jsxs)(M.c,{children:[Object(a.jsx)(M.a,{exact:!0,path:"/",element:Object(a.jsx)(be,{})}),Object(a.jsx)(M.a,{path:"/login",element:Object(a.jsx)($,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin",element:Object(a.jsx)(ie,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin/projects/:id",element:Object(a.jsx)(ee,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin/projects/create",element:Object(a.jsx)(K,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin/projects/:id/properties",element:Object(a.jsx)(le,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin/contant",element:Object(a.jsx)(z,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/admin/admins",element:Object(a.jsx)(_,{})}),Object(a.jsx)(M.a,{path:"/reset-password",element:Object(a.jsx)(he,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/p/:id",element:Object(a.jsx)(xe,{})}),Object(a.jsx)(M.a,{exact:!0,path:"/p-admin/:id",element:Object(a.jsx)(je,{})}),Object(a.jsx)(M.a,{path:"*",element:Object(a.jsx)("h1",{children:"404 Error Found"})})]})]})})})},fe=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,1214)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(414);v.a.render(Object(a.jsx)(g.b,{children:Object(a.jsx)(m,{children:Object(a.jsx)(me,{})})}),document.getElementById("root")),fe()},45:function(e,t,n){"use strict";var a=n(6),r=(n(0),n(146));t.a=function(e){var t=e.children,n=e.title,c=e.loading,i=e.description,s=e.isProject;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsxs)("title",{children:[n||"Home"," | IMMERSIV "]}),Object(a.jsx)("meta",{name:"description",content:i||"IMMERSIV is a digital interactive sales experience for unbuilt environments"})]}),c?null:Object(a.jsx)("div",{style:{flex:1,display:s?"flex":"block"},children:t})]})}},69:function(e,t,n){"use strict";var a=n(75),r=n(76),c=n(32),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,[{key:"getProject",value:function(e){return c.a.get("/projects".concat(e?"/"+e:""))}},{key:"getProjectByUrl",value:function(e){return c.a.get("/projects/url/".concat(e))}},{key:"getFeaturedProject",value:function(){return c.a.get("/projects/__featured__")}},{key:"saveProject",value:function(e,t){return c.a.put("/projects/".concat(e),t)}},{key:"createProject",value:function(e){return c.a.post("/projects",e)}},{key:"deleteProject",value:function(e){return c.a.delete("/projects/".concat(e))}}]),e}();t.a=new i}},[[415,3,4]]]);
//# sourceMappingURL=main.2694ee7f.chunk.js.map