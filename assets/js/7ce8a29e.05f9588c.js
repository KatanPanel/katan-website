(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return v})),n.d(t,"metadata",(function(){return w})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return y}));var a=n(3),r=n(8),l=n(0),i=n.n(l),o=n(90),c=n(98),s=n(91),u=n(77),b=n.n(u);var d=37,p=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,o=e.groupId,u=e.className,m=Object(c.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(l.useState)(a),w=v[0],O=v[1],j=l.Children.toArray(e.children),y=[];if(null!=o){var g=f[o];null!=g&&g!==w&&r.some((function(e){return e.value===g}))&&O(g)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=r[n].value;O(a),null!=o&&(h(o,a),setTimeout((function(){var e,n,a,r,l,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((function(){return t.classList.remove(b.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case d:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},r.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:Object(s.a)("tabs__item",b.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?Object(l.cloneElement)(j.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var f=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],v={id:"install-windows",title:"Install Katan CLI on Windows",sidebar_position:3},w={unversionedId:"cli/install-and-run/install-windows",id:"cli/install-and-run/install-windows",isDocsHomePage:!1,title:"Install Katan CLI on Windows",description:"Katan CLI has an executable made exclusively to run on Windows, to use it just download it and run it.",source:"@site/docs/cli/install-and-run/install-windows.mdx",sourceDirName:"cli/install-and-run",slug:"/cli/install-and-run/install-windows",permalink:"/docs/cli/install-and-run/install-windows",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/cli/install-and-run/install-windows.mdx",version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1630127484,formattedLastUpdatedAt:"8/28/2021",sidebarPosition:3,frontMatter:{id:"install-windows",title:"Install Katan CLI on Windows",sidebar_position:3},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/cli/install-and-run/introduction"}},O=[{value:"Install with PowerShell",id:"install-with-powershell",children:[]},{value:"Run the Katan CLI",id:"run-the-katan-cli",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Next steps",id:"next-steps",children:[]}],j={toc:O};function y(e){var t=e.components,n=Object(r.a)(e,h);return Object(o.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Katan CLI has an executable made exclusively to run on Windows, to use it just download it and run it."),Object(o.b)("p",null,"The Windows executable that we all know ",Object(o.b)("inlineCode",{parentName:"p"},".exe")," is available in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/KatanPanel/katan-cli/releases"},"Official Katan CLI repository")," for anyone to download. You can change the version by changing the installation address to your preferred version."),Object(o.b)("h2",{id:"install-with-powershell"},"Install with PowerShell"),Object(o.b)("p",null,"Let's download the executable via PowerShell's ",Object(o.b)("inlineCode",{parentName:"p"},"Invoke-WebRequest")," or ",Object(o.b)("inlineCode",{parentName:"p"},"curl")," at the command prompt, choose whichever you prefer."),Object(o.b)(m,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Windows Command Prompt",value:"command-prompt"}],mdxType:"Tabs"},Object(o.b)(f,{value:"powershell",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-powershell"},'Invoke-WebRequest "https://github.com/KatanPanel/katan-cli/releases/download/latest/katan-cli-mingwX64.exe" -Outfile katan.exe\n')),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-Outfile")," changes the name of the executable file."))),Object(o.b)(f,{value:"command-prompt",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"curl -L -o katan.exe https://github.com/KatanPanel/katan-cli/releases/latest/main/katan-cli-mingwX64.exe\n")),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-o")," changes the name of the executable file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-L")," follow URL redirections.")))),Object(o.b)("h2",{id:"run-the-katan-cli"},"Run the Katan CLI"),Object(o.b)("p",null,"Now that installation is complete, you can finally enjoy all that Katan CLI has to offer.\nRun the ",Object(o.b)("inlineCode",{parentName:"p"},"katan version")," command to see what version has been installed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"katan version\n")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"If you encounter a problem installing the CLI, report the issue in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/KatanPanel/katan-cli/issues"},"Github issues")," and we will help you."),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,"Installation ok, everything worked as expected!? Perfect, now it's nice that you learn to use Katan CLI commands to manage your servers effectively."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Getting started with Katan CLI")))}y.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},98:function(e,t,n){"use strict";var a=n(0),r=n(99);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r}}]);