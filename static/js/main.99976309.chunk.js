(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(e,t,a){e.exports=a.p+"static/media/aneurysm.0378bd45.png"},239:function(e,t,a){e.exports=a.p+"static/media/aneurysm_flow.0671e97f.png"},240:function(e,t,a){e.exports=a.p+"static/media/coiling.9f72901a.svg"},241:function(e,t,a){e.exports=a.p+"static/media/donothing.5f702f1d.png"},242:function(e,t,a){e.exports=a.p+"static/media/angio.a4b0f845.jpg"},245:function(e,t,a){e.exports=a.p+"static/media/labeled_coiling.a631b0ff.svg"},246:function(e,t,a){e.exports=a.p+"static/media/labeled_clipping.aa42bfea.svg"},248:function(e,t,a){e.exports=a(597)},253:function(e,t,a){},39:function(e,t,a){},597:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),l=a.n(i),o=(a(253),a(21)),s=a(22),c=a(24),m=a(23),u=a(25),h=a(43),p=a(601),d=a(602),E=a(69),g=a(3),f=a.n(g),y=a(4),b=a.n(y),v=a(19),x=a.n(v),k=a(146),w=a.n(k),j=a(149),O=a.n(j),C=a(147),N=a.n(C),S=a(53),A=a.n(S),B=a(20),I=a.n(B),_=a(148),L=a.n(_),T=a(101),W=a.n(T),P=a(100),H=a.n(P),D=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleTextChange=function(e){return function(t){console.log(Object(h.a)(Object(h.a)(a))),a.setState(Object(E.a)({},e,t.target.value))}},a.handleToggleChange=function(e){return function(t){a.setState(Object(E.a)({},e,t.target.checked))}},a.state={age:a.props.patient.age,lesionLocation:a.props.patient.lesionLocation,lesionDiameter:a.props.patient.lesionDiameter,htn:a.props.patient.htn,ethnicity:a.props.patient.ethnicity,hxSAH:a.props.patient.hxSAH},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"submit",value:function(){var e=this.props.patient;e.age=this.state.age,e.lesionDiameter=this.state.lesionDiameter,e.lesionLocation=this.state.lesionLocation,e.htn=this.state.htn,e.ethnicity=this.state.ethnicity,e.hxSAH=this.state.hxSAH}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(f.a,{component:"h2",variant:"h4",gutterBottom:!0},"Patient Information"),r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"This information will be used to generate a custom data feed."))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(b.a,{container:!0,spacing:24},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{required:!0,id:"age",name:"age",label:"Age",fullWidth:!0,onChange:this.handleTextChange("age")})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(w.a,{required:!0,id:"lesionDiameter",name:"lesionDiameter",label:"Lesion Diameter",fullWidth:!0,onChange:this.handleTextChange("lesionDiameter")})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(W.a,null,r.a.createElement(H.a,{htmlFor:"location-native-simple"},"Lesion Location"),r.a.createElement(N.a,{fullWidth:!0,value:this.state.lesionLocation,input:r.a.createElement(A.a,{name:"lesionLocation",id:"lesionLocation",onChange:this.handleTextChange("lesionLocation")})},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:1},"Intra-dural Internal Carotid Artery"),r.a.createElement("option",{value:2},"Anterior Cerebral Artery"),r.a.createElement("option",{value:3},"Anterior Communicating Artery"),r.a.createElement("option",{value:4},"Pericollosal Artery"),r.a.createElement("option",{value:5},"Middle Cerebral Artery"),r.a.createElement("option",{value:6},"Posterior Communicating Artery"),r.a.createElement("option",{value:7},"Basilar Tip"),r.a.createElement("option",{value:8},"Other Posterior Circulation"),r.a.createElement("option",{value:9},"Cavernous Carotid Artery")))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(W.a,null,r.a.createElement(H.a,{htmlFor:"ethnicity-native-simple"},"Ethnicity"),r.a.createElement(N.a,{fullWidth:!0,value:this.state.ethnicity,input:r.a.createElement(A.a,{name:"ethnicity",id:"ethnicity",onChange:this.handleTextChange("ethnicity")})},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:1},"Finnish"),r.a.createElement("option",{value:2},"Japanese"),r.a.createElement("option",{value:0},"Other")))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(L.a,{control:r.a.createElement(O.a,{checked:this.state.htn,onChange:this.handleToggleChange("htn"),value:"htn"}),label:"Hypertension"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(L.a,{control:r.a.createElement(O.a,{checked:this.state.hxSAH,onChange:this.handleToggleChange("hxSAH"),value:"hxSAH"}),label:"History of Subarachnoid Hemorrhage"}))))),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(I.a,{fullWidth:!0,variant:"outlined",onClick:this.submit()},"Save")),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(I.a,{fullWidth:!0,variant:"outlined",href:"#/scores"},"Next"))))}}]),t}(r.a.Component)),M=a(55),R=a.n(M),F={young:{anterior:{small:5,medium:4,large:23},posterior:{small:11,medium:29,large:44}},old:{anterior:{small:11.5,medium:25,large:32},posterior:{small:12,medium:43,large:null}}};function z(e,t,a){var n="old";e<50&&(n="young");var r="anterior";7!==t&&8!==t||(r="posterior");var i="small";return a>12&&(i="medium"),a>24&&(i=";arge"),F[n][r][i]}var Y={xsmall:{anterior:{group1:0,group2:1.5},posterior:{group1:2.5,group2:3.4},cca:{group1:0,group2:0}},small:{cca:0,anterior:2.6,posterior:14.5},medium:{cca:30,anterior:14.5,posterior:18.4},large:{cca:6.4,anterior:40,posterior:50}};function G(e){var t=0;return 1==e.ethnicity?t+=5:2==e.ethnicity&&(t+=3),!0===e.htn&&(t+=1),e.age>=70&&(t+=1),e.lesionDiameter>20?t+=10:e.lesionDiameter>10?t+=6:e.lesionDiameter>7&&(t+=3),!0===e.hxSAH&&(t+=1),e.lesionLocation<=1||(5==e.lesionLocation?t+=2:t+=4),t>=12?17.8:t>=11?7.2:t>=10?5.3:t>=9?4.3:t>=8?3.2:t>=7?2.4:t>=6?1.7:t>=5?1.3:t>=4?.9:t>=3?.7:.4}var q={"Middle Cerebral Artery":{"3-4":.23,"5-6":.31,"7-9":1.56,"10-24":4.11,">25":16.87},"Anterior Communicating Artery":{"3-4":.9,"5-6":.75,"7-9":1.97,"10-24":5.24,">25":39.77},"Internal Carotid Artery":{"3-4":.14,"5-6":0,"7-9":1.19,"10-24":1.07,">25":10.61},"Posterior Communicating Artery":{"3-4":.41,"5-6":1,"7-9":3.19,"10-24":6.12,">25":126.97},"Basilar Tip":{"3-4":.23,"5-6":.46,"7-9":.97,"10-24":6.94,">25":117.82},"Superior Cerebellar Artery":{"3-4":.23,"5-6":.46,"7-9":.97,"10-24":6.94,">25":117.82},"Other Posterior":{"3-4":.23,"5-6":.46,"7-9":.97,"10-24":6.94,">25":117.82},Other:{"3-4":.78,"5-6":1.37,"7-9":0,"10-24":2.81,">25":0},Total:{"3-4":.36,"5-6":.5,"7-9":1.69,"10-24":4.37,">25":33.4}};function J(e,t){var a="";switch(parseInt(e)){case 1:a="Internal Carotid Artery";break;case 2:a="Anterior Cerebral Artery";break;case 3:a="Anterior Communicating Artery";break;case 5:a="Middle Cerebral Artery";break;case 6:a="Posterior Communicating Artery";break;case 7:a="Basilar Tip";break;case 8:a="Other Posterior Circulation";break;default:a="Total"}var n="3-4";return t>=4.5&&t<6.5?n="5-6":t>=6.5&&t<9.5?n="7-9":t>=9.5&&t<24.5?n="10-24":t>=24.6&&(n=">25"),q[a][n]}var U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={patient:a.props.patient,phasesRaw:0,phasesPercent:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({phasesPercent:G(this.props.patient)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,Object(E.a)({container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},"spacing",24),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{component:"h2",variant:"h4"},"PHASES")),r.a.createElement(b.a,{item:!0,xs:12,sm:6,container:!0,justify:"center",alignItems:"stretch",direction:"column"},r.a.createElement(f.a,{variant:"h6",justify:"center"},"Risk of Rupture in Next 5 Years:"),r.a.createElement(f.a,{variant:"h3"},G(this.state.patient),"%"),r.a.createElement(R.a,{variant:"determinate",value:this.state.phasesPercent})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"caption"},"Score based on age, ethnicity, aneurysm size, aneurysm location, presence of hypertension, and history of subarachnoid hemorrhage."))))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:24,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{component:"h2",variant:"h4"},"ISUIA")),r.a.createElement(b.a,{item:!0,xs:12,sm:6,container:!0,justify:"flex-end",alignItems:"stretch",direction:"column"},r.a.createElement(f.a,{variant:"h6",justify:"center"},"Risk of Rupture in Next 5 Years:"),r.a.createElement(f.a,{variant:"h3"},function(e,t,a){var n="anterior";7===e||8===e?n="posterior":9===e&&(n="cca");var r="xsmall";if(t>7?r="small":t>12?r="medium":t>24&&(r="large"),"xsmall"===r){var i=!0===a?"group1":"group2";return Y[r][n][i]}return Y[r][n]}(this.state.patient.lesionLocation,this.state.patient.lesionLocation,this.state.patient.hxSAH),"%"),r.a.createElement(R.a,{variant:"determinate",value:this.state.phasesPercent})),"  ",r.a.createElement(b.a,{item:!0,container:!0,xs:12,sm:6,justify:"center",alignItems:"stretch",direction:"column"},r.a.createElement(f.a,{variant:"h6"},"Risk of Bad Neurological Outcome After 1 Years with Endovascular Treatment:"),r.a.createElement(f.a,{variant:"h3"},z(this.state.patient.age,this.state.patient.lesionLocation,this.state.patient.lesionDiameter),"%"),r.a.createElement(R.a,{variant:"determinate",value:z(this.state.patient.age,this.state.patient.lesionLocation,this.state.patient.lesionDiameter)})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"caption"},"Score based on aneurysm size, aneurysm location, and history of subarachnoid hemorrhage."))))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(x.a,null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{component:"h2",variant:"h4"},"UCAS")),r.a.createElement(b.a,{item:!0,xs:12,sm:6,container:!0,justify:"center",alignItems:"stretch",direction:"column"},r.a.createElement(f.a,{variant:"h6",justify:"center"},"Risk of Rupture in Next 5 Years:"),r.a.createElement(f.a,{variant:"h3"},J(this.state.patient.lesionLocation,this.state.patient.lesionDiameter),"%"),r.a.createElement(R.a,{variant:"determinate",value:J(this.state.patient.lesionLocation,this.state.patient.lesionDiameter)})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"caption"},"Score based on aneurysm size and aneurysm location.")))))))}}]),t}(r.a.Component),V=a(150),Q=a.n(V),$=a(151),K=a.n($),X=a(152),Z=a.n(X),ee=a(73),te=a.n(ee),ae=a(72),ne=a.n(ae),re=a(71),ie=a.n(re),le=a(70),oe=a.n(le),se=a(74),ce=a.n(se),me=a(238),ue=a.n(me),he=a(239),pe=a.n(he),de=a(240),Ee=a.n(de),ge=a(241),fe=a.n(ge),ye=a(242),be=a.n(ye),ve=a(145),xe=a.n(ve),ke=a(68),we=a.n(ke),je=a(56),Oe=a.n(je),Ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isLarge:window.innerWidth>600,risk:"undefined"!==typeof a.props.match.params.risk?a.props.match.params.risk:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.addEventListener("resize",function(){e.setState({isLarge:window.innerWidth>600,risk:"undefined"!==typeof e.props.match.params.risk?e.props.match.params.risk:""})},!1)}},{key:"render",value:function(){var e=this.state.isLarge?"large":"";return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:16,className:"norm_padding"},r.a.createElement(b.a,{item:!0,container:!0,justify:"start",xs:12},r.a.createElement(f.a,{variant:"h3",className:"landing-title"},"I have an aneurysm.")),r.a.createElement(b.a,{item:!0,container:!0,justify:"start",xs:12},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0,className:"landing-subtitle"},"What do I do now?")),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"body2",gutterBottom:!0,className:"limit_md landing-welcome"},"Being diagnosed with an aneurysm can be overwhelming. This guide has the essential information to help you understand aneurysms and how they are treated.")),r.a.createElement(b.a,{className:"landing_block first",item:!0,xs:12,container:!0,justify:"flex-end"},r.a.createElement("img",{src:ue.a,className:e}),r.a.createElement("div",{className:e+" landing_img_text"},r.a.createElement("p",{className:"supertitle"},"BASICS:"),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"What you need to know:"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"Cerebral aneurysms",r.a.createElement(xe.a,{className:"inline-icon",color:"primary",onClick:this.setState()}),"are a problem with blood vessels in the brain. For some people, they can cause problems, but for most people, they will not."),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"2 kinds of problems caused by aneurysms:",r.a.createElement("ul",null,r.a.createElement("li",null,"they can cause headaches and other issues like blurred vision, weakness, numbness, or difficulty speaking."),r.a.createElement("li",null,"they can ",r.a.createElement("b",null,"rupture"),", causing a bleed in the brain that can be deadly or cause permanent brain damage."))),r.a.createElement(f.a,{variant:"body1",paragraph:!0},r.a.createElement("b",null,"Aneurysms are treatable"),", and your provider will work with you to determine the best plan for you."))),r.a.createElement(b.a,{item:!0,container:!0,xs:12,alignItems:"center",className:"landing_block",direction:"row"},r.a.createElement(b.a,{item:!0,xs:12,sm:6,className:"norm_padding"},r.a.createElement("img",{src:pe.a,className:"limit_md grid_img"})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,className:"landing_text_block"},r.a.createElement("p",{className:"supertitle"},"DEFINITION:"),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"What is an aneurysm?"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"An aneurysm is an abnormal growth from the wall of the blood vessels in the brain. About 3% of people have an aneurysm."),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"How do aneurysms cause problems?"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"Some anerysms will grow large and press on the brain causing headaches and other neurological issues that people may experience. The wall of the aneurysm may also be weak compared the wall of normal blood vessels. For this reason, they can rupture and leak blood into the brain."))),r.a.createElement(b.a,{item:!0,container:!0,xs:12,className:"landing_block",alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:12,sm:8,className:"landing_text_block"},r.a.createElement("p",{className:"supertitle"},"QUESTION:"),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"Should I do something about it?"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"Studies have been done that help doctors predict which aneurysms may cause problems. Although it might seem like a good idea to treat all aneurysms just in case, the treatments themselves can cause problems, or complications. For this reason, the risk and benefits of treatment must be balanced, and this balance will be different for every person."),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"When you meet the doctor who will manage your aneurysm, you will discuss the risks and benefits of treating or not treating your aneurysm.")),""!=this.state.risk?r.a.createElement(b.a,{item:!0,xs:12,sm:4,container:!0,justify:"space-between",alignItems:"stretch",direction:"column",className:"norm_padding"},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(f.a,{variant:"h6",justify:"center"},"My Risk of Rupture in Next 5 Years:"),r.a.createElement(f.a,{variant:"h3",justify:"center",color:"primary",className:"big-number"},this.state.risk.replace("_"," ")),r.a.createElement(f.a,{variant:"caption"},"based on age, ethnicity, aneurysm size, aneurysm location, presence of hypertension, and history of subarachnoid hemorrhage."))):r.a.createElement(b.a,{item:!0,xs:12,sm:4,container:!0,justify:"space-between",alignItems:"stretch",direction:"column",className:"norm_padding"},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"What is my risk of rupture?"),r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"Your doctor will review your records to determine what your risk of rupture might be based on your medical history and the appearance of your aneurysm.")))),r.a.createElement(b.a,{item:!0,container:!0,className:"landing_block"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("p",{className:"supertitle"},"MANAGEMENT:"),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"What are my options?"),r.a.createElement(f.a,{variant:"body1",className:"limit_lg",gutterBottom:!0,paragraph:!0},"The best option for you will depend on how likely it is that your aneurysm will rupture balanced against your individual needs and the risks of surgery.")),r.a.createElement(b.a,{item:!0,container:!0,spacing:24},r.a.createElement(b.a,{item:!0,xs:12,sm:4,md:4,container:!0,alignItems:"stretch"},r.a.createElement(oe.a,null,r.a.createElement(ie.a,null,r.a.createElement(ne.a,{component:"img",image:fe.a,title:"Do Nothing"}),r.a.createElement(te.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Healthy Living"),r.a.createElement(f.a,{gutterBottom:!0,variant:"subtitle2",component:"h2"},"Goal: forget it's there"),r.a.createElement(f.a,{component:"p"},"Some aneurysms are so unlikely to rupture that testing or intervention is more likely to cause harm. For these, it is best to do nothing at all beyond living healthfully, including avoiding smoking and ensuring blood pressure and cholesterol are under control."))),r.a.createElement(ce.a,null,r.a.createElement(I.a,{size:"small",style:{"margin-left":"auto"}},"Learn More")))),r.a.createElement(b.a,{item:!0,xs:12,sm:4,md:4,container:!0,alignItems:"stretch"},r.a.createElement(oe.a,null,r.a.createElement(ie.a,null,r.a.createElement(ne.a,{component:"img",image:be.a,title:"Watchful Waiting"}),r.a.createElement(te.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Watch and Wait"),r.a.createElement(f.a,{gutterBottom:!0,variant:"subtitle2",component:"h2"},"Goal: collect more data"),r.a.createElement(f.a,{component:"p"},"For some aneurysms with a low risk of rupture, it is best not to perform a risky procedure. However, it can be helpful to wait some time and then test again to see whether the anuerysm is growing - a sign that the anuerysm is more likely to rupture."))),r.a.createElement(ce.a,null,r.a.createElement(I.a,{size:"small",style:{"margin-left":"auto"}},"Learn More")))),r.a.createElement(b.a,{item:!0,xs:12,sm:4,container:!0,alignItems:"stretch"},r.a.createElement(oe.a,null,r.a.createElement(ie.a,{href:"#/about-surg"},r.a.createElement(ne.a,{component:"img",image:Ee.a,title:"Surgical Intervention"}),r.a.createElement(te.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Have Surgery"),r.a.createElement(f.a,{gutterBottom:!0,variant:"subtitle2",component:"h2"},"Goal: decrease rupture risk"),r.a.createElement(f.a,{component:"p"},"For anuerysms that are more likely to rupture, it may be worth the risk to do surgery to treat the aneurysm. The intent of these surgeries is to reduce the risk of rupture in the future."))),r.a.createElement(ce.a,{style:{"margin-top":"auto"}},r.a.createElement(I.a,{size:"small",style:{"margin-left":"auto"},href:"#/about-surg"},"Learn More")))),r.a.createElement(b.a,{item:!0,container:!0,xs:12,justify:"flex-end"},r.a.createElement(I.a,{href:"#/options",color:"primary",size:"large",variant:"outlined"},"See Comparison",r.a.createElement(we.a,null))))),r.a.createElement(b.a,{item:!0,xs:12,className:"landing_block"},r.a.createElement("p",{className:"supertitle"},"GENERAL:"),r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"Common Questions:"),r.a.createElement(Q.a,null,r.a.createElement(K.a,{expandIcon:r.a.createElement(Oe.a,null)},r.a.createElement(f.a,{variant:"subtitle1"},"Where can I get more information?")),r.a.createElement(Z.a,null,r.a.createElement(f.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),r.a.createElement(Q.a,null,r.a.createElement(K.a,{expandIcon:r.a.createElement(Oe.a,null)},r.a.createElement(f.a,{variant:"subtitle1"},"What happens if you have a stroke?")),r.a.createElement(Z.a,null,r.a.createElement(f.a,null,"2 types of strokes:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Hemorrhagic Stroke:"),"a brain bleed."),r.a.createElement("li",null,r.a.createElement("b",null,"Ischemic Stroke:"),"when part of the brain has its blood supply cut off."))))))))}}]),t}(r.a.Component),Ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h2"},"Be sure to ask:")),r.a.createElement(b.a,{item:!0,xs:12,sm:10},r.a.createElement(f.a,{variant:"h3",align:"right"},'"Why have you chosen this treatment for me?"')))," ")}}]),t}(r.a.Component),Se=a(243),Ae=a(244),Be=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={patient:a.props.patient},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:24,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement("p",null,"paper1"),r.a.createElement(Ae.ResponsivePie,{data:[{id:"Nothing",label:"Nothing",value:90,color:"hsl(84, 70%, 50%)"},{id:"SAH",label:"SAH",value:10,color:"hsl(100, 70%, 50%)"}]}))),r.a.createElement(b.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement(Se.ResponsiveBar,{data:[{Outcome:"Intervention",Nothing:90,"Subarachnoid Hemorrhage":10},{Outcome:"Intervention",Nothing:95,"Subarachnoid Hemorrhage":5}]})))))}}]),t}(r.a.Component),Ie=a(103),_e=a.n(Ie),Le=a(105),Te=a.n(Le),We=a(10),Pe=a.n(We),He=a(104),De=a.n(He),Me=a(33),Re=a.n(Me),Fe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(I.a,{variant:"outlined",href:"#/landing",color:"primary"},"Back"),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h3"},"Compare Your Options")),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(_e.a,{className:"options-table"},r.a.createElement(De.a,null,r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,null),r.a.createElement(Pe.a,null,"Do Nothing"),r.a.createElement(Pe.a,null,"Watchful Waiting"),r.a.createElement(Pe.a,null,"Surgical Intervention"))),r.a.createElement(Te.a,null,r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Goal"),r.a.createElement(Pe.a,null,"Return to normal life."),r.a.createElement(Pe.a,null,"Get more information through time to determine risk of rupture."),r.a.createElement(Pe.a,null,"Decrease risk of rupture.")),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Medical Benefits"),r.a.createElement(Pe.a,null,"No risk of complications from testing or surgery."),r.a.createElement(Pe.a,null,"Avoid risk of surgery while collecting more information to determine risk of rupture."),r.a.createElement(Pe.a,null,"Decreases risk of rupture.")),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Medical Risks"),r.a.createElement(Pe.a,null,"Does not decrease risk of rupture."),r.a.createElement(Pe.a,null,"Does not decrease risk of rupture. Some risk of complications with testing.",r.a.createElement("br",null),r.a.createElement("a",{href:"#/imaging_complications"},"See Complications")),r.a.createElement(Pe.a,null,"Some risk of complications with surgery. ",r.a.createElement("br",null),r.a.createElement("a",{href:"#/about-surg"},"Learn About Surgery"))),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Lifestyle Benefits"),r.a.createElement(Pe.a,null,"No need for further followup or testing."),r.a.createElement(Pe.a,null,"Testing can be scheduled flexibly and does not require staying at the hospital. Provides peace of mind to some patients."),r.a.createElement(Pe.a,null,"Provides peace of mind to some patients after surgery.")),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Lifestyle Risks"),r.a.createElement(Pe.a,null,"Some patients continue to be anxious about rupture."),r.a.createElement(Pe.a,null,"Repeated testing can be inconvenient."),r.a.createElement(Pe.a,null,"Surgery requires an overnight stay at the hospital for most patients as well as followup testing.",r.a.createElement("br",null),r.a.createElement("a",{href:"#/landing"},"See Typical Hospital Course ")))))),r.a.createElement(b.a,{item:!0,container:!0,justify:"flex-end",xs:12},r.a.createElement(I.a,{href:"#/options2"},"OptionsV2"))))}}]),t}(r.a.Component),ze=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:8,className:"norm_padding"},r.a.createElement(I.a,{variant:"outlined",href:"#/landing",color:"primary"},"Back"),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h3"},"Compare Your Options")),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(_e.a,{className:"options-table"},r.a.createElement(De.a,null,r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,null),r.a.createElement(Pe.a,null,"Do Nothing"),r.a.createElement(Pe.a,null,"Watchful Waiting"),r.a.createElement(Pe.a,null,"Surgical Intervention"))),r.a.createElement(Te.a,null,r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Medical Visits"),r.a.createElement(Pe.a,null,"Normal healthcare visits with primary care physicians."),r.a.createElement(Pe.a,null,"Imaging tests at the hospital several times per year."),r.a.createElement(Pe.a,null,"Surgery at the hospital. Most patients will stay overnight. Imaging tests at the hospital and a followup visit.")),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Good Outcome"),r.a.createElement(Pe.a,null,"No symptoms from aneurysm."),r.a.createElement(Pe.a,null,"No symptoms from aneurysm. If anuerysm does not grow, can stop doing tests and transfer to 'Do Nothing'"),r.a.createElement(Pe.a,null,"No symptoms. Aneurysm cured.")),r.a.createElement(Re.a,{hover:!0},r.a.createElement(Pe.a,{component:"th",scope:"row"},"Bad Outcome"),r.a.createElement(Pe.a,null,"Subarachnoid hemorrhage - a brain bleed. Frequently disabling or deadly. Likelihood depends on the aneurysm."),r.a.createElement(Pe.a,null,"Subarachnoid hemorrhage - a brain bleed. Frequently disabling or deadly. Likelihood depends on the aneurysm."),r.a.createElement(Pe.a,null,"Ischemic stroke during surgery. A clot can form in the brain and cut off blood flow. Can be disabling or rarely deadly. Occurs in about 7% of cases."))))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"How do I know whether I will have a good or bad outcome?"),r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"Studies have been done...")),r.a.createElement(b.a,{item:!0,container:!0,justify:"flex-end",xs:12},r.a.createElement(I.a,{href:"#/options"},"OptionsV1"))))}}]),t}(r.a.Component),Ye=a(102),Ge=a.n(Ye),qe=a(245),Je=a.n(qe),Ue=a(246),Ve=a.n(Ue),Qe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isLarge:window.innerWidth>600,coilExp:!1,clipExp:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.addEventListener("resize",function(){e.setState({isLarge:window.innerWidth>600})},!1)}},{key:"toggleCoilExp",value:function(){this.setState({coilExp:!this.state.coilExp})}},{key:"toggleClipExp",value:function(){this.setState({clipExp:!this.state.clipExp})}},{key:"render",value:function(){var e=this;this.state.isLarge;return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:16,className:"norm_padding"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h2"},"What is the surgery like?"),r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},"Learn more about the risks and benefits of surgery:")),r.a.createElement(b.a,{item:!0,xs:12,className:"landing_block"},r.a.createElement(f.a,{variant:"title",gutterBottom:"true"},"There are 2 surgical options:"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"Your provider will determine which option is better for you.")),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(f.a,{variant:"title",gutterBottom:"true"},"Endovascular Surgery"),r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:"true"},"A surgery done from within the blood vessels."),r.a.createElement("img",{src:Je.a}),r.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(f.a,{variant:"body1"},r.a.createElement("b",null,"Procedure:"),"takes about 45 minutes."),r.a.createElement(I.a,{onClick:function(){return e.toggleCoilExp()}},r.a.createElement(Oe.a,null))),r.a.createElement(Ge.a,{in:this.state.coilExp,timeout:"auto",unmountOnExit:!0},r.a.createElement(f.a,null,r.a.createElement("ol",null,r.a.createElement("li",null,"Arrive to operating room where sedating medications are given."),r.a.createElement("li",null,"Catheter is inserted in an artery in the leg. A catheter is a small, flexible tube."),r.a.createElement("li",null,"Catheter travels through the arteries in the body to the aneurysm."),r.a.createElement("li",null,"Metal coils are placed in the aneurysm through the catheter. The aneurysm is packed fully with coils."),r.a.createElement("li",null,"The catheter is removed, leaving the coils behind.")))),r.a.createElement(f.a,{variant:"body1"},r.a.createElement("b",null,"Recovery:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Stay overnight in hospital intensive care unit with leg immobilized. You will be awake."),r.a.createElement("li",null,"A small scar will may form on the inner thigh where the catheter was placed."),r.a.createElement("li",null,"Brain imaging and then clinic visit several weeks after to ensure that the aneurysm has been cured."))))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(x.a,{className:"norm_padding"},r.a.createElement(f.a,{variant:"title",gutterBottom:"true"},"Open Surgery"),r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:"true"},"A surgery done throuh an opening made in the skull."),r.a.createElement("img",{src:Ve.a}),r.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(f.a,{variant:"body1"},r.a.createElement("b",null,"Procedure:"),"takes about 3 hours."),r.a.createElement(I.a,{onClick:function(){return e.toggleClipExp()}},r.a.createElement(Oe.a,{className:this.state.clipExp?"rotate-180 now":"rotate-180"}))),r.a.createElement(Ge.a,{in:this.state.clipExp,timeout:"auto",unmountOnExit:!0},r.a.createElement(f.a,{variant:"body1"},r.a.createElement("ol",null,r.a.createElement("li",null,"Arrive to operating room where you will put to sleep under general anesthesia"),r.a.createElement("li",null,"An opening is made by removing some of the bone in the skull."),r.a.createElement("li",null,"The brain is spread so that the surgeon can see the aneurysm."),r.a.createElement("li",null,"A metal clip is placed around the aneurysm, pinching it closed from the artery."),r.a.createElement("li",null,"All tools are removed, leaving the clip behind."),r.a.createElement("li",null,"The bone that was removed earlier is put back and fixed in place with screws, closing the opening in the skull.")))),r.a.createElement(f.a,{variant:"body1"},r.a.createElement("b",null,"Recovery:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Stay for a few days in the hospital beginning in the intensive care unit and then moving to a normal hospital room when you are stable."),r.a.createElement("li",null,"A scar may form at where the skin was cut to make an opening in the skull. Hair may have been cut to decrease the risk of infection."),r.a.createElement("li",null,"Brain imaging and then clinic visit several weeks after to ensure that the aneurysm has been cured."))))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"title",gutterBottom:!0},"Risks of Surgery:"),r.a.createElement(f.a,{variant:"body1",paragraph:!0},"Although the two surgery options are different, the kinds of risks associated with them include:",r.a.createElement("ul",null,r.a.createElement("li",null,"Bleeding during surgery."),r.a.createElement("li",null,"Stroke after surgery."),r.a.createElement("li",null,"Infection in the brain."))))))}}]),t}(r.a.Component),$e=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{path:"/home",render:function(t){return r.a.createElement(D,{updatePatient:function(){return e.props.updatePatient},patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/scores",render:function(t){return r.a.createElement(U,{patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/landing/:risk?",render:function(t){return r.a.createElement(Ce,Object.assign({patient:e.props.patient},t))}}),r.a.createElement(d.a,{path:"/defer",render:function(t){return r.a.createElement(Ne,{patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/risks",render:function(t){return r.a.createElement(Be,{patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/options",render:function(t){return r.a.createElement(Fe,{patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/options2",render:function(t){return r.a.createElement(ze,{patient:e.props.patient})}}),r.a.createElement(d.a,{path:"/about-surg",render:function(t){return r.a.createElement(Qe,{patient:e.props.patient})}})))}}]),t}(r.a.Component),Ke=a(32),Xe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,alignContent:"center",className:"header norm_padding"},r.a.createElement(b.a,{item:!0,xs:12,sm:7},r.a.createElement(f.a,{variant:"h5",color:"primary",gutterBottom:!0},"Aneurysm Patient Support Tool")),r.a.createElement(b.a,{container:!0,justify:"flex-end",item:!0,xs:12,sm:5},r.a.createElement(I.a,{href:"#/landing",color:"primary",variant:"outlined"},"Home"),r.a.createElement(I.a,{href:"#/home",color:"primary",variant:"outlined",style:{"margin-left":"24px"}},"Provider"))))}}]),t}(r.a.Component),Ze=Object(Ke.createMuiTheme)({palette:{primary:{main:"#E64C3C"},secondary:{main:"#EEE"}}}),et=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={patient:{lesionLocation:null,lesionDiameter:0,age:null,htn:!1,hxSAH:!1,ethnicity:null},phasesRaw:0,phasesPercent:0},a.updatePatient=a.updatePatient.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updatePatient",value:function(e){this.setState({patient:e}),this.calculatePhases()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app_background"},r.a.createElement(Ke.MuiThemeProvider,{theme:Ze},r.a.createElement(x.a,{className:"app_container"},r.a.createElement(Xe,null),r.a.createElement($e,{updatePatient:function(){return e.updatePatient()},patient:this.state.patient}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,2,1]]]);
//# sourceMappingURL=main.99976309.chunk.js.map