(window.webpackJsonpweb_app=window.webpackJsonpweb_app||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(28),r=a.n(c),s=a(9),m=a(10),i=a(12),l=a(11),u=a(13),d=(a(37),a(20)),p=a(8),h=a(14),b=a(19),g=a.n(b),f=(a(26),g.a.initializeApp({apiKey:"AIzaSyCaHVnrSIsAE1MSpjC_Te4VoIAwrnMTM0Y",authDomain:"programmers-network.firebaseapp.com",databaseURL:"https://programmers-network.firebaseio.com",projectId:"programmers-network",storageBucket:"programmers-network.appspot.com",messagingSenderId:"554107411721",appId:"1:554107411721:web:f809ea597f6bc754f347d8"})),v=f.firestore(),_=f.storage(),E=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRQ2v7gqVmQnRZ7ZV1Bt5zjhQ7bpYM7nBUCvXbHvLTeKWpFLl","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97CD4DZvTbNCtPtUQssaNnIj9yBgkkz74WCWQhhBGITqBJycIPw","https://cdn.iconscout.com/icon/free/png-256/geek-2-160919.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMvL427OzvfmwIN3bwxnnnm4WcTpIhgc1mRC7IuWsjZUr2EIi","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBYpWV-fme6cx198UFWztQSNMhasKmHEFlP0BrzXBxHWN8QOR"],N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.comment;return o.a.createElement("div",{className:"media border border-left-0 border-right-0 p-1"},o.a.createElement("img",{width:"30",height:"30",src:e.user_image,className:"mr-3",alt:"user image"}),o.a.createElement("div",{className:"media-body "},o.a.createElement("h5",{className:"mt-0"},e.user),e.user_comment))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={comment_to_add:""},a.on_add_comment=a.on_add_comment.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"on_add_comment",value:function(e){var t={user_image:E[parseInt(Math.random()*E.length)],user_comment:this.state.comment_to_add};v.collection("posts").doc(e).update({comments:g.a.firestore.FieldValue.arrayUnion(t)}).then((function(e){console.log("Added document"),window.location.reload()}))}},{key:"render",value:function(){var e=this,t=this.props.post;return o.a.createElement("div",{className:"container border rounded shadow-sm my-3 p-4"},o.a.createElement("div",{className:"media"},o.a.createElement("img",{width:"30",height:"30",src:t.user_image,className:"mr-3",alt:"user image"}),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",{className:"mt-0"},t.user),t.user_comment)),o.a.createElement("p",null,o.a.createElement("img",{src:t.image,width:"500",height:"auto",className:"rounded mx-auto d-block img-fluid"})),o.a.createElement("div",{className:"container"},t.comments.length>0&&t.comments.map((function(e,t){return o.a.createElement(N,{comment:e,key:t})})),o.a.createElement("div",{className:"container form-group m-3"},o.a.createElement("input",{placeholder:"Add comment",className:"form-control",onChange:function(t){e.setState({comment_to_add:t.target.value})},value:this.state.comment_to_add}),o.a.createElement("button",{className:"btn btn-primary m-3",type:"button",onClick:function(){return e.on_add_comment(t.doc_id)}},"Add comment"))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},this.props.posts.map((function(e,t){return o.a.createElement(j,{post:e,key:t.toString()})})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={post:"",photo:null},a.on_change_post=a.on_change_post.bind(Object(h.a)(a)),a.on_submit_post=a.on_submit_post.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"on_submit_post",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("file_input").files[0];_.ref("posts/"+a.name).put(a).then((function(e){return e.ref.getDownloadURL()})).then((function(e){v.collection("posts").add({user_comment:t.state.post,comments:[],user_image:E[parseInt(Math.random()*E.length)],image:e}).then((function(e){window.location.reload()}))})).catch((function(e){console.log("Failed to upload file and get link - ".concat(e))}))}},{key:"on_change_post",value:function(e){this.setState({post:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container border shadow-sm my-3"},o.a.createElement("h4",null,"Add new post"),o.a.createElement("form",{onSubmit:this.on_submit_post},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Post: "),o.a.createElement("textarea",{type:"text",className:"form-control",value:this.state.post,onChange:this.on_change_post})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," Add photo: "),o.a.createElement("input",{id:"file_input",type:"file",name:"agregar foto",className:"form-control p-1",accept:"image/png, image/jpeg"})),o.a.createElement("div",{className:"form-group "},o.a.createElement("input",{type:"submit",value:"Post",className:"btn btn-primary "}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={posts:[],get_posts:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.collection("posts").get().then((function(t){if(t.empty)console.log("No such document!");else{var a=[];t.forEach((function(e){var t=e.data();t.doc_id=e.id,a.push(t)})),e.setState({posts:a,get_posts:!0})}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(w,null),o.a.createElement(y,{posts:this.state.posts}))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Programmers Social Network"),o.a.createElement("div",{className:"collpase navbar-collapse"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"navbar-item"},o.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")))))),o.a.createElement(p.a,{path:"/",exact:!0,component:O}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c277cd40.chunk.js.map