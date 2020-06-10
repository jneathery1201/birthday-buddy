(this["webpackJsonpbirthday-buddy"]=this["webpackJsonpbirthday-buddy"]||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(10),i=a.n(n),l=(a(80),a(24)),o=a(25),c=a(31),h=a(30),m=(a(81),a(82),a(65)),d=a.n(m),u=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:d.a,alt:"Login"})),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",name:"password",placeholder:"Password"})))),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{type:"button",className:"btn",id:"loginBtn"},"Login")))}}]),a}(r.a.Component),p=a(66),f=a(19),g=a(67),E=a.n(g),b=a(152),v=a(153),N=(a(83),function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDateChange=function(e){s.setState({birthDate:e})},s.state={show:!1,errorDisplayList:[]},s.handleInputChange=s.handleInputChange.bind(Object(f.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(f.a)(s)),s.handleValidation=s.handleValidation.bind(Object(f.a)(s)),s.handleClose=s.handleClose.bind(Object(f.a)(s)),s.handleShow=s.handleShow.bind(Object(f.a)(s)),s}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target;this.setState(Object(p.a)({},t.name,t.value))}},{key:"handleValidation",value:function(){var e=!0;return this.state.firstName&&""!==this.state.firstName.trim()||(this.state.errorDisplayList.push("First Name is Required."),e=!1),this.state.lastName&&""!==this.state.lastName.trim()||(this.state.errorDisplayList.push("Last Name is Required."),e=!1),this.state.birthDate||(this.state.errorDisplayList.push("Birth Date is Required."),e=!1),this.state.email&&""!==this.state.email.trim()||(this.state.errorDisplayList.push("Email is Required."),e=!1),this.state.password&&""!==this.state.password.trim()||(this.state.errorDisplayList.push("Password is Required."),e=!1),this.state.confirmPassword&&""!==this.state.confirmPassword.trim()||(this.state.errorDisplayList.push("Confirm Password is Required."),e=!1),this.state.password&&this.state.confirmPassword&&(this.state.password!==this.state.confirmPassword&&(this.state.errorDisplayList.push("Passwords must Match."),e=!1),(this.state.password.length<8||this.state.confirmPassword<8)&&(this.state.errorDisplayList.push("Password must be at least 8 characters."),e=!1)),e}},{key:"handleClose",value:function(){this.setState({show:!1,errorDisplayList:[]})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSubmit",value:function(){var e=this;if(this.handleValidation()){var t={firstName:this.state.firstName,lastName:this.state.lastName,dateOfBirth:this.state.birthDate,email:this.state.email,password:this.state.password};console.log(JSON.stringify(t)),fetch("http://localhost:3600/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){t.errors&&(e.state.errorDisplayList.push(t.errors),e.handleShow())}))}else this.handleShow()}},{key:"render",value:function(){return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",name:"firstName",onChange:this.handleInputChange,placeholder:"First Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",onChange:this.handleInputChange,placeholder:"Last Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),r.a.createElement(E.a,{selected:this.state.birthDate,name:"birthDate",onChange:this.handleDateChange,placeholderText:"MM/DD/YYYY",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,placeholder:"Email",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange,placeholder:"Password",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{type:"password",name:"confirmPassword",onChange:this.handleInputChange,placeholder:"Confirm Password",required:!0})))),r.a.createElement("div",{className:"footer"},r.a.createElement("input",{type:"submit",onClick:this.handleSubmit,className:"btn",id:"registerBtn",value:"Register"})),r.a.createElement(b.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"Uh Oh...")),r.a.createElement(b.a.Body,null,r.a.createElement("ul",{className:"list-group"},this.state.errorDisplayList.map((function(e){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"errorValues"},e))})))),r.a.createElement(b.a.Footer,null,r.a.createElement(v.a,{variant:"primary",id:"modalCloseBtn",onClick:this.handleClose},"Close"))))}}]),a}(r.a.Component)),w=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={isLogginActive:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.rightSide.classList.add("right")}},{key:"changeState",value:function(){this.state.isLogginActive?(this.rightSide.classList.remove("right"),this.rightSide.classList.add("left")):(this.rightSide.classList.remove("left"),this.rightSide.classList.add("right")),this.setState((function(e){return{isLogginActive:!e.isLogginActive}}))}},{key:"render",value:function(){var e=this,t=this.state.isLogginActive,a=t?"Register":"Login",s=t?"login":"register";return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container",ref:function(t){return e.container=t}},t&&r.a.createElement(u,{containerRef:function(t){return e.current=t}}),!t&&r.a.createElement(N,{containerRef:function(t){return e.current=t}})),r.a.createElement(y,{current:a,currentActive:s,containerRef:function(t){return e.rightSide=t},onClick:this.changeState.bind(this)})))}}]),a}(r.a.Component),y=function(e){return r.a.createElement("div",{className:"right-side",ref:e.containerRef,onClick:e.onClick},r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"text"},e.current)))},C=w;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/login.dfa03c58.svg"},75:function(e,t,a){e.exports=a(146)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.919f0a19.chunk.js.map