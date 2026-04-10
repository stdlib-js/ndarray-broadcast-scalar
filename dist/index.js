"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var g=m(function(j,y){"use strict";var d=require("@stdlib/assert-has-own-property"),p=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),q=require("@stdlib/assert-is-empty-collection"),c=require("@stdlib/assert-is-nonnegative-integer-array").primitives,b=require("@stdlib/array-base-assert-is-accessor-array"),E=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-number").isPrimitive,A=require("@stdlib/assert-is-boolean").isPrimitive,L=require("@stdlib/assert-is-complex-like"),O=require("@stdlib/array-base-accessor-setter"),T=require("@stdlib/array-zeros"),_=require("@stdlib/array-base-setter"),x=require("@stdlib/ndarray-base-buffer"),D=require("@stdlib/ndarray-ctor"),s=require("@stdlib/ndarray-defaults"),P=require("@stdlib/complex-dtype"),l=require("@stdlib/string-format"),C=s.get("order"),N=s.get("dtypes.real_floating_point"),F=s.get("dtypes.complex_floating_point"),R=s.get("dtypes.boolean");function S(a,e,i){var t,n,o,u,r,v,f;if(t={dtype:"",order:C,readonly:!1},!c(e)&&!q(e))throw new TypeError(l("invalid argument. Second argument must be an array of nonnegative integers. Value: `%s`.",e));if(arguments.length>2){if(i=arguments[2],!E(i))throw new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",i));d(i,"dtype")&&(t.dtype=i.dtype),d(i,"order")&&(t.order=i.order),d(i,"readonly")&&(t.readonly=i.readonly)}if(o=w(a),t.dtype===""?o?r=N:A(a)?r=R:L(a)?(r=P(a),r===null&&(r=F)):r="generic":r=t.dtype,n=x(r,1),n===null)throw new TypeError(l("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",r));return p(r)&&o?v=[a,0]:v=a,b(n)?u=O(r):u=_(r),u(n,0,v),f=e.length||1,new D(r,n,e,T(f),0,t.order,t)}y.exports=S});var U=g();module.exports=U;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
