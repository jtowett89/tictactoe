(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),i=s(7),b=s.n(i),c=s(2),l=s(3),h=s(5),r=s(4),o=s(0),d=function(t){Object(h.a)(s,t);var e=Object(r.a)(s);function s(t){return Object(c.a)(this,s),e.call(this,t)}return Object(l.a)(s,[{key:"render",value:function(){return Object(o.jsx)("button",{className:"square",onClick:this.props.handleClick,disabled:this.props.clicked,children:this.props.buttonText})}}]),s}(n.Component),O=function(t){Object(h.a)(s,t);var e=Object(r.a)(s);function s(){var t;return Object(c.a)(this,s),(t=e.call(this)).resetState=function(){t.setState({player:"X",moves:0,btn1:"",btn2:"",btn3:"",btn4:"",btn5:"",btn6:"",btn7:"",btn8:"",btn9:"",btn1Clicked:!1,btn2Clicked:!1,btn3Clicked:!1,btn4Clicked:!1,btn5Clicked:!1,btn6Clicked:!1,btn7Clicked:!1,btn8Clicked:!1,btn9Clicked:!1})},t.state={player:"X",moves:0,btn1:"",btn2:"",btn3:"",btn4:"",btn5:"",btn6:"",btn7:"",btn8:"",btn9:"",btn1Clicked:!1,btn2Clicked:!1,btn3Clicked:!1,btn4Clicked:!1,btn5Clicked:!1,btn6Clicked:!1,btn7Clicked:!1,btn8Clicked:!1,btn9Clicked:!1},t}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(){if("X"===this.state.btn1&&"X"===this.state.btn2&&"X"===this.state.btn3||"O"===this.state.btn1&&"O"===this.state.btn2&&"O"===this.state.btn3||"X"===this.state.btn4&&"X"===this.state.btn5&&"X"===this.state.btn6||"O"===this.state.btn4&&"O"===this.state.btn5&&"O"===this.state.btn6||"X"===this.state.btn7&&"X"===this.state.btn8&&"X"===this.state.btn9||"O"===this.state.btn7&&"O"===this.state.btn8&&"O"===this.state.btn9||"X"===this.state.btn1&&"X"===this.state.btn4&&"X"===this.state.btn7||"O"===this.state.btn1&&"O"===this.state.btn4&&"O"===this.state.btn7||"X"===this.state.btn2&&"X"===this.state.btn5&&"X"===this.state.btn8||"O"===this.state.btn2&&"O"===this.state.btn5&&"O"===this.state.btn8||"X"===this.state.btn3&&"X"===this.state.btn6&&"X"===this.state.btn9||"O"===this.state.btn3&&"O"===this.state.btn6&&"O"===this.state.btn9||"X"===this.state.btn1&&"X"===this.state.btn5&&"X"===this.state.btn9||"O"===this.state.btn1&&"O"===this.state.btn5&&"O"===this.state.btn9||"X"===this.state.btn3&&"X"===this.state.btn5&&"X"===this.state.btn7||"O"===this.state.btn3&&"O"===this.state.btn5&&"O"===this.state.btn7)return"X"===this.state.player?(this.resetState(),alert("player O has won")):this.state.moves>9?(this.resetState(),alert("It's a draw!")):(this.resetState(),alert("player X has won"))}},{key:"render",value:function(){var t=this;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("h1",{children:"Tic Tac Toe Game"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){t.resetState()},className:"col-md-4 offset-md-4",children:"Reset Game"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{style:{width:"60%",marginLeft:"auto",marginRight:"auto"},children:[Object(o.jsx)(d,{clicked:this.state.btn1Clicked,buttonText:this.state.btn1,handleClick:function(){t.setState({btn1Clicked:!0,btn1:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn2Clicked,buttonText:this.state.btn2,handleClick:function(){t.setState({btn2Clicked:!0,btn2:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn3Clicked,buttonText:this.state.btn3,handleClick:function(){t.setState({btn3Clicked:!0,btn3:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn4Clicked,buttonText:this.state.btn4,handleClick:function(){t.setState({btn4Clicked:!0,btn4:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn5Clicked,buttonText:this.state.btn5,handleClick:function(){t.setState({btn5Clicked:!0,btn5:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn6Clicked,buttonText:this.state.btn6,handleClick:function(){t.setState({btn6Clicked:!0,btn6:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn7Clicked,buttonText:this.state.btn7,handleClick:function(){t.setState({btn7Clicked:!0,btn7:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn8Clicked,buttonText:this.state.btn8,handleClick:function(){t.setState({btn8Clicked:!0,btn8:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}}),Object(o.jsx)(d,{clicked:this.state.btn9Clicked,buttonText:this.state.btn9,handleClick:function(){t.setState({btn9Clicked:!0,btn9:"X"===t.state.player?"X":"O",player:"X"===t.state.player?"Y":"X",moves:t.state.moves+1})}})]})]})}}]),s}(n.Component),k=function(t){Object(h.a)(s,t);var e=Object(r.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(o.jsx)(O,{})}}]),s}(n.Component),X=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,15)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,b=e.getTTFB;s(t),n(t),a(t),i(t),b(t)}))};s(13);b.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),X()}},[[14,1,2]]]);
//# sourceMappingURL=main.f27681f9.chunk.js.map