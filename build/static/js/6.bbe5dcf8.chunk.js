(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{1374:function(e,s,t){"use strict";t.r(s);var a=t(5),r=t(41);var n=function(){return new URLSearchParams(Object(r.e)().search)},o=t(60),c=t(0),i=t(50),l=t(133),d=t(593),u=t(592),p=t(353),m=t(211),j=t(63),b=t(4);s.default=function(){var e=Object(c.useState)(""),s=Object(a.a)(e,2),t=s[0],h=s[1],w=Object(c.useState)(!1),f=Object(a.a)(w,2),x=f[0],O=f[1],g=n(),P=g.get("token"),y=g.get("email"),v=Object(r.f)();Object(c.useEffect)((function(){l.a.checkToken(P,y).then((function(e){var s=e.data;return h(s)})).catch((function(e){return console.error(e.response)}))}),[P,y]);return Object(b.jsx)(o.a,{title:"Reset Password",children:t.showForm?Object(b.jsxs)(d.a,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},name:"normal_login",onFinish:function(e){O(!0),l.a.resetPassword(P,y,e.password,e.password2).then((function(e){var s=e.data;"error"!==s.status?(i.b.success(s.message),setTimeout((function(){v("/login")}),2e3)):O(!1)})).catch((function(e){O(!1)}))},style:{padding:"100px 16px",maxWidth:"500px",margin:"auto"},children:[Object(b.jsx)(u.a.Title,{style:{textAlign:"center",marginBottom:"50px"},children:"Reset password"}),Object(b.jsx)(d.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password at least 6 symbols long!",min:6}],hasFeedback:!0,children:Object(b.jsx)(p.a.Password,{})}),Object(b.jsx)(d.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,t){return t&&s("password")!==t?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(b.jsx)(p.a.Password,{})}),Object(b.jsx)(d.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}},children:x?Object(b.jsx)(m.a,{}):Object(b.jsx)(j.a,{type:"primary",htmlType:"submit",style:{width:"100%"},children:"Reset password"})})]}):Object(b.jsx)("div",{children:t.message})})}}}]);
//# sourceMappingURL=6.bbe5dcf8.chunk.js.map