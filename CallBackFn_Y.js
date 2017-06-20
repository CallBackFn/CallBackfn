// ................................................................
// 自己封装的基于jQuery的日历插件，css样式需要自己写
// 调用方式$.oEvent("id名");	传id就好使
//插件中定义了农历	
//左右按钮为自定义字体
// ................................................................

$.extend({
	oTemplate:function(id){
		var $a=$("<span><i class='icon iconfont' id='oDL'>&#xe680;</i> <li></li> <i class='icon iconfont' id='oDF'>&#xe67f;</i></span><ol><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><li>日</li></ol>");
		$(id).append($a)
	},
	getT:function(){
		return (new Date().getFullYear()+"-"+(new Date().getMonth()+1))
	},
	changeL:function(str,a){
		var w=str.split("-");
		var k=a==true?(w[1]-1<1?(w[0]-1)+"-12":w[0]+"-"+(w[1]-1)):(parseInt(w[1])+1>12?(parseInt(w[0])+1)+"-1":parseInt(w[0])+"-"+(parseInt(w[1])+1));
		return k;
	},
	tagLunarCal:function( d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
 		this.BaseDays = d;         
 		this.Intercalation = i;   
 		this.BaseWeekday = w;     
 		this.BaseKanChih = k;     
 		this.MonthDays = [ m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13 ]; 
	},
	GetLeap:function ( year )
	{
	   if ( year % 400 == 0 )
	     return 1;
	   else if ( year % 100 == 0 )
	     return 0;
	   else if ( year % 4 == 0 )
	     return 1;
	   else
	     return 0;
	},
	oDay:function(num){
		var arr=["","一","二","三","四","五","六","七","八","九","十"]
		var a=num>=10?num>=20?num>=30?"三十"+arr[num%10]:"廿"+arr[num%10]:"十"+arr[num%10]:"初"+arr[num%11];
		a=num==20?"廿十":a;
		return a;
	},
	CalConv:function(oa,ob,oc)
	{
	 FIRSTYEAR = 1936;
	 LASTYEAR = 2031;
	 LunarCal = [
	  new $.tagLunarCal(23, 3, 2, 17, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), /* 1936 */ 
	  new $.tagLunarCal( 41, 0, 4, 23, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 30, 7, 5, 28, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 49, 0, 6, 33, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 38, 0, 0, 38, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 1940 */ 
	  new $.tagLunarCal( 26, 6, 2, 44, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 45, 0, 3, 49, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 35, 0, 4, 54, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 24, 4, 5, 59, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1944 */ 
	  new $.tagLunarCal( 43, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 32, 0, 1, 10, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 21, 2, 2, 15, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 40, 0, 3, 20, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ), /* 1948 */ 
	  new $.tagLunarCal( 28, 7, 5, 26, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 47, 0, 6, 31, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 36, 0, 0, 36, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 26, 5, 1, 41, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ), /* 1952 */ 
	  new $.tagLunarCal( 44, 0, 3, 47, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 33, 0, 4, 52, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), 
	  new $.tagLunarCal( 23, 3, 5, 57, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), 
	  new $.tagLunarCal( 42, 0, 6, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ), /* 1956 */ 
	  new $.tagLunarCal( 30, 8, 1, 8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 48, 0, 2, 13, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 38, 0, 3, 18, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 27, 6, 4, 23, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 1960 */ 
	  new $.tagLunarCal( 45, 0, 6, 29, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 35, 0, 0, 34, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 24, 4, 1, 39, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), 
	  new $.tagLunarCal( 43, 0, 2, 44, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ), /* 1964 */ 
	  new $.tagLunarCal( 32, 0, 4, 50, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 20, 3, 5, 55, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), 
	  new $.tagLunarCal( 39, 0, 6, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 29, 7, 0, 5, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 1968 */ 
	  new $.tagLunarCal( 47, 0, 2, 11, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 36, 0, 3, 16, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 26, 5, 4, 21, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 45, 0, 5, 26, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 1972 */ 
	  new $.tagLunarCal( 33, 0, 0, 32, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 22, 4, 1, 37, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 41, 0, 2, 42, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), 
	  new $.tagLunarCal( 30, 8, 3, 47, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ), /* 1976 */ 
	  new $.tagLunarCal( 48, 0, 5, 53, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ), 
	  new $.tagLunarCal( 37, 0, 6, 58, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 27, 6, 0, 3, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 46, 0, 1, 8, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 1980 */ 
	  new $.tagLunarCal( 35, 0, 3, 14, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1 ), 
	  new $.tagLunarCal( 24, 4, 4, 19, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
	  new $.tagLunarCal( 43, 0, 5, 24, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1 ), 
	  new $.tagLunarCal( 32, 10, 6, 29, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1 ), /* 1984 */ 
	  new $.tagLunarCal( 50, 0, 1, 35, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 39, 0, 2, 40, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1 ), 
	  new $.tagLunarCal( 28, 6, 3, 45, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0 ), 
	  new $.tagLunarCal( 47, 0, 4, 50, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 1988 */ 
	  new $.tagLunarCal( 36, 0, 6, 56, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0 ), 
	  new $.tagLunarCal( 26, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1 ), 
	  new $.tagLunarCal( 45, 0, 1, 6, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0 ), 
	  new $.tagLunarCal( 34, 0, 2, 11, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0 ), /* 1992 */ 
	  new $.tagLunarCal( 22, 3, 4, 17, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 40, 0, 5, 22, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ), 
	  new $.tagLunarCal( 30, 8, 6, 27, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1 ), 
	  new $.tagLunarCal( 49, 0, 0, 32, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1 ), /* 1996 */ 
	  new $.tagLunarCal( 37, 0, 2, 38, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1 ), 
	  new $.tagLunarCal( 46,  0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ), /* 1999 */
	  new $.tagLunarCal( 35,  0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ), /* 2000 */
	  new $.tagLunarCal( 23,  4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 42,  0, 1,  4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 31,  0, 2,  9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0 ),
	  new $.tagLunarCal( 21,  2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1 ), /* 2004 */
	  new $.tagLunarCal( 39,  0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 28,  7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 ),
	  new $.tagLunarCal( 48,  0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ),
	  new $.tagLunarCal( 37,  0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ), /* 2008 */
	  new $.tagLunarCal( 25,  5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
	  new $.tagLunarCal( 44,  0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1 ),
	  new $.tagLunarCal( 33,  0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 22,  4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ), /* 2012 */
	  new $.tagLunarCal( 40,  0, 1,  2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ),
	  new $.tagLunarCal( 30,  9, 2,  7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 49,  0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 38,  0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0 ), /* 2016 */
	  new $.tagLunarCal( 27,  6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1 ),
	  new $.tagLunarCal( 46,  0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0 ),
	  new $.tagLunarCal( 35,  0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ),
	  new $.tagLunarCal( 24,  4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1 ), /* 2020 */
	  new $.tagLunarCal( 42,  0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 31,  0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ),
	  new $.tagLunarCal( 21,  2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 40,  0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1 ), /* 2024 */
	  new $.tagLunarCal( 28,  6, 2,  5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0 ),
	  new $.tagLunarCal( 47,  0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1 ),
	  new $.tagLunarCal( 36,  0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1 ),
	  new $.tagLunarCal( 25,  5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0 ), /* 2028 */
	  new $.tagLunarCal( 43,  0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1 ),
	  new $.tagLunarCal( 32,  0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0 ),
	  new $.tagLunarCal( 22,  3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ) ];
	SolarCal = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	SolarDays = [
	  0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396,
	  0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397 ];
		 SolarYear = parseInt(oa);
		 SolarMonth = parseInt(ob);
		 SolarDate = parseInt(oc);

		 if ( SolarYear <= FIRSTYEAR || SolarYear > LASTYEAR ) return alert("错误b"); 

		 sm = SolarMonth - 1;
		 
		 if ( sm < 0 || sm > 11 ) return alert("错误c");
		 
		 leap = $.GetLeap( SolarYear );

		 if ( sm == 1 )
		  d = leap + 28;
		 else
		  d = SolarCal[sm];

		 if ( SolarDate < 1 || SolarDate > d ) return 3;

		 y = SolarYear - FIRSTYEAR;
		 acc = SolarDays[ leap*14 + sm ] + SolarDate;
		 kc = acc + LunarCal[y].BaseKanChih;
		 Kan = kc % 10;
		 Chih = kc % 12;
		 // Location = LocationIdx[kc % 4];
		 Age = kc % 60;
		 if ( Age < 22 )
		  Age = 22 - Age;
		 else
		  Age = 82 - Age;

		 Age =Age + 3;

		if (Age < 10)
		  Age=Age+60;

		 // Animal = AnimalIdx[ Chih ];

		 if ( acc <= LunarCal[y].BaseDays ) {
		  y--;
		  LunarYear = SolarYear - 1;
		  leap = $.GetLeap( LunarYear );
		  sm += 12;
		  acc = SolarDays[leap*14 + sm] + SolarDate;
		  }
		 else
		  LunarYear = SolarYear;
		  
		 l1 = LunarCal[y].BaseDays;
		 for ( i=0; i<13; i++ ) {
		  l2 = l1 + LunarCal[y].MonthDays[i] + 29;
		  if ( acc <= l2 ) break;
		  l1 = l2;
		  }

		 LunarMonth = i + 1;
		 LunarDate = acc - l1;
		 im = LunarCal[y].Intercalation;

		 if ( im != 0 && LunarMonth > im ) {
		  LunarMonth--;
		  if ( LunarMonth == im ) LunarMonth = -im;
		  }

		 if ( LunarMonth > 12 ) LunarMonth -= 12;
			var showgn =$.oDay(LunarDate);
		    console.log(LunarDate) 
		 return showgn;
	 },
	oTime:function(id,str){
		var w=str.split("-"),a,b,c,d,e,f,oA,oB,oC,A,B,D,E,aA,aB;
		if(w[1]-2<0){
			a=(w[0]-1);
			w[1]-1<0?b=10:b=11;
		}else{
			a=w[0];b=w[1]-2;
		}
		if(w[1]-1<0){
			c=(w[0]-1);d=11;
		}else{
			c=w[0];d=w[1]-1;
		}
		if(w[1]+1>12){
			e=(parseInt(w[0])+1);f=1;
		}else{
			e=w[0];f=w[1]+1;
		}
		oA=new Date(a,b,1,00,00,00);
		oB=new Date(c,d,1,00,00,00);
		oC=new Date(w[0],w[1],1,00,00,00);
		A=(oB.getTime()-oA.getTime())/1000/60/60/24;
		B=(oC.getTime()-oB.getTime())/1000/60/60/24;
		aA=oB.getDay()==0?7:oB.getDay();
		aB=oC.getDay()==0?7:oC.getDay();
		E=document.createElement("ul");
		E.id="oT";
		for (var i = 1; i < aA; i++) {
			D=document.createElement("li");
			S=document.createElement("a");
			D.innerHTML=A-aA+1+i;
			D.style.backgroundColor="#F5F5F5";
			S.innerHTML=$.CalConv(a,b+1,D.innerHTML);
			D.append(S);
			E.append(D);
		}
		for (var p = 1; p < B+1; p++) {
			D=document.createElement("li");
			S=document.createElement("a");
			D.innerHTML=p;
			S.innerHTML=$.CalConv(c,d+1,p);
			D.append(S);
			E.append(D);
		}
		for (var q = 1; q < 8-aB+1; q++) {
			D=document.createElement("li");
			S=document.createElement("a");
			D.innerHTML=q;
			D.style.backgroundColor="#F5F5F5";
			S.innerHTML=$.CalConv(e,f,q);
			D.append(S);
			E.append(D);
		}
		$(id).append(E);
	},
	oEvent:function(id){
		$.oTemplate("#"+id);
		$("#"+id+" span li").html($.getT());
		$("#oDL").click(function(){
			$("#"+id+" span li").html($.changeL($("#"+id+" span li").html(),true));
			$("#"+id+" ul").remove();	
			$.oTime("#"+id,$("#"+id+" span li").html());
			a();
		})
		$("#oDF").click(function(){
			$("#"+id+" span li").html($.changeL($("#"+id+" span li").html(),false));
			$("#"+id+" ul").remove();	
			$.oTime("#"+id,$("#"+id+" span li").html());
			a();
		})
		$.oTime("#"+id,$("#"+id+" span li").html());
		a();
		function a(){
			$("#"+id+" ul li").each(function(a,b){
				if (a%7==6||a%7==5) {
					$("#"+id+" ol li:eq("+a+")").css({"color":"red"});
					$(b).css({"color":"#FB4A3C"});
				}
			})
		}
	}
	
})