(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3fd9260"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},2880:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var r=n("7a23");n("99af"),n("5319");function a(e){return e.replace(/(\n[\s\t]*\r*\n)/g,"\n").replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g,"")}var c=function(e){var t=e.ref,n=e.search,r=e.formatterValue,c=e.alignCenter,u=e.showSerialNumber,o="<template>\n    <base-element-table\n        ".concat(t?'ref="'.concat(t,'"'):"","\n        ").concat(n?"search":"","\n        ").concat(c?"alignCenter":"","\n        ").concat(r?"formatterValue":"","\n        ").concat(u?"showSerialNumber":"","\n    >\n\n    </base-element-table>\n<template>");return a(o)},u=(n("00b4"),n("d9e2"),"blur"),o="change",i={string:"string",number:"number",boolean:"boolean",method:"method",regexp:"regexp",integer:"integer",float:"float",array:"array",object:"object",enum:"enum",date:"date",url:"url",hex:"hex",email:"email"},l={validate:function(e,t,n){t&&!e.pattern.test(t)?(console.warn(e),n(new Error(e.message))):n()},newValidate:function(e,t,n){t&&e.pattern.test(t)?(console.warn(e),n(new Error(e.message))):n()}},d={validate:function(e,t,n){t&&!e.pattern.test(t)?(console.warn(e),n(new Error(e.message))):n()},specialCharacters:function(e){return 1==Object({NODE_ENV:"production",BASE_URL:"/template/"}).VUE_APP_ENCRYPTION?{pattern:/[~！@#￥%……&*!$^&_\\']/im,validator:l.newValidate,message:"".concat(e,"不能输入特殊字符"),trigger:"change"}:{}},requireDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.date;return{type:t,required:!0,message:"请选择".concat(e),trigger:o}},requireString:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.string;return{type:t,required:!0,message:"请选择".concat(e),trigger:o}},requireNumber:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.number;return{type:t,required:!0,message:"请输入".concat(e),trigger:u}},requireArray:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.array;return{type:t,required:!0,message:"请选择".concat(e),change:o}},required:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.string;return{type:t,required:!0,message:"请输入".concat(e),trigger:u}},require:function(e){return{required:!0,message:"请输入".concat(e),trigger:u}},requireClick:function(e){return{required:!0,message:"请上传".concat(e)}},requireChange:function(e){return{required:!0,message:"请选择".concat(e),change:o}},requireSelect:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.array;return{type:t,required:!0,message:"请选择".concat(e),change:o}},requireChangeFile:function(e){return{required:!0,message:"请上传".concat(e),change:o}},booleanV:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.boolean;return{type:t,required:!0,message:"请输入".concat(e),change:o}},money:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"最大14位（12位整数，2位小数）";return{pattern:/^\d{0,12}(\.\d{1,2})?$/,message:e,trigger:u}},name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"不能输入数字或特殊字符";return{pattern:/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,message:e,trigger:u}},interestRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"最大6位（4位整数，2位小数）";return{required:!0,pattern:/^\d{0,4}(\.\d{1,2})?$/,message:e,trigger:u}},email:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"邮箱格式不正确",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.string;return{type:t,pattern:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,message:e,trigger:u}},dateTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"长度2位，且必须为大于0的整数";return{required:!0,pattern:/^[1-9]{1,2}$/,message:e,trigger:u}},issue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"不能超过360期";return{required:!0,pattern:/^([1-9][0-9]?|[1-2][0-9][0-9]|[3][0-5][0-9]|360)$/,message:e,trigger:u}},idCard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"身份证格式不对";return{pattern:/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/,message:e,trigger:u}},bankCard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"输入正确的银行卡号";return{required:!0,pattern:/^(?!0)\d{8,28}$/,message:e,trigger:u}},chinese:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入汉字",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.string;return{type:t,pattern:/^[\u4e00-\u9fa5]+$/,message:e,trigger:u}},warehouseName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只支持输入文字、自然数和字母";return{pattern:/^[\u4E00-\u9FA5A-Za-z0-9]+$/,message:e,trigger:u}},chinaEng:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只支持中英文输入";return{pattern:/^[\u4E00-\u9FA5A-Za-z]+$/,message:e,trigger:u}},number:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入整数";return{pattern:/^\d*$/,message:e,trigger:u}},nums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入0和正整数";return{pattern:/^([1-9]\d*|[0]{1,1})$/,message:e,trigger:u}},num:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入大于0的整数";return{pattern:/^[1-9]\d*$/,message:e,trigger:u}},num8:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请输入8位正确的发票号码";return{pattern:/^\d{8}$/,message:e,trigger:u}},float:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入大于0的数字，最多两位小数";return{pattern:/(^[1-9](\d+)?(\.\d{0,2})?$)|(^\d\.\d{1,2}$)/,message:e,trigger:u}},floatDotThree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入大于0的数字，最多三位小数";return{pattern:/(^[1-9](\d+)?(\.\d{0,3})?$)|(^\d\.\d{1,2}$)/,message:e,trigger:u}},floatArea:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入大于等于0数字，最多两位小数";return{pattern:/(^[0-9](\d+)?(\.\d{0,2})?$)|(^\d\.\d{1,2}$)/,message:e,trigger:u}},phone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"输入正确的手机号码";return{pattern:/^1\d{10}$/,message:e,trigger:u}},allPhone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请输入正确的手机或座机号码";return{pattern:/^[1][3,4,5,6,7,8,9][0-9]{9}$|^0\d{2,3}-?\d{4,8}$/,message:e,trigger:u}},letterAndNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"必须包含字母和数字";return{pattern:/^(?![^a-zA-Z]+$)(?!\D+$)/,message:e,trigger:u}},pwd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"密码只能[字母+数字,字母+特殊字符，数字+特殊字符]";return{pattern:/^(?=.*[0-9])|((?=[\x21-\x7e]+)[^A-Za-z0-9])|^(?=.*[0-9])((?=[\x21-\x7e]+)[^A-Za-z0-9])$/gi,message:e,trigger:u}},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"密码只能6~20位包含大写字母、小写字母、数字、标点符号(除空格)至少两种";return{pattern:/(?!.*[\u4E00-\u9FA5\s])(?!^[a-z]+$)(?!^[A-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,20}$/g,message:e,trigger:u}},range:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.string,r=arguments.length>3?arguments[3]:void 0;return{type:n,min:e,max:t,message:r||"长度在 ".concat(e," 到 ").concat(t),trigger:u}},longitudeLatitude:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"只能输入大于0的数字，最多两位小数";return{pattern:/(^[1-9](\d+)?(\.\d{0,6})?$)|(^\d\.\d{1,2}$)/,message:e,trigger:u}},includeSpace:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"不能包含空格";return{pattern:/^\S+$/,message:e,trigger:u}},beforeAfterIncludeSpace:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"首尾不能包含空格";return{pattern:/^\S.*\S$|(^\S{0,1}\S$)/,message:e,trigger:u}}},g=Object(r["n"])("添加"),s=Object(r["n"])("重置"),f=Object(r["n"])("            "),b={class:"javascript"},j=Object(r["n"])("\n        "),O=Object(r["p"])({setup:function(e){Object(r["B"])((function(){}));var t=Object(r["I"])({ref:"table",search:!0,alignCenter:!0,formatterValue:!0,showSerialNumber:!1}),n=Object(r["I"])({}),a=Object(r["J"])(),u=Object(r["I"])({label:"",prop:"",width:""}),o=Object(r["I"])({label:[d.required("表格标题")],prop:[d.required("表格属性")],width:[d.required("表格宽度"),d.nums()]}),i=[],l=function(){a.value.validate().then((function(e){i.push(e)})).catch((function(e){return console.log(e)}))},O=function(){a.value.resetFields()},p=Object(r["i"])((function(){return c(t)}));return function(e,c){var i=Object(r["M"])("a-input"),d=Object(r["M"])("a-form-item"),v=Object(r["M"])("a-col"),h=Object(r["M"])("a-switch"),m=Object(r["M"])("a-row"),$=Object(r["M"])("a-form"),_=Object(r["M"])("a-card"),w=Object(r["M"])("a-button"),q=Object(r["M"])("a-space"),Y=Object(r["N"])("highlight");return Object(r["E"])(),Object(r["k"])(_,null,{default:Object(r["Y"])((function(){return[Object(r["o"])(_,{title:"基本信息",class:"margin-bottom-20"},{default:Object(r["Y"])((function(){return[Object(r["o"])($,{"label-col":{span:6},"wrapper-col":{span:18,offset:0},model:Object(r["T"])(t),rules:Object(r["T"])(n)},{default:Object(r["Y"])((function(){return[Object(r["o"])(m,{gutter:20},{default:Object(r["Y"])((function(){return[Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"组件引用名称",name:"ref"},{default:Object(r["Y"])((function(){return[Object(r["o"])(i,{value:Object(r["T"])(t).ref,"onUpdate:value":c[0]||(c[0]=function(e){return Object(r["T"])(t).ref=e}),placeholder:"请输入组件引用名称"},null,8,["value"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"显示搜索",name:"search"},{default:Object(r["Y"])((function(){return[Object(r["o"])(h,{checked:Object(r["T"])(t).search,"onUpdate:checked":c[1]||(c[1]=function(e){return Object(r["T"])(t).search=e})},null,8,["checked"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"内容居中",name:"alignCenter"},{default:Object(r["Y"])((function(){return[Object(r["o"])(h,{checked:Object(r["T"])(t).alignCenter,"onUpdate:checked":c[2]||(c[2]=function(e){return Object(r["T"])(t).alignCenter=e})},null,8,["checked"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"格式化内容",name:"formatterValue"},{default:Object(r["Y"])((function(){return[Object(r["o"])(h,{checked:Object(r["T"])(t).formatterValue,"onUpdate:checked":c[3]||(c[3]=function(e){return Object(r["T"])(t).formatterValue=e})},null,8,["checked"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"显示序号",name:"showSerialNumber"},{default:Object(r["Y"])((function(){return[Object(r["o"])(h,{checked:Object(r["T"])(t).showSerialNumber,"onUpdate:checked":c[4]||(c[4]=function(e){return Object(r["T"])(t).showSerialNumber=e})},null,8,["checked"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1}),Object(r["o"])(_,{title:"columns配置"},{default:Object(r["Y"])((function(){return[Object(r["o"])($,{ref_key:"columnsRef",ref:a,"label-col":{span:6},"wrapper-col":{span:18,offset:0},model:Object(r["T"])(u),rules:Object(r["T"])(o)},{default:Object(r["Y"])((function(){return[Object(r["o"])(m,{gutter:20},{default:Object(r["Y"])((function(){return[Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"表格标题",name:"label"},{default:Object(r["Y"])((function(){return[Object(r["o"])(i,{value:Object(r["T"])(u).label,"onUpdate:value":c[5]||(c[5]=function(e){return Object(r["T"])(u).label=e}),placeholder:"请输入表格标题"},null,8,["value"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"表格属性",name:"prop"},{default:Object(r["Y"])((function(){return[Object(r["o"])(i,{value:Object(r["T"])(u).prop,"onUpdate:value":c[6]||(c[6]=function(e){return Object(r["T"])(u).prop=e}),placeholder:"请输入表格属性"},null,8,["value"])]})),_:1})]})),_:1}),Object(r["o"])(v,{span:8},{default:Object(r["Y"])((function(){return[Object(r["o"])(d,{label:"表格宽度",name:"width"},{default:Object(r["Y"])((function(){return[Object(r["o"])(i,{value:Object(r["T"])(u).width,"onUpdate:value":c[7]||(c[7]=function(e){return Object(r["T"])(u).width=e}),placeholder:"请输入表格宽度"},null,8,["value"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"]),Object(r["o"])(m,{justify:"start"},{default:Object(r["Y"])((function(){return[Object(r["o"])(q,null,{default:Object(r["Y"])((function(){return[Object(r["o"])(w,{type:"primary",onClick:l},{default:Object(r["Y"])((function(){return[g]})),_:1}),Object(r["o"])(w,{type:"primary",onClick:O},{default:Object(r["Y"])((function(){return[s]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["Z"])((Object(r["E"])(),Object(r["l"])("pre",null,[f,Object(r["m"])("code",b,Object(r["P"])(Object(r["T"])(p)),1),j])),[[Y]])]})),_:1})}}});const p=O;t["default"]=p},"841c":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),c=n("825a"),u=n("1d80"),o=n("129f"),i=n("577e"),l=n("dc4a"),d=n("14c3");a("search",(function(e,t,n){return[function(t){var n=u(this),a=void 0==t?void 0:l(t,e);return a?r(a,t,n):new RegExp(t)[e](i(n))},function(e){var r=c(this),a=i(e),u=n(t,r,a);if(u.done)return u.value;var l=r.lastIndex;o(l,0)||(r.lastIndex=0);var g=d(r,a);return o(r.lastIndex,l)||(r.lastIndex=l),null===g?-1:g.index}]}))},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),c=n("d039"),u=n("e8b5"),o=n("861d"),i=n("7b0b"),l=n("07fa"),d=n("8418"),g=n("65f0"),s=n("1dde"),f=n("b622"),b=n("2d00"),j=f("isConcatSpreadable"),O=9007199254740991,p="Maximum allowed index exceeded",v=a.TypeError,h=b>=51||!c((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),m=s("concat"),$=function(e){if(!o(e))return!1;var t=e[j];return void 0!==t?!!t:u(e)},_=!h||!m;r({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,r,a,c,u=i(this),o=g(u,0),s=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?u:arguments[t],$(c)){if(a=l(c),s+a>O)throw v(p);for(n=0;n<a;n++,s++)n in c&&d(o,s,c[n])}else{if(s>=O)throw v(p);d(o,s++,c)}return o.length=s,o}})}}]);
//# sourceMappingURL=chunk-a3fd9260.d7c99099.js.map